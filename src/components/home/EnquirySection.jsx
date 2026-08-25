"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function EnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    // Clear previous error when user starts editing again.
    if (error) {
      setError("");
    }
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (loading) return;

  setLoading(true);
  setError("");

  try {
    const appsScriptUrl =
      process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;


    if (!appsScriptUrl) {
      throw new Error(
        "Apps Script URL is not configured."
      );
    }

    const response = await fetch(
      appsScriptUrl,
      {
        method: "POST",
        body: JSON.stringify({
          action: "createEnquiry",
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      }
    );

    const responseText = await response.text();


    let result;

    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error(
        "Failed to parse Apps Script response:",
        parseError
      );

      throw new Error(
        "The server returned an invalid response."
      );
    }


    if (!result.success) {
      throw new Error(
        result.message ||
          "Failed to submit enquiry."
      );
    }

    // Success only after Apps Script confirms it.
    setSubmitted(true);
    setForm(initialForm);
  } catch (error) {
    console.error(
      "Enquiry submission error:",
      error
    );

    setError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="bg-[#f6f7f9]"
    >
      <div className="container-academy py-24 sm:py-28 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="gold-label">
            GET IN TOUCH
          </div>

          <div className="gold-line mx-auto mt-5" />

          <h2 className="mt-8 text-[39px] font-black leading-[1.07] tracking-[-0.035em] text-[var(--navy)] sm:text-[48px] lg:text-[54px]">
            Start Your Cricket Journey
          </h2>

          <p className="mx-auto mt-7 max-w-[740px] text-[17px] leading-[1.75] text-[#5d6775] sm:text-[18px]">
            Have a question about our programs, coaching, facilities or
            stadium booking? Get in touch with our academy team.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--navy)] p-8 text-white sm:p-10 lg:p-12"
          >
            <div className="gold-label">
              CONTACT DETAILS
            </div>

            <div className="mt-5 h-[3px] w-[70px] bg-[var(--gold)]" />

            <h3 className="mt-7 text-[30px] font-black leading-[1.1] sm:text-[34px]">
              Let's Talk Cricket
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-white/70 sm:text-[16px]">
              Our team is ready to help with admissions, training
              programs, personal coaching and ground enquiries.
            </p>

            <div className="mt-9 space-y-7">
              <ContactItem
                icon={MapPin}
                title="VISIT US"
                text="Chandoji Pawde Mangal Karyalay Ashtavinayak Nagar Canal Road, Nanded Bypass Rd, Taroda Kh., Tirumala Nagar, Wadi Bk., Maharashtra 431605"
              />

              <ContactItem
                icon={Phone}
                title="CALL US"
                text="+91 7385561208"
              />

              <ContactItem
                icon={Mail}
                title="EMAIL US"
                text="Mitalicricketacademy@2019gmail.com"
              />

              <ContactItem 
                icon={Clock3}
                title="OPENING HOURS"
                text="06:00 AM – 10:00 PM"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="border border-[#dfe2e7] bg-white p-8 sm:p-10 lg:p-12"
          >
            <div className="gold-label">
              SEND AN ENQUIRY
            </div>

            <div className="mt-5 h-[3px] w-[70px] bg-[var(--gold)]" />

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)]/15">
                  <CheckCircle2
                    size={32}
                    className="text-[var(--gold-dark)]"
                  />
                </div>

                <h3 className="mt-6 text-[28px] font-black text-[var(--navy)]">
                  Enquiry Received
                </h3>

                <p className="mt-3 max-w-[450px] text-[16px] leading-7 text-[#65707e]">
                  Thank you for contacting Mitali Cricket Academy.
                  Our team will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-7 min-h-[54px] border-2 border-[var(--navy)] px-7 text-[12px] font-black tracking-[0.12em] text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    label="FULL NAME"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />

                  <FormField
                    label="PHONE NUMBER"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    required
                  />
                </div>

                <FormField
                  label="EMAIL ADDRESS"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-black tracking-[0.13em] text-[var(--navy)]"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows={6}
                    required
                    className="w-full resize-none border border-[#d8dce2] bg-[#fafafa] px-4 py-4 text-[15px] text-[var(--navy)] outline-none transition-colors placeholder:text-[#9aa1aa] focus:border-[var(--gold)]"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-[48px] w-full items-center justify-center gap-2 bg-[var(--gold)] px-6 text-[11px] font-black tracking-[0.11em] text-[var(--navy-dark)] transition-colors hover:bg-[var(--gold-light)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={17} />

                  {loading
                    ? "SUBMITTING..."
                    : "SEND ENQUIRY"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex w-full min-w-0 items-start gap-4">
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--gold)]">
        <Icon
          size={19}
          strokeWidth={1.9}
          className="text-[var(--navy-dark)]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-black tracking-[0.16em] text-[var(--gold)]">
          {title}
        </div>

        <div
          className="mt-1 text-[15px] leading-6 text-white/85"
          style={{
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-black tracking-[0.13em] text-[var(--navy)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-[56px] w-full border border-[#d8dce2] bg-[#fafafa] px-4 text-[15px] text-[var(--navy)] outline-none transition-colors placeholder:text-[#9aa1aa] focus:border-[var(--gold)]"
      />
    </div>
  );
}