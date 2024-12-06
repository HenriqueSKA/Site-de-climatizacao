import React from 'react';
import { Wind, Thermometer, Building2, FileCheck, Settings, Activity } from 'lucide-react';

const services = [
  {
    icon: <Wind className="h-8 w-8" />,
    title: 'Projetos de HVAC',
    description: 'Desenvolvimento completo de projetos de climatização e ventilação para diversos tipos de ambientes.'
  },
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: 'Refrigeração Industrial',
    description: 'Soluções personalizadas para sistemas de refrigeração em ambientes industriais.'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Climatização Comercial',
    description: 'Projetos de ar condicionado para escritórios, lojas e estabelecimentos comerciais.'
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Consultoria Técnica',
    description: 'Assessoria especializada em eficiência energética e otimização de sistemas.'
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Dimensionamento',
    description: 'Cálculo e dimensionamento preciso de sistemas de climatização.'
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: 'Laudos Técnicos',
    description: 'Elaboração de laudos e relatórios técnicos para sistemas existentes.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Oferecemos soluções completas em projetos de climatização e refrigeração
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}