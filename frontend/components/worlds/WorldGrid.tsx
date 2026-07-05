import WorldCard from "./WorldCard";
import { worlds } from "./worlds";

export default function WorldGrid() {
  return (
    <section className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {worlds.map((world) => (
        <WorldCard
          key={world.id}
          world={world}
        />
      ))}
    </section>
  );
}