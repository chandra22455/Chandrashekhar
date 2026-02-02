import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-4 bg-black/60 backdrop-blur">
      <div className="max-w-5xl mx-auto flex justify-between">
        <Link href="/">Chandra</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}

