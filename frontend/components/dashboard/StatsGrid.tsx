"use client";
import { Sprout, Star, Compass, TrophyIcon } from "lucide-react";
import { useProgressStore } from "@/lib/progressStore";
export default function StatsGrid() {
  const sparks = useProgressStore((state) => state.sparks);
  const completedLessons = useProgressStore((state) => state.completedLessons);
  const streak = useProgressStore((state) => state.streak);
  const stats = [
    {
      icon: Sprout,
      title: "Bloom",
      value: completedLessons.length === 0 ? "Seed":"Level 1",
      color: "text-green-400",
    },
    {
      icon: Compass,
      title: "Journey",
      value: `${streak} Day`,
        color: "text-cyan-400",
    },
    {
      icon: Star,
      title: "Sparks",
      value: `${sparks} XP`,
        color: "text-yellow-400",
    },
    {
      icon: TrophyIcon,
      title: "Rank",
      value: completedLessons.length >= 5 ? "AI Explorer" : "Beginner",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <stat.icon className={`mb-3 ${stat.color}`} size={24} />
          <p className="text-sm text-gray-400">{stat.title}</p>

          <h2 className="mt-3 text-2xl font-bold">
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}