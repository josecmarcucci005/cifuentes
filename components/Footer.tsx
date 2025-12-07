import React from 'react';
import { Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
           <Hammer className="h-6 w-6 text-orange-500" />
           <span className="font-bold text-xl">CIFUENTES</span>
        </div>
        <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
        <div className="mt-4 md:mt-0 text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Servicios Cifuentes. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
