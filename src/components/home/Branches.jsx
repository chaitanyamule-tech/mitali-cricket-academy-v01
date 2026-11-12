"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Clock3, ArrowRight, Navigation } from "lucide-react";

const branches = [
  {
    number: "02",
    name: "Mitali Cricket Academy Stadium",
    address: "Malku Dhanora, Nanded, Maharashtra, India",
    phone: "7972082528, 7385561208",
    hours: "07:00 AM – 11:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32420.590434861373!2d77.16964244842528!3d19.19474327237146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d52dd238ecf9%3A0x41dd328587b9e067!2sMitali%20Cricket%20Academy%20Ground!5e1!3m2!1sen!2sin!4v1794109032682!5m2!1sen!2sin",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mitali%20Cricket%20Academy%20Ground%2C%20Malku%20Dhanora%2C%20Nanded",
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
  const phoneList = (branch.phone || "")
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="mx-auto grid w-full max-w-[1160px] grid-cols-1 overflow-hidden border border-[#dfe2e7] bg-white shadow-[0_15px_40px_rgba(12,29,51,0.06)] lg:grid-cols-2"
    >
      {/* LEFT: GOOGLE MAP */}
      <div className="relative min-h-[280px] min-w-0 overflow-hidden bg-[#e5e7ea] sm:min-h-[340px] lg:min-h-[520px]">
        <iframe
          src={branch.mapEmbed}
          title={`${branch.name} location`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="pointer-events-none absolute bottom-5 left-5 bg-[var(--gold)] px-5 py-3 shadow-md">
          <span className="text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)]">
            STADIUM LOCATION
          </span>
        </div>
      </div>

      {/* RIGHT: LOCATION DETAILS */}
      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
        <div className="text-[11px] font-black tracking-[0.15em] text-[var(--gold-dark)]">
          VISIT MITALI CRICKET ACADEMY
        </div>

        <h3 className="mt-3 text-[27px] font-black leading-tight tracking-[-0.03em] text-[var(--navy)] sm:text-[32px]">
          {branch.name}
        </h3>

        {/* Address */}
        <div className="mt-7 flex items-start gap-3">
          <MapPin size={19} className="mt-1 shrink-0 text-[var(--gold-dark)]" />
          <div className="min-w-0">
            <div className="text-[10px] font-black tracking-[0.12em] text-[var(--navy)]">
              ADDRESS
            </div>
            <p className="mt-1 text-[14px] leading-6 text-[#5c6775]">
              {branch.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="mt-5 flex items-start gap-3">
          <Phone size={18} className="mt-1 shrink-0 text-[var(--gold-dark)]" />
          <div className="min-w-0">
            <div className="text-[10px] font-black tracking-[0.12em] text-[var(--navy)]">
              CONTACT
            </div>
            <p className="mt-1 text-[14px] leading-6 text-[#5c6775]">
              {phoneList.map((num, i) => (
                <span key={num}>
                  <a
                    href={`tel:${num.replace(/[^0-9+]/g, "")}`}
                    className="transition-colors hover:text-[var(--gold-dark)]"
                  >
                    {num}
                  </a>
                  {i < phoneList.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Stadium Hours */}
        <div className="mt-5 flex items-start gap-3">
          <Clock3 size={18} className="mt-1 shrink-0 text-[var(--gold-dark)]" />
          <div className="min-w-0">
            <div className="text-[10px] font-black tracking-[0.12em] text-[var(--navy)]">
              STADIUM HOURS
            </div>
            <p className="mt-1 text-[14px] leading-6 text-[#5c6775]">
              {branch.hours || "Contact us for timings"}
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-7 border-t border-[#e5e7eb] pt-6">
          <div className="text-[10px] font-black tracking-[0.13em] text-[var(--gold-dark)]">
            FACILITIES
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {branch.features.map((feature) => (
              <span
                key={feature}
                className="border border-[#dfe2e7] bg-[#f8f9fa] px-3 py-2 text-[11px] font-medium text-[var(--navy)]"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[48px] min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap border border-[var(--navy)] px-4 text-[11px] font-black tracking-[0.08em] text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white"
          >
            GET DIRECTIONS
            <Navigation size={15} />
          </a>

          <a
            href={branch.bookingUrl}
            className="inline-flex h-[48px] min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap bg-[var(--gold)] px-4 text-[11px] font-black tracking-[0.08em] text-[var(--navy-dark)] transition-colors hover:bg-[var(--gold-light)]"
          >
            BOOK STADIUM
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Branches() {
  return (
    <section id="branches" className="bg-[#f6f7f9]">
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="gold-label">OUR LOCATIONS</div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            Find Us Near You
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Visit our academy stadium and experience professional coaching,
            quality facilities and a training environment built for player
            development.
          </p>
        </motion.div>

        {/* Cards: 1 branch = full width, 2+ = two columns */}
        <div
          className={`mt-14 grid grid-cols-1 gap-7 lg:gap-8 ${
            branches.length > 1 ? "xl:grid-cols-2" : ""
          }`}
        >
          {branches.map((branch, index) => (
            <BranchCard key={branch.number} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}