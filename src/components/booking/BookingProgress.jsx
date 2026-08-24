"use client";

export default function BookingProgress({
  steps,
  currentStep,
}) {
  return (
    <div className="border-b border-[#e1e4e8] bg-white">
      <div className="container-academy overflow-x-auto">
        <div className="flex min-w-[720px] items-center py-7">
          {steps.map((step, index) => {
            const active = index === currentStep;
            const completed = index < currentStep;

            return (
              <div
                key={step}
                className="flex flex-1 items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-black transition-colors ${
                      active || completed
                        ? "bg-[var(--gold)] text-[var(--navy-dark)]"
                        : "border border-[#cfd4da] bg-white text-[#7b838d]"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`text-[11px] font-black tracking-[0.1em] ${
                      active || completed
                        ? "text-[var(--navy)]"
                        : "text-[#9299a2]"
                    }`}
                  >
                    {step}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`mx-4 h-px flex-1 ${
                      completed
                        ? "bg-[var(--gold)]"
                        : "bg-[#dfe2e7]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}