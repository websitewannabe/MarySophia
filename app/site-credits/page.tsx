import { ArrowRight, Code, Palette, Rocket, Globe } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Site Credits | Built by Website Wannabe, Powered by AI Wannabe",
  description:
    "This website was designed and built by Website Wannabe and powered by AI Wannabe. Custom web design, development, SEO, and AI-driven solutions.",
  canonical: "/site-credits",
});

export default function SiteCreditsPage() {
  return (
    <>
      {/* About AI Wannabe */}
      <section className="py-24 pt-48 bg-[#002147]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3">
              Site Credits
            </h1>
            <a
              href="https://websitewannabe.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-8"
            >
              <span className="font-playfair text-4xl md:text-5xl text-white hover:text-[#D4AF37] transition-colors">
                Website Wannabe
              </span>
            </a>
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-open-sans">
              This website was designed and built by{" "}
              <a
                href="https://websitewannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#e8c84b] transition-colors underline underline-offset-4"
              >
                Website Wannabe
              </a>
              , a modern web design and development agency specializing in
              high-performance websites for businesses that want to stand out
              online.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-open-sans">
              Powered by{" "}
              <a
                href="https://aiwannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#e8c84b] transition-colors underline underline-offset-4"
              >
                AI Wannabe
              </a>
              , this site leverages cutting-edge AI technology to deliver a
              fast, modern, and intelligent web experience.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-open-sans">
              From custom design and development to SEO optimization and
              ongoing support, Website Wannabe delivers websites that look
              stunning and perform even better.
            </p>
          </div>
        </div>
      </section>

      {/* What Website Wannabe Offers */}
      <section className="py-24 bg-[#001a38]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3">
              Services
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">
              What Website Wannabe Offers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Custom Design",
                description:
                  "Unique, brand-aligned designs tailored to your business and audience.",
              },
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Modern, fast, and responsive websites built with cutting-edge technology.",
              },
              {
                icon: Rocket,
                title: "SEO & Performance",
                description:
                  "Optimized for search engines and blazing-fast load times out of the box.",
              },
              {
                icon: Globe,
                title: "Ongoing Support",
                description:
                  "Continuous maintenance, updates, and support to keep your site running smoothly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:bg-white/10 transition-colors"
              >
                <item.icon className="h-10 w-10 text-[#D4AF37] mx-auto mb-5" />
                <h3 className="font-playfair text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-open-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want a Website Like This? */}
      <section className="py-24 bg-[#002147]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3">
            Need a Website?
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Want a Website Like This?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-open-sans">
            Website Wannabe builds high-performance, beautifully designed
            websites for businesses of all sizes. Get in touch today.
          </p>
          <a
            href="https://websitewannabe.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#D4AF37] hover:bg-[#e8c84b] text-[#002147] font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            Visit Website Wannabe
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
