import { generatePageMetadata } from "@/lib/metadata";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata = generatePageMetadata({
  title: "Meet Mary Sophia, Divine Feminine Channel and Spiritual Guide",
  description:
    "Learn about Mary Sophia — teacher of the Way of Mary, intuitive channel, and spiritual counselor offering sacred wisdom from the Divine Feminine lineage.",
  keywords: [
    "about Mary Sophia",
    "divine feminine teacher",
    "spiritual counselor",
    "Way of the Heart",
    "channel for Mary Magdalene",
  ],
  canonical: "/about-us",
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mary Sophia",
    url: "https://lightofsophia.com/about-us",
    image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
    description:
      "Mary Sophia is a spiritual teacher, intuitive channel, and counselor devoted to the Divine Feminine. She offers guidance rooted in the Way of the Heart, channeling wisdom from Mother Mary, Mary Magdalene, and the angelic realm.",
    jobTitle: "Spiritual Teacher and Channel",
    knowsAbout: [
      "Divine Feminine Wisdom",
      "Way of the Heart",
      "Mary Magdalene Teachings",
      "Spiritual Counseling",
      "Intuitive Readings",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Mary Sophia | Light of Sophia",
      url: "https://lightofsophia.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white py-16 pt-48 relative">
        <div className="floating-roses-container">
          {[...Array(15)].map((_, i) => {
            const gridRow = Math.floor(i / 3);
            const gridCol = i % 3;
            const baseDelay = (gridRow * 3 + gridCol) * 2;

            return (
              <div
                key={i}
                className="floating-rose"
                style={{
                  backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                  animationDelay: `${baseDelay + Math.random() * 5}s`,
                  left: `${gridCol * 33 + Math.random() * 10}%`,
                  top: `${gridRow * 25 + Math.random() * 10}%`,
                  opacity: 0,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            );
          })}
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-5xl text-[#002147] mb-4">
              About Mary Sophia
            </h1>
            <p className="text-gray-600 font-open-sans text-xl">
              Mary Sophia is a teacher of the Way of Mary and a devoted follower
              of Christ. She serves as a messenger and channel for Mother Mary,
              Mary Magdalene, the Angelic Realm and the Wisdom of Sophia.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/3">
                  <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                    There is a sacred voice — quiet, ancient, and deeply feminine —
                    that has long whispered through the hearts of women across time.
                    It is known by many names, but to me, it is the Light of Sophia.
                    This divine feminine wisdom — the indwelling light of love,
                    intuition, and soul remembrance — lives within you.
                  </p>
                  <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                    I walk with this light as a messenger and a guide, through the
                    Lineage of Sophia, Mother Mary and Mary Magdalene. I am a keeper
                    of the Order of the Blue Rose — a sacred stream of love and
                    remembrance that carries the original teachings of the Christ
                    Light through the heart of the Feminine.
                  </p>
                  <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                    My work is here to support your return to that remembrance — through channeled guidance, intuitive healing, spiritual counseling and ancient wisdom teachings. Rooted in the Way of the Heart, this work gently nurtures the awakening of the Sacred Feminine within, guiding you home to the wisdom that lives within you.
                  </p>
                  <div className="mt-8">
                    <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                      Our Sacred Mission
                    </h2>
                    <ul className="list-none space-y-3 text-gray-800 font-open-sans text-base">
                      <li className="flex items-center">
                        <span className="text-[#002147] mr-2">•</span>
                        Awakening the Wisdom of the Heart
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#002147] mr-2">•</span>
                        Embodying Divine Feminine Wisdom
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#002147] mr-2">•</span>
                        Nurturing Spiritual Growth and Transformation
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#002147] mr-2">•</span>
                        Creating Sacred Community
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#002147] mr-2">•</span>
                        Sharing Ancient and Contemporary Spiritual Teachings
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/mary-sophia-2.jpg"
                    alt="Mary Sophia Portrait"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                About Me
              </h2>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                I am a teacher of the Way of Mary and a devoted follower of Christ. I serve as a messenger and channel for Mother Mary, Mary Magdalene, and the Angelic Realm, offering spiritual guidance rooted in love, remembrance, and Divine Feminine Wisdom.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                Philosophy & Approach
              </h2>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                My work is grounded in The Way of Mary and The Way of the Heart,
                ancient wisdom traditions that emphasize direct spiritual
                experience and heart-centered transformation. I believe that each
                person carries within them a unique divine spark waiting to be
                awakened.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                Sacred Work
              </h2>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                Through intuitive readings, spiritual counseling, and teaching, I
                help others connect with their own divine guidance and purpose.
                This work is supported by the presence of Mother Mary, Mary
                Magdalene, and the Angelic Realm, who offer their wisdom and love
                to all who seek it.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                Experience
              </h2>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                I have over 25 years of experience counseling women in areas of relationships, love and dating, eating disorders, body image, female sexuality, sexual trauma, nutrition and spirituality.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                Education & Certifications
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-lg text-[#002147] mb-2">Academic Credentials</h3>
                  <ul className="list-none space-y-2 text-gray-800 font-open-sans text-base ml-4">
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Masters in Nutrition Education from Immaculata University
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Registered Dietitian/Licensed Dietitian-Nutritionist
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-playfair text-lg text-[#002147] mb-2">Professional Certifications</h3>
                  <ul className="list-none space-y-2 text-gray-800 font-open-sans text-base ml-4">
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Certified VITA Sex, Love and Relationship Coach
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Certified VITA Female Sexuality Coach
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Certified REBLOOM Trauma Coach
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Ego State Therapy Certification
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="max-w-[1500px] mx-auto">
              <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                Initiations & Ordinations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-lg text-[#002147] mb-2">Sacred Initiations</h3>
                  <ul className="list-none space-y-2 text-gray-800 font-open-sans text-base ml-4">
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Initiated High Priestess of the Order of the Blue Rose through Mary Tobin
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Initiated High Priestess of Avalon through Holly Hamilton at Awakening Avalon Temple
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-playfair text-lg text-[#002147] mb-2">Sacred Ordinations</h3>
                  <ul className="list-none space-y-2 text-gray-800 font-open-sans text-base ml-4">
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Ordained Priestess of Mary Magdalene through Ana Otero at The Desert Rose Mystery School
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#002147] mr-2">•</span>
                      Ordained Priest of Christian Mysticism through Dr. Chris Holder
                    </li>
                  </ul>
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
