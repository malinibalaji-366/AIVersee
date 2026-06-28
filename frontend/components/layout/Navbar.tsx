export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">AIVerse</h1>

        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li><a href="#features" className="hover:text-white">Features</a></li>
          <li><a href="#roadmap" className="hover:text-white">Roadmap</a></li>
          <li><a href="#community" className="hover:text-white">Community</a></li>
          <li><a href="#faq" className="hover:text-white">FAQ</a></li>
        </ul>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}