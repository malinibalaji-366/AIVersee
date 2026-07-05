import Button from "@/components/ui/Button";
import CircularProgress from "@/components/ui/CircularProgress";
import { Sparkles, Target } from "lucide-react";
export default function MissionCard() {
  return (
    <section className="mt-8 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

        <div className="flex-1">
            <div className="flex items-center gap-2 text-cyan-400">
                <Target size={18} />
                    <p className="text-sm">
                    Today's Mission
                    </p>
            </div>

            <h2 className="mt-2 text-3xl font-bold">
              Learn Variables
            </h2>

            <p className="mt-2 text-gray-400">
              Understand how variables store data in programming.
            </p>

            <div className="mt-6">
                <p className="text-sm text-gray-400">Reward</p>

                <div className="flex items-center gap-2 text-yellow-400">
  <Sparkles size={18} />
  <span className="text-xl font-bold">
    +30 Sparks
  </span>
</div>
            </div>
        </div>

        <CircularProgress
        value={40}
        size={100}
        strokeWidth={8}
        label="Mission"
        />

    </div>


      <div className="mt-8 flex items-center justify-between">

        <div className="flex gap-6 text-gray-400">

          <span>⏱ 12 min</span>

          <span>🟢 Easy</span>

        </div>

        <Button>
          Start Mission →
        </Button>

      </div>

    </section>
  );
}