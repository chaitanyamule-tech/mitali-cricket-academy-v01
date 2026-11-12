
"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Dumbbell,
  Footprints,
  Target,
  Trophy,
  MapPin,
} from "lucide-react";

import AboutSection from "@/components/home/AboutSection";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import PersonalTraining from "@/components/home/PersonalTraining";
import CoachingStaff from "@/components/home/CoachingStaff";
import Facilities from "@/components/home/Facilities";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Branches from "@/components/home/Branches";
import EnquirySection from "@/components/home/EnquirySection";
import ArenaFacilities from "@/components/home/ArenaFacilities";


// const arenaFacilities = [
//   {
//     title: "Football",
//     description:
//       "A planned football playing area. Facility specifications and access details will be announced before opening.",
//     icon: Trophy,
//   },
//   {
//     title: "Kho-Kho",
//     description:
//       "A dedicated Kho-Kho playing facility is part of the proposed sports arena.",
//     icon: Activity,
//   },
//   {
//     title: "Volleyball",
//     description:
//       "A planned volleyball playing area. Court details will be updated as construction progresses.",
//     icon: Activity,
//   },
//   {
//     title: "Police Bharti Training",
//     description:
//       "Planned athletic preparation activities including running, sprint practice and shot-put (gola fenk).",
//     icon: Target,
//   },
//   {
//     title: "Gym Training",
//     description:
//       "Gym and fitness training facilities are included in the proposed arena offering.",
//     icon: Dumbbell,
//   },
//   {
//     title: "1 KM Walking Track",
//     description:
//       "An approximately one-kilometre walking track is part of the proposed facility.",
//     icon: Footprints,
//   },
// ];

function AcademyExperience() {
  return (
    <>
      <AboutSection />
      <TrainingPrograms />
      <PersonalTraining />
      <CoachingStaff />
      <Facilities />
      <Branches />
    </>
  );
}

function ArenaExperience() {
  return (
    <>
      {/* ARENA INTRODUCTION */}
      
{/* ARENA INTRODUCTION */}
<section id="about" className="bg-[#f6f7f9]">
  <div className="container-academy py-24 sm:py-28 lg:py-32">

    <div className="mx-auto max-w-[900px] text-center">

      {/* Section Label */}
      <div className="gold-label">
        ABOUT THE ARENA
      </div>

      <div className="gold-line mx-auto mt-5" />

      {/* Main Heading */}
      <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
        One Destination.
        <br />
        Multiple Sports.
        <br className="hidden sm:block" />
        <span className="text-[var(--gold-dark)]">
          {" "}One Passion.
        </span>
      </h2>

      {/* Tagline */}
      <h3 className="mt-7 text-[17px] font-bold leading-relaxed text-[var(--navy)] sm:text-[19px]">
        Promoting Fitness. Developing Talent.
        Bringing Communities Together.
      </h3>

      {/* About Description */}
      <div className="mx-auto mt-7 max-w-[800px] space-y-5 text-[15px] leading-[1.9] text-[#5d6775] sm:text-[17px]">

        <p>
          Arena Zone is being developed with a vision to create
          a destination where sports, fitness and recreation come
          together. Our aim is to provide opportunities for people
          of all ages to explore different sports, develop athletic
          abilities and embrace a healthier, more active lifestyle.
        </p>

        <p>
          With planned facilities for Football, Kabaddi, Volleyball,
          Police Bharti physical training, Gym Training and a
          1 KM Walking Track, Arena Zone aims to offer a diverse
          sporting environment that encourages participation,
          physical fitness and personal growth.
        </p>

        <p>
          We believe that sports are more than just games—they
          build discipline, confidence, teamwork, determination
          and the spirit to overcome challenges.
        </p>

        <p>
          Our vision is to create an inclusive environment where
          aspiring athletes can develop their potential, fitness
          enthusiasts can pursue their goals, and families and
          communities can come together through sports.
        </p>

        <p>
          Whether you are passionate about competitive sports,
          preparing for physical fitness challenges or simply
          looking for an active lifestyle, Arena Zone aspires
          to provide the right environment and opportunities
          to move forward.
        </p>

      </div>

      {/* Our Philosophy */}
      <div className="mx-auto mt-12 max-w-[650px] border-y border-[#dfe2e7] py-8">

        <div className="gold-label">
          OUR PHILOSOPHY
        </div>

        <div className="mt-6 space-y-3">

          {[
            "Play with Passion.",
            "Train with Discipline.",
            "Grow with Confidence.",
            "Build a Healthier Tomorrow With Us.",
          ].map((line, index) => (
            <p
              key={index}
              className={`text-[16px] leading-7 sm:text-[18px] ${
                index === 3
                  ? "font-black text-[var(--gold-dark)]"
                  : "font-semibold text-[var(--navy)]"
              }`}
            >
              {line}
            </p>
          ))}

        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-10">
        <a
          href="#facilities"
          className="inline-flex min-h-[50px] items-center justify-center bg-[var(--gold)] px-8 text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)] transition-colors hover:bg-[var(--gold-light)]"
        >
          EXPLORE OUR ARENA →
        </a>
      </div>

    </div>

  </div>
</section>


      {/* PLANNED FACILITIES */}
      {/* <section id="facilities" className="bg-white">
        <div className="container-academy py-24 sm:py-28 lg:py-32">

          <div className="mx-auto max-w-[850px] text-center">
            <div className="gold-label">
              EXPLORE OUR SPORTS
            </div>

            <div className="gold-line mx-auto mt-5" />

            <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px]">
              Planned Sports & Facilities
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-7 text-[#697381]">
              Discover the sporting and fitness activities
              planned for Arena Zone.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {arenaFacilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className="group border border-[#dfe2e7] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_15px_35px_rgba(12,29,51,0.08)] sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[var(--navy)] transition-colors group-hover:bg-[var(--gold)]">
                    <Icon
                      size={25}
                      className="text-[var(--gold)] transition-colors group-hover:text-[var(--navy)]"
                    />
                  </div>

                  <div className="mt-7 text-[10px] font-black tracking-[0.13em] text-[var(--gold-dark)]">
                    PLANNED FACILITY
                  </div>

                  <h3 className="mt-3 text-[22px] font-black text-[var(--navy)]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#697381]">
                    {facility.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section> */}

    {/* INTERACTIVE ARENA FACILITIES */}
        <ArenaFacilities />

      {/* TRAINING PROGRAMS */}
      <section id="programs" className="bg-[var(--navy)] text-white">
        <div className="container-academy py-24 sm:py-28">

          <div className="mx-auto max-w-[800px] text-center">
            <div className="gold-label">
              TRAINING & ACTIVITIES
            </div>

            <div className="gold-line mx-auto mt-5" />

            <h2 className="mt-8 text-[38px] font-black sm:text-[48px]">
              More Than Just Sports
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-white/75">
              Alongside recreational sports, the proposed arena
              will also include athletic preparation activities
              such as sprint training and shot-put practice.
            </p>
          </div>

        </div>
      </section>

      {/* COACHING INFORMATION */}
      {/* <section id="coaches" className="bg-[#f6f7f9]">
        <div className="container-academy py-20 sm:py-24 text-center">
          <div className="gold-label">
            TRAINING TEAM
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-7 text-[34px] font-black text-[var(--navy)]">
            Coaches & Trainers
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#697381]">
            Coach profiles, qualifications and training
            information will be published as the arena
            programs are finalized.
          </p>
        </div>
      </section> */}

      {/* GALLERY PLACEHOLDER */}
      {/* <section id="gallery" className="bg-white">
        <div className="container-academy py-20 sm:py-24 text-center">
          <div className="gold-label">
            ARENA GALLERY
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-7 text-[34px] font-black text-[var(--navy)]">
            Our Arena Is Taking Shape
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#697381]">
            Construction photographs and facility updates
            will appear here.
          </p>
        </div>
      </section> */}

      {/* LOCATION PLACEHOLDER */}
      <section id="branches" className="bg-[#f6f7f9]">
        <div className="container-academy py-20 sm:py-24">
          <div className="mx-auto max-w-[750px] border border-[#dfe2e7] bg-white p-8 text-center sm:p-12">

            <MapPin
              size={32}
              className="mx-auto text-[var(--gold-dark)]"
            />

            <div className="gold-label mt-5">
              ARENA LOCATION
            </div>

            <h2 className="mt-4 text-[32px] font-black text-[var(--navy)]">
              Visit Arena Zone
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#697381]">
              Final location, address and visitor access
              details will be published before opening.
            </p>

          </div>
        </div>
      </section>

      {/* OPENING INFORMATION */}
      {/* <section id="contact" className="bg-[var(--navy)] text-white">
        <div className="container-academy py-20 text-center sm:py-24">

          <div className="gold-label">
            OPENING UPDATES
          </div>

          <h2 className="mt-6 text-[34px] font-black sm:text-[44px]">
            Something Exciting Is Coming
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-white/75">
            Arena facilities will become available after
            construction and operational readiness.
            Booking options will be announced separately.
          </p>

        </div>
      </section> */}
    </>
  );
}

export default function BusinessSwitcher() {
  const [activeBranch, setActiveBranch] = useState("academy");

  // Support direct links and browser back/forward navigation.
  useEffect(() => {
    const syncBranchFromUrl = () => {
      const params = new URLSearchParams(window.location.search);

      setActiveBranch(
        params.get("branch") === "arena"
          ? "arena"
          : "academy"
      );
    };

    syncBranchFromUrl();

    window.addEventListener("popstate", syncBranchFromUrl);

    return () => {
      window.removeEventListener("popstate", syncBranchFromUrl);
    };
  }, []);

  const handleBranchChange = (branch) => {
    if (branch === activeBranch) return;

    setActiveBranch(branch);

    const url = new URL(window.location.href);

    if (branch === "arena") {
      url.searchParams.set("branch", "arena");
    } else {
      url.searchParams.delete("branch");
    }

    window.history.pushState(
      { branch },
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
  };

  return (
    <>
      {/* BUSINESS SELECTOR */}
      
{/* COMPACT STADIUM / ARENA SWITCHER */}
<section className="bg-[#f6f7f9] py-8 sm:py-10">
  <div className="container-academy flex justify-center">

    <div
      role="group"
      aria-label="Select sports facility"
      className="grid w-full max-w-[364px] grid-cols-2 border border-[#d6dbe3] bg-white p-[10px]"
    >
      <button
        type="button"
        aria-pressed={activeBranch === "academy"}
        onClick={() => handleBranchChange("academy")}
        className={`flex h-[60px] items-center justify-center text-base font-medium uppercase transition-colors duration-200 sm:text-xl ${
          activeBranch === "academy"
            ? "bg-[#CDAA32] text-[#172033]"
            : "bg-white text-[#64748b] hover:bg-[#f8f8f8]"
        }`}
      >
       Cricket Stadium
      </button>

      <button
        type="button"
        aria-pressed={activeBranch === "arena"}
        onClick={() => handleBranchChange("arena")}
        className={`flex h-[60px] items-center justify-center text-base font-medium uppercase transition-colors duration-200 sm:text-xl ${
          activeBranch === "arena"
            ? "bg-[#CDAA32] text-[#172033]"
            : "bg-white text-[#64748b] hover:bg-[#f8f8f8]"
        }`}
      >
        Sports Arena
      </button>

    </div>
  </div>
</section>


      {/* SELECTED BUSINESS EXPERIENCE */}
      <div id="business-content" aria-live="polite">
        {activeBranch === "academy" ? (
          <AcademyExperience key="academy" />
        ) : (
          <ArenaExperience key="arena" />
        )}
      </div>
    </>
  );
}
