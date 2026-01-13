"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";
import FooterGreen from "@/components/FooterGreen";
import HeroHeader from "@/components/HeroHeader";
import PartnerGiftsSection from "@/components/PartnerGiftsSection";
import BackToTopButton from "@/components/BackToTopButton";
import ContactDock from "@/components/ContactDock";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalAmount, cartCount, isPromotionActive } = useCart();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const DISCOUNT_PERCENT = 20; // Phải khớp với PROMOTION.discountPercent trong config

  const getItemKey = (item: { id: number; size: string }) => `${item.id}-${item.size}`;

  const toggleSelect = (key: string) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const selectedItems = cart.filter((item) => selectedKeys.includes(getItemKey(item)));

  const handleDecrease = (id: number, size: string, quantity: number) => {
    if (quantity === 1) {
      toast(
        (t) => (
          <div className="flex flex-col gap-3">
            <span>Xóa sản phẩm khỏi giỏ hàng?</span>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  removeFromCart(id, size);
                  toast.dismiss(t.id);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Xóa
              </button>
              <button onClick={() => toast.dismiss(t.id)} className="border px-3 py-1 rounded">
                Hủy
              </button>
            </div>
          </div>
        ),
        { duration: 5000 }
      );
    } else {
      updateQuantity(id, size, quantity - 1);
    }
  };

  const applyQuickQuantity = (qty: number) => {
    selectedItems.forEach((item) => updateQuantity(item.id, item.size, qty));
    toast.success(`Đã cập nhật ${selectedItems.length} sản phẩm`);
  };

  const bulkRemove = () => {
    selectedItems.forEach((item) => removeFromCart(item.id, item.size));
    setSelectedKeys([]);
    toast.success("Đã xoá các sản phẩm đã chọn");
  };

  const buildMessengerMessage = () => {
    const itemsText = cart
      .map((item) => {
        const productLink = `https://nongsanxanh.vn/products/${item.id}`;
        const origPrice = item.price;
        const discPrice = item.discountedPrice ?? item.price; // fallback an toàn
        return `• ${item.name} (Size ${item.size}) x${item.quantity}\n  💰 ${discPrice.toLocaleString("vi-VN")}₫${discPrice < origPrice ? ` (giảm từ ${origPrice.toLocaleString("vi-VN")}₫)` : ""}\n  🔗 ${productLink}`;
      })
      .join("\n\n");

    const totalOriginal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiscounted = totalAmount; // Đã tính theo discountedPrice trong context
    const savings = totalOriginal - totalDiscounted;

    const message = `
👤 THÔNG TIN KHÁCH HÀNG
• Họ tên: ${customerName}
• SĐT: ${customerPhone}

🛒 ĐƠN HÀNG TỪ WEBSITE NÔNG SẢN XANH (đã áp dụng giảm giá)
${itemsText}

------------------
💵 TỔNG CỘNG (sau giảm): ${totalDiscounted.toLocaleString("vi-VN")}₫
${savings > 0 ? `🎉 Tiết kiệm: ${savings.toLocaleString("vi-VN")}₫` : ""}

📞 Nhờ shop liên hệ xác nhận đơn giúp tôi
    `;

    return encodeURIComponent(message.trim());
  };

  const validateCustomerInfo = () => {
    if (!customerName.trim()) {
      toast.error("Vui lòng nhập họ tên");
      return false;
    }

    if (!customerPhone.trim()) {
      toast.error("Vui lòng nhập số điện thoại");
      return false;
    }

    const phoneRegex = /^(0|\+84)[0-9]{9}$/;
    if (!phoneRegex.test(customerPhone)) {
      toast.error("Số điện thoại không hợp lệ");
      return false;
    }

    return true;
  };

  // ────────────────────────────────────────────────
  // Giỏ hàng trống
  // ────────────────────────────────────────────────
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeroHeader />
        <div className="flex-1 flex items-center justify-center px-4 py-20 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Giỏ hàng của bạn</h1>
            <p className="text-gray-600 mb-10 text-lg">Hiện tại giỏ hàng đang trống</p>
            <Link
              href="/products"
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition shadow-md"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
        <FooterGreen />
      </div>
    );
  }

  // ────────────────────────────────────────────────
  // Giỏ hàng có sản phẩm
  // ────────────────────────────────────────────────
  return (
    <>
      <HeroHeader />
      <BackToTopButton />
      <ContactDock />

      <div className="container mx-auto px-4 py-12">
        {/* Banner khuyến mãi */}
        {(() => {
          const promoActive = isPromotionActive();
          if (promoActive) {
            return (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8 text-center font-medium">
                🔥 ĐANG GIẢM GIÁ 20% TOÀN BỘ SẢN PHẨM – Chỉ đến hết ngày 15/01/2026!
              </div>
            );
          }
          return null;
        })()}

        <h1 className="text-3xl font-bold mb-2">Giỏ hàng</h1>
        <p className="text-gray-600 mb-10">Bạn có {cartCount} sản phẩm trong giỏ</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* DANH SÁCH SẢN PHẨM */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => {
              const key = getItemKey(item);
              const origPrice = item.price;
              const displayPrice = item.discountedPrice ?? origPrice;
              const hasDiscount = displayPrice < origPrice;

              return (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedKeys.includes(key)}
                    onChange={() => toggleSelect(key)}
                    className="w-5 h-5 accent-green-600"
                  />

                  <div className="w-32 h-32 relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.size}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-lg">
                      {item.name} <span className="text-gray-500">({item.size})</span>
                    </h3>

                    <div className="mt-1">
                      {hasDiscount ? (
                        <div className="flex items-center gap-3">
                          <span className="text-gray-500 line-through text-base">
                            {origPrice.toLocaleString("vi-VN")} ₫
                          </span>
                          <span className="text-red-600 font-bold text-lg">
                            {displayPrice.toLocaleString("vi-VN")} ₫
                          </span>
                        </div>
                      ) : (
                        <p className="text-blue-600 font-semibold">
                          {displayPrice.toLocaleString("vi-VN")} ₫
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrease(item.id, item.size, item.quantity)}
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="w-10 text-center font-medium">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* TỔNG THANH TOÁN */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-xl sticky top-8">
              <h3 className="text-xl font-semibold mb-6">Tổng thanh toán</h3>

              {/* Tính tổng gốc và tổng giảm */}
              {(() => {
                const totalOriginal = cart.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                );
                const totalDiscounted = totalAmount; // Đã được tính đúng trong CartContext
                const savings = totalOriginal - totalDiscounted;

                const hasAnyDiscount = savings > 0;

                return (
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-base">
                      <span className="text-gray-700">Tổng giá gốc</span>
                      <span className="text-gray-500 line-through">
                        {totalOriginal.toLocaleString("vi-VN")} ₫
                      </span>
                    </div>

                    {hasAnyDiscount && (
                      <>
                        <div className="flex justify-between text-base font-medium">
                          <span className="text-red-600">Tổng giá giảm -{DISCOUNT_PERCENT}%</span>
                          <span className="text-red-600 font-bold">
                            {totalDiscounted.toLocaleString("vi-VN")} ₫
                          </span>
                        </div>

                        <div className="flex justify-between text-sm text-green-600 pt-2 border-t border-gray-200">
                          <span>Tiết kiệm</span>
                          <span>{savings.toLocaleString("vi-VN")} ₫</span>
                        </div>
                      </>
                    )}

                    <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-300">
                      <span>Tổng cộng</span>
                      <span className="text-blue-600">
                        {totalDiscounted.toLocaleString("vi-VN")} ₫
                      </span>
                    </div>
                  </div>
                );
              })()}

              <div className="mb-5">
                <h4 className="text-lg font-semibold mb-1">
                  Nhập thông tin để đặt hàng
                </h4>
                <p className="text-sm text-gray-600">
                  Vui lòng cung cấp thông tin để shop liên hệ xác nhận
                </p>
              </div>

              <div className="space-y-5 mb-6">
                {/* HỌ TÊN */}
                <div className="relative">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600">
                    Họ và tên *
                  </label>
                </div>

                {/* SỐ ĐIỆN THOẠI */}
                <div className="relative">
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600">
                    Số điện thoại *
                  </label>
                </div>
              </div>

              <button
                onClick={() => {
                  if (!validateCustomerInfo()) return;
                  const message = buildMessengerMessage();
                  window.open(`https://m.me/nongsanxanhshop?text=${message}`, "_blank");
                }}
                className="w-full mt-6 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition font-medium"
              >
                Đặt hàng & thanh toán qua Messenger
              </button>
            </div>
          </aside>
        </div>

        {/* BULK ACTION BAR */}
        {selectedKeys.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
            <div className="container mx-auto flex flex-wrap items-center gap-4 justify-between">
              <span className="font-medium">Đã chọn {selectedKeys.length} sản phẩm</span>

              <div className="flex flex-wrap items-center gap-2">
                {[2, 5, 10, 50, 100].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => applyQuickQuantity(qty)}
                    className="px-3 py-1 border rounded hover:bg-black hover:text-white transition"
                  >
                    {qty}
                  </button>
                ))}

                <button
                  onClick={bulkRemove}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <PartnerGiftsSection />
      <FooterGreen />
    </>
  );
}