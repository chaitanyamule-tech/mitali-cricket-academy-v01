"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  Users,
  Trophy,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";

const benefits = [
  "Select your preferred date",
  "Choose from available time slots",
  "Enter your booking details",
  "Receive booking confirmation",
];

export default function BookingOverview({ onContinue }) {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-[#f6f7f9]">
      <div className="container-academy py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="gold-label">
            STADIUM BOOKING
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h1 className="mt-7 text-[39px] font-black leading-[1.06] tracking-[-0.035em] text-[var(--navy)] sm:text-[52px] lg:text-[60px]">
            Book Our Cricket Stadium
          </h1>

          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-7 text-[#64707e] sm:text-[18px]">
            Reserve our professional cricket stadium for practice,
            matches, tournaments and private training sessions.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 overflow-hidden border border-[#dfe2e7] bg-white lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Image */}
          <div className="relative min-h-[320px] bg-[#dfe3e7] lg:min-h-[520px]">
            <img
              src="/images/stadium.png"
              alt="Mitali Cricket Academy stadium"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[rgba(7,27,54,0.2)]" />

            <div className="absolute bottom-6 left-6 bg-[var(--gold)] px-5 py-4 sm:bottom-8 sm:left-8">
              <div className="text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)]">
                ACADEMY STADIUM
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="gold-label">
              STADIUM DETAILS
            </div>

            <div className="gold-line mt-5" />

            <h2 className="mt-7 text-[30px] font-black leading-[1.1] text-[var(--navy)] sm:text-[36px]">
              Mitali Cricket Academy Stadium
            </h2>

            <div className="mt-8 space-y-5">
              <Detail
                icon={MapPin}
                label="LOCATION"
                value="Nanded, Maharashtra"
              />

              <Detail
                icon={Clock3}
                label="OPENING HOURS"
                value="06:00 AM – 10:00 PM"
              />

              <Detail
                icon={Users}
                label="CAPACITY"
                value="Up to 25 players"
              />

              <Detail
                icon={Trophy}
                label="GROUND TYPE"
                value="Professional Cricket Ground"
              />
            </div>

            <div className="mt-8 border-y border-[#e3e6ea] py-6">
              <div className="text-[10px] font-black tracking-[0.13em] text-[#89919a]">
                HOURLY BOOKING RATE
              </div>

              <div className="mt-2 text-[31px] font-black text-[var(--navy)]">
                ₹2000
                <span className="ml-2 text-[14px] font-bold text-[#7b838d]">
                  / slot
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onContinue}
              className="mt-8 flex min-h-[62px] w-full items-center justify-center gap-3 bg-[var(--gold)] px-7 text-[13px] font-black tracking-[0.14em] text-[var(--navy-dark)] transition-colors hover:bg-[var(--gold-light)]"
            >
              CONTINUE TO DATE
              <ArrowRight size={18} />
            </button>

            <Link
              href="/"
              className="mt-5 block text-center text-[11px] font-black tracking-[0.1em] text-[#76808b] hover:text-[var(--navy)]"
            >
              ← BACK TO WEBSITE
            </Link>
          </div>
        </motion.div>

        {/* Process */}
        <div className="mx-auto mt-10 max-w-[1100px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 border border-[#e1e4e8] bg-white px-5 py-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="text-[var(--gold-dark)]"
                  />
                </span>

                <span className="text-[13px] font-bold leading-5 text-[var(--navy)]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--navy)]">
        <Icon
          size={19}
          strokeWidth={1.8}
          className="text-[var(--gold)]"
        />
      </div>

      <div>
        <div className="text-[10px] font-black tracking-[0.13em] text-[#89919a]">
          {label}
        </div>

        <div className="mt-1 text-[15px] font-bold text-[var(--navy)]">
          {value}
        </div>
      </div>
    </div>
  );
}