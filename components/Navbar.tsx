"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  const transparentPaths = ["/", "/services", "/counseling", "/school", "/order", "/readings"];
  const shouldBeTransparent = transparentPaths.includes(pathname) && isAtTop;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/readings", label: "Private Readings" },
    { href: "/counseling", label: "Spiritual Counseling" },
    { href: "/order", label: "Order of the Blue Rose" },
    { href: "/school", label: "School of Sophia" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${shouldBeTransparent ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center border-none max-w-[1500px]">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center">
          <Image
            src="/images/horizontal_logo.png"
            alt="Mary Sophia"
            width={240}
            height={80}
            className="h-20 w-auto hover:opacity-80 transition duration-300"
            priority
          />
        </Link>

        <button
          className="text-black min-[1220px]:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden min-[1220px]:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className={`transition pb-1 border-b-2 ${
                  shouldBeTransparent
                    ? "text-black hover:text-black"
                    : pathname === link.href
                      ? "text-[#D4AF37] hover:text-[#D4AF37]"
                      : "text-[#003864] hover:text-[#00AEEF]"
                } ${pathname === link.href ? "border-black" : "border-transparent"}`}
              >
                {link.href === "/" ? <Home className="w-5 h-5" /> : link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed top-[96px] left-0 right-0 bg-[#002147] min-[1220px]:hidden w-full shadow-lg ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="container mx-auto px-4 py-6 space-y-4 text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 hover:text-[#D4AF37] transition ${pathname === link.href ? "text-[#D4AF37] font-semibold" : ""}`}
                onClick={closeMobileMenu}
              >
                {link.href === "/" ? <Home className="w-5 h-5 inline" /> : link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
