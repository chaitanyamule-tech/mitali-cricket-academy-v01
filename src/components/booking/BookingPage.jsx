"use client";

import {
  useEffect,
  useState,
} from "react";

import BookingHeader from "@/components/booking/BookingHeader";
import BookingProgress from "@/components/booking/BookingProgress";
import DateStep from "@/components/booking/DateStep";
import SlotStep from "@/components/booking/SlotStep";
import DetailsStep from "@/components/booking/DetailsStep";
import SummaryStep from "@/components/booking/SummaryStep";

import {
  createBooking,
  createAcademyBooking,
} from "@/lib/bookingApi";

const CUSTOMER_STEPS = [
  "DATE",
  "SESSION",
  "DETAILS",
  "SUMMARY",
  "PAYMENT",
];

const ACADEMY_STEPS = [
  "DATE",
  "SESSION",
  "CONFIRM",
];

const GROUND = "Main Ground";

export default function BookingPage() {

  // -----------------------------------------
  // Booking state
  // -----------------------------------------

  const [currentStep, setCurrentStep] =
    useState(0);

  const [booking, setBooking] =
    useState({
      date: null,
      slot: null,
      bookingId: null,
      serverBooking: null,

      customer: {
        name: "",
        phone: "",
        email: "",
        players: 1,
        message: "",
      },
    });

  // -----------------------------------------
  // Customer booking state
  // -----------------------------------------

  const [bookingLoading, setBookingLoading] =
    useState(false);

  const [bookingError, setBookingError] =
    useState("");

  // -----------------------------------------
  // Academy state
  // -----------------------------------------

  const [academyMode, setAcademyMode] =
    useState(false);

  const [academyToken, setAcademyToken] =
    useState(null);

  const [academyLoading, setAcademyLoading] =
    useState(false);

  const [academyError, setAcademyError] =
    useState("");

  const [academyReservation, setAcademyReservation] =
    useState(null);

  // -----------------------------------------
  // Load academy token
  // -----------------------------------------

  useEffect(() => {
    try {
      const token =
        sessionStorage.getItem(
          "academyToken"
        );

      if (token) {
        setAcademyToken(token);
        setAcademyMode(true);
      }
    } catch (error) {
      console.error(
        "Unable to restore academy session:",
        error
      );
    }
  }, []);

  // -----------------------------------------
  // Active progress steps
  // -----------------------------------------

  const steps = academyMode
    ? ACADEMY_STEPS
    : CUSTOMER_STEPS;

  // -----------------------------------------
  // Booking helpers
  // -----------------------------------------

  const updateBooking = (
    updates
  ) => {
    setBooking((current) => ({
      ...current,
      ...updates,
    }));
  };

  const nextStep = () => {
    setCurrentStep((step) =>
      Math.min(
        step + 1,
        steps.length - 1
      )
    );
  };

  const previousStep = () => {
    setCurrentStep((step) =>
      Math.max(
        step - 1,
        0
      )
    );
  };

  // -----------------------------------------
  // Academy login
  // -----------------------------------------

  const handleAcademyLogin =
    (token) => {
      if (!token) {
        return;
      }

      sessionStorage.setItem(
        "academyToken",
        token
      );

      setAcademyToken(token);
      setAcademyMode(true);

      setAcademyError("");

      // Start academy flow
      setCurrentStep(0);

      updateBooking({
        slot: null,
        bookingId: null,
        serverBooking: null,
      });
    };

  // -----------------------------------------
  // Academy logout
  // -----------------------------------------

  const handleAcademyLogout =
    () => {
      sessionStorage.removeItem(
        "academyToken"
      );

      setAcademyToken(null);
      setAcademyMode(false);

      setAcademyError("");

      setAcademyReservation(
        null
      );

      setCurrentStep(0);

      updateBooking({
        date: null,
        slot: null,
        bookingId: null,
        serverBooking: null,
      });
    };

  // -----------------------------------------
  // Academy reservation
  // -----------------------------------------

  const handleAcademyReserve =
    async (session) => {

      if (academyLoading) {
        return;
      }

      if (!academyToken) {
        setAcademyError(
          "Academy staff session expired. Please enter the PIN again."
        );

        setAcademyMode(false);

        return;
      }

      if (
        !booking.date ||
        !session
      ) {
        setAcademyError(
          "Please select a date and session."
        );

        return;
      }

      setAcademyLoading(true);
      setAcademyError("");

      try {
        const result =
          await createAcademyBooking({
            token:
              academyToken,

            bookingDate:
              booking.date,

            sessionId:
              session.id,

            reason:
              "Academy Practice",
          });

        console.log(
          "Academy booking created:",
          result
        );

        if (
          !result?.bookingId
        ) {
          throw new Error(
            "Academy booking was created but no booking ID was returned."
          );
        }

        setAcademyReservation(
          result
        );

        updateBooking({
          slot: session,
          bookingId:
            result.bookingId,
          serverBooking:
            result,
        });

        // Move to academy confirmation
        setCurrentStep(2);

      } catch (error) {
        console.error(
          "Academy booking failed:",
          error
        );

        const message =
          error instanceof Error
            ? error.message
            : "Unable to reserve the session for the academy.";

        setAcademyError(
          message
        );

        // If token has expired, remove academy mode
        if (
          message
            .toLowerCase()
            .includes("session expired")
        ) {
          sessionStorage.removeItem(
            "academyToken"
          );

          setAcademyToken(null);
          setAcademyMode(false);
          setCurrentStep(0);
        }

      } finally {
        setAcademyLoading(false);
      }
    };

  // -----------------------------------------
  // Customer booking
  // -----------------------------------------

  const handleBookingConfirm =
    async () => {

      if (bookingLoading) {
        return;
      }

      setBookingLoading(true);
      setBookingError("");

      try {

        if (
          !booking.date ||
          !booking.slot
        ) {
          throw new Error(
            "Please select a date and session."
          );
        }

        if (
          !booking.customer.name ||
          !booking.customer.phone ||
          !booking.customer.email
        ) {
          throw new Error(
            "Please provide your complete contact details."
          );
        }

        const result =
          await createBooking({
            customerName:
              booking.customer.name.trim(),

            phone:
              booking.customer.phone.trim(),

            email:
              booking.customer.email.trim(),

            bookingDate:
              booking.date,

            sessionId:
              booking.slot.id,

            ground:
              GROUND,

            purpose:
              "Stadium Booking",

            notes:
              [
                `Players: ${booking.customer.players}`,

                booking.customer
                  .message
                  ? `Message: ${booking.customer.message}`
                  : "",
              ]
                .filter(Boolean)
                .join("\n"),
          });

        console.log(
          "Booking created:",
          result
        );

        updateBooking({
          bookingId:
            result.bookingId,

          serverBooking:
            result,
        });

        nextStep();

      } catch (error) {

        console.error(
          "Booking creation failed:",
          error
        );

        setBookingError(
          error instanceof Error
            ? error.message
            : "Unable to create your booking. Please try again."
        );

      } finally {
        setBookingLoading(false);
      }
    };

  // -----------------------------------------
  // Render
  // -----------------------------------------

  return (
    <main className="min-h-screen bg-[#f6f7f9]">

      <BookingHeader
        academyMode={
          academyMode
        }
        onAcademyLogin={
          handleAcademyLogin
        }
        onAcademyLogout={
          handleAcademyLogout
        }
      />

      {/* Academy mode banner */}
      {academyMode && (
        <div className="border-b border-[var(--gold)] bg-[#fff9df]">
          <div className="container-academy flex items-center justify-between gap-4 py-3">
            <div>
              <div className="text-[11px] font-black tracking-[0.12em] text-[var(--navy)]">
                ACADEMY STAFF MODE
              </div>

              <p className="mt-1 text-[13px] text-[#697381]">
                Reserve stadium sessions for academy use.
              </p>
            </div>

            <div className="hidden text-[10px] font-black tracking-[0.1em] text-[var(--gold-dark)] sm:block">
              INTERNAL USE
            </div>
          </div>
        </div>
      )}

      {/* Page heading */}
      <section className="border-b border-[#e0e3e8] bg-white">
        <div className="container-academy py-12 sm:py-16">

          <div className="gold-label">
            {academyMode
              ? "ACADEMY INTERNAL BOOKING"
              : "STADIUM BOOKING"}
          </div>

          <div className="gold-line mt-5" />

          <h1 className="mt-6 text-[38px] font-black tracking-[-0.035em] text-[var(--navy)] sm:text-[52px]">
            {academyMode
              ? "Reserve a Stadium Session"
              : "Book Your Stadium Session"}
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] leading-7 text-[#66717e] sm:text-[18px]">
            {academyMode
              ? "Select a date and reserve a stadium session for academy practice."
              : "Select your preferred date and available stadium session, then provide your details to continue."}
          </p>
        </div>
      </section>

      {/* Progress */}
      <BookingProgress
        steps={steps}
        currentStep={
          currentStep
        }
      />

      <section>
        <div className="container-academy py-12 sm:py-16 lg:py-20">

          {/* ---------------------------------
              STEP 1 — DATE
          --------------------------------- */}

          {currentStep === 0 && (
            <DateStep
              selectedDate={
                booking.date
              }

              onSelect={(date) => {
                updateBooking({
                  date,
                  slot: null,
                  bookingId: null,
                  serverBooking: null,
                });

                setAcademyError("");
                setBookingError("");

                nextStep();
              }}

              onBack={
                previousStep
              }
            />
          )}

          {/* ---------------------------------
              STEP 2 — SESSION
          --------------------------------- */}

          {currentStep === 1 && (
            <>
              {academyError && (
                <div className="mx-auto mb-6 max-w-[1050px] border border-red-200 bg-red-50 px-5 py-4">
                  <div className="text-[12px] font-black tracking-[0.08em] text-red-700">
                    ACADEMY RESERVATION FAILED
                  </div>

                  <p className="mt-1 text-[14px] text-red-600">
                    {academyError}
                  </p>
                </div>
              )}

              <SlotStep
                selectedSlot={
                  booking.slot
                }

                date={
                  booking.date
                }

                academyMode={
                  academyMode
                }

                academyLoading={
                  academyLoading
                }

                onSelect={(
                  session
                ) => {

                  updateBooking({
                    slot: session,
                    bookingId: null,
                    serverBooking: null,
                  });

                  if (
                    academyMode
                  ) {
                    handleAcademyReserve(
                      session
                    );

                    return;
                  }

                  nextStep();
                }}

                onAcademyReserve={
                  handleAcademyReserve
                }

                onBack={
                  previousStep
                }
              />
            </>
          )}

          {/* ---------------------------------
              CUSTOMER STEP 3 — DETAILS
          --------------------------------- */}

          {!academyMode &&
            currentStep === 2 && (
              <DetailsStep
                customer={
                  booking.customer
                }

                onSubmit={(
                  customer
                ) => {

                  updateBooking({
                    customer,
                  });

                  setBookingError("");

                  nextStep();
                }}

                onBack={
                  previousStep
                }
              />
            )}

          {/* ---------------------------------
              CUSTOMER STEP 4 — SUMMARY
          --------------------------------- */}

          {!academyMode &&
            currentStep === 3 && (
              <>
                {bookingError && (
                  <div className="mx-auto mb-6 max-w-[850px] border border-red-200 bg-red-50 px-5 py-4">
                    <div className="text-[12px] font-black tracking-[0.08em] text-red-700">
                      BOOKING COULD NOT BE CREATED
                    </div>

                    <p className="mt-1 text-[14px] text-red-600">
                      {bookingError}
                    </p>
                  </div>
                )}

                <SummaryStep
                  booking={
                    booking
                  }

                  onConfirm={
                    handleBookingConfirm
                  }

                  onBack={
                    previousStep
                  }

                  bookingLoading={
                    bookingLoading
                  }
                />
              </>
            )}

          {/* ---------------------------------
              CUSTOMER STEP 5 — PAYMENT
          --------------------------------- */}

          {!academyMode &&
            currentStep === 4 && (
              <PaymentPlaceholder
                booking={
                  booking
                }
              />
            )}

          {/* ---------------------------------
              ACADEMY STEP 3 — CONFIRMATION
          --------------------------------- */}

          {academyMode &&
            currentStep === 2 && (
              <AcademyConfirmation
                booking={
                  booking
                }

                reservation={
                  academyReservation
                }

                onBack={() => {
                  setAcademyReservation(
                    null
                  );

                  setAcademyError("");

                  setCurrentStep(1);
                }}
              />
            )}

        </div>
      </section>
    </main>
  );
}


// ==========================================
// Customer payment placeholder
// ==========================================

function PaymentPlaceholder({
  booking,
}) {
  const serverBooking =
    booking?.serverBooking;

  return (
    <div className="mx-auto max-w-[760px] border border-[#dfe2e7] bg-white p-8 text-center sm:p-12">

      <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[var(--gold)] text-[var(--navy-dark)]">
        ₹
      </div>

      <div className="mt-7 gold-label">
        PAYMENT
      </div>

      <h2 className="mt-5 text-[32px] font-black text-[var(--navy)]">
        Booking Reserved
      </h2>

      <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-[#66717e]">
        Your stadium session has been
        reserved. Payment integration will
        be connected next.
      </p>

      <div className="mt-8 border border-[#e0e3e8] bg-[#fafafa] p-5 text-left">

        <div className="text-[11px] font-black tracking-[0.12em] text-[#78818c]">
          BOOKING REFERENCE
        </div>

        <div className="mt-2 text-[20px] font-black text-[var(--navy)]">
          {booking.bookingId ||
            "BOOKING-PENDING"}
        </div>

      </div>

      {serverBooking && (
        <div className="mt-5 border border-[#e0e3e8] bg-[#fafafa] p-5 text-left">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <div className="text-[10px] font-black tracking-[0.1em] text-[#8a9199]">
                SESSION
              </div>

              <div className="mt-1 font-bold text-[var(--navy)]">
                {
                  serverBooking.sessionLabel
                }
              </div>
            </div>

            <div>
              <div className="text-[10px] font-black tracking-[0.1em] text-[#8a9199]">
                AMOUNT
              </div>

              <div className="mt-1 font-bold text-[var(--navy)]">
                ₹
                {Number(
                  serverBooking.amount ||
                    0
                ).toLocaleString(
                  "en-IN"
                )}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}


// ==========================================
// Academy confirmation
// ==========================================

function AcademyConfirmation({
  booking,
  reservation,
  onBack,
}) {
  return (
    <div className="mx-auto max-w-[760px] border border-[#dfe2e7] bg-white p-8 text-center sm:p-12">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold)]/15">
        ✓
      </div>

      <div className="mt-6 gold-label">
        ACADEMY RESERVATION
      </div>

      <h2 className="mt-5 text-[32px] font-black text-[var(--navy)]">
        Session Reserved Successfully
      </h2>

      <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-[#66717e]">
        This stadium session has been reserved for academy practice and is now unavailable to customers.
      </p>

      <div className="mt-8 border border-[var(--gold)] bg-[#fffdf2] p-6">

        <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
          INTERNAL BOOKING ID
        </div>

        <div className="mt-2 text-[22px] font-black text-[var(--navy)]">
          {booking.bookingId ||
            reservation?.bookingId ||
            "NOT AVAILABLE"}
        </div>

      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">

        <div className="bg-[#f7f8fa] p-5">
          <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
            DATE
          </div>

          <div className="mt-2 font-bold text-[var(--navy)]">
            {booking.date}
          </div>
        </div>

        <div className="bg-[#f7f8fa] p-5">
          <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
            SESSION
          </div>

          <div className="mt-2 font-bold text-[var(--navy)]">
            {reservation?.sessionLabel ||
              booking.slot?.label ||
              "Session"}
          </div>
        </div>

        <div className="bg-[#f7f8fa] p-5">
          <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
            TIME
          </div>

          <div className="mt-2 font-bold text-[var(--navy)]">
            {formatTime(
              reservation?.startTime ||
                booking.slot?.startTime
            )}{" "}
            –{" "}
            {formatTime(
              reservation?.endTime ||
                booking.slot?.endTime
            )}
          </div>
        </div>

        <div className="bg-[#f7f8fa] p-5">
          <div className="text-[10px] font-black tracking-[0.12em] text-[#8a9199]">
            PAYMENT
          </div>

          <div className="mt-2 font-bold text-[var(--gold-dark)]">
            NOT REQUIRED
          </div>
        </div>

      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-8 min-h-[56px] bg-[var(--gold)] px-8 text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)]"
      >
        BACK TO SESSION AVAILABILITY
      </button>

    </div>
  );
}


// ==========================================
// Time formatter
// ==========================================

function formatTime(
  time
) {
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
    hours >= 12
      ? "PM"
      : "AM";

  const displayHour =
    hours % 12 || 12;

  return `${displayHour}:${minutes} ${suffix}`;
}