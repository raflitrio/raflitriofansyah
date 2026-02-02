import { useState } from 'react'
import Logo from "../assets/profile2-nonbg.svg"
import '../../src/index.css'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 border-b-2 border-green-400 backdrop-blur-none">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full bg-yellow-400 mr-2" src={Logo} alt="" />
            <div className="ml-2">
              <p className="font-semibold text-green-600 text-lg font-silkscreen">Rafli Triofansyah</p>
            </div>
          </div>

          {/* Hamburger Button - Hanya muncul di layar kecil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu - Hanya muncul di layar medium ke atas */}
          <div className="hidden md:flex items-center text-xs text-white font-silkscreen space-x-6">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#project" className="hover:text-green-400 transition-colors">Project</a>
            <a href="#certificate" className="hover:text-green-400 transition-colors">Certificate</a>
            <a href="#hobby" className="hover:text-green-400 transition-colors">Hobbies</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Hanya muncul ketika isOpen = true di layar kecil */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-black via-gray-900 to-gray-800 border-b-2 border-gray-400">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-xs text-white font-silkscreen hover:text-green-400 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#project"
              className="block px-3 py-2 text-xs text-white font-silkscreen hover:text-green-400 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Project
            </a>
            <a
              href="#certificate"
              className="block px-3 py-2 text-xs text-white font-silkscreen hover:text-green-400 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Certificate
            </a>
            <a
              href="#hobby"
              className="block px-3 py-2 text-xs text-white font-silkscreen hover:text-green-400 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hobbies
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-xs text-white font-silkscreen hover:text-green-400 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}