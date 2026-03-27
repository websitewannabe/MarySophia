"use client";

import { useEffect } from "react";

export default function CtaSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.fnames = new Array();
      // @ts-ignore
      window.ftypes = new Array();
      // @ts-ignore
      window.fnames[0]='EMAIL';
      // @ts-ignore
      window.ftypes[0]='email';
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 text-center relative z-10 max-w-[1500px]">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#002147] mb-6">
          Receive Sacred Messages of Love and Wisdom
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 font-open-sans">
          Sign up to receive channeled transmissions from the Divine Mother, sacred teachings from the Order of the Blue Rose, and soul nourishment for your journey.
        </p>
        <div id="mc_embed_signup" className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
          <form
            action="https://sacredrose444.us20.list-manage.com/subscribe/post?u=c821dc677e6487ca6f44c66ff&amp;id=c586c74698&amp;f_id=00097bf1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group mb-4">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  id="mce-EMAIL"
                  required
                  placeholder="Your Email Address *"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_c821dc677e6487ca6f44c66ff_c586c74698" tabIndex={-1} defaultValue="" />
              </div>
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full bg-[#D4AF37] hover:bg-[#003864] text-white py-2 px-6 rounded-md transition duration-300 cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
