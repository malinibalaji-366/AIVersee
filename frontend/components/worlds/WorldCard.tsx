import Button from "@/components/ui/Button";
import { Lock } from "lucide-react";
import { World } from "./worlds";

type Props = {
  world: World;
};

export default function WorldCard({ world }: Props) {
  return (
    <div
      className={`
        rounded-3xl border border-cyan-500/20
        bg-white/5 p-8 backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10
        ${!world.unlocked && "opacity-50"}
      `}
    >
      <div className="text-5xl">
        {world.icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        {world.title}
      </h2>

      <p className="mt-3 leading-7 text-gray-400">
        {world.description}
      </p>

      <div className="mt-6 flex justify-between text-sm text-gray-400">
        <span>{world.lessons} Lessons</span>
        <span>{world.progress}%</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${world.progress}%` }}
        />
      </div>

      <div className="mt-8">
        {world.unlocked ? (
          <Button className="w-full">
            Enter World →
          </Button>
        ) : (
          <button
            disabled
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-800 py-3 text-gray-400"
          >
            <Lock size={18} />
            Locked
          </button>
        )}
      </div>
    </div>
  );
}