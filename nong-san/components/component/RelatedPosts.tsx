/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default function RelatedPosts({ posts }: any) {
  if (!posts.length) return null;

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold mb-6">
        Bài viết liên quan
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="border p-4 rounded-lg hover:shadow">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
