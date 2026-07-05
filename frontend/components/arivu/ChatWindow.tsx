import MessageBubble from "./MessageBubble";
import { ChatMessage } from "@/types/chat";
type Props = {messages: ChatMessage[];

};
export default function ChatWindow( { messages, }:Props){
    return (
        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-6 backdrop-blur-xl">
            <div className="flex h-[70vh] flex-col gap-5 overflow-y-auto">
                {messages.map((message, index) => (
                    <MessageBubble key={index}
                role={message.role}
            message={message.message}/>
            ))}
            </div>
            <br></br>
        </section>
    );
}