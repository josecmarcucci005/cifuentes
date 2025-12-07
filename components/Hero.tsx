import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Home renovation background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="lg:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Soluciones Integrales</span>
            <span className="block text-orange-500">Para Tu Hogar y Oficina</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
            Desde instalaciones eléctricas complejas hasta la pintura perfecta para tu sala. 
            En <strong>Cifuentes</strong>, combinamos experiencia, calidad y confianza para transformar y reparar tus espacios.
          </p>
          <div className="mt-8 sm:mt-12">
            <div className="sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#servicios"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Nuestros Servicios
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all gap-2"
                >
                  Contáctanos <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
