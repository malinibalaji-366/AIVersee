export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        <div>
          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AIVerse
          </h2>

          <p className="mt-4 text-gray-400">
            Learn AI by building, experimenting, and creating real-world projects.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Platform</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Learning Worlds</li>
            <li>AI Lab</li>
            <li>Projects</li>
            <li>Growth Journal</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Resources</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Roadmap</li>
            <li>Documentation</li>
            <li>Community</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Legal</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
        © 2026 AIVerse • Built with ❤️ in India 🇮🇳
      </div>
    </footer>
  );
}