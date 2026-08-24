"use client";

import { motion } from "motion/react";
import {
  Trophy,
  Target,
  Zap,
  Lightbulb,
  Shirt,
  Car,
  Droplets,
  Dumbbell,
  Package,
  Users,
  Check,
} from "lucide-react";

const facilities = [
  {
    title: "Professional Ground",
    description: "Match-quality cricket ground for training and competitive play.",
    icon: Trophy,
  },
  {
    title: "Practice Nets",
    description: "Dedicated practice lanes for focused batting and bowling sessions.",
    icon: Target,
  },
  {
    title: "Bowling Machines",
    description: "Advanced bowling machines for pace, line and length training.",
    icon: Zap,
  },
  {
    title: "Floodlights",
    description: "Professional lighting for evening training and matches.",
    icon: Lightbulb,
  },
  {
    title: "Changing Rooms",
    description: "Clean and convenient changing facilities for players.",
    icon: Shirt,
  },
  {
    title: "Parking",
    description: "Convenient parking space for players, parents and visitors.",
    icon: Car,
  },
  {
    title: "Drinking Water",
    description: "Clean drinking water facilities available throughout training.",
    icon: Droplets,
  },
  {
    title: "Fitness Area",
    description: "Dedicated space for strength, conditioning and athletic development.",
    icon: Dumbbell,
  },
  {
    title: "Professional Equipment",
    description: "Quality cricket equipment to support structured training.",
    icon: Package,
  },
  {
    title: "Seating Area",
    description: "Comfortable viewing area for parents and spectators.",
    icon: Users,
  },
];

function FacilityItem({ facility, index }) {
  const Icon = facility.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
      }}
      className="group flex items-start gap-4 border-b border-[#e2e5e9] py-6"
    >
      {/* Icon */}
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center bg-[var(--navy)] transition-colors duration-200 group-hover:bg-[var(--gold)]">
        <Icon
          size={19}
          strokeWidth={1.8}
          className="text-[var(--gold)] transition-colors duration-200 group-hover:text-[var(--navy-dark)]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <Check
            size={14}
            strokeWidth={2.8}
            className="text-[var(--gold-dark)]"
          />

          <h3 className="text-[17px] font-black leading-6 text-[var(--navy)]">
            {facility.title}
          </h3>
        </div>

        <p className="mt-2 max-w-[470px] text-[14px] leading-6 text-[#697381]">
          {facility.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Facilities() {
  return (
    <section
  id="facilities"
  className="bg-white"
>
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="gold-label">
            ACADEMY FACILITIES
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[38px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            World-Class Facilities
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Everything you need to train, develop and perform in a
            professional cricket environment.
          </p>
        </motion.div>

        {/* Facilities list */}
        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-x-12 md:grid-cols-2 lg:mt-14">
          {facilities.map((facility, index) => (
            <FacilityItem
              key={facility.title}
              facility={facility}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}