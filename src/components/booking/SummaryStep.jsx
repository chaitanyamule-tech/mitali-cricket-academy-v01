"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

const STADIUM_NAME =
  "Mitali Cricket Academy Stadium";

const GROUND_NAME =
  "Main Ground";

export default function SummaryStep({
  booking,
  onConfirm,
  onBack,
  bookingLoading = false,
}) {
  const selectedDate =
    booking?.date ||
    "Not selected";

  const session =
    booking?.slot;

  const startTime =
    session?.startTime || "";

  const endTime =
    session?.endTime || "";

  const sessionLabel =
    session?.label || "Not selected";

  const price =
    Number(session?.price || 0);

  const customerName =
    booking?.customer?.name ||
    "Not provided";

  const phone =
    booking?.customer?.phone ||
    "Not provided";

  const email =
    booking?.customer?.email ||
    "Not provided";

  const players =
    booking?.customer?.players ?? 1;

  return (
    <div className="mx-auto max-w-[850px]">
      <div className="mb-10">
        <div className="gold-label">
          STEP 04
        </div>

        <h2 className="mt-4 text-[30px] font-black text-[var(--navy)] sm:text-[38px]">
          Booking Summary
        </h2>

        <p className="mt-3 text-[16px] text-[#697381]">
          Review your booking details before
          continuing.
        </p>
      </div>

      <div className="border border-[#dfe2e7] bg-white">
        {/* Header */}
        <div className="border-b border-[#e1e4e8] bg-[var(--navy)] px-7 py-6 text-white sm:px-9">
          <div className="text-[11px] font-black tracking-[0.13em] text-[var(--gold)]">
            STADIUM BOOKING
          </div>

          <h3 className="mt-2 text-[24px] font-black">
            {STADIUM_NAME}
          </h3>

          <p className="mt-1 text-[14px] text-white/70">
            {GROUND_NAME}
          </p>
        </div>

        <div className="p-7 sm:p-9">
          {/* Stadium */}
          <SummaryRow
            icon={MapPin}
            label="STADIUM"
            value={GROUND_NAME}
          />

          {/* Date */}
          <SummaryRow
            icon={CalendarDays}
            label="DATE"
            value={formatDate(
              selectedDate
            )}
          />

          {/* Session */}
          <SummaryRow
            icon={Clock3}
            label="SESSION"
            value={sessionLabel}
          />

          {/* Time */}
          <SummaryRow
            icon={Clock3}
            label="TIME"
            value={
              startTime && endTime
                ? `${formatTime(
                    startTime
                  )} – ${formatTime(
                    endTime
                  )}`
                : "Not selected"
            }
          />

          <div className="my-7 border-t border-[#e3e5e8]" />

          {/* Customer */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Info
              label="CUSTOMER"
              value={customerName}
            />

            <Info
              label="PHONE"
              value={phone}
            />

            <Info
              label="EMAIL"
              value={email}
            />

            <Info
              label="PLAYERS"
              value={String(players)}
            />
          </div>

          {/* Amount */}
          <div className="mt-8 flex items-center justify-between border-t border-[#e3e5e8] pt-7">
            <span className="text-[13px] font-black tracking-[0.12em] text-[#707986]">
              BOOKING AMOUNT
            </span>

            <span className="text-[27px] font-black text-[var(--navy)]">
              ₹
              {price.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onBack}
              disabled={bookingLoading}
              className="min-h-[58px] border-2 border-[var(--navy)] px-7 text-[12px] font-black tracking-[0.12em] text-[var(--navy)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              ← BACK
            </button>

            <button
              type="button"
              onClick={onConfirm}
              disabled={bookingLoading}
              className="min-h-[58px] bg-[var(--gold)] px-8 text-[12px] font-black tracking-[0.12em] text-[var(--navy-dark)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {bookingLoading
                ? "CREATING BOOKING..."
                : "CONTINUE TO PAYMENT →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-4 border-b border-[#eceef1] py-5 first:pt-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--gold)]/15">
        <Icon
          size={18}
          className="text-[var(--gold-dark)]"
        />
      </div>

      <div>
        <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
          {label}
        </div>

        <div className="mt-1 text-[16px] font-bold text-[var(--navy)]">
          {value}
        </div>
      </div>
    </div>
  );
}

function Info({
  label,
  value,
}) {
  return (
    <div className="bg-[#f7f8fa] p-5">
      <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
        {label}
      </div>

      <div className="mt-2 text-[15px] font-bold text-[var(--navy)]">
        {value}
      </div>
    </div>
  );
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

  if (
    Number.isNaN(hours) ||
    !minutes
  ) {
    return time;
  }

  const suffix =
    hours >= 12 ? "PM" : "AM";

  const displayHour =
    hours % 12 || 12;

  return `${displayHour}:${minutes} ${suffix}`;
}

function formatDate(date) {
  if (!date) {
    return "Not selected";
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