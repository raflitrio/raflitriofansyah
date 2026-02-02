
import Karawisata from '../assets/karawisata.png'
import SawSmart from '../assets/sawsmart.png'
import Pam from '../assets/panda.png'
import Run from '../assets/event.png'
import Inv from '../assets/inventory.png'
import Skincam from '../assets/skincam.png'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: { name: string; borderColor: string }[]
  githubUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "PAM Payment APP",
    description: "The PANDA PAM-Pay app is an Android application designed to make it easier for Drinking Water Company (PAM) customers to manage and pay their water bills online. The app provides bill checking, payment history, and various virtual payment methods to support efficiency and transparency in public services.",
    image: Pam,
    technologies: [
      { name: "Kotlin", borderColor: "border-green-400" },
      { name: "SQLLite", borderColor: "border-blue-400" },
      { name: "NodeJS", borderColor: "border-purple-400" },
      { name: "Docker", borderColor: "border-cyan-400" },
      { name: "MySQL", borderColor: "border-orange-400" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://drive.google.com/file/d/1qQKEcXXHQheh45_GiGHDEh9pWSXCRKcT/view?usp=sharing",
  },
  {
    id: 2,
    title: "Karawisata",
    description: "I developed the company profile website for KARA WISATA, a tourism services company under PT. Udi Kara Nusantara, which focuses on providing domestic and international travel services. The website was built using React with TypeScript to provide a modern, responsive, and informative interface, while also strengthening the company's image as a professional and trusted travel partner.",
    image: Karawisata,
    technologies: [
      { name: "React", borderColor: "border-green-400" },
      { name: "Typesript", borderColor: "border-blue-400" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://karawisata.com",
  },
  {
    id: 3,
    title: "Scholarship decision support system",
    description: "Static Website with added Scholarship Decision Support System logic using SAW and SMART methods",
    image: SawSmart,
    technologies: [
      { name: "React", borderColor: "border-cyan-400" },
      { name: "Typesript", borderColor: "border-blue-400" },
    ],
    githubUrl: "https://github.com",
    demoUrl:"https://sawsmart.vercel.app"
  },
  {
    id: 4,
    title: "Inventory APP",
    description: "I developed an inventory management application that runs completely offline for managing inventory data. This application features barcode scanning, data import and export, and local notifications to help monitor stock. The application is built using Dart with Hive as the local database to ensure fast and reliable performance without relying on an internet connection.",
    image: Inv,
    technologies: [
      { name: "Dart", borderColor: "border-green-400" },
      { name: "Hive", borderColor: "border-purple-400" }
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: 5,
    title: "Running Event Website",
    description: "I developed the running event admin website as a full-stack developer, using React for the frontend, Golang for the backend API, MySQL as the database, and Docker for deployment. This system supports real-time event and participant management and is integrated with a payment gateway to securely process registrations and payments.",
    image: Run,
    technologies: [
      { name: "React", borderColor: "border-green-400" },
      { name: "Golang", borderColor: "border-cyan-400" },
      { name: "Docker", borderColor: "border-indigo-400" },
      { name: "MySQL", borderColor: "border-indigo-400" },
    ],
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Skincam Application",
    description: "SkinCam Analyze is an artificial intelligence based mobile application that allows users to analyze facial skin conditions through a smartphone camera to identify problems such as acne, blackheads, and dark spots along with their severity. In this project, I was responsible for the Cloud Computing aspect, including building and managing the backend infrastructure, providing APIs for machine learning model integration, setting up data communication mechanisms, and implementing monitoring and logging systems to ensure the availability, scalability, and reliability of the application service.",
    image: Skincam,
    technologies: [
      { name: "Google Cloud", borderColor: "border-indigo-400" },
      { name: "NodeJS", borderColor: "border-purple-400" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://mega.nz/file/8UdClJJD#UA-aktCksyATHBkYtpdTyK6m9z3ZndVI_PgNohjHjXo",
  },
]

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 sm:py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12 md:mb-16 text-center font-silkscreen break-words">
          Projects
        </h2>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1
            
            return (
              <div
                key={project.id}
                className={`group flex flex-col ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-6 md:gap-8 lg:gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 mix-blend-overlay z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-poppins break-words">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 backdrop-blur-sm border-b-3 ${tech.borderColor} text-gray-200 rounded-lg font-semibold hover:bg-gray-800/70 transition-all duration-200`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 md:gap-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 text-sm sm:text-base font-poppins hover:shadow-lg hover:shadow-gray-700/50"
                      >
                        <Github style={{ width: '20px', height: '20px' }} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg transition-all duration-200 text-sm sm:text-base font-poppins hover:shadow-lg hover:shadow-green-500/50"
                      >
                        <ExternalLink style={{ width: '20px', height: '20px' }} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
