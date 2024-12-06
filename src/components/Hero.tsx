import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div>
      {/* Image Section */}
      <div className="w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
          alt="Modern HVAC Installation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Profissionais em Projetos de Climatização
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expertise em projetos de refrigeração e climatização para ambientes comerciais e industriais.
            Eficiência energética e conforto térmico garantidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}