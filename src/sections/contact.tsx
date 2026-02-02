import { Mail, Github } from 'lucide-react'
import WhatsAppIcon from '../assets/whatsapp.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'

interface ContactMethod {
  id: number
  name: string
  label: string
  href: string
  icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>
  gradient: string
  description: string
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    name: "WhatsApp",
    label: "Chat on WhatsApp",
    href: "https://wa.me/6285728961516", // Replace with actual WhatsApp number
    icon: WhatsAppIcon,
    gradient: "from-green-500 to-green-600",
    description: "Send me a message"
  },
  {
    id: 2,
    name: "LinkedIn",
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/rafli-triofansyah-359031322", // Replace with actual LinkedIn URL
    icon: LinkedInIcon,
    gradient: "from-blue-600 to-blue-700",
    description: "Let's connect professionally"
  },
  {
    id: 3,
    name: "Email",
    label: "Send an Email",
    href: "mailto:rtriofansyah@gmail.com", // Replace with actual email
    icon: Mail,
    gradient: "from-purple-500 to-pink-600",
    description: "Drop me an email"
  },
  {
    id: 4,
    name: "Github",
    label: "View my Profiles",
    href: "https://github.com/raflitrio",
    icon: Github,
    gradient: "from-gray-700 to-gray-900",
    description: "Check out my code"
  }
]

export default function Contact() {
  return (
    <section 
      id='contact' 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-silkscreen break-words">
            Contact
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Let's connect! Feel free to reach out through any of these channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            
            return (
              <a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900/50 border border-green-400/20 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20 hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className={`p-6 bg-gradient-to-br ${method.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent 
                      style={{ width: '48px', height: '48px' }} 
                      className="text-white"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-poppins">
                    {method.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {method.description}
                  </p>

                  {/* CTA */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-green-400 group-hover:text-green-300 font-semibold transition-colors duration-200">
                      {method.label} →
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Or find me on other platforms at{' '}
            <span className="text-green-400 font-semibold">@raflitriofansyah</span>
          </p>
        </div>
      </div>
    </section>
  )
}
