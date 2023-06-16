import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <Link
        href="/dev"
        className="btn"
        style={{ display: "block", margin: "auto", width: "fit-content" }}
      >
        To development
      </Link>
    </main>
  );
}
