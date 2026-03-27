import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Accessibility | Mary Sophia",
  description: "Our commitment to making lightofsophia.com accessible to all visitors.",
  canonical: "/accessibility-statement",
});

export default function AccessibilityPage() {
  return (
    <div className="bg-white py-16 pt-48">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-playfair text-4xl text-[#002147] mb-8">Accessibility Statement</h1>

        <div className="prose prose-gray max-w-none font-open-sans space-y-6">
          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Declaration of Accessibility Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The Internet constitutes the largest resource supporting freedom of information today for the user community in general and for users with disabilities in particular. For that reason we place emphasis on granting equal service to people with disabilities who use information displayed on the website, and on improving their browsing experience. We seek to ensure that our digital services will be accessible to people with disabilities, and accordingly, we have invested in the website&apos;s ease of use for people with disabilities, and continue to improve our web pages as needed.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Using the EqualWeb Website Accessibility Tool</h2>
          <p className="text-gray-700 leading-relaxed">
            This website employs the Nagich By Click accessibility software and is connected through a special accessibility server. The software complies with Israeli standard SI 5568 at AA level. The software is subject to the manufacturer&apos;s Terms of Use. The website owners and/or agents bear the responsibility for the usage and implementation on the website, including the content displayed on the website under the Terms of Use of the Software.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">How Does the Site&apos;s Accessibility Work?</h2>
          <p className="text-gray-700 leading-relaxed">
            The website features an accessibility menu. A click on the menu makes accessibility buttons available. After selecting a menu item, the user should wait for the page to be loaded.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">What Are the Main Items?</h2>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Option for keyboard-based navigation",
              "Adaptation of the website for NVDA assistive technology",
              "Enlargement of the font on the website to 4 levels of magnification",
              "Immobilization of moving elements, and stoppage of blinking",
              "Altered color contrast against dark background",
              "Altered color contrast against light background",
              "Adaptation for color-blind users",
              "Change of font for better readability",
              "Enlarged cursor, and change of color to black or white",
              "Enlargement of display to ~200%",
              "Emphasizing links on the website",
              "Emphasizing headings on the website",
              "Presentation of alt text to graphics",
              "Declaration of accessibility",
              "Sending of accessibility feedback",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Clarification</h2>
          <p className="text-gray-700 leading-relaxed">
            Despite our efforts to apply accessibility to browsing on every webpage, it may be discovered that some of webpages have not yet received accessibility or are not suitable for any available accessibility solution.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are continuing the effort to improve the website&apos;s accessibility to the full extent possible, guided by our belief, and by our moral commitment, that the website should be usable by the entire population, including people with disabilities.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Measures to Support Accessibility</h2>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {[
              "Include accessibility as a requirement for all web content. Content must meet WCAG 2.1 AA, and should meet AAA as feasible.",
              "Assign clear accessibility goals and responsibilities.",
              "Ensure content authors have access to accessibility knowledge and skills.",
              "Include accessibility as part of our technology mission.",
              "Include accessibility throughout our website-related internal policies.",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Conformance Status</h2>
          <p className="text-gray-700 leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. &ldquo;Fully conforms&rdquo; means that the content meets all of the WCAG requirements at the specified Level without exceptions. We strive to be/remain fully compliant with an annual review of our website.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Feedback</h2>
          <p className="text-gray-700 leading-relaxed">
            We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Compatibility with Browsers and Assistive Technology</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website is designed to be compatible with assistive technologies and the last two versions of major browsers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In Internet Explorer 10, 11, and older browsers, some aspects of the website may not display optimally. The website is not designed for Internet Explorer 9 and earlier versions.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Technical Specifications</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website relies upon the following technologies for conformance with WCAG 2.1:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            {["HTML", "CSS", "SVG"].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#002147] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The following technologies are used to improve accessibility and the user experience for everyone:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="text-[#002147] mr-2">•</span>
              JavaScript
            </li>
          </ul>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Limitations and Alternatives</h2>
          <p className="text-gray-700 leading-relaxed">
            Several videos on our website use YouTube. As an alternative, the videos are provided as MP4 files on our server.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Assessment Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We assess the accessibility of our website by self-evaluation and annual review.
          </p>

          <h2 className="font-playfair text-2xl text-[#002147] mt-8 mb-4">Formal Approval of This Accessibility Statement</h2>
          <p className="text-gray-700 leading-relaxed">
            This Accessibility Statement is approved by Chris Tierney, Website Wannabe Technology Support.
          </p>
        </div>
      </div>
    </div>
  );
}
