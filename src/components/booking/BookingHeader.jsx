"use client";

import { useState } from "react";
import Link from "next/link";
import AcademyStaffAccess from "@/components/booking/AcademyStaffAccess";

export default function BookingHeader({
  academyMode = false,
  onAcademyLogin,
  onAcademyLogout,
}) {
  const [showAcademyAccess, setShowAcademyAccess] =
    useState(false);

  return (
    <>
      <header className="border-b border-white/10 bg-[var(--navy)]">
        <div className="mx-auto flex min-h-[88px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Logo + Academy Name */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-[var(--gold)]">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--navy)]">
                <span className="text-xs font-black text-[var(--navy)]">
                  ♢
                </span>
              </div>
            </div>

            <div>
              <div className="text-[17px] font-black text-white sm:text-[19px]">
                Mitali CRICKET ACADEMY
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.16em] text-[var(--gold)]">
                STADIUM BOOKING
              </div>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            {academyMode ? (
              <>
                <div className="bg-[var(--gold)] px-3 py-2 text-[10px] font-black tracking-[0.1em] text-[var(--navy-dark)]">
                  ACADEMY MODE ACTIVE
                </div>

                <button
                  type="button"
                  onClick={onAcademyLogout}
                  className="text-[10px] font-black tracking-[0.12em] text-white/70 transition-colors hover:text-[var(--gold)]"
                >
                  EXIT STAFF MODE
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setShowAcademyAccess(true)
                }
                className="text-[10px] font-black tracking-[0.12em] text-white/50 transition-colors hover:text-[var(--gold)]"
              >
                ACADEMY STAFF
              </button>
            )}

            {/* Back to Website */}
            <Link
              href="/"
              className="text-[12px] font-black tracking-[0.12em] text-white/75 transition-colors hover:text-[var(--gold)]"
            >
              ← BACK TO WEBSITE
            </Link>
          </div>
        </div>
      </header>

      {/* Academy Staff Login Modal */}
      {showAcademyAccess && (
        <AcademyStaffAccess
          onClose={() =>
            setShowAcademyAccess(false)
          }
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