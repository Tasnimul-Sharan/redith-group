import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Redith Group
        </Link>

        {/* Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex gap-6 text-sm font-medium`}
        >
          <Link href="/about">About</Link>

          <div className="group relative cursor-pointer">
            <span className="md:pb-6">SBUs ▾</span>
            <div className="absolute hidden group-hover:block bg-white shadow p-4 rounded">
              <Link href="/sbu/digital-it" className="block">
                Digital & IT
              </Link>
              <Link href="/sbu/consumer-brands" className="block">
                Consumer Brands
              </Link>
              <Link href="/sbu/agribusiness" className="block">
                Agribusiness
              </Link>
              <Link href="/sbu/retail" className="block">
                Retail Chain
              </Link>
            </div>
          </div>

          <Link href="/sustainability">CSR</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/presence">Presence</Link>
          <Link href="/why-redith">Why Redith</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
