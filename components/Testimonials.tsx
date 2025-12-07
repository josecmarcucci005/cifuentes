import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Gómez',
    role: 'Propietario de Casa',
    content: 'Excelente servicio de impermeabilización. Llegaron puntuales, trabajaron limpio y el precio fue muy justo. Ya pasaron las lluvias y ni una sola gota.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ana Martínez',
    role: 'Administradora de Condominio',
    content: 'Contratamos a Cifuentes para pintar la fachada del edificio y cambiar luminarias. El resultado fue espectacular. Muy recomendados por su profesionalismo.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Carlos Vela',
    role: 'Cliente Particular',
    content: 'Me instalaron 4 cámaras de seguridad en mi negocio. Me explicaron pacientemente cómo usar la app en mi celular. Me siento mucho más seguro.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
             <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                La confianza es nuestro pilar principal.
             </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex-1 p-6 md:p-10">
                    <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                    </div>
                  <blockquote className="flex-1">
                    <p className="text-lg font-medium text-gray-900">"{testimonial.content}"</p>
                  </blockquote>
                </div>
                <div className="p-6 bg-slate-900 md:px-10">
                  <div className="flex items-start">
                    <div className="ml-0">
                      <p className="text-base font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
