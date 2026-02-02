import { Code2, Gamepad2, BookOpen, Headphones } from 'lucide-react'

interface Hobby {
  id: number
  name: string
  description: string
  icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>
  gradient: string
  url?: string
}

const hobbies: Hobby[] = [
  {
    id: 1,
    name: "Coding",
    description: "Building side projects and exploring new technologies. Love experimenting with different frameworks and learning new programming languages.",
    icon: Code2,
    gradient: "from-green-500 to-emerald-600",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Gaming",
    description: "Playing strategy games and competitive multiplayer. Enjoy problem-solving challenges and teamwork in gaming communities.",
    icon: Gamepad2,
    gradient: "from-purple-500 to-pink-600",
    url: "https://shrinkme.click/RatroGame"
  },
  {
    id: 3,
    name: "Watching Anime",
    description: "Technical books, sci-fi novels, and tech blogs. Constantly learning about software architecture, design patterns, and industry trends.",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-600",
    url: "https://shrinkme.click/RatroAnime"
  },
  {
    id: 4,
    name: "Music",
    description: "Listening to various genres while coding. Music helps me focus and get into the flow state during development sessions.",
    icon: Headphones,
    gradient: "from-yellow-500 to-orange-600",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export default function Hobby() {
  return (
    <section 
      id="hobby" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12 md:mb-16 text-center font-silkscreen break-words">
          Hobbies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {hobbies.map((hobby) => {
            const IconComponent = hobby.icon
            
            return (
              <div
                key={hobby.id}
                className="group relative bg-gray-900/50 border border-green-400/20 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${hobby.gradient} rounded-xl`}>
                    <IconComponent 
                      style={{ width: '40px', height: '40px' }} 
                      className="text-white"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-poppins">
                    {hobby.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {hobby.description}
                  </p>

                  {/* URL */}
                  {hobby.url && (
                    <a href={hobby.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      View more
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
