// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 left-0 w-full bg-white shadow z-10">
//       <div className="custom-container mx-auto flex items-center justify-between px-6 py-6">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo--1.png" // update the path
//             alt="Redith Group"
//             width={150}
//             height={100}
//             className="object-contain"
//             priority
//           />
//         </Link>

//         {/* Mobile Button */}
//         <button className="md:hidden text-3xl z-50" onClick={() => setOpen(!open)}>
//           {open ? <HiOutlineX /> : <HiOutlineMenu />}
//         </button>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//           <Link href="/about" className="hover:text-primary">
//             About
//           </Link>

//           {/* Dropdown */}
//           <div className="group relative">
//             <button className="hover:text-primary flex items-center gap-1">
//               SBUs ▾
//             </button>
//             <div className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md p-3 hidden group-hover:block">
//               {[
//                 ["Digital & IT", "/sbu/digital-it"],
//                 ["Consumer Brands", "/sbu/consumer-brands"],
//                 ["Agribusiness", "/sbu/agribusiness"],
//                 ["Retail Chain", "/sbu/retail"],
//               ].map(([label, path]) => (
//                 <Link
//                   key={path}
//                   href={path}
//                   className="block px-2 py-1 rounded hover:bg-gray-100"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <Link href="/sustainability" className="hover:text-primary">
//             CSR
//           </Link>
//           <Link href="/leadership" className="hover:text-primary">
//             Leadership
//           </Link>
//           <Link href="/presence" className="hover:text-primary">
//             Presence
//           </Link>
//           <Link href="/why-redith" className="hover:text-primary">
//             Why Redith
//           </Link>
//           <Link href="/contact" className="hover:text-primary">
//             Contact
//           </Link>
//         </nav>
//       </div>

//       {/* Mobile Menu Slider */}
//       <div
//         className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col gap-4 text-base font-medium mt-12">
//           <Link href="/about">About</Link>

//           <div className="border-t pt-3">
//             <p className="font-semibold mb-1">SBUs</p>
//             <div className="flex flex-col gap-2 ml-2">
//               <Link href="/sbu/digital-it">Digital & IT</Link>
//               <Link href="/sbu/consumer-brands">Consumer Brands</Link>
//               <Link href="/sbu/agribusiness">Agribusiness</Link>
//               <Link href="/sbu/retail">Retail Chain</Link>
//             </div>
//           </div>

//           <Link href="/sustainability">CSR</Link>
//           <Link href="/leadership">Leadership</Link>
//           <Link href="/presence">Presence</Link>
//           <Link href="/why-redith">Why Redith</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow" : "bg-transparent"}`}
    >
      <div className="custom-container mx-auto flex items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo--1.png"
            alt="Redith Group"
            width={150}
            height={100}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Button */}
        <button
          className={`md:hidden text-3xl z-50 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium
          ${scrolled ? "text-black" : "text-white"}`}
        >
          <Link href="/about" className="hover:text-primary">
            About
          </Link>

          {/* Dropdown */}
          <div className="group relative">
            <button className="hover:text-primary flex items-center gap-1">
              SBUs ▾
            </button>
            <div className="absolute left-0 top-full mt-2 w-44 bg-white text-black shadow-lg rounded-md p-3 hidden group-hover:block">
              {[
                ["Digital & IT", "/sbu/digital-it"],
                ["Consumer Brands", "/sbu/consumer-brands"],
                ["Agribusiness", "/sbu/agribusiness"],
                ["Retail Chain", "/sbu/retail"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  href={path}
                  className="block px-2 py-1 rounded hover:bg-gray-100"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/sustainability" className="hover:text-primary">
            CSR
          </Link>
          <Link href="/leadership" className="hover:text-primary">
            Leadership
          </Link>
          <Link href="/presence" className="hover:text-primary">
            Presence
          </Link>
          <Link href="/why-redith" className="hover:text-primary">
            Why Redith
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 text-base font-medium mt-12">
          <Link href="/about">About</Link>

          <div className="border-t pt-3">
            <p className="font-semibold mb-1">SBUs</p>
            <div className="flex flex-col gap-2 ml-2">
              <Link href="/sbu/digital-it">Digital & IT</Link>
              <Link href="/sbu/consumer-brands">Consumer Brands</Link>
              <Link href="/sbu/agribusiness">Agribusiness</Link>
              <Link href="/sbu/retail">Retail Chain</Link>
            </div>
          </div>

          <Link href="/sustainability">CSR</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/presence">Presence</Link>
          <Link href="/why-redith">Why Redith</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}
