
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Activity,
  Dumbbell,
  Footprints,
  Target,
  Trophy,
  X,
  ArrowRight,
  Ruler,
  Layers,
} from "lucide-react";

// ==========================================
// ARENA FACILITY DATA
// ==========================================

const arenaFacilities = [
  {
    id: "football",
    title: "Football",
    category: "TEAM SPORT",
    icon: Trophy,
    description:
      "A dedicated football playing area designed for recreational games and sports training.",

    playingArea: "Dedicated football playing field",

    surface:
      "Natural grass or artificial turf.",

    dimensions:
      "Playing field: 105 m × 68 m (Full-size reference).",

    layout:
      "Goal areas, penalty boxes, centre circle, boundary markings and approximately 2 m safety clearance around the field.",

    facilities: [
      "Football goal posts",
      "Boundary markings",
      "Player playing area",
      "Safety clearance",
    ],
  },

  {
    id: "kabaddi",
    title: "Kabaddi",
    category: "TEAM SPORT",
    icon: Activity,
    description:
      "A dedicated Kabaddi playing area with a levelled soil ground for traditional Kabaddi matches and practice.",

    playingArea: "Rectangular Kabaddi playing court",

    surface:
      "Levelled and compacted soil / earthen playing surface.",

    dimensions:
      "Men's court: 13 m × 10 m. Suggested overall area with clearance: 15 m × 12 m.",

    layout:
      "Court boundary, midline, baulk lines, bonus lines, lobby and surrounding safety clearance.",

    facilities: [
      "Prepared soil ground",
      "Levelled playing surface",
      "Court boundary markings",
      "Playing and safety zones",
    ],
  },

  {
    id: "volleyball",
    title: "Volleyball",
    category: "TEAM SPORT",
    icon: Activity,
    description:
      "A dedicated volleyball court designed for team practice, recreational matches and training.",

    playingArea: "Dedicated rectangular volleyball court",

    surface:
      "Synthetic sports flooring or levelled outdoor court surface.",

    dimensions:
      "Playing court: 18 m × 9 m. Overall area with 3 m free zone: 24 m × 15 m.",

    layout:
      "Net installation, boundary lines, support poles, 3 m free zone and minimum 7 m unobstructed playing height.",

    facilities: [
      "Volleyball net",
      "Net support poles",
      "Boundary markings",
      "Player safety clearance",
    ],
  },

  {
    id: "police-bharti",
    title: "Police Bharti Training",
    category: "ATHLETIC TRAINING",
    icon: Target,
    description:
      "An athletic training area designed for candidates preparing for physical fitness and Police Bharti tests.",

    playingArea:
      "Running track, sprint practice area and designated shot-put training zone.",

    surface:
      "Synthetic running track or compacted athletic ground with a designated shot-put surface.",

    dimensions:
      "Running loop: 400 m. Sprint track: 100 m. Four lanes of approximately 1.22 m each. Shot-put circle: 2.135 m diameter.",

    layout:
      "Marked running lanes, sprint start and finish lines, shot-put circle, 34.92° throwing sector and safety clearance.",

    facilities: [
      "400 m running track",
      "100 m sprint training",
      "Shot put (Gola Fenk)",
      "Athletic preparation area",
    ],
  },

//   {
//     id: "gym",
//     title: "Gym Training",
//     category: "FITNESS",
//     icon: Dumbbell,
//     description:
//       "A dedicated fitness and workout facility for strength development, conditioning and general physical fitness.",

//     playingArea: "Dedicated indoor / covered gym area",

//     surface:
//       "Anti-slip rubber gym flooring with suitable workout surfaces.",

//     dimensions:
//       "Approximate gym area: 15 m × 10 m (150 sq. m).",

//     layout:
//       "Separate strength training, cardio, free-weight and functional workout zones with equipment spacing.",

//     facilities: [
//       "Strength training area",
//       "Fitness equipment",
//       "Cardio training area",
//       "Functional workout space",
//     ],
//   },

  {
    id: "walking-track",
    title: "1 KM Walking Track",
    category: "OUTDOOR FITNESS",
    icon: Footprints,
    description:
      "A dedicated walking and fitness track for visitors who enjoy outdoor exercise and regular physical activity.",

    playingArea: "Dedicated walking / jogging track",

    surface:
      "Rubberized running surface, paver blocks or compacted track flooring.",

    dimensions:
      "Total track length: 1,000 m (1 KM). Suggested track width: 2.5 m.",

    layout:
      "Continuous walking route with defined track boundaries, pedestrian space and designated entry and exit points.",

    facilities: [
      "Approximately 1 KM track",
      "2.5 m walking path",
      "Light jogging",
      "Defined track route",
    ],
  },
];

// ==========================================
// SPORT DETAIL MODAL
// ==========================================

function SportDetailModal({ sport, onClose }) {
  useEffect(() => {
    if (!sport) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sport, onClose]);

  const specifications = sport
    ? [
        {
          icon: MapPinIcon,
          label: "PLAYING AREA",
          value: sport.playingArea,
        },
        {
          icon: Layers,
          label: "PLAYING SURFACE",
          value: sport.surface,
        },
        {
          icon: Ruler,
          label: "DIMENSIONS & SIZE",
          value: sport.dimensions,
        },
        {
          icon: Activity,
          label: "LAYOUT & MARKINGS",
          value: sport.layout,
        },
      ]
    : [];

  return (
    <AnimatePresence>
      {sport && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 px-3 py-5 backdrop-blur-sm sm:px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sport-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col overflow-hidden bg-white shadow-2xl md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* LEFT PANEL */}
            <div className="flex shrink-0 flex-col justify-between bg-[var(--navy)] p-7 text-white sm:p-9 md:w-[35%]">

              <div>
                <div className="text-[10px] font-black tracking-[0.16em] text-[var(--gold)]">
                  ARENA ZONE
                </div>

                <div className="mt-7 flex h-16 w-16 items-center justify-center bg-[var(--gold)] text-[var(--navy-dark)]">
                  <sport.icon size={30} strokeWidth={1.8} />
                </div>

                <div className="mt-7 text-[10px] font-black tracking-[0.14em] text-[var(--gold)]">
                  {sport.category}
                </div>

                <h2
                  id="sport-modal-title"
                  className="mt-3 text-[30px] font-black leading-tight sm:text-[35px]"
                >
                  {sport.title}
                </h2>

                <p className="mt-5 text-[14px] leading-7 text-white/75">
                  {sport.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/15 pt-5">
                <div className="inline-flex items-center gap-2 bg-[var(--gold)]/15 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />

                  <span className="text-[10px] font-black tracking-[0.1em] text-[var(--gold)]">
                     FACILITY
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-6 text-white/60">
                 Explore our sports facilities, training spaces, and amenities designed to create a great experience for players and visitors.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative min-h-0 flex-1 overflow-y-auto p-6 sm:p-9 md:w-[65%] md:p-10">

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close sport details"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-[#e1e4e8] bg-white text-[var(--navy)] transition-colors hover:bg-[var(--gold)]"
              >
                <X size={19} />
              </button>

              <div className="pr-12">
                <div className="text-[10px] font-black tracking-[0.15em] text-[var(--gold-dark)]">
                  FACILITY INFORMATION
                </div>

                <h3 className="mt-3 text-[25px] font-black text-[var(--navy)] sm:text-[30px]">
                  Playing Area & Specifications
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#697381]">
                  Explore the planned playing area, surface
                  specifications, dimensions and facilities.
                </p>
              </div>

              {/* SPECIFICATIONS */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {specifications.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="border border-[#e1e4e8] bg-[#fafbfc] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f6f1dc] text-[var(--gold-dark)]">
                          <Icon size={18} />
                        </div>

                        <div className="text-[10px] font-black tracking-[0.1em] text-[var(--gold-dark)]">
                          {item.label}
                        </div>
                      </div>

                      <p className="mt-4 text-[14px] leading-6 text-[var(--navy)]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}

              </div>

              {/* FACILITIES */}
              <div className="mt-8 border-t border-[#e3e5e8] pt-7">

                <div className="text-[11px] font-black tracking-[0.13em] text-[var(--navy)]">
                FACILITIES & FEATURES
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {sport.facilities.map((facility) => (
                    <div
                      key={facility}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--gold)]" />

                      <span className="text-[14px] leading-6 text-[#5d6775]">
                        {facility}
                      </span>
                    </div>
                  ))}

                </div>
              </div>


              {/* DIMENSION NOTICE */}
              {/* <div className="mt-8 border border-[#eadca6] bg-[#fffaf0] p-5">
                <div className="text-[10px] font-black tracking-[0.12em] text-[var(--gold-dark)]">
                  FACILITY SPECIFICATION UPDATE
                </div>

                <p className="mt-2 text-[13px] leading-6 text-[#6c6250]">
                  Final measurements, playing-area dimensions,
                  equipment and construction specifications
                  will be published after confirmation of the
                  approved arena layout.
                </p>
              </div> */}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper component for a location-style specification icon
function MapPinIcon({ size = 18, ...props }) {
  return (
    <Ruler
      size={size}
      {...props}
    />
  );
}

// ==========================================
// ARENA FACILITIES SECTION
// ==========================================

export default function ArenaFacilities() {
  const [selectedSport, setSelectedSport] = useState(null);

  const closeModal = () => {
    setSelectedSport(null);
  };

  return (
    <>
      <section id="facilities" className="bg-white">
        <div className="container-academy py-24 sm:py-28 lg:py-32">

          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[850px] text-center"
          >
            <div className="gold-label">
              EXPLORE OUR SPORTS
            </div>

            <div className="gold-line mx-auto mt-5" />

            <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px]">
              Planned Sports & Facilities
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-7 text-[#697381]">
              Discover our upcoming sporting, athletic
              and fitness facilities.
              Select a sport to explore its playing area
              and specifications.
            </p>
          </motion.div>

          {/* SPORTS CARDS */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {arenaFacilities.map((sport, index) => {
              const Icon = sport.icon;

              return (
                <motion.article
                  key={sport.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group flex h-full overflow-hidden border border-[#dfe2e7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_15px_35px_rgba(12,29,51,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedSport(sport)}
                    aria-haspopup="dialog"
                    aria-label={`View ${sport.title} facility details`}
                    className="flex h-full w-full flex-col p-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--gold)] sm:p-8"
                  >

                    {/* ICON */}
                    <div className="flex h-[70px] w-[70px] items-center justify-center bg-[var(--navy)] text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-dark)]">
                      <Icon size={31} strokeWidth={1.8} />
                    </div>

                    {/* CATEGORY */}
                    <div className="mt-8 text-[10px] font-black tracking-[0.14em] text-[var(--gold-dark)]">
                      {sport.category}
                    </div>

                    {/* NAME */}
                    <h3 className="mt-3 text-[23px] font-black leading-tight tracking-[-0.025em] text-[var(--navy)]">
                      {sport.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 flex-1 text-[14px] leading-7 text-[#697381]">
                      {sport.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-7 flex items-center justify-between border-t border-[#e3e5e8] pt-5">

                      <span className="text-[11px] font-black tracking-[0.11em] text-[var(--navy)] transition-colors group-hover:text-[var(--gold-dark)]">
                        VIEW DETAILS
                      </span>

                      <ArrowRight
                        size={17}
                        className="text-[var(--gold-dark)] transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>

                  </button>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* SPORT DETAILS MODAL */}
      <SportDetailModal
        sport={selectedSport}
        onClose={closeModal}
      />
    </>
  );
}
