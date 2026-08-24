"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { getAvailableSlots } from "@/lib/bookingApi";

export default function SlotStep({
  selectedSlot,
  onSelect,
  onBack,
  date,
}) {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] =
    useState(false);
  const [error, setError] =
    useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadSessions() {
      if (!date) {
        setSessions([]);
        return;
      }

      setLoading(true);
      setError("");
      setSessions([]);

      try {
        const result =
          await getAvailableSlots(date);

        if (!cancelled) {
          setSessions(
            result.sessions || []
          );
        }
      } catch (error) {
        console.error(
          "Failed to load stadium sessions:",
          error
        );

        if (!cancelled) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load stadium sessions."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSessions();

    return () => {
      cancelled = true;
    };
  }, [date]);

  return (
    <div className="mx-auto max-w-[1050px]">
      {/* Heading */}
      <div className="mb-10">
        <div className="gold-label">
          STEP 02
        </div>

        <h2 className="mt-4 text-[30px] font-black text-[var(--navy)] sm:text-[38px]">
          Select Your Stadium Session
        </h2>

        <p className="mt-3 text-[16px] text-[#697381]">
          Choose one available stadium session
          for {formatDate(date)}.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="border border-[#dfe2e7] bg-white p-10 text-center">
          <div className="text-[13px] font-black tracking-[0.1em] text-[var(--navy)]">
            CHECKING AVAILABILITY...
          </div>

          <p className="mt-2 text-[14px] text-[#7a838d]">
            Please wait while we check the
            stadium schedule.
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="border border-red-200 bg-red-50 p-6">
          <div className="text-[13px] font-black text-red-700">
            UNABLE TO LOAD SESSIONS
          </div>

          <p className="mt-2 text-[14px] text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() => {
              setError("");
              setSessions([]);
            }}
            className="mt-5 border border-red-300 px-5 py-3 text-[11px] font-black tracking-[0.1em] text-red-700"
          >
            TRY AGAIN
          </button>
        </div>
      )}

      {/* Sessions */}
      {!loading &&
        !error &&
        sessions.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sessions.map((session) => {
              const unavailable =
                !session.available;

              const selected =
                selectedSlot?.id ===
                session.id;

              return (
                <button
                  key={session.id}
                  type="button"
                  disabled={unavailable}
                  onClick={() => {
                    if (!unavailable) {
                      onSelect(session);
                    }
                  }}
                  className={`border p-7 text-left transition-all duration-200 ${
                    unavailable
                      ? "cursor-not-allowed border-[#e2e4e8] bg-[#eeeeef] opacity-60"
                      : selected
                        ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--navy-dark)]"
                        : "border-[#dfe2e7] bg-white text-[var(--navy)] hover:border-[var(--gold)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center ${
                        unavailable
                          ? "bg-[#dedfe1]"
                          : "bg-[var(--gold)]"
                      }`}
                    >
                      <Clock3
                        size={20}
                        className={
                          unavailable
                            ? "text-[#6f747b]"
                            : "text-[var(--navy-dark)]"
                        }
                      />
                    </div>

                    <span
                      className={`px-3 py-2 text-[10px] font-black tracking-[0.1em] ${
                        unavailable
                          ? "bg-[#dedfe1] text-[#6f747b]"
                          : selected
                            ? "bg-[var(--navy)] text-white"
                            : "bg-[var(--gold)] text-[var(--navy-dark)]"
                      }`}
                    >
                      {getStatusLabel(
                        session
                      )}
                    </span>
                  </div>

                  <div className="mt-7">
                    <div className="text-[26px] font-black uppercase">
                      {session.label}
                    </div>

                    <div className="mt-3 text-[18px] font-bold">
                      {formatTime(
                        session.startTime
                      )}{" "}
                      –{" "}
                      {formatTime(
                        session.endTime
                      )}
                    </div>
                  </div>

                  <div
                    className={`mt-6 border-t pt-5 ${
                      selected
                        ? "border-[var(--navy)]/15"
                        : "border-[#e5e7ea]"
                    }`}
                  >
                    <div className="text-[10px] font-black tracking-[0.12em] opacity-60">
                      SESSION PRICE
                    </div>

                    <div className="mt-1 text-[25px] font-black">
                      ₹
                      {Number(
                        session.price || 0
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </div>
                  </div>

                  {session.reason ===
                    "ACADEMY_BLOCKED" && (
                    <div className="mt-5 border-t border-[#d7d9dc] pt-4 text-[11px] font-black tracking-[0.08em] text-[#686e76]">
                      THIS SESSION HAS BEEN
                      RESERVED BY THE ACADEMY.
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

      {/* No sessions */}
      {!loading &&
        !error &&
        sessions.length === 0 && (
          <div className="border border-[#dfe2e7] bg-white p-10 text-center">
            <div className="text-[13px] font-black tracking-[0.1em] text-[var(--navy)]">
              NO SESSIONS AVAILABLE
            </div>

            <p className="mt-2 text-[14px] text-[#7a838d]">
              Please select another date.
            </p>
          </div>
        )}

      <button
        type="button"
        onClick={onBack}
        className="mt-7 text-[12px] font-black tracking-[0.12em] text-[var(--navy)]"
      >
        ← BACK TO DATE
      </button>
    </div>
  );
}

function getStatusLabel(session) {
  if (session.reason === "ACADEMY_BLOCKED") {
    return "ACADEMY BOOKED";
  }

  if (!session.available) {
    return "BOOKED";
  }

  return "AVAILABLE";
}

function formatTime(time) {
  if (!time) {
    return "";
  }

  const [
    hoursString,
    minutes,
  ] = time.split(":");

  const hours =
    Number(hoursString);

  const suffix =
    hours >= 12 ? "PM" : "AM";

  const displayHour =
    hours % 12 || 12;

  return `${displayHour}:${minutes} ${suffix}`;
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  const parsed = new Date(
    `${date}T00:00:00`
  );

  if (
    Number.isNaN(
      parsed.getTime()
    )
  ) {
    return date;
  }

  return parsed.toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}