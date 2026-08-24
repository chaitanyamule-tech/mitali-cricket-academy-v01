"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "The coaching environment is excellent. My son's technique, confidence and understanding of the game have improved tremendously.",
    name: "Rahul Sharma",
    role: "Parent",
    initials: "RS",
  },
  {
    quote:
      "The coaches focus on the small details and give every player individual attention. The facilities are also outstanding.",
    name: "Aditya Patil",
    role: "Academy Player",
    initials: "AP",
  },
  {
    quote:
      "A disciplined and professional environment. The training sessions are structured really well and the coaches are very supportive.",
    name: "Vikram Joshi",
    role: "Parent",
    initials: "VJ",
  },
  {
    quote:
      "I have improved both my batting and fitness since joining the academy. The one-to-one sessions have made a big difference.",
    name: "Arjun Mehta",
    role: "Academy Player",
    initials: "AM",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? testimonials.length - 1
        : currentIndex - 1
    );
  };

  const next = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + 1) % testimonials.length
    );
  };

  return (
    <section
  id="testimonials"
  className="bg-white"
>
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="gold-label">
            TESTIMONIALS
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            What Our Players Say
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Hear from players and families who are part of our academy
            community.
          </p>
        </motion.div>

        {/* Testimonial */}
        <div className="mx-auto mt-14 max-w-[980px]">
          <div className="relative border border-[#dfe2e7] bg-[#f7f8fa] px-7 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            {/* Quote icon */}
            <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center bg-[var(--navy)] sm:left-12 sm:top-10">
              <Quote
                size={22}
                className="text-[var(--gold)]"
                strokeWidth={1.8}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="pt-16"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-[var(--gold)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 max-w-[820px] text-[24px] font-medium leading-[1.55] tracking-[-0.015em] text-[var(--navy)] sm:text-[29px] lg:text-[32px]">
                  "{current.quote}"
                </blockquote>

                {/* Person */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-[12px] font-black text-[var(--gold)]">
                    {current.initials}
                  </div>

                  <div>
                    <div className="text-[15px] font-black text-[var(--navy)]">
                      {current.name}
                    </div>

                    <div className="mt-1 text-[12px] font-bold tracking-[0.08em] text-[#737b86]">
                      {current.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between border-t border-[#dfe2e7] pt-6">
              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-[4px] transition-all duration-300 ${
                      index === activeIndex
                        ? "w-10 bg-[var(--gold)]"
                        : "w-5 bg-[#cfd3d8]"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={previous}
                  className="flex h-11 w-11 items-center justify-center border border-[var(--navy)] text-[var(--navy)] transition-all hover:bg-[var(--navy)] hover:text-white"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center bg-[var(--navy)] text-white transition-colors hover:bg-[var(--navy-soft)]"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}