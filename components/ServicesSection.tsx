import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "/icons/angel.svg",
      iconAlt: "Angel",
      title: "Private Readings",
      description:
        "Connect with divine guidance through personal readings tailored to your spiritual journey.",
      cta: "Experience a Reading",
      link: "/readings",
    },
    {
      id: 3,
      icon: "/icons/rose.svg",
      iconAlt: "Rose",
      title: "Order of the Blue Rose",
      description:
        "Join our sacred sisterhood and embody the radiance of your truly awakened heart.",
      cta: "Find Your Path",
      link: "/order",
    },
    {
      id: 4,
      icon: "/icons/angel2.svg",
      iconAlt: "Angel",
      title: "Spiritual Counseling",
      description:
        "Receive sacred support through life's transitions with heart-centered guidance and healing.",
      cta: "Learn More",
      link: "/counseling",
    },
    {
      id: 2,
      icon: "/icons/dove.svg",
      iconAlt: "Dove",
      title: "School of Sophia",
      description:
        "Deepen your spiritual growth through courses, workshops, and mentorship.",
      cta: "Begin Your Journey",
      link: "/school",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-[1500px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#B58233] overflow-hidden h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16">
                      <Image
                        src={service.icon}
                        alt={service.iconAlt}
                        width={64}
                        height={64}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl text-[#003864] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-open-sans">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={service.link}
                    className="block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
