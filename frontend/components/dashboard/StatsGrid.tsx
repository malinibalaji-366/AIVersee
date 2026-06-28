import { Sprout, Star, Compass, TrophyIcon } from "lucide-react";
export default function StatsGrid() {
  const stats = [
    {
      icon: Sprout,
      title: "Bloom",
      value: "Level 1",
      color: "text-green-400",
    },
    {
      icon: Compass,
      title: "Journey",
      value: "0 Days",
        color: "text-cyan-400",
    },
    {
      icon: Star,
      title: "Sparks",
      value: "0 XP",
        color: "text-yellow-400",
    },
    {
      icon: TrophyIcon,
      title: "Rank",
      value: "Explorer",
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