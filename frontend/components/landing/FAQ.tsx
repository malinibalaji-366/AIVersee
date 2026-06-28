"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I learn AI without coding?",
    answer:
      "Yes. We'll teach Python first through interactive missions before moving into AI and Machine Learning.",
  },
  {
    question: "Is AIVerse really free?",
    answer:
      "Yes. Our mission is to make AI education accessible to everyone. Premium features may come later, but the core learning experience will always be free.",
  },
  {
    question: "How long does it take to become an AI Engineer?",
    answer:
      "Everyone learns at a different pace. With consistent practice, projects, and guidance, you can build solid AI skills in months rather than years.",
  },
  {
    question: "Will I build real projects?",
    answer:
      "Absolutely. Every learning world ends with hands-on projects that become part of your portfolio.",
  },
];

export default function FAQ() {
  const [selected, setSelected] = useState(faqs[0]);

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            Ask
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Arivu
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Frequently asked questions, answered by your AI mentor.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="space-y-4">

            {faqs.map((faq) => (

              <button
                key={faq.question}
                onClick={() => setSelected(faq)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  selected.question === faq.question
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-400"
                }`}
              >
                {faq.question}
              </button>

            ))}

          </div>

          <motion.div
            layout
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500">
                🤖
              </div>

              <div>

                <h3 className="font-bold">
                  Arivu
                </h3>

                <p className="text-green-400 text-sm">
                  ● Online
                </p>

              </div>

            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={selected.question}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .25 }}
                className="mt-8"
              >

                <h4 className="text-xl font-bold">
                  {selected.question}
                </h4>

                <p className="mt-6 leading-8 text-gray-300">
                  {selected.answer}
                </p>

              </motion.div>

            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}