export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  createdAt?: string;
};
