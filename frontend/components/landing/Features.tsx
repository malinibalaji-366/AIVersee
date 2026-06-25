const features = [
  {
    title: "AI Tutor",
    description: "Learn with your own AI mentor available 24/7.",
    icon: "🤖",
  },
  {
    title: "Hands-on Projects",
    description: "Build real AI and ML projects from beginner to advanced.",
    icon: "💻",
  },
  {
    title: "Learning Roadmaps",
    description: "Follow structured paths for AI, ML, DL, NLP, and more.",
    icon: "🗺️",
  },
  {
    title: "Interactive Quizzes",
    description: "Test your knowledge after every lesson.",
    icon: "📝",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Why Learn with AIVerse?
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Everything you need to become an AI Engineer, completely free.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-800 bg-black p-6 transition hover:border-blue-500 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}