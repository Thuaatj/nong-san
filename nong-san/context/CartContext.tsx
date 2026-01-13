// context/CartContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { FlattenedProduct } from "@/data/products";
import { PROMOTION } from "@/config/promotion"; // Đảm bảo file này tồn tại

interface CartItem extends FlattenedProduct {
  quantity: number;
  discountedPrice?: number; // Giá sau giảm (nếu đang khuyến mãi)
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: FlattenedProduct) => void;
  removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalAmount: number;
  isPromotionActive: () => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Lỗi parse cart từ localStorage:", e);
          return [];
        }
      }
    }
    return [];
  });

  // Kiểm tra khuyến mãi có đang active không
  const isPromotionActive = () => {
    if (!PROMOTION.enabled) return false;
    const now = new Date();
    return now >= PROMOTION.startTime && now < PROMOTION.endTime;
  };

  // Tính tổng tiền (ưu tiên discountedPrice nếu có, nếu không dùng giá gốc)
  const totalAmount = cart.reduce((sum, item) => {
    const priceToUse = item.discountedPrice ?? item.price;
    return sum + priceToUse * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: FlattenedProduct) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      const active = isPromotionActive();
      const discountedPrice = active
        ? Math.round(product.price * (1 - PROMOTION.discountPercent / 100))
        : undefined;

      if (existingIndex !== -1) {
        // Tăng số lượng nếu đã tồn tại
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
          // Giữ nguyên discountedPrice cũ (vì thời điểm add ban đầu)
        };
        return newCart;
      }

      // Thêm mới với discountedPrice (nếu áp dụng)
      return [...prev, { ...product, quantity: 1, discountedPrice }];
    });
  };

  const removeFromCart = (id: number, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  // Lưu cart vào localStorage mỗi khi thay đổi
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        totalAmount,
        isPromotionActive,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart phải được dùng bên trong CartProvider");
  }
  return context;
};