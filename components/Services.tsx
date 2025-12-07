import React from 'react';
import { 
  PaintBucket, 
  Zap, 
  Cctv, 
  Droplets, 
  Wrench, 
  Hammer,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: 'pintura',
    title: 'Pintura Profesional',
    description: 'Renovamos tus espacios con pintura de alta calidad para interiores y exteriores. Acabados impecables y limpieza garantizada.',
    icon: PaintBucket,
  },
  {
    id: 'electrico',
    title: 'Instalaciones Eléctricas',
    description: 'Desde cambios de contactos hasta cableado completo. Reparación de cortos y mantenimiento preventivo seguro.',
    icon: Zap,
  },
  {
    id: 'seguridad',
    title: 'Cámaras de Seguridad',
    description: 'Instalación y configuración de sistemas de CCTV. Monitorea tu hogar o negocio desde tu celular las 24 horas.',
    icon: Cctv,
  },
  {
    id: 'impermeabilizacion',
    title: 'Impermeabilización',
    description: 'Protege tu patrimonio de la humedad y goteras. Utilizamos los mejores materiales con garantía por escrito.',
    icon: Droplets,
  },
  {
    id: 'plomeria',
    title: 'Plomería General',
    description: 'Reparación de fugas, instalación de sanitarios, lavabos, tinacos y bombas de agua. Servicio rápido y eficiente.',
    icon: Wrench,
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones del Hogar',
    description: '¿Algo roto? Lo arreglamos. Instalación de soportes de TV, cortinas, puertas, chapas y mantenimiento general.',
    icon: Hammer,
  },
];

const Services: React.FC = () => {
  return (
    <div id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Lo que hacemos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Servicios Expertos a tu Alcance
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Nos encargamos de los problemas técnicos de tu hogar para que tú puedas disfrutar de la tranquilidad.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <div key={service.id} className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-md shadow-lg">
                        <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-6">
                        <ul className="space-y-2">
                             <li className="flex items-center text-sm text-gray-500">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                Personal Calificado
                             </li>
                             <li className="flex items-center text-sm text-gray-500">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                Presupuesto sin compromiso
                             </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
