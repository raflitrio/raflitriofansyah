import { Download } from 'lucide-react'
import '../../src/index.css'

export default function About() {
  const techStack = [
    { name: "React", borderColor: "border-green-400" },
    { name: "Golang", borderColor: "border-cyan-400" },
    { name: "NodeJS", borderColor: "border-purple-400" },
    { name: "PostgreSQL", borderColor: "border-amber-400" },
    { name: "MySQL", borderColor: "border-orange-400" },
    { name: "Google Cloud", borderColor: "border-indigo-400" },
    { name: "TypeScript", borderColor: "border-blue-400" },
    { name: "Docker", borderColor: "border-cyan-400" },
    { name: "Kotlin", borderColor: "border-emerald-400" },
  ]

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Top Section: Intro & About */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-center">
          {/* Left: Introduction */}
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <p className="text-green-400 text-sm sm:text-base md:text-lg font-silkscreen">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 break-words">
                Rafli Triofansyah
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Fullstack Developer | Cloud Computing Enthusiast | Problem Solver
            </p>

            {/* Download Resume Button */}
            <a
              href='https://mega.nz/file/pU1DXTIb#D8ig95Z2Srhh__aiVfo4vBSXvSiWYXCByin8tOFctN0'
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Right: Who Am I, Vision, Mission */}
          <div className="space-y-6">
            {/* Who Am I */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-3 font-poppins">Who Am I</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                A passionate fullstack developer with expertise in building scalable web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-3 font-poppins">Vision</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To create innovative solutions that make a positive impact on people's lives through technology and continuous learning.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-3 font-poppins">Mission</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Build robust, user-friendly applications while staying updated with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack - Horizontal Scroll */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-silkscreen">
            Tech Stack
          </h2>
          <div className="relative">
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-400/50 scrollbar-track-gray-800/50 pb-4">
              <div className="flex gap-4 px-4 min-w-max justify-center">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 text-base sm:text-lg bg-gray-800/50 backdrop-blur-sm border-b-3 ${tech.borderColor} text-gray-200 rounded-lg font-semibold whitespace-nowrap hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
