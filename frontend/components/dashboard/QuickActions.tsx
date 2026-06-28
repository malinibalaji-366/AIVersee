import { FlaskConical, GlobeLock, NotebookPen, Mic} from "lucide-react";
const actions = [
  {
    icon: FlaskConical,
    title: "AI Lab",
    subtitle: "Write and run code instantly",
    color: "text-cyan-400",
  },
  {
    icon: GlobeLock,
    title: "AI Worlds",
    subtitle: "Explore AI learning paths",
    color: "text-purple-400",
  },
  {
    icon: NotebookPen,
    title: "Journal",
    subtitle: "Reflect on today's learning",
    color: "text-green-400",    
  },
  {
    icon: Mic,
    title: "Interview Arena",
    subtitle: "Practice with Arivu",
    color: "text-amber-400",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-3xl font-bold">
        ⚡ Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => {
             const Icon = action.icon;
            return (
          <div
            key={action.title}
            className="
              cursor-pointer
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-cyan-400/50
              hover:shadow-xl
              hover:shadow-cyan-500/20
            "
          >
            <Icon 
            size={48} className={action.color} />

            <h3 className="mt-6 text-2xl font-bold">
              {action.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {action.subtitle}
            </p>
          </div>
            );
   })}
      </div>
    </section>
    );      
}