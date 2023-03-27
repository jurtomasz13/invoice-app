import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/dev" className="btn">
        To development
      </Link>
    </main>
  );
}
