import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy | Mary Sophia",
  description: "Privacy policy for lightofsophia.com — how we collect, use, and protect your personal information.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 pt-48">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-playfair text-4xl text-[#002147] mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none font-open-sans space-y-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <p className="text-gray-700 leading-relaxed">
            Mary Sophia (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit lightofsophia.com.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information you voluntarily provide, including your name, email address, and any messages submitted through our contact form. We also collect standard web analytics data such as browser type, pages visited, and referring URLs.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your information to respond to your inquiries, provide our services, send newsletters you have subscribed to, and improve our website experience. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses third-party services including Netlify (hosting and forms), Mailchimp (email newsletters), and Teachable (course and session purchases). Each of these services has its own privacy policy governing how they handle your data.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We may use cookies and similar technologies to improve your browsing experience. You can control cookies through your browser settings.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:maryrosesophia444@gmail.com" className="text-[#002147] hover:text-[#D4AF37] transition-colors">
              maryrosesophia444@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
