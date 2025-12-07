import { GoogleGenAI, Chat } from "@google/genai";

// We use the singleton pattern effectively by declaring the client outside the function scope
// but initialized lazily or checking existence. 
// However, per instructions, we create a new instance usually or manage state in the component.
// For a chat service, it's good to keep the chat session instance in the component state,
// but the helper to create it can be here.

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual experto de "Cifuentes", una empresa líder en servicios del hogar.
Tu tono es profesional, amable, servicial y experto en reparaciones.
Responde siempre en Español.

Tus objetivos son:
1. Ayudar a los clientes a entender nuestros servicios: Pintura, Instalaciones Eléctricas, Cámaras de Seguridad, Impermeabilización, Plomería y Reparaciones Generales.
2. Dar consejos básicos y seguros sobre mantenimiento del hogar si te preguntan (ej. "¿Cómo sé si necesito impermeabilizar?").
3. Si el usuario quiere una cotización exacta, pídele que deje sus datos en la sección de contacto o llame al teléfono de la empresa, ya que necesitas evaluar el sitio.
4. Sé conciso pero útil.

Servicios detallados:
- Pintura: Interiores, exteriores, texturizados.
- Electricidad: Cableado, instalaciones de lámparas, reparación de cortos, acometidas.
- Cámaras de Seguridad: CCTV, configuración remota, sensores de movimiento.
- Impermeabilización: Techos, paredes, cisternas. Garantía por escrito.
- Plomería: Fugas, instalación de baños, tinacos, bombas de agua.
- Reparaciones Generales: Instalación de muebles, puertas, ventanas, tablaroca.
`;

export const createChatSession = (): Chat => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.error("API Key is missing. Chat functionality will not work.");
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};
