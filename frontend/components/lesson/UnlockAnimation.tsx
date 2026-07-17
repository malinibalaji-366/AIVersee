"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Unlock, Sparkles } from "lucide-react";

type Props = {
  show: boolean;
  lesson: string;
};

export default function UnlockAnimation({
  show,
  lesson,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: -20,
          }}
          transition={{
            duration: 0.45,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <div className="rounded-3xl border border-cyan-500/30 bg-zinc-900 p-10 text-center shadow-2xl">

            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-cyan-500/20 p-5">
                <Unlock
                  size={48}
                  className="text-cyan-400"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold">
              Lesson Unlocked!
            </h2>

            <p className="mt-3 text-gray-400">
              You unlocked
            </p>

            <h3 className="mt-2 text-2xl font-bold text-cyan-400">
              {lesson}
            </h3>

            <div className="mt-6 flex items-center justify-center gap-2 text-yellow-400">
              <Sparkles size={20} />
              <span>Keep learning!</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}