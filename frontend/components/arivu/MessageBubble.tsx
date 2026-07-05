import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";
type Props = {
    role: "user" | "assistant";
    message: string;
};
export default function MessageBubble({role, message,}: Props){
    const isUser = role ==="user";
    return (
        <div className={`flex items-end gap-3 ${
            isUser ? "justify-end" : "justify-start"
        }`}>
            {!isUser && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    <Bot className="text-cyan-400"
                    size={20} />
                </div>
            )}
            <div className={`max-w-xl rounded-3xl px-6 py-4 ${
                isUser ? "bg-gradient-to-r from-cyan-500 to-blur-600 text-white" : "border border-white/10 bg-white/5"
            }`}>
                {message}
            </div>
            {isUser &&(
                <motion.div initial={{opacity :0, y: 20,}}
                animate={{opacity: 1,y:0,}}
                transition={{duration:0.3}}>
                    <User size={20}/>
                </motion.div>
            )}
        </div> 
    );
}