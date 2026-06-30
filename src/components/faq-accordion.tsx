"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-border-soft">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-5 py-5.5 text-left"
            >
              <span className="text-[15px] font-medium text-near-black">{item.question}</span>
              <span
                className={`flex-shrink-0 text-lg font-light text-slate-blue transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="max-w-xl pb-5.5 text-sm leading-[1.82] text-text-muted">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
