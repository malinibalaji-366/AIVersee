type Props = {
  code: string;
};

export default function LessonCode({ code }: Props) {
  return (
    <section className="mb-10 rounded-3xl border border-cyan-500/20 bg-black p-8">

      <p className="mb-4 text-cyan-400">
        💻 Example
      </p>

      <pre className="overflow-x-auto text-sm text-green-400">
        <code>{code}</code>
      </pre>

    </section>
  );
}