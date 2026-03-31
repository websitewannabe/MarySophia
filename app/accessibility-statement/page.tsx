import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Accessibility Statement for Mary Sophia",
  description: "Our commitment to making our website accessible to all visitors.",
  canonical: "/accessibility-statement",
});

export default function AccessibilityPage() {
  return (
    <div className="bg-white py-16 pt-48">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-playfair text-4xl text-[#002147] mb-4">Accessibility Statement</h1>
        <p className="text-gray-500 text-sm mb-8">Our commitment to digital accessibility for all users</p>
        <p className="text-gray-400 text-xs mb-8">Last updated: March 31, 2026</p>

        <div className="prose prose-gray max-w-none font-open-sans space-y-6">
          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Our Commitment to Accessibility</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary Sophia is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to ensure we provide equal access to all users.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Conformance Status</h2>
          <p className="text-gray-700 leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. This website strives to conform to WCAG 2.1 Level AA. This means the content meets all Level AA requirements, providing a high standard of accessibility for most users. We conduct annual reviews to ensure continued compliance and improvement.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Accessibility Features</h2>

          <h3 className="font-playfair text-xl text-[#002147] mt-6 mb-3">Built-in Accessibility</h3>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Semantic HTML for proper document structure and screen reader compatibility",
              "Sufficient color contrast ratios throughout the design",
              "Full keyboard navigation support for all interactive elements",
              "Visible focus indicators for keyboard users",
              "Descriptive alt text for all meaningful images",
              "Properly associated form labels for all input fields",
              "Responsive design that adapts to all screen sizes and zoom levels",
              "Respect for reduced motion preferences",
              "ARIA attributes where needed to enhance assistive technology support",
              "Skip navigation links for efficient keyboard browsing",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="font-playfair text-xl text-[#002147] mt-6 mb-3">Accessibility Tools</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Our accessibility tools panel provides additional customization options:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Adjustable font sizes for improved readability",
              "High contrast and inverted contrast modes",
              "Color-blind friendly color adjustments",
              "Dyslexia-friendly font option",
              "Cursor modifications for better visibility",
              "Link and heading emphasis for easier navigation",
              "Animation and motion controls",
              "Full page zoom capabilities",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Measures to Support Accessibility</h2>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Include accessibility as a requirement for all web content and design decisions",
              "Conduct both automated and manual accessibility testing throughout development",
              "Perform annual accessibility reviews to identify and address any issues",
              "Set clear accessibility goals and responsibilities for the team",
              "Include accessibility throughout our website-related internal policies",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Compatibility</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Screen readers (NVDA, JAWS, VoiceOver, TalkBack)",
              "Speech recognition software",
              "Screen magnification tools",
              "Alternative input devices",
              "Last two versions of all major browsers",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Technical Specifications</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website relies upon the following technologies for conformance with WCAG 2.1:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {["HTML", "WAI-ARIA", "CSS", "SVG", "JavaScript"].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Known Limitations</h2>
          <p className="text-gray-700 leading-relaxed">
            While we strive for full accessibility, some limitations may exist:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Third-party content: Some embedded content from external services may not fully meet accessibility standards. We work with providers to improve this where possible.",
              "Data visualizations: Complex charts or visual data representations may not be fully accessible to all assistive technologies. We provide text alternatives where feasible.",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Assessment Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We assess the accessibility of our website through the following methods:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Automated testing using industry-standard accessibility evaluation tools",
              "Manual testing with keyboard navigation and screen readers",
              "Annual comprehensive accessibility review",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Feedback</h2>
          <p className="text-gray-700 leading-relaxed">
            We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us at{" "}
            <a href="mailto:support@websitewannabe.com" className="text-[#002147] underline hover:text-[#002147]/80">
              support@websitewannabe.com
            </a>
            . We aim to respond to all accessibility feedback within 5 business days.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Formal Approval of This Accessibility Statement</h2>
          <p className="text-gray-700 leading-relaxed">
            This accessibility statement is approved by Website Wannabe, the technology provider for Mary Sophia.
          </p>
        </div>
      </div>
    </div>
  );
}
