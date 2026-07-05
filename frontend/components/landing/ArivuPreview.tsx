"use client";

import { motion } from "framer-motion";

export default function ArivuPreview() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-950 px-6 py-28 text-white">

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          <p className="mb-3 text-cyan-400 font-semibold">
            YOUR AI MENTOR
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Meet
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Arivu
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            Learn AI through conversations instead of long boring videos.
            Arivu explains concepts, reviews your code,
            creates challenges, and helps you become an AI Engineer.
          </p>

          <div className="mt-10 space-y-4">

            <Feature text="Explains concepts simply" />

            <Feature text="Reviews your code" />

            <Feature text="Creates quizzes instantly" />

            <Feature text="Tracks your learning journey" />

            <Feature text="Available 24/7" />

          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold shadow-lg shadow-cyan-500/20"
          >
            Meet Arivu
          </motion.button>

        </motion.div>

        {/* Right */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
        >

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl">
              🤖
            </div>

            <div>

              <h3 className="font-bold">
                Arivu
              </h3>

              <p className="text-sm text-green-400">
                ● Online
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-gray-900 p-5">

            <p className="text-cyan-400">
              Hello, Mali 👋
            </p>

            <p className="mt-3 text-gray-300">
              Today's Mission
            </p>

            <h4 className="mt-2 text-xl font-bold">
              🐍 Python Variables
            </h4>

            <p className="mt-4 text-gray-400">
              Estimated Time
            </p>

            <p>
              15 Minutes
            </p>

            <p className="mt-4 text-yellow-400">
              ⭐ Reward: +120 Sparks
            </p>

          </div>

          <div className="mt-6 rounded-2xl bg-blue-600/20 p-5">

            <p className="font-semibold">
              You
            </p>

            <p className="mt-2">
              What is Machine Learning?
            </p>

          </div>

          <div className="mt-6 rounded-2xl bg-gray-900 p-5">

            <p className="font-semibold text-cyan-400">
              Arivu
            </p>

            <p className="mt-2 text-gray-300 leading-8">
              Machine Learning is the process of teaching
              computers to learn from data instead of
              programming every rule manually.

              <br /><br />

              Want to try a fun challenge?
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
        ✓
      </div>

      <p>{text}</p>

    </div>
  );
}