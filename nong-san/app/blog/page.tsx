import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="container">
      <h1>Blog</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}
