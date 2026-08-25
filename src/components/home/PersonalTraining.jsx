"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const features = [
  "1-on-1 coaching",
  "Batting technique",
  "Bowling technique",
  "Fielding",
  "Fitness",
  "Video analysis",
  "Performance tracking",
  "Personalized training plans",
  "Diet & nutrition guidance",
];

export default function PersonalTraining() {
  return (
    <section
  id="personal-training"
  className="bg-[var(--navy)] text-white"
>
      <div className="container-academy py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="order-1"
          >
            <div className="gold-label">
              ONE-TO-ONE EXCELLENCE
            </div>

            <div className="gold-line mt-5" />

            <h2 className="mt-7 max-w-[600px] text-[40px] font-black leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[54px]">
              Personal Training
            </h2>

            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.75] text-white/75 sm:text-[18px]">
              Focused one-to-one coaching designed around your individual
              strengths, weaknesses and performance goals.
            </p>


            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20">
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="text-[var(--gold)]"
                    />
                  </span>

                  <span className="text-[15px] leading-6 text-white/90">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex min-h-[62px] items-center justify-center bg-[var(--gold)] px-9 text-[13px] font-black tracking-[0.14em] text-[var(--navy-dark)] transition-colors duration-200 hover:bg-[var(--gold-light)] sm:px-11"
              >
                BOOK PERSONAL TRAINING
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative order-2"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[1.12/1] sm:aspect-[1.2/1]">
                <img
                  src="/images/coaches/nandusir1.jpeg"
                  alt="One-to-one cricket training"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Label */}
              {/* <div className="absolute right-5 top-5 bg-[var(--gold)] px-5 py-3.5 sm:right-7 sm:top-7 sm:px-6 sm:py-4">
                <span className="text-[12px] font-black tracking-[0.12em] text-[var(--navy-dark)] sm:text-[13px]">
                  1-ON-1 COACHING
                </span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}