type Props = {
  title: string;
  body: string;
};

export default function LessonContent({
  title,
  body,
}: Props) {
  return (
    <section className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-300">
        {body}
      </p>

    </section>
  );
}