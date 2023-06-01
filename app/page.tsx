import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/dev" className="btn" style={{ margin: "auto" }}>
        To development
      </Link>
    </main>
  );
}
