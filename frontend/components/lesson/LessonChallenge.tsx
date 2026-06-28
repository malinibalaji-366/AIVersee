"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type Props = {
  question: string;
  code: string;
  options: string[];
  answer?: string;
};

export default function LessonChallenge({
  question,
  code,
  options,
  answer,
}: Props) {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);

  const correct = selected === answer;

  return (
    <section className="mb-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">

      <h2 className="text-2xl font-bold">
        🧠 Mini Challenge
      </h2>

      <p className="mt-5">{question}</p>
        <pre className="mt-4 overflow-x-auto rounded-2xl bg-black p-4 text-green-400">
            <code>{code}</code>
        </pre>
        <div className="mt-6 space-y-3">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => !checked && setSelected(option)}
                    className={`
                        w-full rounded-2xl border p-4 text-left transition

                    ${
                        selected === option
                          ? "border-cyan-400 bg-cyan-500/10"
                        : "border-white/10 hover:border-cyan-400"
                    }

                     ${
                        checked && option === answer
                        ? "border-green-500 bg-green-500/10"
                          : ""
                     }

                     ${
                         checked &&
                         option === selected &&
                         option !== answer
                          ? "border-red-500 bg-red-500/10"
                          : ""
                      }
                    `}
                >
            {option}
            </button>
        ))}
      </div>

      {!checked ? (
        <Button
          className="mt-6"
          disabled={!selected}
          onClick={() => setChecked(true)}
        >
          Check Answer
        </Button>
      ) : (
        <div className="mt-6 rounded-2xl bg-white/5 p-5">

          <h3 className="text-xl font-bold">
            {correct ? "✅ Correct!" : "❌ Not Quite"}
          </h3>

          <p className="mt-3 text-gray-300">
            {correct
              ? "Excellent! Variables remember information for later use."
              : `The correct answer is "${answer}".`}
          </p>

        </div>
      )}

    </section>
  );
}