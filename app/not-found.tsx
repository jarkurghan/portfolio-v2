import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24">
      <p className="font-mono text-xs text-cyan">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Topilmadi</h1>
      <Link href="/" className="mt-6 text-sm text-violet hover:text-cyan">
        Home
      </Link>
    </main>
  );
}
