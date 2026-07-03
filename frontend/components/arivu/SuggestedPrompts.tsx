const prompts = ["Explain Variables", "Teach Python", "Explain my Code", "Quiz Me", "Learning Roadmap"];
export default function SuggestedPrompts(){
    return(
        <section>
            <h2 className="mb-4 text-lg font-bold">Suggested Questions</h2>
            <div className="flex flex-wrap gap-3 px-6 py-4">
                {prompts.map((prompt)=>(
                    <button key={prompt}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-cyan-400 hover:bg-cyan-500/10">
                        {prompt}
                    </button>
                ))}
            </div>
            <br></br>
        </section>
        
    );
}