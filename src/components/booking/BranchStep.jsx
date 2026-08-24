"use client";

import { MapPin, ArrowRight } from "lucide-react";

const branches = [
  {
    id: "B001",
    name: "Main Academy Ground",
    address: "Dhanora,Nanded, Maharashtra",
    price: "₹800 / hour",
  },
  {
    id: "B002",
    name: "Academy Branch 02",
    address: "Nanded, Maharashtra",
    price: "₹1,000 / hour",
  },
];

export default function BranchStep({
  selectedBranch,
  onSelect,
}) {
  return (
    <div className="mx-auto max-w-[1050px]">
      <div className="mb-10">
        <div className="gold-label">STEP 01</div>

        <h2 className="mt-4 text-[30px] font-black text-[var(--navy)] sm:text-[38px]">
          Select Your Branch
        </h2>

        <p className="mt-3 text-[16px] text-[#697381]">
          Choose the academy ground you would like to book.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {branches.map((branch) => {
          const selected =
            selectedBranch?.id === branch.id;

          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelect(branch)}
              className={`group relative border p-7 text-left transition-all duration-200 sm:p-8 ${
                selected
                  ? "border-[var(--gold)] bg-[var(--navy)]"
                  : "border-[#dfe2e7] bg-white hover:border-[var(--gold)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-[var(--gold)]">
                  <MapPin
                    size={21}
                    className="text-[var(--navy-dark)]"
                  />
                </div>

                {selected && (
                  <span className="bg-[var(--gold)] px-3 py-2 text-[10px] font-black tracking-[0.1em] text-[var(--navy-dark)]">
                    SELECTED
                  </span>
                )}
              </div>

              <h3
                className={`mt-7 text-[24px] font-black ${
                  selected
                    ? "text-white"
                    : "text-[var(--navy)]"
                }`}
              >
                {branch.name}
              </h3>

              <p
                className={`mt-3 text-[15px] ${
                  selected
                    ? "text-white/70"
                    : "text-[#66717e]"
                }`}
              >
                {branch.address}
              </p>

              <div
                className={`mt-6 border-t pt-5 text-[13px] font-black tracking-[0.1em] ${
                  selected
                    ? "border-white/15 text-[var(--gold)]"
                    : "border-[#e2e4e8] text-[var(--gold-dark)]"
                }`}
              >
                {branch.price}
              </div>

              <div
                className={`mt-6 flex items-center gap-2 text-[12px] font-black tracking-[0.11em] ${
                  selected
                    ? "text-white"
                    : "text-[var(--navy)]"
                }`}
              >
                SELECT BRANCH
                <ArrowRight size={16} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}