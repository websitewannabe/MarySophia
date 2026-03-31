"use client";

import { Mail, MapPin, Instagram, Youtube, Clock, Accessibility } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#002147]">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-[1500px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left pl-5">
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src="/images/stacked_logo.png"
                alt="Mary Sophia"
                width={160}
                height={160}
                className="h-40 w-auto mx-auto md:mx-0 mb-6 hover:opacity-80 transition duration-300"
              />
            </Link>
            <div className="flex space-x-4 justify-center md:justify-start mb-6">
              <a href="https://www.instagram.com/orderofthebluerose/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-white hover:text-white/80 transition duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@orderofthebluerose3878" target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube" className="text-white hover:text-white/80 transition duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://orderofthebluerose.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Read our Substack newsletter" className="text-white hover:text-white/80 transition duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.openAccessibilityTools) {
                  window.openAccessibilityTools();
                }
              }}
              className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition duration-300 text-sm"
            >
              <Accessibility className="w-4 h-4" />
              <span>Accessibility Tools</span>
            </button>
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 md:pl-8">
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl text-white mb-4 font-semibold">Quick Links</h3>
                <nav className="flex flex-col space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/services", label: "Services" },
                    { href: "/readings", label: "Private Readings" },
                    { href: "/counseling", label: "Spiritual Counseling" },
                    { href: "/order", label: "Order of the Blue Rose" },
                    { href: "/about-us", label: "About" },
                    { href: "/contact-us", label: "Contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <h3 className="font-playfair text-2xl text-white mb-4 font-semibold">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white shrink-0" />
                    <a href="mailto:maryrosesophia444@gmail.com" className="hover:text-white/80 text-sm font-medium text-white">
                      maryrosesophia444@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-white shrink-0" />
                    <span className="text-white text-sm">4920 York Road Suite 2200 Buckingham, PA 18912</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-white shrink-0" />
                    <span className="text-white text-sm">Mon-Fri: 9AM-5PM EST</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6 text-center md:text-right text-sm text-white">
              <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Mary Sophia. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-2">
                <Link href="/privacy" className="text-white/60 hover:text-white/80 transition duration-300 py-1">Privacy Policy</Link>
                <Link href="/accessibility-statement" className="text-white/60 hover:text-white/80 transition duration-300 py-1">Accessibility</Link>
                <a href="/sitemap.xml" className="text-white/60 hover:text-white/80 transition duration-300 py-1">Sitemap</a>
                <Link href="/site-credits" className="text-white/60 hover:text-white/80 transition duration-300 py-1">Site Credits</Link>
                <a href="https://aiwannabe.co" target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 hover:text-white/80 transition duration-300 py-1">Powered by AI Wannabe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
