export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-extrabold md:text-7xl">
        Learn AI.<br />
        Build AI.
        <br />
        Shape the Future.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          AIVerse is a free interactive platform where anyone can learn
          Artificial Intelligence, Machine Learning, Deep Learning, and build
          real-world AI projects.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-6 py-3 font-semibold hover:bg-white hover:text-black">
            Explore Courses
          </button>
        </div>
</section>
    );  
}