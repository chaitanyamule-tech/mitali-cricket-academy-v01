"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function DateStep({
  selectedDate,
  onSelect,
  onBack,
}) {
  const today = useMemo(() => {
    const current = new Date();

    return new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate()
    );
  }, []);

  const [displayMonth, setDisplayMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = displayMonth.getFullYear();
  const month = displayMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const previousMonth = () => {
    const newMonth = new Date(year, month - 1, 1);

    // Don't allow navigation before current month
    if (
      newMonth.getFullYear() < today.getFullYear() ||
      (
        newMonth.getFullYear() === today.getFullYear() &&
        newMonth.getMonth() < today.getMonth()
      )
    ) {
      return;
    }

    setDisplayMonth(newMonth);
  };

  const nextMonth = () => {
    setDisplayMonth(
      new Date(year, month + 1, 1)
    );
  };

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
  };

  const isPastDate = (date) => {
    return date < today;
  };

  const isToday = (date) => {
    return formatDate(date) === formatDate(today);
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;

    return (
      formatDate(date) === selectedDate
    );
  };

  const calendarDays = [];

  // Empty cells before the first day
  for (let index = 0; index < firstDayOfMonth; index++) {
    calendarDays.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      new Date(year, month, day)
    );
  }

  return (
    <div className="mx-auto max-w-[900px]">
      {/* Heading */}
      <div className="mb-10">
        <div className="gold-label">
          STEP 01
        </div>

        <h2 className="mt-4 text-[30px] font-black text-[var(--navy)] sm:text-[38px]">
          Select Your Date
        </h2>

        <p className="mt-3 text-[16px] text-[#697381]">
          Choose the date you want to book the stadium.
        </p>
      </div>

      {/* Calendar */}
      <div className="border border-[#dfe2e7] bg-white p-5 sm:p-8">
        {/* Calendar Header */}
        <div className="flex items-center justify-between border-b border-[#e2e5e9] pb-6">
          <button
            type="button"
            onClick={previousMonth}
            disabled={
              year === today.getFullYear() &&
              month === today.getMonth()
            }
            aria-label="Previous month"
            className={`flex h-11 w-11 items-center justify-center border transition-colors ${
              year === today.getFullYear() &&
              month === today.getMonth()
                ? "cursor-not-allowed border-[#e7e8eb] text-[#c1c5ca]"
                : "border-[#dfe2e7] text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-dark)]"
            }`}
          >
            <ChevronLeft size={19} />
          </button>

          <div className="text-center">
            <h3 className="text-[22px] font-black text-[var(--navy)] sm:text-[26px]">
              {displayMonth.toLocaleDateString(
                "en-IN",
                {
                  month: "long",
                  year: "numeric",
                }
              )}
            </h3>

            <p className="mt-1 text-[10px] font-black tracking-[0.15em] text-[var(--gold-dark)]">
              STADIUM AVAILABILITY
            </p>
          </div>

          <button
            type="button"
            onClick={nextMonth}
            aria-label="Next month"
            className="flex h-11 w-11 items-center justify-center border border-[#dfe2e7] text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-dark)]"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* Weekdays */}
        <div className="mt-7 grid grid-cols-7 border-b border-[#e7e9ec] pb-4">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-black tracking-[0.08em] text-[#8a919a] sm:text-[11px]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="mt-3 grid grid-cols-7 gap-1 sm:gap-2">
          {calendarDays.map((date, index) => {
            if (!date) {
              return (
                <div
                  key={`empty-${index}`}
                  className="aspect-square"
                />
              );
            }

            const past = isPastDate(date);
            const selected = isSelected(date);
            const currentDay = isToday(date);

            return (
              <button
                key={formatDate(date)}
                type="button"
                disabled={past}
                onClick={() => {
                  if (!past) {
                    onSelect(formatDate(date));
                  }
                }}
                className={`relative flex aspect-square flex-col items-center justify-center border transition-all duration-150 ${
                  past
                    ? "cursor-not-allowed border-transparent bg-[#f1f2f4] text-[#bfc4ca]"
                    : selected
                      ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--navy-dark)]"
                      : "border-transparent bg-white text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[#fffdf3]"
                }`}
              >
                <span
                  className={`text-[16px] font-black sm:text-[18px] ${
                    past ? "line-through" : ""
                  }`}
                >
                  {date.getDate()}
                </span>

                {currentDay && !selected && (
                  <span className="absolute bottom-2 h-1 w-1 rounded-full bg-[var(--gold)]" />
                )}

                {currentDay && selected && (
                  <span className="absolute bottom-2 text-[8px] font-black tracking-[0.08em]">
                    TODAY
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#e2e5e9] pt-6">
          <Legend
            className="bg-[var(--gold)]"
            label="SELECTED"
          />

          <Legend
            className="border border-[var(--gold)] bg-white"
            label="AVAILABLE"
          />

          <Legend
            className="bg-[#f1f2f4]"
            label="PAST DATE"
          />
        </div>
      </div>

      {/* Selection */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {selectedDate ? (
            <>
              <div className="text-[10px] font-black tracking-[0.12em] text-[#8a919a]">
                SELECTED DATE
              </div>

              <div className="mt-1 text-[17px] font-black text-[var(--navy)]">
                {new Date(
                  `${selectedDate}T00:00:00`
                ).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </>
          ) : (
            <p className="text-[14px] text-[#7a838d]">
              Select an available future date to continue.
            </p>
          )}
        </div>

        {/* <button
          type="button"
          onClick={onBack}
          className="self-start text-[12px] font-black tracking-[0.12em] text-[var(--navy)] sm:self-auto"
        >
          ← BACK
        </button> */}
      </div>
    </div>
  );
}

function Legend({ className, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 ${className}`}
      />

      <span className="text-[10px] font-black tracking-[0.08em] text-[#727b86]">
        {label}
      </span>
    </div>
  );
}