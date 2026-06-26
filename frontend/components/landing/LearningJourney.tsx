"use client";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
const worlds = [
  {
    emoji: "🌱",
    title: "Beginner Island",
    description: "Start your AI adventure and learn the basics.",
    missions: 5,
    level: "Beginner",
    duration: "2 Hours",
    reward: "Explorer Badge",
    unlocked: true,
  },
  {
    emoji: "🐍",
    title: "Python Valley",
    description: "Master Python with interactive missions.",
    missions: 18,
    level: "Beginner",
    duration: "8 Hours",
    reward: "Python Explorer",
    unlocked: true,
  },
  {
    emoji: "📐",
    title: "Math Peaks",
    description: "Build strong math foundations for AI.",
    missions: 15,
    level: "Intermediate",
    duration: "10 Hours",
    reward: "Math Master",
    unlocked: true,
  },
  {
    emoji: "📊",
    title: "Data River",
    description: "Learn data analysis and visualization.",
    missions: 12,
    level: "Intermediate",
    duration: "6 Hours",
    reward: "Data Explorer",
    unlocked: true,
  },
  {
    emoji: "🤖",
    title: "ML Forest",
    description: "Train your first Machine Learning models.",
    missions: 25,
    level: "Intermediate",
    duration: "20 Hours",
    reward: "ML Builder",
    unlocked: false,
  },
  {
    emoji: "🧠",
    title: "Deep Learning Temple",
    description: "Explore neural networks and deep learning.",
    missions: 22,
    level: "Advanced",
    duration: "25 Hours",
    reward: "Neural Master",
    unlocked: false,
  },
  {
    emoji: "✨",
    title: "LLM Galaxy",
    description: "Build AI chatbots and Generative AI apps.",
    missions: 20,
    level: "Advanced",
    duration: "18 Hours",
    reward: "LLM Creator",
    unlocked: false,
  },
  {
    emoji: "🚀",
    title: "AI Summit",
    description: "Become a professional AI Engineer.",
    missions: 30,
    level: "Expert",
    duration: "30 Hours",
    reward: "AI Architect",
    unlocked: false,
  },
];

export default function LearningJourney() {
  return (
    <FadeIn>
    <section
      id="journey"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
                  🌍 Your AI Journey
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-5 text-lg text-gray-400"
            >
                Every AI Engineer starts somewhere. Unlock new worlds,
                complete missions, earn rewards, and become an AI expert.
            </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {worlds.map((world, index) => (

            <motion.div
                key={world.title}
                initial={{ opacity: 0, y: 30, }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.02,
                    y: -6,
                    rotate:1,}}
                className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg transition-all duration-300 ${
                    world.unlocked
                        ? "hover:border-cyan-400 hover:shadow-cyan-500/20"
                        : "bg-gray-900/40 border-gray-700 text-gray-400"
                }`}
            >
              <motion.div 
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-6xl">
                {world.emoji}
              </motion.div>

              <h3 className="mt-4 text-2xl font-bold">
                {world.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {world.description}
              </p>

              <div className="mt-6 space-y-2 text-sm">

                <p>
                  🎯 Missions:{" "}
                  <span className="font-semibold">
                    {world.missions}
                  </span>
                </p>

                <p>
                  ⭐ Level:{" "}
                  <span className="font-semibold">
                    {world.level}
                  </span>
                </p>

                <p>
                  ⏱ Duration:{" "}
                  <span className="font-semibold">
                    {world.duration}
                  </span>
                </p>

                <p>
                  🏅 Reward:{" "}
                  <span className="font-semibold text-yellow-400">
                    {world.reward}
                  </span>
                </p>

              </div>

              <div className="mt-8">

                {world.unlocked ? (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
                    Enter World →
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full cursor-not-allowed rounded-xl bg-gray-700 py-3"
                  >
                    🔒 Locked
                  </motion.button>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}