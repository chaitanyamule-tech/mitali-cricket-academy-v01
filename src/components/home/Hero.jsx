"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";



export default function Hero() {
  return (
<section
  className="relative min-h-screen w-full overflow-hidden bg-red-500"
  style={{ width: "100vw", maxWidth: "100vw" }}
>      
  {/* Background image */}
      <div
  className="absolute inset-0 w-full bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/stadium-bg.png')",
  }}
/>


      {/* Reference-style dark overlay */}
      <div className="absolute inset-0 bg-[rgba(7,23,43,0.72)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-end">
  <div className="container-academy w-full pb-20 pt-36 sm:pb-24 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-212.5"
          >
            <div className="gold-label mb-5">
              PROFESSIONAL CRICKET ACADEMY
            </div>


            <div className="gold-line mb-7" />

            <h1 className="max-w-212.5 text-[44px] font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[84px]">
              MASTER YOUR
              <br />
              <span className="text-[var(--gold)]">GAME.</span>
            </h1>

            <p className="mt-7 max-w-175 text-[18px] leading-8 text-white/80 sm:text-[20px]">
              Professional cricket coaching, modern facilities and
              performance-focused training designed to help every player
              improve.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex h-[48px] items-center justify-center gap-2 bg-[var(--gold)] px-6 text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)] transition-colors duration-200 hover:bg-[var(--gold-light)]"
              >
                <CalendarDays size={18} />
                BOOK STADIUM
              </Link>

           <a
  href="#programs"
  className="inline-flex h-[48px] w-full max-w-[320px] items-center justify-center gap-2 whitespace-nowrap border border-[var(--gold)] px-4 text-[10px] font-black tracking-[0.1em] text-[var(--gold)] transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--navy-dark)] sm:px-6 sm:text-[11px] sm:tracking-[0.12em]"
>
  <span>EXPLORE PROGRAMS</span>
  <ArrowRight size={18} className="shrink-0" />
</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-medium text-white/80">
              <span className="before:mr-2 before:text-[var(--gold)] before:content-['●']">
                Professional Coaching
              </span>

              <span className="before:mr-2 before:text-[var(--gold)] before:content-['●']">
                Modern Facilities
              </span>

              <span className="before:mr-2 before:text-[var(--gold)] before:content-['●']">
                Two Academy Branches
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}