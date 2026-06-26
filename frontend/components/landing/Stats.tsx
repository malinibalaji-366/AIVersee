"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    title: "Interactive Missions",
    icon: "🚀",
  },
  {
    number: "15+",
    title: "AI Learning Paths",
    icon: "🤖",
  },
  {
    number: "100+",
    title: "Real Projects",
    icon: "🏆",
  },
  {
    number: "Free",
    title: "Forever",
    icon: "🌍",
  },
];

export default function Stats() {
  return (
    <section className="bg-black py-24 px-6 text-white">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .4 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-black">
            Built For
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Future AI Engineers
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Learn faster through practice, projects, and AI guidance.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .08,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-black text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}