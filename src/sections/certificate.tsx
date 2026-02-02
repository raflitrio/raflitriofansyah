import { Award, Calendar, BadgeCheck } from 'lucide-react'

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Google Cloud Bedge & Certified",
    issuer: "Google Cloud",
    date: "2024 - 2025",
    description: "Professional Cloud Architect certification demonstrating expertise in designing and managing cloud solutions.",
    credentialUrl: "https://www.credly.com/users/rafli-triofansyah.8712fb6f/badges#credly"
  },
  {
    id: 2,
    title: "Programming Logic 101",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/1OP8W90JLXQK"
  },
  {
    id: 3,
    title: "Basic Machine Learning With Google Cloud",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/98XW5N899PM3"
  },
  {
    id: 4,
    title: "Basic AI",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/JMZV4J8MJXN9"
  },
  {
    id: 5,
    title: "Basic JavaScript",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/6RPNYG735Z2M"
  },
  {
    id: 6,
    title: "Backend With Google Cloud",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/4EXG7J401PRL"
  },
  {
    id: 7,
    title: "Basic Google Cloud Engineer",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ5J304ZO1"
  },
  {
    id: 8,
    title: "Git & GitHub",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/2VX3RQGNJZYQ"
  },
  {
    id: 9,
    title: "Basic Web Programming",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZOMGW9DPG5"
  },
  {
    id: 10,
    title: "Basic Software Engineer",
    issuer: "Dicoding",
    date: "2024",
    description: "Certification in CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMEM90LPYQ"
  }
]

export default function Certificate() {
  return (
    <section 
      id='certificate'
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 md:mb-12 text-center font-silkscreen break-words">
          Certificates
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-gray-900/50 border border-green-400/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20 w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(16.666%-0.833rem)] max-w-xs"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative space-y-2.5">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                    <Award 
                      style={{ width: '24px', height: '24px' }} 
                      className="text-green-400"
                    />
                  </div>
                  <BadgeCheck 
                    style={{ width: '20px', height: '20px' }} 
                    className="text-blue-400"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-200 font-poppins line-clamp-2 min-h-[2.5rem]">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-300 font-semibold text-sm">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Calendar style={{ width: '14px', height: '14px' }} />
                  <span>{cert.date}</span>
                </div>

                {/* View Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-semibold transition-colors duration-200 pt-1"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
