import Link from "next/link";

export default function WhereToBeginSection() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Blue Rose Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={`blue-rose-${i}`}
            className="absolute"
            style={{
              left: `${(i % 4) * 25 + Math.random() * 10}%`,
              top: `${Math.floor(i / 4) * 50 + Math.random() * 20}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 1200 1200"
              className="text-[#003864]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1123.3 429.19c-30.984-67.5-95.344-98.625-115.73-107.06-36.516-118.22-224.11-152.26-233.34-153.79-1.3125-0.23438-2.5781-0.23438-3.8906-0.14063h-0.14062c-63.844-43.453-171.84-74.203-268.6-21.938-7.4062 3.9844-14.344 8.2031-20.672 12.562-9.75-1.1719-170.11-18.188-252.84 101.06-1.3125 1.875-2.5781 3.8906-3.8906 5.7656-27.703 11.953-195.24 92.625-159.19 299.21 5.625 32.156 14.438 60.094 25.453 84.188-0.09375 0.14062 0 0.23438 0.14062 0.375 4.6875 19.125 96.984 374.95 363.32 412.5 17.25 2.3438 33.234 3.5156 48.234 3.5156 19.828 0 37.688-2.0156 54.141-5.625 14.438 4.3594 78.047 21.375 151.92 21.375 65.625 0 139.36-13.5 193.92-61.641 124.31-109.55 158.26-208.5 170.34-322.92 17.016-24.516 32.531-53.859 46.5-89.109 26.484-66.891 27.891-126.89 4.3125-178.31z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-[1500px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#003864] mb-6">
            Where to Begin
          </h2>
          <p className="text-xl text-[#003864] mb-12 font-open-sans leading-relaxed max-w-3xl mx-auto">
            Beloved, if you&apos;ve found your way here, you are answering the quiet call of your soul. Whether you&apos;re seeking clarity, healing, or simply a return to your true self, you are held here.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-lg border-2 border-[#003864]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-playfair text-xl text-[#003864] mb-4">
                Soul Guidance & Remembrance
              </h3>
              <p className="text-gray-700 mb-6 font-open-sans flex-grow">
                If you feel ready to receive soul guidance and remembrance
              </p>
              <Link
                href="/readings"
                className="inline-block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-8 rounded-md transition duration-300 mt-auto"
              >
                Explore a Blue Rose Reading
              </Link>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-lg border-2 border-[#003864]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-playfair text-xl text-[#003864] mb-4">
                Loss, Transition & Rebirth
              </h3>
              <p className="text-gray-700 mb-6 font-open-sans flex-grow">
                If you&apos;re navigating loss, transition, or rebirth
              </p>
              <Link
                href="/counseling"
                className="inline-block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-8 rounded-md transition duration-300 mt-auto"
              >
                Discover Spiritual Counseling
              </Link>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-lg border-2 border-[#003864]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-playfair text-xl text-[#003864] mb-4">
                The Path of the Blue Rose
              </h3>
              <p className="text-gray-700 mb-6 font-open-sans flex-grow">
                If you&apos;re called to walk the Path of the Blue Rose
              </p>
              <Link
                href="/order"
                className="inline-block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-8 rounded-md transition duration-300 mt-auto"
              >
                Enter the Order of the Blue Rose
              </Link>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-lg border-2 border-[#003864]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-playfair text-xl text-[#003864] mb-4">
                Sacred Feminine Wisdom
              </h3>
              <p className="text-gray-700 mb-6 font-open-sans flex-grow">
                If you&apos;re longing to study the sacred feminine and deepen in wisdom
              </p>
              <Link
                href="/school"
                className="inline-block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-8 rounded-md transition duration-300 mt-auto"
              >
                Visit the School of Sophia
              </Link>
            </div>
          </div>

          <div className="bg-[#003864]/5 p-8 rounded-lg border border-[#003864]/10">
            <p className="text-xl text-[#003864] font-open-sans italic leading-relaxed">
              Follow the whispers of your heart and allow your soul to guide you. <br />
              Each step is sacred. Each path leads you home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
