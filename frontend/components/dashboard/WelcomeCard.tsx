"use client";
import CircularProgress from "@/components/ui/CircularProgress";
import { Sprout } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function WelcomeCard() {
  const { user } = useUser();
  const hour = new Date().getHours();    
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div>
        
      <h1 className="text-4xl font-black">
        {greeting}, {user?.firstName || "Explorer"}!
      </h1>

      <h1 className="mt-2 text-4xl font-black">
        Ready to grow today?
      </h1>

      <p className="mt-4 max-w-2xl text-gray-400">
        Continue your AI journey. Complete today's mission, earn Sparks,
        and grow your Bloom.
      </p>
      </div>
      <div className="flex items-center gap-2">
        <Sprout size={50} className="text-green-400" />
        <CircularProgress
          value={40}
          size={100}
            strokeWidth={8}
            label="Bloom"
        />
        
      </div>
    </div>
    </section>
  );
}