import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="wavy-gradient"></div>
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 className="font-playfair text-6xl text-white mb-4">404</h1>
        <p className="font-open-sans text-2xl text-white mb-8">
          Page Not Found
        </p>
        <p className="text-white/80 font-open-sans text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-full transition duration-300 backdrop-blur-sm font-open-sans"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
