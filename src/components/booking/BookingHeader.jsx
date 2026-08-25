"use client";

import { useState } from "react";
import Link from "next/link";
import AcademyStaffAccess from "@/components/booking/AcademyStaffAccess";



export default function BookingHeader({
  academyMode = false,
  onAcademyLogin,
  onAcademyLogout,
}) {
  const [showAcademyAccess, setShowAcademyAccess] = useState(false);

  return (
    <>
      <header className="w-full overflow-hidden border-b border-white/10 bg-[var(--navy)]">
        <div className="mx-auto flex min-h-[88px] w-full max-w-[1400px] items-center justify-between gap-2 overflow-hidden px-3 sm:px-6 lg:px-10">
          
          {/* Logo + Academy Name */}
          <Link
            href="/images/logo.png"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--gold)] sm:h-12 sm:w-12">
              <img
                src="/images/logo.png"
                alt="Mitali Cricket Academy Logo" 
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-[14px] font-black leading-tight text-white sm:text-[19px]">
                <span className="sm:hidden">
                  Mitali
                  <br />
                  CRICKET ACADEMY
                </span>

                <span className="hidden sm:inline">
                  Mitali CRICKET ACADEMY
                </span>
              </div>

              <div className="mt-1 text-[8px] font-bold tracking-[0.14em] text-[var(--gold)] sm:text-[9px] sm:tracking-[0.16em]">
                STADIUM BOOKING
              </div>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-4 lg:gap-5">
            {academyMode ? (
              <>
                {/* Academy Mode */}
                {/* <div className="shrink-0 bg-[var(--gold)] px-2 py-2 text-center text-[8px] font-black leading-[1.15] tracking-[0.08em] text-[var(--navy-dark)] sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.1em]">
                  <span className="sm:hidden">
                    ACADEMY
                    <br />
                    MODE
                    <br />
                    ACTIVE
                  </span>

                  <span className="hidden sm:inline">
                    ACADEMY MODE ACTIVE
                  </span>
                </div> */}

                {/* Exit Staff */}
                <button
                  type="button"
                  onClick={onAcademyLogout}
                  className="shrink-0 whitespace-nowrap px-1 text-[9px] font-black tracking-[0.08em] text-white/70 transition-colors hover:text-[var(--gold)] sm:px-2 sm:text-[10px] sm:tracking-[0.12em]"
                >
                  <span className="sm:hidden">EXIT</span>
                  <span className="hidden sm:inline">
                    EXIT STAFF MODE
                  </span>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setShowAcademyAccess(true)}
                className="shrink-0 whitespace-nowrap px-1 text-[9px] font-black tracking-[0.08em] text-white/60 transition-colors hover:text-[var(--gold)] sm:px-2 sm:text-[10px] sm:tracking-[0.12em]"
              >
                <span className="sm:hidden">STAFF</span>
                <span className="hidden sm:inline">
                  ACADEMY STAFF
                </span>
              </button>
            )}

            {/* Back to Website */}
            <Link
              href="/"
              className="flex shrink-0 items-center justify-center bg-[var(--gold)] px-2.5 py-2.5 text-[9px] font-black leading-[1.1] tracking-[0.06em] text-[var(--navy)] transition-colors hover:bg-[var(--gold-dark)] sm:bg-transparent sm:px-2 sm:py-2 sm:text-[12px] sm:tracking-[0.12em] sm:text-white/75"
            >
              <span className="sm:hidden">
                ← BACK
              </span>

              <span className="hidden sm:inline">
                ← BACK TO WEBSITE
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Academy Staff Login Modal */}
      {showAcademyAccess && (
        <AcademyStaffAccess
          onClose={() => setShowAcademyAccess(false)}
          onSuccess={(token) => {
            setShowAcademyAccess(false);

            if (onAcademyLogin) {
              onAcademyLogin(token);
            }
          }}
        />
      )}
    </>
  );
}