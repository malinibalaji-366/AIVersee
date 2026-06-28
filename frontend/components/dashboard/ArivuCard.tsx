import Button from "@/components/ui/Button";
import { Bot, Lightbulb, MessageSquare } from "lucide-react";
export default function ArivuCard() {
  return (
    <section className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl">

      <div className="flex items-start gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
          <Bot 
            size={28} className="text-cyan-400" />          
        </div>

        <div className="flex-1">

          <p className="text-sm text-cyan-400">
            Arivu • Your AI Mentor
          </p>

          <h2>
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-cyan-400" />
              <span>Good Morning!</span>
            </div>
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            Every AI engineer starts with simple ideas.
            Today's lesson on variables is the first building block.
            Don't rush—understanding is more important than memorizing.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">

           
            <div className="flex items-center gap-2 text-cyan-400">
              <Lightbulb size={18} />
              <span>Today's Thought</span>
            </div>
            
            <p className="mt-2 text-gray-300">
              "If a computer couldn't remember information,
              every program would start from zero."
            </p>

          </div>

          <div className="mt-6">
            <Button>
              Ask Arivu →
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
}