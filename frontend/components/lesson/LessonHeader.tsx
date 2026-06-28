type Props = {
  title: string;
  duration: string;
};

export default function LessonHeader({
  title,
  duration,
}: Props) {
  return (
    <header className="mb-12">

      <p className="text-cyan-400">
        🌱 AI Foundations
      </p>

      <h1 className="mt-3 text-5xl font-black">
        {title}
      </h1>

      <p className="mt-3 text-gray-400">
        Estimated time • {duration}
      </p>

    </header>
  );
}