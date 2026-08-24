"use client";

import { useState } from "react";
import {
  X,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";
import { verifyAcademyPin } from "@/lib/bookingApi";

export default function AcademyStaffAccess({
  onSuccess,
  onClose,
}) {
  const [pin, setPin] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  const [showPin, setShowPin] =
  useState(false);


  const handleSubmit =
    async (event) => {
      event.preventDefault();

      if (loading) return;

      setLoading(true);
      setError("");

      try {
        const result =
          await verifyAcademyPin(
            pin
          );

        sessionStorage.setItem(
          "academyToken",
          result.token
        );

        onSuccess(
          result.token
        );
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to verify academy access."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div className="relative w-full max-w-[440px] border border-[#dfe2e7] bg-white p-7 sm:p-9">
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="absolute right-5 top-5 text-[#6e7782]"
        >
          <X size={20} />
        </button>

        <div className="flex h-12 w-12 items-center justify-center bg-[var(--gold)]">
          <ShieldCheck
            size={22}
            className="text-[var(--navy-dark)]"
          />
        </div>

        <div className="mt-6 gold-label">
          ACADEMY STAFF
        </div>

        <h2 className="mt-3 text-[28px] font-black text-[var(--navy)]">
          Staff Access
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-[#697381]">
          Enter the academy staff PIN to
          access internal stadium reservations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-7"
        >
          <label className="mb-2 block text-[11px] font-black tracking-[0.12em] text-[var(--navy)]">
            STAFF PIN
          </label>

          <div className="relative">
  <input
    type={
      showPin
        ? "text"
        : "password"
    }
    inputMode="numeric"
    autoComplete="off"
    value={pin}
    onChange={(event) =>
      setPin(event.target.value)
    }
    placeholder="Enter staff PIN"
    className="h-[56px] w-full border border-[#d8dce2] bg-[#fafafa] px-4 pr-12 text-[16px] tracking-[0.2em] outline-none focus:border-[var(--gold)]"
  />

  <button
    type="button"
    onClick={() =>
      setShowPin((current) => !current)
    }
    aria-label={
      showPin
        ? "Hide PIN"
        : "Show PIN"
    }
    className="absolute right-0 top-0 flex h-[56px] w-[48px] items-center justify-center text-[#7b838d] transition-colors hover:text-[var(--navy)]"
  >
    {showPin ? (
      <EyeOff size={19} />
    ) : (
      <Eye size={19} />
    )}
  </button>
</div>

          {error && (
            <div className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={
              loading ||
              !pin
            }
            className="mt-6 min-h-[56px] w-full bg-[var(--gold)] px-6 text-[11px] font-black tracking-[0.12em] text-[var(--navy-dark)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "VERIFYING..."
              : "VERIFY STAFF ACCESS"}
          </button>
        </form>
      </div>
    </div>
  );
}