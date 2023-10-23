import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">There was a problem</h2>
      <p>Page not found</p>
      <p>
        <Link href={"/"} className="">
          Go back to Dashboard
        </Link>
      </p>
    </main>
  );
}
