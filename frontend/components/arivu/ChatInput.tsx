"use client";
import { Send } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
type Props = {
    onSend: (message: string) => void;
};

export default function ChatInput({onSend, }: Props) {
    const [message, setMessage] = useState("");
    function handleSend(){
        if (!message.trim()) return;
        onSend(message);
        setMessage("");
    }
    return (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex gap-4 focus:ring-2 focus:ring-cyan-500">
                <input value={message} onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSend();
                }}
                placeholder="Ask Arivu anything..."
                className="flex-1 rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400"/>
                <Button className="flex items-center gap-2"
                onClick={handleSend}>
                    <Send size={18} />
                    Send
                </Button>
            </div>
        </section>
    );
}