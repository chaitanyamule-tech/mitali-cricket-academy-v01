"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const coaches = [
  {
    name: "Dr. NandKishor Kushnure Sir",
    designation: "HEAD COACH",
    role: "Batting & Performance",
    image: "images/coaches/nandusir1.jpeg",
    experience: "12+ YEARS EXPERIENCE",
    specialty: "ELITE PERFORMANCE",
  },
  {
    name: "Ajinkya Lathkar",
    designation: "ASSISTANT COACH & MANAGER",
    role: "Academy Development",
    image: "images/coaches/ajinkya.jpeg",
    experience: "4+ YEARS EXPERIENCE",
    specialty: "TECHNICAL DEVELOPMENT",
  },
  {
    name: "Dnyandev Shinde",
    designation: "ACADEMY MANAGER & COACH",
    role: "Youth Development & Training",
    image: "images/coaches/dnyandev2.jpeg",
    experience: "2+ YEARS EXPERIENCE",
    specialty: "YOUTH DEVELOPMENT",
  },
  {
    name: "Saheb Shinde",
    designation: "CRICKET COACH",
    role: "Athletic Development & Fitness",
    image: "images/coaches/saheb.jpeg",
    experience: "2+ YEARS EXPERIENCE",
    specialty: "ATHLETIC DEVELOPMENT",
  },
];

function CoachCard({ coach, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      className="group overflow-hidden border border-[#dfe2e7] bg-white"
    >
      {/* Coach Image */}
      <div className="relative aspect-[0.86/1] overflow-hidden bg-[#dce0e5]">
        <img
          src={coach.image}
          alt={coach.name}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 " />

        <div className="absolute bottom-4 left-4 bg-[var(--gold)] px-3 py-2">
          <span className="text-[10px] font-black tracking-[0.1em] text-[var(--navy-dark)]">
            {coach.specialty}
          </span>
        </div>
      </div>

      {/* Coach Information */}
      <div className="p-5 sm:p-6">
        <div className="text-[10px] font-black tracking-[0.13em] text-[var(--gold-dark)]">
          {coach.experience}
        </div>

       <div className="mt-2 text-[11px] font-black tracking-[0.12em] text-[var(--muted)]">
         {coach.designation}
       </div>

         <h3 className="mt-2 text-[21px] font-black leading-[1.15] tracking-[-0.02em] text-[var(--navy)]">
           {coach.name}
          </h3>

        <p className="mt-2 text-[14px] leading-5 text-[#606a78]">
          {coach.role}
        </p>

        <div className="mt-5 border-t border-[#e2e4e8] pt-4">
          <Link
            href="/coaches"
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.12em] text-[var(--navy)] transition-colors hover:text-[var(--gold-dark)]"
          >
            VIEW PROFILE
            <ArrowRight size={14} />
          </Link>
          
        </div>
      </div>
    </motion.article>
  );
}

export default function CoachingStaff() {
  return (
    <section
  id="coaches"
  className="bg-[#f6f7f9]"
>
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="gold-label">
            OUR COACHING STAFF
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[38px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            Meet Our Coaching Staff
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Experienced coaches, former players and specialist trainers
            working together to build confident, disciplined and
            high-performing cricketers.
          </p>
        </motion.div>

        {/* Coach grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {coaches.map((coach, index) => (
            <CoachCard
              key={coach.name}
              coach={coach}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          {/* <Link
            href="/coaches"
            className="inline-flex min-h-[60px] items-center gap-3 bg-[var(--navy)] px-9 text-[13px] font-black tracking-[0.13em] text-white transition-colors hover:bg-[var(--navy-soft)]"
          >
            MEET THE FULL COACHING TEAM
            <ArrowRight size={17} />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}