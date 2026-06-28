import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-black">
        A
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">AIVerse</h1>
        <p className="text-xs text-gray-400">Learn • Build • Create</p>
      </div>
    </Link>
  );
}