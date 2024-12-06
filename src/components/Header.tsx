import React from 'react';
import { Menu, X, Snowflake, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Snowflake className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ClimaProject</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projetos</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+5511999999999" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Contato Direto
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projetos</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}