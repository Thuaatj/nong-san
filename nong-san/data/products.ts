// data/products.ts
export interface ProductVariant {
  size: string;
  price: number;
  image: string;
  hoverImage: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  variants: ProductVariant[];
}

export interface FlattenedProduct {
  id: number;
  name: string;
  category: string;
  size: string;
  price: number;
  image: string;
  hoverImage: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hạt Hạnh Nhân",
    category: "Hạt dinh dưỡng",
    variants: [
      {
        size: "250g",
        price: 85000,
        image: "https://images.unsplash.com/photo-1631815333332-e3ffb24e2bf8?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1614410082354-7178f3bc2091?auto=format&fit=crop&q=80&w=800",
      },
      {
        size: "500g",
        price: 160000,
        image: "https://file.hstatic.net/1000378830/file/hanh-nhan-rang-bo-my_d14731b6a0b44f2188ca6412fb7a2354_grande.jpg",
        hoverImage: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&q=80&w=800",
      },
      {
        size: "1kg",
        price: 312000,
        image: "https://images.unsplash.com/photo-1631815333332-e3ffb24e2bf8?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1614410082354-7178f3bc2091?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: 2,
    name: "Hạt Dẻ Cười",
    category: "Hạt dinh dưỡng",
    variants: [
      {
        size: "250g",
        price: 99000,
        image: "https://bizweb.dktcdn.net/100/447/068/files/hat-de-cuoi-nhan-3.jpg?v=1764292202267",
        hoverImage: "https://isorepublic.com/wp-content/uploads/2018/11/pistachio-nuts.jpg",
      },
      {
        size: "500g",
        price: 199000,
        image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/pistachios-background-free-photo.jpg?quality=80&w=600",
        hoverImage: "https://bizweb.dktcdn.net/thumb/1024x1024/100/464/650/products/z3949934513167-3b114f4e030a7b8ce42a39387b166072.jpg?v=1671553956347",
      },
      {
        size: "1kg",
        price: 408000,
        image: "https://bizweb.dktcdn.net/100/447/068/files/hat-de-cuoi-nhan-3.jpg?v=1764292202267",
        hoverImage: "https://isorepublic.com/wp-content/uploads/2018/11/pistachio-nuts.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Hạt Điều",
    category: "Hạt dinh dưỡng",
    variants: [
      {
        size: "250g",
        price: 75000,
        image: "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        hoverImage: "https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      },
      {
        size: "500g",
        price: 149000,
        image: "https://images.unsplash.com/photo-1756361946161-1cb809eae6cb?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000",
        hoverImage: "https://images.unsplash.com/photo-1627820752174-acae1b399128?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaGV3JTIwbnV0fGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
      },
      {
        size: "1kg",
        price: 276000,
        image: "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        hoverImage: "https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      },
    ],
  },
  {
    id: 4,
    name: "Hạt Óc Chó",
    category: "Hạt dinh dưỡng",
    variants: [
      {
        size: "250g",
        price: 84000,
        image: "https://www.photos-public-domain.com/wp-content/uploads/2017/11/walnuts-in-the-shell.jpg",
        hoverImage: "https://cdn.create.vista.com/api/media/small/231206722/stock-photo-close-view-shelled-whole-walnuts-wooden-tabletop",
      },
      {
        size: "500g",
        price: 168000,
        image: "https://cdn.create.vista.com/api/media/small/216741146/stock-photo-close-view-heap-raw-ripe-walnuts-wooden-table",
        hoverImage: "https://png.pngtree.com/thumb_back/fw800/background/20230730/pngtree-a-nut-is-broken-and-a-walnut-is-half-open-on-image_10200024.jpg",
      },
      {
        size: "1kg",
        price: 360000,
        image: "https://www.photos-public-domain.com/wp-content/uploads/2017/11/walnuts-in-the-shell.jpg",
        hoverImage: "https://cdn.create.vista.com/api/media/small/231206722/stock-photo-close-view-shelled-whole-walnuts-wooden-tabletop",
      },
    ],
  },
  {
    id: 5,
    name: "Hạt Mắc Ca",
    category: "Hạt dinh dưỡng",
    variants: [
      {
        size: "250g",
        price: 45000,
        image: "https://www.richardfranco.com/wp-content/uploads/2024/11/Macadamia-1.png",
        hoverImage: "https://www.kashmironlinestore.com/cdn/shop/files/Macadamia_Nuts_a59fce13-d42e-44ea-96ec-24ecc9bd0eab.jpg?v=1767165937",
      },
      {
        size: "500g",
        price: 89000,
        image: "https://s.alicdn.com/%40sc04/kf/Ae53ad4ee8389460e998804030eb826b1Q/High-Quality-Macadamia-Nuts-Blanched-Dried-Shell-Sweet-Milky-Flavor-Hand-Squeezed-Yummy-100-Fresh-500gr-Pack-at-Wholesale-Price.jpg",
        hoverImage: "https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-fresh-whole-macadamia-nuts-with-green-shells-on-natural-background-photo-photo-image_70152434.webp",
      },
      {
        size: "1kg",
        price: 180000,
        image: "https://www.richardfranco.com/wp-content/uploads/2024/11/Macadamia-1.png",
        hoverImage: "https://www.kashmironlinestore.com/cdn/shop/files/Macadamia_Nuts_a59fce13-d42e-44ea-96ec-24ecc9bd0eab.jpg?v=1767165937",
      },
    ],
  },
  {
    id: 6,
    name: "Mít Sấy",
    category: "Trái cây sấy",
    variants: [
      {
        size: "250g",
        price: 48000,
        image: "https://down-vn.img.susercontent.com/file/d46221164023dfd31def69b375d4b5b6",
        hoverImage: "https://dalatfarm.net/wp-content/uploads/2020/12/mit-say-gion-3-1.jpg",
      },
      {
        size: "500g",
        price: 69000,
        image: "https://product.hstatic.net/1000384853/product/435_e40a5b7b0b394a92a9f564cb0c9dd0c4_1024x1024.jpg",
        hoverImage: "https://product.hstatic.net/200000619097/product/zhu02548_5_a1aced21b6354f509f8480aa7cf95f0e.jpg",
      },
      {
        size: "1kg",
        price: 192000,
        image: "https://down-vn.img.susercontent.com/file/d46221164023dfd31def69b375d4b5b6",
        hoverImage: "https://dalatfarm.net/wp-content/uploads/2020/12/mit-say-gion-3-1.jpg",
      },
    ],
  },
];

// Danh mục
export const categories: string[] = ["Hạt dinh dưỡng", "Trái cây sấy"];

// Khoảng giá
export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export const priceRanges: PriceRange[] = [
  { label: "Dưới 100.000đ", min: 0, max: 100000 },
  { label: "100.000đ - 200.000đ", min: 100000, max: 200000 },
  { label: "200.000đ - 500.000đ", min: 200000, max: 500000 },
  { label: "Trên 500.000đ", min: 500000, max: Infinity },
];