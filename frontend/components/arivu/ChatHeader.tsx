import { Bot } from "lucide-react";
export default function ChatHeader(){
    return(
        <section className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-cyan-500/20 p-4">
                    <Bot size={40} className="Text-cyan-400"/>
                </div>
                <div>
                    <h1 className="text-3xl font-black">
                        Arivu
                    </h1>
                    <p className="mt-1 text-gray-400">Your Personal AI Mentor</p>
                    <div className="mt-3 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 "></div>
                    <span className="text-sm font-medium text-green-400 "> 
                        Online
                    </span>
                    </div>
                </div>
            </div>
            <br></br>
        </section>
    );
}