import Link from "next/link";

export default function Pagination({
  page,
  totalPages,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-4 mt-12">
      {page > 1 && (
        <Link href={`?page=${page - 1}`}>← Trước</Link>
      )}
      {page < totalPages && (
        <Link href={`?page=${page + 1}`}>Sau →</Link>
      )}
    </div>
  );
}
