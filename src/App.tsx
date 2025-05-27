import { Github, Linkedin, Mail, Code, Phone } from 'lucide-react'; // Iconos para el portafolio
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { DiGithubBadge } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNestjs } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


// Componente principal de la aplicación
function App() {
  // Datos del portafolio (puedes personalizar esto fácilmente)
  const portfolioData = {
    name: "Anthony Johan",
    title: "Desarrollador Web Full-Stack",
    intro: "Con dos años de experiencia dedicada al estudio y desarrollo práctico con TypeScript, JavaScript, React, Next.js y Nest.js. Estoy ansioso por aplicar mis habilidades en un entorno profesional.",
    skills: [
      { name: "TypeScript", icon: BiLogoTypescript  }, 
      { name: "JavaScript", icon: BiLogoJavascript },
      { name: "React", icon: BiLogoReact },
      { name: "Next.js", icon: TbBrandNextjs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "HTML", icon: BiLogoHtml5 },
      { name: "CSS", icon: BiLogoCss3 },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Git", icon: DiGithubBadge },
      {name:'MongoDb' , icon: BiLogoMongodb}, // Puedes reemplazar con el icono de MongoDB que prefieras
      // Agrega más habilidades según sea necesario
    ],
    contact: {
      email: "danthonyjohan@gmail.com",
      phone: "+1(786)450-4130", // Opcional
      linkedin: "https://www.linkedin.com/in/anthony-j-diaz-594813355",
      github: "https://github.com/URIOXX",
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Barra de navegación */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            {portfolioData.name.split(' ')[0]}
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium">Sobre Mí</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 font-medium">Habilidades</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contacto</a>
          </div>
          {/* Menú móvil (puedes añadir un botón de hamburguesa aquí) */}
        </nav>
      </header>

      {/* Sección Hero / Sobre Mí */}
      <section id="about" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
            <img src='/LOGO.png' className="w-30 h-30 text-gray-600" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">{portfolioData.name}</h1>
          <p className="text-xl font-light mb-8">{portfolioData.title}</p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            {portfolioData.intro}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {portfolioData.contact.linkedin && (
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            )}
            {portfolioData.contact.github && (
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 flex items-center"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            <Code className="inline-block w-8 h-8 mr-3 text-indigo-600" /> Habilidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Si tienes iconos SVG o PNG para tus habilidades, úsalos aquí */}
                {skill.icon && (
                  <skill.icon className="w-10 h-10 mb-3 rounded-full" aria-label={skill.name} />
                )}
                <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            <Mail className="inline-block w-8 h-8 mr-3 text-indigo-600" /> Contacto
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            ¡Me encantaría saber de ti! Si tienes alguna pregunta, oportunidad o simplemente quieres saludar, no dudes en contactarme.
          </p>
          <div className="flex flex-col items-center space-y-4">
            {portfolioData.contact.email && (
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center text-indigo-600 hover:underline text-xl"
              >
                <Mail className="w-6 h-6 mr-3" /> {portfolioData.contact.email}
              </a>
            )}
            {portfolioData.contact.phone && (
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center text-indigo-600 hover:underline text-xl"
              >
                <Phone className="w-6 h-6 mr-3" /> {portfolioData.contact.phone}
              </a>
            )}
            <div className="flex space-x-6 mt-6">
              {portfolioData.contact.linkedin && (
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition duration-300"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              )}
              {portfolioData.contact.github && (
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition duration-300"
                >
                  <Github className="w-8 h-8" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
