"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Academy experience & coaching philosophy",
  "Structured player development pathway",
  "Professional, disciplined environment",
  "Competitive & tournament preparation",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f6f7f9]">
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-24">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[1.03/1] overflow-hidden">
              <img
                src="/images/academy.png"
                alt="Cricket academy indoor training facility"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Established badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute -bottom-6 right-[-2px] flex h-[120px] w-[150px] flex-col justify-center bg-[var(--navy)] px-6 shadow-[0_18px_35px_rgba(12,29,51,0.16)] sm:h-[128px] sm:w-[160px]"
            >
              <span className="text-[39px] font-black leading-none tracking-[-0.04em] text-[var(--gold)]">
                2019
              </span>

              <span className="mt-2 text-[13px] font-medium tracking-[0.03em] text-white/85">
                ESTABLISHED
              </span>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-label">
              ABOUT THE ACADEMY
            </div>

            <div className="gold-line mt-5" />

            <h2 className="mt-7 max-w-[620px] text-[38px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[46px] lg:text-[53px]">
              Where Talent Meets
              <br />
              Professional Coaching
            </h2>

            <p className="mt-7 max-w-[640px] text-[17px] leading-[1.8] text-[#536174] sm:text-[18px]">
Shaping Talent. Building Cricketers. Creating Champions.

<br />
<br />
Established in 2019, Mitali Cricket Academy, Nanded was founded with a vision to provide professional cricket coaching and a strong platform for aspiring cricketers to pursue their dreams.
<br />
Over the years, the academy has nurtured and developed talented players who have represented District and State-level cricket. Our journey is built on a commitment to quality coaching, structured training, competitive match exposure, and individual player development. 
 <br />
At Mitali Cricket Academy, we believe that cricket is not just about runs and wickets—it is about discipline, confidence, teamwork, dedication, and the mindset to keep improving.
  <br />
 Our coaching environment encourages every player to learn, compete, overcome challenges, and reach their full potential.

<br />
Whether a player is taking their first steps into cricket or preparing for competitive-level cricket, our goal remains the same: to provide the right guidance, training, and opportunities to help every cricketer grow.

Our Philosophy
<br />
<span className="font-bold col-auto gap-1">Train with Purpose.</span>  
<br />
<span className="font-bold col-auto gap-1">Play with Confidence.</span>  
<br />
<span className="font-bold col-auto gap-1">Compete with Character.</span>  
<br />
<span className="font-bold col-auto gap-1">Master the Art of Cricket With Us.</span>  
            </p>

            {/* Benefits */}
            {/* <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[2px] flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-[#d6af30]/15">
                    <Check
                      size={13}
                      strokeWidth={2.8}
                      className="text-[var(--gold-dark)]"
                    />
                  </span>

                  <span className="text-[15px] font-medium leading-[1.45] text-[var(--navy)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTA */}
            <div className="mt-9">
              <a
  href="#about"
  className="inline-flex h-[48px] items-center justify-center bg-[var(--navy)] px-6 text-[11px] font-black tracking-[0.11em] text-white transition-colors duration-200 hover:bg-[var(--navy-soft)]"
>
  DISCOVER OUR ACADEMY
</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}