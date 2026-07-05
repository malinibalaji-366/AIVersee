"use client";
import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import SuggestedPrompts from "./SuggestedPrompts";
import { ChatMessage } from "@/types/chat";


export default function ChatClient(){
    const [messages, setMessages] = useState<
    ChatMessage[]
    >([
        {
            role: "assistant",
            message:`Hello, Explorer! I'm Arivu, your personal AI mentor inside AIVerse.
             I can help you:
             
             Learning Programming
             Understand AI
             Explain Code
             Quiz You
             Build Projects
             What would you like to learn today ? `,
        },
    ]);
    async function sendMessage(message:string){
        setMessages((prev)=>[
            ...prev,
            {
                role: "user",
                message,
            },
        ]);
        const response = await fetch("/api/arivu",
            {
                method: "POST",
                headers: {
                    "Content-Type":"applictaion/json",
                },
                body: JSON.stringify({
                    message,
                }),
            });
        const data = await response.json();
        setMessages((prev)=> [
            ...prev,
            {
                role: "assistant",
                message:data.message,
            },
        ]);
    }
    return(
        <>
        <SuggestedPrompts
  onPromptClick={(prompt) => sendMessage(prompt)}
/>
        <ChatWindow messages={messages} />
        <ChatInput onSend={sendMessage} />
        </>
    );
}