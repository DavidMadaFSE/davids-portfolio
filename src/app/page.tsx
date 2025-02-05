
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      {/* Name Section */}
      <h1 className="text-4xl font-bold mb-8">David Andrew Mada</h1>

      {/* Projects Section */}
      <section className="mt-16 w-full max-w-4x1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
      </section>

      {/* About Me Section */}
      <section id="about" className="mt-16 w-full max-w-4x1">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Hi there my name is David and I'm a developer who is passionate about building web applications and solving problems.
          I am getting my bachelors degree in software engineering at Arizona State Universit and I am planned to graduate this
          year (2025).
        </p>
      </section>

        {/* Footer Section */}
        <footer className="mt-12 border-t border-gray-700 w-full text-center pt-4">
          <p className="text-gray-400">Connect with me:</p>
          <div className="flex jusitfy-center space-x-4 mt-2">
            <a href="https://github.com/DavidMadaFSE" className="hover:text-blue-400">Github</a>
            <a href="https://instagram.com/drew.0705" className="hover:text-blue-400">Instagram</a>
            <a href="mailto:dmada@asu.edu" className="hover:text-blue-400">Email</a>
          </div>
        </footer>
    </div>
  );
};