"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

const filters = [
  "ALL",
  "TRAINING",
  "MATCHES",
  "GROUND",
  "EVENTS",
  "STUDENTS",
];

const galleryItems = [
  {
    id: 1,
    category: "MATCHES",
    image: "/images/gallery/candid.webp",
    title: "Academy Match",
  },
  {
    id: 2,
    category: "MATCHES",
    image: "/images/gallery/gallery2.webp",
    title: "Match Winning Moment",
  },
  {
    id: 3,
    category: "GROUND",
    image: "/images/gallery/image.png",
    title: "Academy Ground",
  },
  {
    id: 4,
    category: "EVENTS",
    image: "/images/gallery/cutout.webp",
    title: "Academy Event",
  },
  {
    id: 5,
    category: "STUDENTS",
    image: "/images/gallery/logo.png",
    title: "Student Training",
  },
  {
    id: 6,
    category: "Staff",
    image: "/images/gallery/Coach.jpeg",
    title: "Academy Staff",
  },
  {
    id: 7,
    category: "TEAM",
    image: "/images/gallery/team.jpg",
    title: "Academy Team",
  },
  {
    id: 8,
    category: "TRAINING",
    image: "/images/personal.png",
    title: "Personal Training",
  },
  {
    id: 9,
    category: "TRAINING",
    image: "/images/gallery/training.jpg",
    title: "Student Training",
  },
];

function GalleryImage({ item, index, onClick }) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      onClick={() => onClick(item)}
      className="group relative block w-full overflow-hidden bg-[#e8eaed] text-left"
    >
      <div
        className={`relative overflow-hidden ${
          index % 5 === 0
            ? "aspect-[0.88/1]"
            : index % 3 === 0
              ? "aspect-[1.15/1]"
              : "aspect-[1/0.86]"
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-[rgba(7,27,54,0)] transition-colors duration-300 group-hover:bg-[rgba(7,27,54,0.42)]" />

        <div className="absolute inset-x-0 bottom-0 translate-y-5 bg-gradient-to-t from-[rgba(7,27,54,0.85)] via-[rgba(7,27,54,0.25)] to-transparent p-5 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-[11px] font-black tracking-[0.13em] text-[var(--gold)]">
            {item.category}
          </div>

          <div className="mt-1 text-[17px] font-black text-white">
            {item.title}
          </div>
        </div>

        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center bg-[var(--gold)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Maximize2
            size={18}
            strokeWidth={2}
            className="text-[var(--navy-dark)]"
          />
        </span>
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
  id="gallery"
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
            GALLERY
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            Explore Our Academy
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Take a look at training sessions, matches, facilities and the
            moments that make our academy special.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-11 flex justify-center overflow-x-auto pb-2">
          <div className="flex min-w-max border border-[#dfe2e7] bg-white p-1.5">
            {filters.map((filter) => {
              const active = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-3 text-[11px] font-black tracking-[0.1em] transition-all duration-200 sm:px-5 sm:text-[12px] ${
                    active
                      ? "bg-[var(--navy)] text-white"
                      : "text-[#66717e] hover:text-[var(--navy)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <GalleryImage
                key={item.id}
                item={item}
                index={index}
                onClick={setSelectedImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(5,16,30,0.93)] p-5 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-[1100px]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />

              <div className="absolute bottom-0 inset-x-0 bg-[rgba(7,27,54,0.88)] px-5 py-4">
                <div className="text-[11px] font-black tracking-[0.12em] text-[var(--gold)]">
                  {selectedImage.category}
                </div>

                <div className="mt-1 text-[16px] font-bold text-white">
                  {selectedImage.title}
                </div>
              </div>

              <button
                type="button"
                aria-label="Close gallery image"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center bg-[var(--gold)]"
              >
                <X
                  size={20}
                  className="text-[var(--navy-dark)]"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}