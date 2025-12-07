import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Listo para mejorar tu hogar?
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Contáctanos hoy para una cotización gratuita. Estamos listos para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Teléfono / WhatsApp</p>
                  <p className="text-slate-400">+52 (55) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Correo Electrónico</p>
                  <p className="text-slate-400">contacto@cifuentes-servicios.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Cobertura</p>
                  <p className="text-slate-400">Ciudad de México y Área Metropolitana</p>
                </div>
              </div>
               <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Horario</p>
                  <p className="text-slate-400">Lunes a Sábado: 8:00 AM - 7:00 PM</p>
                  <p className="text-slate-500 text-sm">Emergencias 24/7 (Sujeto a disponibilidad)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md bg-gray-50"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md bg-gray-50"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Servicio de Interés
                </label>
                <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md bg-gray-50"
                >
                    <option>Pintura</option>
                    <option>Electricidad</option>
                    <option>Cámaras de Seguridad</option>
                    <option>Impermeabilización</option>
                    <option>Plomería</option>
                    <option>Reparaciones Generales</option>
                    <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md bg-gray-50"
                    placeholder="Describe brevemente lo que necesitas..."
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
