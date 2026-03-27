import { generatePageMetadata } from "@/lib/metadata";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata = generatePageMetadata({
  title: "Private Readings | Channeled Divine Guidance with Mary Sophia",
  description:
    "Receive sacred soul guidance with Mary Sophia. Private readings offering divine messages from the Mother and Angelic Realms for your spiritual path.",
  keywords: [
    "private spiritual readings",
    "intuitive guidance",
    "divine feminine messages",
    "Blue Rose Reading",
    "soul path reading",
  ],
  canonical: "/readings",
});

export default function ReadingsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mary Sophia",
    url: "https://lightofsophia.com/readings",
    image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
    description:
      "Mary Sophia offers private spiritual readings—channeled guidance from the Divine Mother and angelic realms to illuminate your soul purpose and path. Sessions are held via Zoom and include a recording.",
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: {
      "@type": "Place",
      name: ["Online", "Worldwide", "United States"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Private Reading Offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Blue Rose Reading",
            description: "60-minute channeled reading via Zoom with soul guidance from Mary Sophia.",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              price: 225,
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/angelbackground.jpeg"
            alt="Hero Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Private Readings
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              A sacred space of communion with Mother Mary and Mary Magdalene~ guiding you into deeper truth, clarity, and union within your own heart.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4 max-w-[1500px]">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <Image
                src="/images/newMary2.jpg"
                alt="Mary Sophia"
                width={600}
                height={800}
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-12">
                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Sacred Guidance for Your Soul Journey
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    These sessions are a sacred space of prayer, presence, and deep listening.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    Through Mary Sophia, divine wisdom flows from Mother Mary, Mary Magdalene, and the Angelic Realm—offering guidance, remembrance, and clarity for your path, including the deeper healing and understanding of your relationships.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    Mother Mary often comes forward as a presence of grace, offering comfort, reassurance, and gentle guidance for the path you are walking.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    Mary Magdalene often comes forward as a presence of truth, offering guidance in the realm of relationships, sacred union, and the healing of the heart.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    Each reading is an invitation into a space of love, presence, and deep soul remembrance~ where what is ready to be seen, felt, and understood is gently revealed.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    These sessions are for those who feel a genuine resonance with the Marys and are open to receiving guidance through the wisdom of the heart. If you feel called to this space, you are welcome here.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    What to Expect
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    Each session is held as a gentle and reverent space where your heart, your questions, and your soul&apos;s unfolding are honored.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-3">
                    Through channeled transmission, you may receive:
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 font-open-sans mb-4">
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Clarity for your current path
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Insight into your soul gifts
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Remembrance of soul connections
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Guidance for spiritual growth and healing
                    </li>
                  </ul>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Blue Rose Readings are 60 minutes and held over Zoom. You will receive both a video and audio recording after your session.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Areas of Guidance
                  </h2>
                  <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Soul Purpose & Life Path
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Past Life Connections
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Spiritual Growth & Awakening
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Divine Feminine Wisdom
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Relationships & Sacred Union
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Life Transitions & Healing
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    A Note on Guidance
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                    The Divine does not speak in fixed outcomes or predictions.
                  </p>
                  <p className="text-gray-700 font-open-sans leading-relaxed italic border-l-4 border-[#002147] pl-4">
                    Rather than telling the future, these transmissions offer wisdom, clarity, and perspective ~ illuminating the path before you so that you may walk it with greater trust and awareness.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-[#002147]/20 max-w-lg mx-auto">
                    <h3 className="font-playfair text-2xl text-[#002147] mb-4 text-center">
                      Blue Rose Reading
                    </h3>
                    <div className="text-3xl font-playfair text-[#002147] mb-4 text-center">
                      $225
                    </div>
                    <p className="text-gray-600 mb-6 text-center">
                      60 minutes via Zoom
                    </p>
                    <a
                      href="https://sacred-rose.teachable.com/purchase?product_id=6678580"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#002147] hover:bg-[#D4AF37] text-white text-center py-3 px-6 rounded-md transition duration-300"
                    >
                      Book Your Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
