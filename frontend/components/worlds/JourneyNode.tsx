import Button from "@/components/ui/Button";
import { Lock } from "lucide-react";
import { World } from "./worlds";
import Link from "next/link";
type Props = {
  world: World;
};
const completed = completedLessons.length;
const progress = (completed/6)*100;
export default function JourneyNode({ world }: Props) {
  return (
    <div className="flex flex-col items-center">

      {/* Planet */}
      <div
        className={`
          flex h-28 w-28 items-center justify-center
          rounded-full border-4 text-6xl
          transition-all duration-300
          ${
            world.unlocked
              ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              : "border-gray-700 bg-white/5 opacity-60"
          }
        `}
      >
        {world.emoji}
      </div>

      {/* Title */}
      <h2 className="mt-6 text-3xl font-bold">
        {world.title}
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-center text-gray-400">
        {world.description}
      </p>

      {/* Lessons */}
      <div className="mt-5 rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300">
        📚 {world.lessons} Lessons
      </div>

      {/* Button */}
      <div className="mt-8">
        {world.unlocked ? (
            <Link href="/learn/foundations/variables">
                <Button>
                    Enter World →
                </Button>
            </Link>
        ) : (
          <button
            disabled
            className="flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-gray-400"
          >
            <Lock size={18} />
            Locked
          </button>
        )}
      </div>

    </div>
  );
}