import Button from "@/components/ui/Button";
import { BookOpen, ArrowRight } from "lucide-react";
export default function ContinueLearning() {
  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>
            <div className="flex items-center gap-2 text-cyan-400">
                <BookOpen size={18} />
                <span>Continue Learning</span>
            </div>

          <h2 className="mt-2 text-3xl font-bold">
            Python Fundamentals
          </h2>

          <p className="mt-2 text-gray-400">
            Next Lesson: Data Types
          </p>
        </div>

        <Button>
          Continue →
        </Button>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm text-gray-400">
          <span>Course Progress</span>
          <span>35%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"></div>
        </div>

      </div>

    </section>
  );
}