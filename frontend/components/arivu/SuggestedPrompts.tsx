import { Variable, Code2, FileCode2, Brain, Map, } from "lucide-react";
const prompts = [
    {
        label:"Explain Variables",
        icon: Variable,
    },
    {
        label:"Teach Python",
        icon:Code2,
    },
    {
        label: "Explain my Code",
        icon:FileCode2,
    },
    {
        label: "Quiz Me",
        icon:Brain,
    },
    {
        label:"Learning Roadmap",
        icon: Map,
    },
    ];
type Props = {onPromptClick?: (prompt: string) => void};
export default function SuggestedPrompts({onPromptClick,}: Props){
    return(
        <section>
            <h2 className="mb-4 text-lg font-bold">Suggested Questions</h2>
            <div className="flex flex-wrap gap-3 px-6 py-4">
                {prompts.map((prompt)=>{
                    const Icon = prompt.icon;
                    return(
                    <button key={prompt.label}
                    onClick={() => onPromptClick?.(prompt.label)}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-cyan-400 hover:bg-cyan-500/10">
                        <Icon size={18}
                        className="text-cyan-400" />
                       <span> {prompt.label}</span>
                    </button>
                    );
                })}
            </div>
            <br></br>
        </section>
        
    );
}