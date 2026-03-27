"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "In this nurturing space of authentic love and faith, I've found not just comfort but also a true acceptance of my essence, filling me with solace and boundless love. The ongoing support has been instrumental in my soul's journey, deepening my relationship with the spiritual realm. My experience working with Mary Sophia has been transformative, to say the least. Through her mentorship, I was able to delve deeper into the crevices of my soul, identifying the traumas that held me back and attaining the healing I desperately sought. This experience brought me clarity and the courage to follow through with humility and zeal. For those questioning their faith or seeking to deepen their spiritual understanding, I wholeheartedly recommend the Order of the Blue Rose. This sacred gathering serves as a profound guide for anyone on the quest to understand their personal spiritual self and the divine path that awaits them.",
      name: "Lisa Bhakti",
      title: "Divine Feminine Spiritual Intuitive Oracle",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      quote:
        "I am deeply grateful that I said yes to being a part of the Order of the Blue Rose. Joining the Order of the Blue Rose under Mary Sophia's mentorship has been transformative. The structured sessions and abundant resources immediately appealed to my logical side. But what touched my soul were the teachings themselves—Mary Sophia's mastery was evident in every interaction. She created a heart-centered space, guiding us through spiritual practices that were both profound and practical. Most compelling is Mary Sophia's embodiment of her teachings. She doesn't just teach; she lives the principles, making her an authentic and inspiring role model. I'm continually applying what I've learned to my own spiritual journey and counseling practice. If you're considering the Order of the Blue Rose, don't hesitate. It's an extraordinary step for personal and spiritual growth.",
      name: "Dr. Valerie René Sheppard",
      title: "Certified Master Trainer & Spiritual Counselor",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      quote:
        "Being a part of the Order of the Blue Rose under Mary Sophia's guidance is nothing short of transformative. She doesn't just teach the Way of the Marys, she embodies it — navigating life through the lens of an awakened heart. This mentorship guides you to explore life from the heart's eye, opening doors to the Holy Spirit within. As a conduit for Mary Magdalene and Mother Mary, Mary Sophia reacquaints us with the feminine divine—an aspect of God long-forgotten but vitally essential. The experience has been an eye-opener, heart-expander, and a life-altering journey. It challenges and changes you, awakening you to a deeper understanding of spirituality and existence.",
      name: "Luanne Phillips",
      title: "Psychotherapist, Energy Healer, Reiki Master, Light Worker",
      image: "/images/testimonial-3.jpg",
    },
  ];

  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((existingId) => existingId !== id)
        : [...prev, id],
    );
  };

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <div className="wavy-gradient"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
        <h2 className="text-center font-dancing-script text-white text-3xl md:text-4xl mb-12">
          Mary Sophia Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <p className="text-white italic mb-6 font-open-sans">
                {expandedIds.includes(testimonial.id)
                  ? testimonial.quote
                  : `${testimonial.quote.slice(0, 150)}...`}
                <button
                  onClick={() => toggleExpand(testimonial.id)}
                  className="text-[#00AEEF] hover:text-blue-400 ml-2 text-sm font-normal not-italic"
                >
                  {expandedIds.includes(testimonial.id)
                    ? "Read Less"
                    : "Read More"}
                </button>
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover mr-3"
                />
                <div>
                  <span className="text-white block">{testimonial.name}</span>
                  <span className="text-gray-300 text-sm block">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
