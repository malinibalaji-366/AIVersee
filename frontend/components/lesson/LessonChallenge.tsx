type Props = {
  question: string;
  options: string[];
};

export default function LessonChallenge({
  question,
  options,
}: Props) {
  return (
    <section className="mb-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">

      <h2 className="text-2xl font-bold">
        🧠 Mini Challenge
      </h2>

      <p className="mt-5">
        {question}
      </p>

      <div className="mt-6 space-y-3">

        {options.map((option) => (
          <button
            key={option}
            className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            {option}
          </button>
        ))}

      </div>

    </section>
  );
}