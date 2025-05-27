"use client"

import { useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Phone,
  Menu,
  X,
  Database,
  Globe,
  Layers,
  FileCode,
  Palette,
  GitBranch,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Datos del portafolio
  const portfolioData = {
    name: "Anthony Johan",
    title: "Desarrollador Web Full-Stack",
    intro:
      "Con dos años de experiencia dedicada al estudio y desarrollo práctico con TypeScript, JavaScript, React, Next.js y Nest.js. Estoy ansioso por aplicar mis habilidades en un entorno profesional.",
    skills: [
      { name: "TypeScript", icon: FileCode, color: "text-blue-600" },
      { name: "JavaScript", icon: FileCode, color: "text-yellow-500" },
      { name: "React", icon: Layers, color: "text-cyan-500" },
      { name: "Next.js", icon: Globe, color: "text-gray-800" },
      { name: "Nest.js", icon: Code, color: "text-red-500" },
      { name: "HTML", icon: Globe, color: "text-orange-500" },
      { name: "CSS", icon: Palette, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-teal-500" },
      { name: "Git", icon: GitBranch, color: "text-orange-600" },
      { name: "MongoDB", icon: Database, color: "text-green-600" },
    ],
    contact: {
      email: "danthonyjohan@gmail.com",
      phone: "+1(786)450-4130",
      linkedin: "https://www.linkedin.com/in/anthony-j-diaz-594813355",
      github: "https://github.com/URIOXX",
    },
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Barra de navegación mejorada */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-xl sm:text-2xl font-bold text-indigo-600">
              {portfolioData.name.split(" ")[0]}
            </a>

            {/* Menú desktop */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Sobre Mí
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Habilidades
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Contacto
              </a>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  Sobre Mí
                </a>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  Habilidades
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Sección Hero / Sobre Mí - Completamente responsiva */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-6 bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/LOGO.PNG"
              alt="Anthony Johan"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight">
            {portfolioData.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-6 sm:mb-8">{portfolioData.title}</p>
          <p className="max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
            {portfolioData.intro}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {portfolioData.contact.linkedin && (
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            )}
            {portfolioData.contact.github && (
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Sección de Habilidades - Grid completamente responsivo */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            <Code className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-3 text-indigo-600" />
            Habilidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 min-h-[120px] sm:min-h-[140px]"
              >
                <skill.icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 ${skill.color}`} aria-label={skill.name} />
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto - Optimizada para móviles */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12">
            <Mail className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-3 text-indigo-600" />
            Contacto
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            ¡Me encantaría saber de ti! Si tienes alguna pregunta, oportunidad o simplemente quieres saludar, no dudes
            en contactarme.
          </p>

          <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-8">
            {portfolioData.contact.email && (
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline text-lg sm:text-xl transition-colors duration-200 break-all sm:break-normal"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-lg lg:text-xl">{portfolioData.contact.email}</span>
              </a>
            )}
            {portfolioData.contact.phone && (
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline text-lg sm:text-xl transition-colors duration-200"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <span className="text-sm sm:text-lg lg:text-xl">{portfolioData.contact.phone}</span>
              </a>
            )}
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-8">
            {portfolioData.contact.linkedin && (
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            )}
            {portfolioData.contact.github && (
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
