"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import toast from "react-hot-toast";
import { ShoppingCart, Eye, Plus, Minus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isPromotionActive } = useCart();

  const promoActive = isPromotionActive(); // Kiểm tra khuyến mãi đang active không
  const discountPercent = promoActive ? 20 : 0; // Chỉ áp dụng 20% khi promo active

  const defaultVariant = product.variants.find(v => v.size === "500g") || product.variants[0];

  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
  const [quantity, setQuantity] = useState(1);

  // Tính giá sau giảm (chỉ khi promo active)
  const discountedPrice = promoActive
    ? Math.round(selectedVariant.price * (1 - discountPercent / 100))
    : selectedVariant.price;

  const handleSizeChange = (size: string) => {
    const variant = product.variants.find(v => v.size === size);
    if (variant) {
      setSelectedVariant(variant);
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      size: selectedVariant.size,
      price: selectedVariant.price,          // Luôn lưu giá gốc
      image: selectedVariant.image,
      hoverImage: selectedVariant.hoverImage,
    });

    toast.success(
      promoActive
        ? `Đã thêm ${quantity} × ${product.name} (${selectedVariant.size}) - Giảm 20%`
        : `Đã thêm ${quantity} × ${product.name} (${selectedVariant.size})`,
      { icon: "🛒" }
    );
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full relative">
      {/* Badge giảm giá - chỉ hiện khi promo active */}
      {promoActive && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">
          -20%
        </div>
      )}

      {/* Ảnh sản phẩm */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={selectedVariant.image}
          alt={`${product.name} - ${selectedVariant.size}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src={selectedVariant.hoverImage}
          alt="Hover"
          fill
          className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Nội dung */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg md:text-xl mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Phần giá */}
        <div className="mb-4">
          {promoActive ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-500 line-through text-base">
                {selectedVariant.price.toLocaleString("vi-VN")} ₫
              </span>
              <span className="text-red-600 font-bold text-xl">
                {discountedPrice.toLocaleString("vi-VN")} ₫
              </span>
            </div>
          ) : (
            <p className="text-green-600 font-bold text-xl">
              {selectedVariant.price.toLocaleString("vi-VN")} ₫
            </p>
          )}
        </div>

        {/* Chọn kích cỡ */}
        <div className="mb-5">
          <label className="text-sm text-gray-600 block mb-2 font-medium">
            Kích cỡ:
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.size}
                onClick={() => handleSizeChange(variant.size)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  selectedVariant.size === variant.size
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50"
                }`}
              >
                {variant.size}
              </button>
            ))}
          </div>
        </div>

        {/* Khu vực hành động */}
        <div className="mt-auto flex items-center gap-3">
          {/* Bộ số lượng */}
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shrink-0">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-2 hover:bg-gray-100 transition disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 1) setQuantity(val);
              }}
              className="w-14 text-center border-none focus:outline-none text-sm font-medium"
              min={1}
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Icon giỏ hàng */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 text-white py-3 px-5 rounded-full hover:bg-green-700 transition flex items-center justify-center shadow-sm"
            title="Thêm vào giỏ hàng"
          >
            <ShoppingCart size={22} />
          </button>

          {/* Icon mắt */}
          <Link
            href={`/products/${product.id}`}
            className="bg-gray-100 text-gray-700 py-3 px-5 rounded-full hover:bg-gray-200 transition flex items-center justify-center shrink-0"
            title="Xem chi tiết sản phẩm"
          >
            <Eye size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}