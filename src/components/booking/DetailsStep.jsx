"use client";

import { useState } from "react";

export default function DetailsStep({
  customer,
  onSubmit,
  onBack,
}) {
  const [form, setForm] = useState(customer);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="mx-auto max-w-[850px]">
      <div className="mb-10">
        <div className="gold-label">STEP 04</div>

        <h2 className="mt-4 text-[30px] font-black text-[var(--navy)] sm:text-[38px]">
          Your Details
        </h2>

        <p className="mt-3 text-[16px] text-[#697381]">
          Enter your contact details so the academy can confirm your
          booking.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-[#dfe2e7] bg-white p-7 sm:p-10"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field
            label="FULL NAME"
            value={form.name}
            onChange={(value) =>
              updateField("name", value)
            }
            placeholder="Your full name"
            required
          />

          <Field
            label="PHONE NUMBER"
            type="tel"
            value={form.phone}
            onChange={(value) =>
              updateField("phone", value)
            }
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>

        <div className="mt-6">
          <Field
            label="EMAIL ADDRESS"
            type="email"
            value={form.email}
            onChange={(value) =>
              updateField("email", value)
            }
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-[11px] font-black tracking-[0.12em] text-[var(--navy)]">
            NUMBER OF PLAYERS
          </label>

          <input
            type="number"
            min="1"
            max="30"
            value={form.players}
            onChange={(event) =>
              updateField(
                "players",
                Number(event.target.value)
              )
            }
            className="h-[56px] w-full border border-[#d8dce2] bg-[#fafafa] px-4 outline-none focus:border-[var(--gold)] sm:max-w-[180px]"
          />
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-[11px] font-black tracking-[0.12em] text-[var(--navy)]">
            ADDITIONAL MESSAGE (Eg., special requests, player details,lunch, snacks with no.of peoples etc.)
          </label>

          <textarea
            rows={5}
            value={form.message}
            onChange={(event) =>
              updateField(
                "message",
                event.target.value
              )
            }
            placeholder="Any additional information..."
            className="w-full resize-none border border-[#d8dce2] bg-[#fafafa] px-4 py-4 outline-none focus:border-[var(--gold)]"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="min-h-[58px] border-2 border-[var(--navy)] px-7 text-[12px] font-black tracking-[0.12em] text-[var(--navy)]"
          >
            ← BACK
          </button>

          <button
            type="submit"
            className="min-h-[58px] bg-[var(--gold)] px-8 text-[12px] font-black tracking-[0.12em] text-[var(--navy-dark)]"
          >
            CONTINUE TO SUMMARY →
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-black tracking-[0.12em] text-[var(--navy)]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="h-[56px] w-full border border-[#d8dce2] bg-[#fafafa] px-4 text-[15px] outline-none placeholder:text-[#9ba2ab] focus:border-[var(--gold)]"
      />
    </div>
  );
}