import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "../components/CtaSection";
import { getImageUrl } from "../lib/imageUtils";

export default function Services() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://lightofsophia.com/services" />
        <title>
          Spiritual Services | Private Readings, Counseling & Wisdom Teachings
        </title>
        <meta
          name="description"
          content="Explore Mary Sophia’s spiritual services including private readings, spiritual counseling, the School of Sophia, and the Order of the Blue Rose. Awaken the Divine Feminine within."
        />
        <meta
          name="keywords"
          content="spiritual services, private readings, divine feminine wisdom, spiritual counseling, School of Sophia, Order of the Blue Rose, Mary Sophia"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Spiritual Services | Private Readings, Counseling & Wisdom Teachings"
        />
        <meta
          property="og:description"
          content="Discover sacred offerings to support your soul's path—readings, counseling, and divine feminine mentorship with Mary Sophia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lightofsophia.com/services" />
        <meta
          property="og:image"
          content="https://lightofsophia.com/images/Mary_Sophia_v2.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mary Sophia",
            url: "https://lightofsophia.com/services",
            image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
            description:
              "Mary Sophia offers transformative spiritual services including private readings, intuitive counseling, sacred mentorship, and divine wisdom teachings to support awakening and soul remembrance.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Online",
                "Worldwide",
                "United States",
                "Buckingham PA region",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Sacred Services by Mary Sophia",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Readings",
                    description:
                      "Channeled soul wisdom from the Divine Mother to support your spiritual path.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Spiritual Counseling",
                    description:
                      "Heart-centered support sessions for healing, transition, and divine alignment.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "School of Sophia",
                    description:
                      "Courses and mentorship in Divine Feminine traditions and spiritual formation.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Order of the Blue Rose",
                    description:
                      "Sacred community and lineage devoted to living the Way of the Divine Mother.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={getImageUrl("images/servicesbackground.jpg", { w: 1920, h: 1080, fit: "cover" })}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center max-w-[1500px]">
          <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Sacred Services
          </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Sacred offerings to hold you through life's thresholds and guide you home to your truest self.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4 py-16 max-w-[1500px]">
        {/* Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <img
                src={getImageUrl("images/newMary1.jpg", { w: 600, h: 800, fit: "cover" })}
                alt="Mary Sophia"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div>
                <h2 className="font-playfair text-3xl text-[#002147] mb-4">
                  Welcome to Our Sacred Services
                </h2>
                <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                  We offer a range of spiritual services designed to support
                  your journey of awakening and transformation. Each service is
                  carefully crafted to provide deep, meaningful experiences of
                  divine connection.
                </p>
                <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                  Through our sacred offerings, you'll discover pathways to
                  healing, growth, and spiritual awakening. Whether you're
                  seeking personal guidance, spiritual counseling, or deep
                  transformation, our services are tailored to meet you where
                  you are on your journey.
                </p>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Join us in this sacred space where ancient wisdom meets
                  contemporary understanding, where every soul is honored, and
                  where divine love guides the way forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Blue Rose Readings Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Private Readings
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Channeled Soul Wisdom from the Heart of the Divine Mother
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                Receive sacred guidance and soul remembrance through a deep,
                loving transmission from Mother Mary, Mary Magdalene, and the
                Angelic Realm. These readings illuminate your soul gifts, past
                life connections, and offer wisdom for the path unfolding before
                you.
              </p>
              <div className="text-center">
                <a
                  href="https://sacred-rose.teachable.com/purchase?product_id=6678580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Receive a Reading
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* School of Sophia Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                School of Sophia
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Sacred Formation Through Divine Feminine Wisdom
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                The School of Sophia is a transformative path of spiritual
                formation deeply rooted in Divine Feminine wisdom traditions.
                Through weekly Magdalene Yoga, monthly Blue Rose Circles, Sacred
                Prayer Groups, and our Wisdom Book Club, you'll discover ancient
                mysteries bridged with contemporary understanding. Join our
                sacred community to awaken your inner wisdom and embrace the
                divine feminine through heart-centered practices and teachings.
              </p>
              <div className="text-center">
                <Link
                  to="/school"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Join the School
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Spiritual Counseling Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Spiritual Counseling
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Healing Through Life's Sacred Thresholds ~ A Return to Love and
                Life
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                These sacred sessions offer soul-centered support for women
                navigating life's most profound transitions — from loss and
                heartbreak to new beginnings and becoming. Whether you are
                healing from grief, miscarriage, abortion, divorce, or stepping
                into marriage, motherhood, or the wisdom years, these sessions
                are a sanctuary for your heart. Through intuitive guidance,
                somatic healing, and sacred wisdom, you are lovingly supported
                in reclaiming your wholeness, your light, and your new life.
              </p>
              <div className="text-center">
                <Link
                  to="/counseling"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Order of the Blue Rose Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Order of the Blue Rose
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Mentorship and Sacred Feminine Wisdom Classes
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                Step into the ancient lineage of the Order of the Blue Rose — a
                sacred sisterhood born of the followers of Mary Magdalene and
                Mother Mary, carrying forth the living teachings of Christ
                through the embodiment of pure Divine Love and the Wisdom of
                Sophia. Through mentorship and classes, you are invited to
                awaken the Light of Sophia within and embody the radiance of
                your truly awakened heart.
              </p>
              <div className="text-center">
                <Link
                  to="/order"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Join the Order
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    What is the Light of Sophia?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    The Light of Sophia is the indwelling Divine Feminine Wisdom
                    — the sacred voice of love, intuition, and soul remembrance
                    that lives within each of us. It is a quiet, ancient
                    presence that guides us back to our true essence and to the
                    heart of the Divine.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    What is the Order of the Blue Rose?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    The Order of the Blue Rose is a sacred lineage of light
                    rooted in the heart of the Divine Feminine. It traces back
                    to Mother Mary and Mary Magdalene, who embodied the Christ
                    Light through love, devotion, and spiritual embodiment. This
                    lineage continues to awaken in those called to walk the Way
                    of Mary and to live as vessels of Divine Love.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    Do I need a specific spiritual background to work with you?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    Not at all. This work is open to all who feel called,
                    regardless of religious or spiritual background. Whether
                    you're just beginning your spiritual journey or have walked
                    this path for years, you're warmly welcomed into this sacred
                    space.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    What is spiritual counseling, and how does it differ from
                    traditional therapy?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    Spiritual counseling is a heart-centered approach that
                    supports your soul's journey toward wholeness and alignment
                    with your True Nature. Unlike traditional therapy, which
                    often focuses on mental and emotional aspects, spiritual
                    counseling integrates the spiritual dimension, helping you
                    connect with your inner wisdom and the Divine Feminine
                    presence within.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    What can I expect during a session with you?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    Each session is a sacred space tailored to your unique
                    needs. We may engage in channeled guidance, intuitive
                    healing, spiritual counseling, or explore ancient wisdom
                    traditions. The intention is always to support your return
                    to remembrance, helping you embody your true essence and
                    live as the Heart of God on Earth.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#002147] mb-3 font-playfair">
                    How do I know if this path is right for me?
                  </h3>
                  <p className="text-gray-800 font-open-sans leading-relaxed">
                    If your heart resonates with the teachings of the Divine
                    Feminine, the wisdom of Sophia, or the sacred lineage of the
                    Blue Rose, you may feel an inner calling. This path is about
                    remembering and embodying your divine essence. If you feel
                    drawn to this work, trust that inner knowing — it's a sign
                    that your soul is ready to awaken.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CtaSection buttonText="Get in Touch" linkTo="/contact-us" />
    </>
  );
}