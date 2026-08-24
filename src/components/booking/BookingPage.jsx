"use client";

//import { useState } from "react";
import BookingHeader from "@/components/booking/BookingHeader";
import BookingProgress from "@/components/booking/BookingProgress";
import DateStep from "@/components/booking/DateStep";
import SlotStep from "@/components/booking/SlotStep";
import DetailsStep from "@/components/booking/DetailsStep";
import SummaryStep from "@/components/booking/SummaryStep";
//import { createBooking } from "@/lib/bookingApi";
import AcademyStaffAccess
  from "@/components/booking/AcademyStaffAccess";

import {
  createBooking,
  createAcademyBooking,
} from "@/lib/bookingApi";

import {
  useEffect,
  useState,
} from "react";

const steps = [
  "DATE",
  "SESSION",
  "DETAILS",
  "SUMMARY",
  "PAYMENT",
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] =
    useState(0);

  const [booking, setBooking] =
    useState({
      date: null,
      slot: null,
      bookingId: null,
      customer: {
        name: "",
        phone: "",
        email: "",
        players: 1,
        message: "",
      },
    });

  const [bookingLoading, setBookingLoading] =
    useState(false);

  const [bookingError, setBookingError] =
    useState("");

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
      Math.max(step - 1, 0)
    );
  };

  const handleBookingConfirm =
    async () => {
      if (bookingLoading) {
        return;
      }


const [academyMode, setAcademyMode] =
  useState(false);

const [academyToken, setAcademyToken] =
  useState(null);

const [showAcademyAccess, setShowAcademyAccess] =
  useState(false);

const [academyReason, setAcademyReason] =
  useState("");

const [academyLoading, setAcademyLoading] =
  useState(false);


useEffect(() => {
  const token =
    sessionStorage.getItem(
      "academyToken"
    );

  if (token) {
    setAcademyToken(token);
  }
}, []);


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

            purpose:
              "Stadium Booking",

            notes:
              [
                `Players: ${booking.customer.players}`,
                booking.customer.message
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

          serverBooking: result,
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

  return (
    <main className="min-h-screen bg-[#f6f7f9]">
      <BookingHeader />

      <section className="border-b border-[#e0e3e8] bg-white">
        <div className="container-academy py-12 sm:py-16">
          <div className="gold-label">
            STADIUM BOOKING
          </div>

          <div className="gold-line mt-5" />

          <h1 className="mt-6 text-[38px] font-black tracking-[-0.035em] text-[var(--navy)] sm:text-[52px]">
            Book Your Stadium Session
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] leading-7 text-[#66717e] sm:text-[18px]">
            Select your preferred date and
            available stadium session, then
            provide your details to continue.
          </p>
        </div>
      </section>

      <BookingProgress
        steps={steps}
        currentStep={currentStep}
      />

      <section>
        <div className="container-academy py-12 sm:py-16 lg:py-20">

          {/* STEP 1 — DATE */}
          {currentStep === 0 && (
            <DateStep
              selectedDate={booking.date}
              onSelect={(date) => {
                updateBooking({
                  date,
                  slot: null,
                  bookingId: null,
                  serverBooking: null,
                });

                nextStep();
              }}
              onBack={previousStep}
            />
          )}

          {/* STEP 2 — SESSION */}
          {currentStep === 1 && (
            <SlotStep
              selectedSlot={
                booking.slot
              }
              date={booking.date}
              onSelect={(session) => {
                updateBooking({
                  slot: session,
                  bookingId: null,
                  serverBooking: null,
                });

                nextStep();
              }}
              onBack={previousStep}
            />
          )}

          {/* STEP 3 — DETAILS */}
          {currentStep === 2 && (
            <DetailsStep
              customer={
                booking.customer
              }
              onSubmit={(customer) => {
                updateBooking({
                  customer,
                });

                setBookingError("");
                nextStep();
              }}
              onBack={previousStep}
            />
          )}

          {/* STEP 4 — SUMMARY */}
          {currentStep === 3 && (
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
                booking={booking}
                onConfirm={
                  handleBookingConfirm
                }
                onBack={previousStep}
                bookingLoading={
                  bookingLoading
                }
              />
            </>
          )}

          {/* STEP 5 — PAYMENT */}
          {currentStep === 4 && (
            <PaymentPlaceholder
              booking={booking}
            />
          )}

        </div>
      </section>
    </main>
  );
}

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