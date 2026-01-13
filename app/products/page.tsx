"use client";

import { useState, useEffect } from "react";
import {
  products as allProducts,
  Product,
  categories,
  priceRanges,
  PriceRange,
} from "@/data/products";

import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import HeroHeader from "@/components/HeroHeader";
import PartnerGiftsSection from "@/components/PartnerGiftsSection";
import FooterGreen from "@/components/FooterGreen";
import BackToTopButton from "@/components/BackToTopButton";
import ContactDock from "@/components/ContactDock";

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Có thể tăng vì mỗi sản phẩm chỉ 1 card

  const [filters, setFilters] = useState<{
    category: string | null;
    price: PriceRange | null;
    search: string;
    sort: "default" | "price-asc" | "price-desc";
  }>({
    category: null,
    price: null,
    search: "",
    sort: "default",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    let result = [...allProducts];

    // Category
    if (filters.category && filters.category !== "Tất cả") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price – lọc dựa trên giá của biến thể mặc định (500g) hoặc giá thấp nhất
    if (filters.price && filters.price.max !== Infinity) {
      const { min, max } = filters.price;
      result = result.filter((p) => {
        const defaultPrice = p.variants.find(v => v.size === "500g")?.price || p.variants[0].price;
        return defaultPrice >= min && defaultPrice < max;
      });
    }

    // Search
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    // Sort – dựa trên giá mặc định (500g)
    if (filters.sort !== "default") {
      result.sort((a, b) => {
        const priceA = a.variants.find(v => v.size === "500g")?.price || a.variants[0].price;
        const priceB = b.variants.find(v => v.size === "500g")?.price || b.variants[0].price;
        return filters.sort === "price-asc" ? priceA - priceB : priceB - priceA;
      });
    }

    setFilteredProducts(result);
    setCurrentPage(1);
    setIsLoading(false);
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo = Math.min(currentPage * itemsPerPage, filteredProducts.length);

  return (
    <>
      <HeroHeader />
      <BackToTopButton />
      <ContactDock />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Tất cả sản phẩm</h1>
        <p className="text-gray-600 mb-6 md:mb-8">
          Khám phá bộ sưu tập nông sản chất lượng cao
        </p>

        <div className="mb-8">
          <SearchBar
            onSearch={(query) => setFilters((prev) => ({ ...prev, search: query }))}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 lg:shrink-0">
            <div className="sticky top-20 lg:top-[120px]">
              <FilterSidebar
                selectedCategory={filters.category}
                selectedPrice={filters.price}
                onFilterChange={(type, value) =>
                  setFilters((prev) => ({ ...prev, [type]: value }))
                }
              />
            </div>
          </aside>

          <main className="flex-1 min-h-[800px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Hiển thị {showingFrom}–{showingTo} trong {filteredProducts.length} sản phẩm
              </p>

              <select
                value={filters.sort}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sort: e.target.value as "default" | "price-asc" | "price-desc",
                  }))
                }
                className="border rounded px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Thấp → Cao</option>
                <option value="price-desc">Giá: Cao → Thấp</option>
              </select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl h-96 animate-pulse" />
                ))}
              </div>
            ) : currentProducts.length === 0 ? (
              <div className="text-center py-24 text-gray-500 space-y-4">
                <p className="text-xl font-medium">Không tìm thấy sản phẩm phù hợp</p>
                <p>Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </main>
        </div>
      </div>

      <PartnerGiftsSection />
      <FooterGreen />
    </>
  );
}