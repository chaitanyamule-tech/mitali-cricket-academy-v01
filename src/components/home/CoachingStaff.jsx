"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, GraduationCap, Trophy, Briefcase } from "lucide-react";
import Image from "next/image";

const coaches = [
  {
    name: "Dr. Nandkishor Tulashiram Kushnure",
    cardName: "Dr. NandKishor Kushnure Sir",
    designation: "HEAD COACH",
    role: "Batting & Performance",
    image: "/images/coaches/nandusir1.jpeg",
    experience: "12+ YEARS EXPERIENCE",
    specialty: "ELITE PERFORMANCE",

    education: "Not specified",

    profileIntro:
      "Dr. Nandkishor T. Kushnure is the Founder and Head Coach of Mitali Cricket Academy, Nanded. With over 12 years of coaching experience and an outstanding cricketing career, he has trained and mentored aspiring cricketers at various competitive levels.",

    playingCareer: [
      "U-16, U-19, U-23 & U-25 State Player (Arunachal Pradesh)",
      "Former IPL Development Squad Player",
      "Mumbai A Division Cricketer",
    ],

    iplCareer: [
      "2009–2011: Rajasthan Royals",
      "2012: Deccan Chargers",
      "2013–2015: Sunrisers Hyderabad",
    ],

    leadership: [
      "Head Coach – Maharashtra Divyang Cricket Association",
      "Member – Nanded District Cricket Association",
    ],
  },

  {
    name: "Ajinkya Lathkar",
    cardName: "Ajinkya Lathkar",
    designation: "ASSISTANT COACH & MANAGER",
    role: "Academy Development",
    image: "/images/coaches/ajinkya.jpeg",
    experience: "5+ YEARS EXPERIENCE",
    specialty: "TECHNICAL DEVELOPMENT",

    education: "PGDM",

    profileIntro:
      "Ajinkya Lathkar serves as the Assistant Coach and Manager at Mitali Cricket Academy, contributing to academy operations, player development and structured training programs.",

    professionalDetails: [
      "Assistant Coach & Manager",
      "State Panel Umpire at Maharashtra Cricket Association",
      "Former Nanded District Player",
    ],
  },

  {
  name: "Dnyandev Prabhakar Shinde",
  cardName: "Dnyandev Shinde",
  designation: "ACADEMY MANAGER & COACH",
  role: "Youth Development & Training",
  image: "/images/coaches/dnyandev2.jpeg",
  experience: "2+ YEARS EXPERIENCE",
  specialty: "YOUTH DEVELOPMENT",

  education: "Master of Commerce (M.Com.)",

  profileIntro:
    "Dnyandev Prabhakar Shinde oversees the academy's administration, operations, and student coordination, ensuring a smooth and professional experience for players and parents.",

  professionalDetails: [
    "Academy Manager & Coach",
    "Academy Administration & Operations",
    "Student & Parent Coordination",
  ],
},
{
  name: "Saheb Prabhakar Shinde",
  cardName: "Saheb Shinde",
  designation: "CRICKET COACH",
  role: "Athletic Development & Fitness",
  image: "/images/coaches/saheb.jpeg",
  experience: "2+ YEARS EXPERIENCE",
  specialty: "ATHLETIC DEVELOPMENT",

  profileIntro:
    "Saheb Prabhakar Shinde is a passionate coach committed to developing young cricketers through disciplined training and match preparation.",

  playingCareer: [
    "Former Nanded District Player",
    "Former University Player",
  ],
},
];

function CoachProfileModal({ coach, onClose }) {
  return (
    <AnimatePresence>
      {coach && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col overflow-hidden bg-white shadow-2xl lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-white/95 text-[var(--navy)] shadow-md transition-colors hover:bg-[var(--gold)]"
            >
              <X size={20} />
            </button>

            {/* Left Image */}
            <div className="relative h-[280px] shrink-0 bg-[#dce0e5] sm:h-[360px] lg:h-auto lg:w-[40%]">
              <Image
                src={coach.image}
                alt={coach.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <div className="text-[11px] font-black tracking-[0.15em] text-[var(--gold)]">
                  {coach.experience}
                </div>

                <h3 className="mt-2 text-[24px] font-black leading-tight text-white">
                  {coach.name}
                </h3>

                <p className="mt-1 text-[12px] font-bold tracking-[0.12em] text-white/80">
                  {coach.designation}
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="overflow-y-auto p-6 sm:p-8 lg:w-[60%] lg:p-10">
              <div className="max-w-[650px]">
                <div className="text-[11px] font-black tracking-[0.16em] text-[var(--gold-dark)]">
                  {coach.specialty}
                </div>

                <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.025em] text-[var(--navy)] sm:text-[36px]">
                  {coach.name}
                </h2>

                <p className="mt-1 text-[14px] font-bold tracking-[0.08em] text-[#667180]">
                  {coach.designation}
                </p>

                {/* Introduction */}
                {coach.profileIntro && (
                  <div className="mt-7">
                    <p className="text-[15px] leading-7 text-[#5d6775]">
                      {coach.profileIntro}
                    </p>
                  </div>
                )}

                {/* Education */}
                {coach.education &&
                  coach.education !== "Not specified" && (
                    <div className="mt-7 border-t border-[#e3e5e8] pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f6f1dc] text-[var(--gold-dark)]">
                          <GraduationCap size={20} />
                        </div>

                        <div>
                          <p className="text-[10px] font-black tracking-[0.14em] text-[var(--gold-dark)]">
                            EDUCATION
                          </p>
                          <p className="mt-1 text-[15px] font-bold text-[var(--navy)]">
                            {coach.education}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Professional Details */}
                {coach.professionalDetails?.length > 0 && (
                  <div className="mt-7 border-t border-[#e3e5e8] pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#f6f1dc] text-[var(--gold-dark)]">
                        <Briefcase size={19} />
                      </div>

                      <h3 className="text-[14px] font-black tracking-[0.12em] text-[var(--navy)]">
                        PROFESSIONAL DETAILS
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {coach.professionalDetails.map((detail) => (
                        <div
                          key={detail}
                          className="relative pl-5 text-[15px] leading-6 text-[#5d6775]"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 bg-[var(--gold)]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Playing Career */}
                {coach.playingCareer?.length > 0 && (
                  <div className="mt-7 border-t border-[#e3e5e8] pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#f6f1dc] text-[var(--gold-dark)]">
                        <Trophy size={19} />
                      </div>

                      <h3 className="text-[14px] font-black tracking-[0.12em] text-[var(--navy)]">
                        PLAYING CAREER
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {coach.playingCareer.map((item) => (
                        <div
                          key={item}
                          className="relative pl-5 text-[15px] leading-6 text-[#5d6775]"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 bg-[var(--gold)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* IPL Career */}
                {coach.iplCareer?.length > 0 && (
                  <div className="mt-7 border-t border-[#e3e5e8] pt-6">
                    <h3 className="text-[14px] font-black tracking-[0.12em] text-[var(--navy)]">
                      INDIAN PREMIER LEAGUE (IPL)
                    </h3>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {coach.iplCareer.map((item) => {
                        const [years, team] = item.split(": ");

                        return (
                          <div
                            key={item}
                            className="border border-[#e1e3e7] bg-[#fafafa] p-4"
                          >
                            <p className="text-[11px] font-black tracking-[0.08em] text-[var(--gold-dark)]">
                              {years}
                            </p>
                            <p className="mt-2 text-[14px] font-bold leading-5 text-[var(--navy)]">
                              {team}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Leadership */}
                {coach.leadership?.length > 0 && (
                  <div className="mt-7 border-t border-[#e3e5e8] pt-6">
                    <h3 className="text-[14px] font-black tracking-[0.12em] text-[var(--navy)]">
                      LEADERSHIP & ASSOCIATIONS
                    </h3>

                    <div className="mt-4 space-y-3">
                      {coach.leadership.map((item) => (
                        <div
                          key={item}
                          className="relative pl-5 text-[15px] leading-6 text-[#5d6775]"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 bg-[var(--gold)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                <div className="mt-8 border-t border-[#e3e5e8] pt-6">
                  <div className="inline-flex items-center gap-3 bg-[var(--navy)] px-5 py-3">
                    <span className="text-[10px] font-black tracking-[0.13em] text-[var(--gold)]">
                      EXPERIENCE
                    </span>

                    <span className="text-[14px] font-bold text-white">
                      {coach.experience.replace(" EXPERIENCE", "")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CoachCard({ coach, index, onViewProfile }) {
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
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

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
          {coach.cardName}
        </h3>

        <p className="mt-2 text-[14px] leading-5 text-[#606a78]">
          {coach.role}
        </p>

        <div className="mt-5 border-t border-[#e2e4e8] pt-4">
          <button
            type="button"
            onClick={() => onViewProfile(coach)}
            className="inline-flex items-center gap-2 text-[12px] font-black tracking-[0.12em] text-[var(--navy)] transition-colors hover:text-[var(--gold-dark)]"
          >
            VIEW PROFILE
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function CoachingStaff() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  return (
    <>
      <section id="coaches" className="bg-[#f6f7f9]">
        <div className="container-academy py-24 sm:py-28 lg:py-32">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[850px] text-center"
          >
            <div className="gold-label">OUR COACHING STAFF</div>

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

          {/* Coach Grid */}
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {coaches.map((coach, index) => (
              <CoachCard
                key={coach.name}
                coach={coach}
                index={index}
                onViewProfile={setSelectedCoach}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          />
        </div>
      </section>

      {/* Profile Modal */}
      <CoachProfileModal
        coach={selectedCoach}
        onClose={() => setSelectedCoach(null)}
      />
    </>
  );
}