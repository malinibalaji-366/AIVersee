"use client";

import Button from "@/components/ui/Button";
import {
  CircleCheckBig,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type Props = {
  title: string;
  sparks: number;
  onContinue?: () => void;
};

export default function LessonComplete({
  title,
  sparks,
  onContinue,
}: Props) {
  return (
    <section className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/5 p-10">

      <div className="flex justify-center">
        <CircleCheckBig
          size={72}
          className="text-green-400"
        />
      </div>

      <h2 className="mt-6 text-center text-3xl font-bold">
        Lesson Complete
      </h2>

      <p className="mt-4 text-center text-gray-300">
        Great job! You've successfully completed
      </p>

      <h3 className="mt-2 text-center text-2xl font-semibold text-cyan-400">
        {title}
      </h3>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-6 py-3 shadow-[0_0_25px_rgba(250,204,21,.25)]">

          <Sparkles
            size={22}
            className="text-yellow-400"
          />

          <span className="font-semibold">
            +{sparks} Sparks
          </span>

        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button onClick={onContinue}>
          <div className="flex items-center gap-2">
            Continue
            <ArrowRight size={18} />
          </div>
        </Button>
      </div>

    </section>
  );
}