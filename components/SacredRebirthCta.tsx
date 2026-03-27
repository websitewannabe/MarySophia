"use client";

import Link from "next/link";

export default function SacredRebirthCta() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const offset = 70;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#002147] py-16 relative">
      <div className="wavy-gradient opacity-40"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 drop-shadow-lg">
          You are standing at the threshold of your own sacred rebirth.
        </h2>
        <p className="text-white font-open-sans text-lg max-w-3xl mx-auto mb-8 drop-shadow-lg">
          If you feel the call to return to your heart, awaken your soul&apos;s
          gifts, and anchor the Light of Sophia into your life, I invite you to
          step forward.
        </p>
        <p className="text-white font-open-sans text-xl max-w-2xl mx-auto mb-12 drop-shadow-lg italic">
          You are ready. You are held. You are loved.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/services"
            className="bg-[#003864] hover:bg-[#D4AF37] text-white py-3 px-8 rounded-md transition duration-300 inline-block"
          >
            Book a Session
          </Link>
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="bg-white hover:bg-gray-100 text-[#002147] py-3 px-8 rounded-md transition duration-300"
          >
            Explore My Offerings
          </a>
        </div>
      </div>
    </section>
  );
}
