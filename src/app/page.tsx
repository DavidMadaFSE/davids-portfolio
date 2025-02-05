
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      {/* Name Section */}
      <h1 className="text-4xl font-bold mb-8">David Andrew Mada</h1>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-4">
        <a href="#projects" className="text-lg font-medium hover:text-blue-400 transition">Projects</a>
        <a href="#about" className="text-lg font-medium hover:text-blue-400 transition">About Me</a>

        {/* Footer Section */}
        <footer className="mt-12 border-t border-gray-700 w-full text-center pt-4">
          <p className="text-gray-400">Connect with me:</p>
          <div className="flex jusitfy-center space-x-4 mt-2">
            <a href="https://github.com/DavidMadaFSE" className="hover:text-blue-400">Github</a>
            <a href="https://instagram.com/drew.0705" className="hover:text-blue-400">Instagram</a>
            <a href="mailto:dmada@asu.edu" className="hover:text-blue-400">Email</a>
          </div>
        </footer>
      </nav>
    </div>
  );
};