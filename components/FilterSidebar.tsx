"use client";

import { FC } from "react";
import { categories, priceRanges, PriceRange } from "@/data/products";
import clsx from "clsx";

interface FilterSidebarProps {
  selectedCategory: string | null;
  selectedPrice: PriceRange | null;
  onFilterChange: (
    type: "category" | "price",
    value: string | PriceRange | null
  ) => void;
}

const FilterSidebar: FC<FilterSidebarProps> = ({
  selectedCategory,
  selectedPrice,
  onFilterChange,
}) => {
  return (
    <div className="w-full space-y-15">
      {/* ===== DANH MỤC ===== */}
      <div>
        <h3 className="font-bold text-lg mb-3">Danh mục</h3>

        <ul className="space-y-5">
          {/* TẤT CẢ */}
          <li>
            <button
              onClick={() => onFilterChange("category", null)}
              className={clsx(
                "w-full text-left px-3 py-2 rounded transition",
                selectedCategory === null
                  ? "bg-green-600 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Tất cả sản phẩm
            </button>
          </li>

          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onFilterChange("category", cat)}
                className={clsx(
                  "w-full text-left px-3 py-2 rounded transition",
                  selectedCategory === cat
                    ? "bg-green-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== GIÁ ===== */}
      <div>
        <h3 className="font-bold text-lg mb-3">Giá</h3>

        <ul className="space-y-5">
          {/* TẤT CẢ GIÁ */}
          <li>
            <button
              onClick={() => onFilterChange("price", null)}
              className={clsx(
                "w-full text-left px-3 py-2 rounded transition",
                selectedPrice === null
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Tất cả giá
            </button>
          </li>

          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => onFilterChange("price", range)}
                className={clsx(
                  "w-full text-left px-3 py-2 rounded transition",
                  selectedPrice?.label === range.label
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
