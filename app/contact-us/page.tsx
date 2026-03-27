import { generatePageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = generatePageMetadata({
  title: "Contact Mary Sophia | Send a Message or Connect Online",
  description:
    "Get in touch with Mary Sophia. Reach out via contact form or email for spiritual support, session inquiries, or guidance on your sacred journey.",
  keywords: [
    "contact Mary Sophia",
    "spiritual guide email",
    "divine feminine teacher contact",
    "Blue Rose connection",
  ],
  canonical: "/contact-us",
});

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mary Sophia",
    url: "https://lightofsophia.com/contact-us",
    description:
      "Reach out to Mary Sophia through our contact form or email. We're here to support your path with compassion and spiritual guidance.",
    contactOption: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "maryrosesophia444@gmail.com",
        availableLanguage: ["English"],
      },
    ],
    publisher: {
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
      <ContactForm />
    </>
  );
}
