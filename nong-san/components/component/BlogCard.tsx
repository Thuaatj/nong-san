import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="border rounded-lg p-4 hover:shadow-lg transition">
        <h2 className="font-semibold text-xl mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600">{post.excerpt}</p>
      </article>
    </Link>
  );
}
