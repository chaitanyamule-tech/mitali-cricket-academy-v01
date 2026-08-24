"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Coaches", href: "/#coaches" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[#e5e7eb] bg-white shadow-[0_6px_24px_rgba(10,25,45,0.08)]"
            : "border-white/10 bg-[var(--navy)]"
        }`}
      >
        <div className="mx-auto flex min-h-[100px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* ================= LOGO + BRAND ================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center">
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-4xl bg-[var(--gold)]">
                <Image
                  src="/images/logo.png"
                  alt="Mitali Cricket Academy"
                  width={58}
                  height={58}
                  priority
                  className="h-[58px] w-[58px] object-contain"
                />
              </div>
            </div>

            <div>
              <div
                className={`text-[18px] font-black leading-none tracking-[-0.02em] transition-colors duration-300 sm:text-[21px] ${
                  scrolled
                    ? "text-[var(--navy)]"
                    : "text-white"
                }`}
              >
                MITALI CRICKET ACADEMY
              </div>

              <div className="mt-1 text-[10px] font-bold leading-[1.35] tracking-[0.12em] text-[var(--gold)] sm:text-[11px]">
                LICENSE: 0000163/2022
                <br />
                F-0024539(NND)
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] font-bold transition-colors duration-200 ${
                  scrolled
                    ? "text-[var(--navy)] hover:text-[var(--gold-dark)]"
                    : "text-white/90 hover:text-[var(--gold)]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Booking page */}
            <Link
              href="/booking"
              className="flex h-[46px] items-center gap-2 rounded-2xl bg-[var(--gold)] px-5 text-[11px] font-black tracking-[0.11em] text-[var(--navy-dark)] transition-colors duration-200 hover:bg-[var(--gold-light)]"
            >
              <CalendarDays size={17} strokeWidth={2.3} />
              BOOK STADIUM
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className={`flex h-12 w-12 items-center justify-center transition-colors duration-300 lg:hidden ${
              scrolled
                ? "text-[var(--navy)]"
                : "text-white"
            }`}
          >
            {menuOpen ? <X size={31} /> : <Menu size={31} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--navy)] pt-[100px] lg:hidden"
          >
            <motion.div
              initial={{ y: -25 }}
              animate={{ y: 0 }}
              exit={{ y: -25 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex min-h-full w-full max-w-[1400px] flex-col px-5 sm:px-8"
            >
              {/* Mobile links */}
              <nav className="border-t border-white/10">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex h-[61px] items-center border-b border-white/10 text-[17px] font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile actions */}
              <div className="mt-6 flex flex-col gap-3 pb-8">
                {/* Enquiry */}
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="flex h-[48px] items-center justify-center border border-[var(--gold)] text-[11px] font-black tracking-[0.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-dark)]"
                >
                  ENQUIRE NOW
                </Link>

                {/* Booking */}
                <Link
                  href="/booking"
                  onClick={closeMenu}
                  className="flex h-[48px] items-center justify-center rounded-2xl bg-[var(--gold)] text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)] transition-colors hover:bg-[var(--gold-light)]"
                >
                  BOOK STADIUM
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}