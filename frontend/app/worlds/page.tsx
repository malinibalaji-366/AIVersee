import JourneyMap from "@/components/worlds/JourneyMap";

export const metadata = {
  title: "AI Worlds | AIVerse",
};

export default function WorldsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-10 text-white">

      <div className="mx-auto max-w-7xl">

        <p className="text-cyan-400">
          🌍 Learning Journey
        </p>

        <h1 className="mt-2 text-5xl font-black">
          AI Worlds
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Every world unlocks a new area of Artificial Intelligence.
          Complete lessons, earn Sparks, and unlock the next adventure.
        </p>

        <JourneyMap />

      </div>

    </main>
  );
}