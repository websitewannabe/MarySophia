"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
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
    <section
      id="home"
      className="relative min-h-screen max-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/bluerosebackground.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="wavy-gradient"></div>
      </div>
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between max-w-[1500px] pl-[50px]">
          <div className="md:w-1/2 text-left mb-0 md:mb-0 text-center md:text-left">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Mary Sophia Welcomes You
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 max-w-2xl font-open-sans">
              Enter a sanctuary of remembrance, where love, revelation and sacred feminine wisdom illuminate your way.
            </p>
            <a
              href="#services"
              className="inline-flex items-center bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-2 px-6 rounded-md transition duration-300"
              onClick={handleScrollToServices}
            >
              Enter the Sanctuary
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/images/Mary_Sophia_v2.png"
              alt="Mary Sophia Portrait"
              width={800}
              height={1000}
              className="w-2/3 object-contain max-h-[min(700px,calc(100vh-200px))]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
