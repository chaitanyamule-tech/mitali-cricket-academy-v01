"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Baby,
  Dumbbell,
  Trophy,
  Target,
  Check,
} from "lucide-react";

import Link from "next/link";


const branchPrograms = {
  "BRANCH 1": [
    // {
    //   icon: Baby,
    //   title: "Junior Cricket Program",
    //   age: "AGES 6–12",
    //   description:
    //     "A fun, foundational introduction to cricket focusing on grip, stance, coordination and the joy of the game.",
    //   features: [
    //     "Batting fundamentals",
    //     "Bowling basics",
    //     "Fielding skills",
    //   ],
    // },
    // {
    //   icon: Target,
    //   title: "Intermediate Program",
    //   age: "AGES 13–16",
    //   description:
    //     "Structured skill development refining technique, tactical understanding and competitive readiness.",
    //   features: [
    //     "Technique refinement",
    //     "Match awareness",
    //     "Competitive preparation",
    //   ],
    // },
    // {
    //   icon: Trophy,
    //   title: "Advanced Cricket Program",
    //   age: "AGES 17+",
    //   description:
    //     "High-level coaching focused on performance, match preparation and advanced cricket development.",
    //   features: [
    //     "Advanced technique",
    //     "Match preparation",
    //     "Performance development",
    //   ],
    // },
    // {
    //   icon: Dumbbell,
    //   title: "Personal Training",
    //   age: "ONE-TO-ONE",
    //   description:
    //     "Focused individual coaching designed around personal strengths, weaknesses and performance goals.",
    //   features: [
    //     "Personal coaching",
    //     "Fitness development",
    //     "Performance tracking",
    //   ],
    // },

    {
      icon: Target,
      title: "Regular Cricket Program",
      age: "AGES 5–20",
      description:
        "Technique-focused training for players preparing to compete with greater consistency and confidence.",
      fees:"₹ 2,000 per month",
      features: [
        "Skill refinement",
        "Tactical awareness",
        "Match readiness",
      ],
    },

    {
      icon: Target,
      title: "Personal  Training Program",
      age: "AGES 5–20",
      description:
        "Personalized one-to-one sessions built around specific technical and performance goals.",
      fees:"₹ 5,000 per month",
      features: [
        "One-to-one coaching",
        "Video analysis",
        "Training plans",
      ],
    },
  ],

  "BRANCH 2": [
    // {
    //   icon: Baby,
    //   title: "Junior Cricket Program",
    //   age: "AGES 6–12",
    //   description:
    //     "A structured introduction to cricket designed to build confidence, discipline and core fundamentals.",
    //   features: [
    //     "Batting fundamentals",
    //     "Bowling basics",
    //     "Game awareness",
    //   ],
    // },
    // {
    //   icon: Target,
    //   title: "Intermediate Program",
    //   age: "AGES 13–16",
    //   description:
    //     "Technique-focused training for players preparing to compete with greater consistency and confidence.",
    //   features: [
    //     "Skill refinement",
    //     "Tactical awareness",
    //     "Match readiness",
    //   ],
    // },

     {
      icon: Target,
      title: "Regular Cricket Program",
      age: "AGES 5–20",
      description:
        "Technique-focused training for players preparing to compete with greater consistency and confidence.",
      features: [
        "Skill refinement",
        "Tactical awareness",
        "Match readiness",
      ],
    },

    {
      icon: Target,
      title: "Personal  Training Program",
      age: "AGES 5–20",
      description:
        "Personalized one-to-one sessions built around specific technical and performance goals.",
      features: [
        "One-to-one coaching",
        "Video analysis",
        "Training plans",
      ],
    },
    // {
    //   icon: Trophy,
    //   title: "Advanced Cricket Program",
    //   age: "AGES 17+",
    //   description:
    //     "Performance-oriented coaching for serious players looking to sharpen their competitive edge.",
    //   features: [
    //     "Advanced cricket",
    //     "Match analysis",
    //     "Performance coaching",
    //   ],
    // },
    // {
    //   icon: Dumbbell,
    //   title: "Personal Training",
    //   age: "ONE-TO-ONE",
    //   description:
    //     "Personalized one-to-one sessions built around specific technical and performance goals.",
    //   features: [
    //     "One-to-one coaching",
    //     "Video analysis",
    //     "Training plans",
    //   ],
    // },
  ],
};

function ProgramCard({ program, index }) {
  const Icon = program.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group border border-[#e0e2e7] bg-[#f8f8fa] p-8 transition-all duration-300 hover:border-[#caab31] hover:shadow-[0_15px_35px_rgba(13,31,56,0.07)] sm:p-9"
    >
      <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[var(--navy)]">
        <Icon
          size={21}
          strokeWidth={2}
          className="text-[var(--gold)]"
        />
      </div>

      <h3 className="text-[25px] font-black tracking-[-0.025em] text-[var(--navy)]">
        {program.title}
      </h3>

      <div className="mt-2 text-[13px] font-extrabold tracking-[0.13em] text-[var(--gold-dark)]">
        {program.age}
      </div>

      <p className="mt-5 text-[16px] font-bold leading-7 text-[#3a332b]">
        {program.fees}
      </p>

      <p className="mt-5 text-[16px] leading-7 text-[#5e6671]">
        {program.description}
      </p>

      <div className="mt-6 space-y-3">
        {program.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 text-[14px] font-medium text-[#4f5762]"
          >
            <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15">
              <Check
                size={12}
                strokeWidth={3}
                className="text-[var(--gold-dark)]"
              />
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* <div className="mt-7 border-t border-[#e0e2e7] pt-6">
        <button
          type="button"
          className="text-[13px] font-black tracking-[0.13em] text-[var(--navy)] transition-colors hover:text-[var(--gold-dark)]"
        >
          Book Now →
        </button>
      </div> */}
     <div className="mt-7 border-t border-[#e0e2e7] pt-6">
  <a
    href="#contact"
    className="text-[13px] font-black tracking-[0.13em] text-[var(--navy)] transition-colors hover:text-[var(--gold-dark)]"
  >
    Book Now →
  </a>
</div>
    </motion.article>
  );
}

export default function TrainingPrograms() {
  const [activeBranch, setActiveBranch] = useState("BRANCH 1");

  const programs = branchPrograms[activeBranch];

  return (
   <section
  id="programs"
  className="relative bg-white"
>
      {/* Main section */}
      <div className="container-academy pb-24 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[950px] text-center"
        >
          <div className="gold-label">TRAINING PROGRAMS</div>

          <div className="mx-auto mt-5 gold-line" />

          <h2 className="mt-7 text-[38px] font-black leading-[1.05] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[58px]">
            Training Programs Built for Every Stage
          </h2>

          <p className="mx-auto mt-7 max-w-[850px] text-[17px] leading-8 text-[#606874] sm:text-[19px]">
            From young beginners to competitive players, our structured
            programs are designed around skill development, discipline and
            performance.
          </p>
        </motion.div>

        {/* Branch switcher */}
        <div className="mx-auto mt-8 flex w-fit border border-[#d9dde2] p-2">
  {["BRANCH 1", "BRANCH 2"].map((branch) => {
    const active = activeBranch === branch;

    return (
      <button
        key={branch}
        type="button"
        onClick={() => setActiveBranch(branch)}
        className={`whitespace-nowrap px-5 py-3 text-[13px] font-black tracking-[0.06em] transition-all duration-200 sm:px-6 sm:text-[14px] ${
          active
            ? "bg-[var(--gold)] text-[var(--navy-dark)]"
            : "bg-transparent text-[#69717c] hover:text-[var(--navy)]"
        }`}
      >
        {branch}
      </button>
    );
  })}
</div>

        {/* Program grid */}
        <motion.div
          key={activeBranch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2"
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={`${activeBranch}-${program.title}`}
              program={program}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}