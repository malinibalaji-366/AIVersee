import ChatHeader from "@/components/arivu/ChatHeader";
import ChatClient from "@/components/arivu/ChatClient";
import ArivuAvatar from "@/components/arivu/ArivuAvatar";
export const metadata = {
  title: "Arivu | AIVerse",
};
export default function ArivuPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <ArivuAvatar />
        <ChatHeader />
        <ChatClient />
      </div>
    </main>
  );
}