import { worlds } from "./worlds";
import JourneyNode from "./JourneyNode";
import JourneyConnector from "./JourneyConnector";

export default function JourneyMap() {
  return (
    <section className="mt-16 flex flex-col items-center">

      {worlds.map((world, index) => (
        <div
          key={world.id}
          className="flex flex-col items-center"
        >
          <JourneyNode world={world} />

          {index !== worlds.length - 1 && (
            <JourneyConnector unlocked={world.unlocked} />
          )}
        </div>
      ))}

    </section>
  );
}