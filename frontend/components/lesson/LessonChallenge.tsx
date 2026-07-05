"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { useProgressStore } from "@/lib/progressStore"
type Props = {
  question: string;
  code: string;
  options: string[];
  answer?: string;
};
import { Brain, CheckCircle2, XCircle } from "lucide-react";
export default function LessonChallenge({
  question,
  code,
  options,
  answer,
}: Props) {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const router =useRouter();
  const correct = selected === answer;
  const addSparks = useProgressStore((state) => state.addSparks);
  
  const completedLessons = useProgressStore(
    (state) => state.completedLessons
  );
  const alreadyCompleted = completedLessons.includes("variables");
  return (
    <section className="mb-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">
      <div className="flex items-center gap-2">
        <Brain className="text-yellow-400" />
      <h2 className="text-2xl font-bold">
        Mini Challenge
      </h2>
    </div>
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
          onClick={() => {
            setChecked(true);
            if (selected === answer && !alreadyCompleted)  {
                addSparks(30);
                console.log("Current sparks:", useProgressStore.getState().sparks);
            }
          }}
        >
          Check Answer
        </Button>
      ) : (
        <div className="mt-6 rounded-2xl bg-white/5 p-5">

          <h3 className="flex items-center gap-2 text-xl font-bold">
            {correct ? (<><CheckCircle2 className="text-green-400" size={24}/><span>Correct!</span></>) : (<><XCircle className="text-red-400" size={24} /><span>Not Quite</span></>)}
          </h3>

          <p className="mt-3 text-gray-300">
            {correct
              ? "Excellent! Variables remember information for later use."
              : `The correct answer is "${answer}".`}
          </p>

        </div>
      )}
      <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
    <Button onClick={() =>
      router.push("/worlds")
    }>
      Continue Journey 
    </Button>
    </div>
    </section>
  );
}