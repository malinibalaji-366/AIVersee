import ChatHeader from "@/components/arivu/ChatHeader";
import ChatInput from "@/components/arivu/ChatInput";
import ChatWindow from "@/components/arivu/ChatWindow";
import MessageBubble from "@/components/arivu/MessageBubble";
import SuggestedPrompts from "@/components/arivu/SuggestedPrompts";
import TypingIndicator from "@/components/arivu/TypingIndicator";



export const metadata = {
  title: "Arivu | AIVerse",
};
export default function ArivuPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <section className="flex-1 overflow-y-auto px-8 py-8">
        <ChatHeader />
        <ChatInput />
        <ChatWindow />
        <MessageBubble />
        <SuggestedPrompts />
        <TypingIndicator />
      </section>
    </main>
  );
}