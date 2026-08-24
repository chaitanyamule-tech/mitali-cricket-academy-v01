"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
  Navigation,
} from "lucide-react";
import Link from "next/link";

const branches = [
  {
    number: "01",
    name: "Mitali Cricket Academy, (Office & Training Center)",
    address:
      "Chandoji Pawde Mangal Karyalay, Ashtavinayak Nagar,Near D-Mart, Canal Road, Nanded."  ,

    phone: "7972082528 , 7385561208",

    office_time: "10:00 AM – 6:00 PM",

    practice_time: [
      {
        label: "Morning Batch",
        time: "6:30 AM – 9:00 AM",
      },
      {
        label: "Evening Batch",
        time: "4:00 PM – 6:00 PM",
      },
      {
        label: "Night Batch",
        time: "7:00 PM – 9:00 PM",
      },
    ],

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.1659667068028!2d77.28673354360659!3d19.191714200733507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7a0e1bc9153%3A0x395b38b0f0caf4e9!2sMitali%20Cricket%20Academy%20Nanded!5e1!3m2!1sen!2sin!4v1787159922209!5m2!1sen!2sin",

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mitali%20Cricket%20Academy%20Nanded",

    bookingUrl: "/#contact",

    features: [
      "Practice Nets",
      "Bowling Machines",
      "Floodlights",
      "Fitness Area",
    ],
  },

  {
    number: "02",
    name: "Mitali Cricket Academy Stadium",
    address:
      "Malku Dhanora, Nanded, Maharashtra, India",

    phone:"7972082528 , 7385561208",

    hours: "07:00 AM – 11:00 PM",

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4052.5740011099274!2d77.20518377551363!3d19.194735282034422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d52dd238ecf9%3A0x41dd328587b9e067!2sMitali%20Cricket%20Academy%20Ground!5e1!3m2!1sen!2sin!4v1787479520912!5m2!1sen!2sin",

    mapUrl:
      "https://maps.app.goo.gl/KpfsrK7hZknnjbqv6",

    bookingUrl: "/booking",

    features: [
      "Professional Ground",
      "Practice Nets",
      "Bowling Machines",
      "Floodlights",
      "Fitness Area",
    ],
  },
];

function BranchCard({ branch, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="overflow-hidden border border-[#dfe2e7] bg-white"
    >
      {/* MAP */}
      <div className="relative h-[235px] overflow-hidden bg-[#e5e7ea]">
        <iframe
          src={branch.mapEmbed}
          title={`${branch.name} location`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

         


        {/* Branch label */}
        <div className="absolute left-4 top-4 bg-[var(--gold)] px-4 py-2.5">
          <span className="text-[12px] font-black tracking-[0.08em] text-[var(--navy-dark)]">
            BRANCH {branch.number}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7 sm:p-8">
        <div className="text-[12px] font-black tracking-[0.16em] text-[var(--gold-dark)]">
  {branch.number === "02"
    ? "STADIUM LOCATION"
    : "ACADEMY LOCATION"}
</div>

        <h3 className="mt-3 text-[25px] font-black leading-[1.2] tracking-[-0.03em] text-[var(--navy)]">
          {branch.name}
        </h3>

        {/* Address */}
        <div className="mt-6 flex items-start gap-3">
          <MapPin
            size={19}
            strokeWidth={1.9}
            className="mt-0.5 shrink-0 text-[var(--gold-dark)]"
          />

          <p className="text-[15px] leading-6 text-[#5c6775]">
            {branch.address}
          </p>
        </div>

        {/* Phone */}
        <div className="mt-4 flex items-center gap-3">
          <Phone
            size={18}
            strokeWidth={1.9}
            className="shrink-0 text-[var(--gold-dark)]"
          />

          <a
            href={`tel:${branch.phone.replace(
              /[^0-9+]/g,
              ""
            )}`}
            className="text-[15px] text-[#4f5967] transition-colors hover:text-[var(--navy)]"
          >
            {branch.phone}
          </a>
        </div>

        
       {/* Hours / Timings */}
<div className="mt-4 flex items-start gap-3">
  <Clock3
    size={18}
    strokeWidth={1.9}
    className="mt-1 shrink-0 text-[var(--gold-dark)]"
  />

  <div className="flex flex-col gap-1.5 text-[15px] leading-6 text-[#4f5967]">
    {/* Branch 1 Office + Practice timings */}
    {branch.number === "01" && (
      <>
        {branch.office_time && (
          <div>
            <span className="font-semibold text-[var(--navy)]">
              Office Time:
            </span>{" "}
            {branch.office_time}
          </div>
        )}

        {branch.practice_time?.map(
          (batch) => (
            <div key={batch.label}>
              <span className="font-semibold text-[var(--navy)]">
                {batch.label}:
              </span>{" "}
              {batch.time}
            </div>
          )
        )}
      </>
    )}

    {/* Branch 2 Stadium hours */}
    {branch.number === "02" && branch.hours && (
      <div>
        <span className="font-semibold text-[var(--navy)]">
          Stadium Hours:
        </span>{" "}
        {branch.hours}
      </div>
    )}
  </div>
</div>

        {/* Facility chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {branch.features.map(
            (feature) => (
              <span
                key={feature}
                className="border border-[#dfe2e7] bg-[#f8f9fa] px-3 py-2 text-[11px] font-medium text-[var(--navy)]"
              >
                {feature}
              </span>
            )
          )}
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-[#e3e5e8]" />

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[44px] flex-1 items-center justify-center gap-2 border border-[var(--navy)] px-4 text-[11px] font-black tracking-[0.1em] text-[var(--navy)] transition-all hover:bg-[var(--navy)] hover:text-white"
          >
            GET DIRECTIONS
            <Navigation size={14} />
          </a>

          <a
            href={branch.bookingUrl}
            className="inline-flex h-[44px] flex-1 items-center justify-center gap-2 border border-[var(--gold)] bg-transparent px-4 text-[11px] font-black tracking-[0.1em] text-[var(--gold-dark)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-dark)]"
          >
           {branch.number === "01"
              ? "Admission"
               : "BOOK STADIUM"}
            <ArrowRight size={14} />
          </a>

        </div>
      </div>
    </motion.article>
  );
}

export default function Branches() {
  return (
    <section
      id="branches"
      className="bg-[#f6f7f9]"
    >
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="gold-label">
            OUR LOCATIONS
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            Find Us Near You
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Visit one of our academy locations and
            experience professional coaching, quality
            facilities and a training environment built
            for player development.
          </p>
        </motion.div>

        {/* Branch cards */}
        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {branches.map(
            (branch, index) => (
              <BranchCard
                key={branch.number}
                branch={branch}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}