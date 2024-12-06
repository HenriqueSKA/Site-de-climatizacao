import React from 'react';
import { Snowflake } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Snowflake className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ClimaProject</span>
            </div>
            <p className="text-gray-400">
              Soluções profissionais em projetos de refrigeração e climatização.
              Compromisso com qualidade e eficiência energética.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projetos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>São Paulo - SP</li>
              <li>+55 (11) 99999-9999</li>
              <li>contato@climaproject.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClimaProject. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}