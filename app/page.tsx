export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Header Section */}
      <header className="bg-black border-b border-zinc-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <div className="bg-blue-700 px-3.5 py-1.5 rounded">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl ml-1">SCOTT</span>
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-11">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Buy Now Button */}
            <button className="bg-blue-700 hover:bg-blue-700 text-white px-6 py-2.5 rounded transition-colors font-medium">
              Buy Now
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12">
        {/* Content will go here */}
      </div>
    </main>
  );
}
