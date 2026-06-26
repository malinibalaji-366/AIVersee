"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    traditional: "😴 Watch long videos",
    aiverse: "🎮 Interactive Missions",
  },
  {
    traditional: "📖 Read theory",
    aiverse: "🤖 AI Mentor explains everything",
  },
  {
    traditional: "📝 Static quizzes",
    aiverse: "🧩 Fun challenges & games",
  },
  {
    traditional: "💭 Memorize concepts",
    aiverse: "💻 Build real AI projects",
  },
  {
    traditional: "😕 Learn alone",
    aiverse: "👥 Learn with the community",
  },
  {
    traditional: "❌ Give up easily",
    aiverse: "🌱 Daily Bloom motivation",
  },
];

export default function WhyAIVerse() {
  return (
    <section className="bg-gray-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-black">
            Why Choose
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}AIVerse?
            </span>
          </h2>

          <p className="mt-5 text-gray-400">
            Learning AI should feel exciting—not exhausting.
          </p>
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">

          <div className="grid grid-cols-2 bg-white/5 p-6 font-bold">
            <div>Traditional Learning</div>
            <div>AIVerse</div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 border-t border-white/10 p-6 hover:bg-white/5"
            >
              <div className="text-gray-400">{item.traditional}</div>
              <div className="font-semibold text-cyan-400">{item.aiverse}</div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}