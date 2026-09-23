export const SITE_URL = 'https://snapfitness2026.example.com';

export const site = {
  name: 'Snap Fitness',
  tagline: 'Entrena a tu ritmo. Alcanza tus metas.',
  description:
    'Gimnasio con acceso libre y entrenamiento personalizado. Un espacio moderno, limpio y con equipo profesional para lograr tus objetivos de fitness.',
  instagram: 'https://www.instagram.com/snapfitness2026/',
  instagramHandle: '@snapfitness2026',
  phoneDisplay: '+57 302 351 8805',
  phoneRaw: '+573023518805',
  whatsapp: 'https://wa.me/573023518805',
  whatsappMessage:
    'Hola, me gustaría información sobre membresías y el entrenamiento personalizado de Snap Fitness.',
  address: {
    street: 'Calle 00 # 00-00',
    city: 'Ciudad',
    department: 'Departamento',
    country: 'Colombia',
    mapsUrl: 'https://maps.google.com/?q=Snap+Fitness',
  },
  hours: [
    { days: 'Lunes a viernes', hours: '6:00 a. m. – 9:00 p. m.' },
    { days: 'Sábados', hours: '8:00 a. m. – 6:00 p. m.' },
    { days: 'Domingos y festivos', hours: '9:00 a. m. – 2:00 p. m.' },
  ],
  is24_7: false,
} as const;

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#membresia', label: 'Membresía' },
  { href: '#entrenamiento', label: 'Entrenamiento' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const services = [
  {
    title: 'Acceso libre al gimnasio',
    description:
      'Entrena cuando quieras dentro de nuestro horario de atención. Usa el equipo de cardio y fuerza a tu ritmo, sin rigideces ni esperas.',
    icon: 'key',
  },
  {
    title: 'Entrenamiento personalizado',
    description:
      'Un plan diseñado según tus objetivos, nivel y disponibilidad, con la guía de un entrenador que te acompaña en cada sesión.',
    icon: 'target',
  },
  {
    title: 'Asesoría y seguimiento',
    description:
      'Recomendaciones de técnica, rutina y hábitos para que avances de forma segura y sostenida, no solo el primer mes.',
    icon: 'chart',
  },
  {
    title: 'Ambiente inclusivo',
    description:
      'Un espacio limpio, ordenado y sin juicios, pensado tanto para principiantes como para personas con experiencia.',
    icon: 'heart',
  },
] as const;

export const membership = {
  includes: [
    'Acceso al gimnasio en horario de atención',
    'Uso de equipos de cardio y fuerza',
    'Orientación inicial para empezar con seguridad',
    'Espacios limpios y con mantenimiento',
    'Atención del equipo en el lugar',
  ],
  plans: [
    {
      name: 'Mensual',
      price: '$ Consultar',
      period: 'por mes',
      highlighted: false,
      features: ['Acceso al gimnasio', 'Orientación inicial', 'Sin permanencia larga'],
    },
    {
      name: 'Trimestral',
      price: '$ Consultar',
      period: 'por 3 meses',
      highlighted: true,
      features: [
        'Acceso al gimnasio',
        'Orientación inicial',
        'Seguimiento de progreso',
        'Mejor valor por mes',
      ],
    },
    {
      name: 'Entrenamiento personalizado',
      price: '$ Consultar',
      period: 'plan a medida',
      highlighted: false,
      features: [
        'Plan según tus objetivos',
        'Sesiones con entrenador',
        'Ajustes y seguimiento',
      ],
    },
  ],
  note: 'Los precios y planes definitivos se confirman por WhatsApp. Escríbenos y te enviamos la información actualizada.',
} as const;

export const trainingSteps = [
  {
    step: '01',
    title: 'Evaluación inicial',
    description:
      'Conversamos sobre tus objetivos, experiencia, disponibilidad y cualquier condición que debamos tener en cuenta.',
  },
  {
    step: '02',
    title: 'Plan a medida',
    description:
      'Diseñamos una rutina adaptada a tu nivel: frecuencia, ejercicios, progresión y enfoque (fuerza, composición corporal, energía…).',
  },
  {
    step: '03',
    title: 'Entrenamiento guiado',
    description:
      'Ejecutas cada sesión con acompañamiento del entrenador: técnica correcta, intensidad adecuada y motivación constante.',
  },
  {
    step: '04',
    title: 'Seguimiento y ajustes',
    description:
      'Revisamos avances y ajustamos el plan para que sigas progresando sin estancamientos ni lesiones.',
  },
] as const;

export const trainers = [
  {
    name: 'Nombre del entrenador',
    role: 'Entrenador principal',
    specialty: 'Fuerza y acondicionamiento',
    bio: 'Especialista en acompañar a personas que inician y a quienes buscan rendir más. Enfoque en técnica, constancia y resultados sostenibles.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
  },
  {
    name: 'Nombre del entrenador',
    role: 'Entrenadora personal',
    specialty: 'Pérdida de grasa y hábitos',
    bio: 'Acompaña procesos de transformación con planes realistas, seguimiento cercano y rutinas que se adaptan a la vida diaria.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop',
  },
  {
    name: 'Nombre del entrenador',
    role: 'Entrenador personal',
    specialty: 'Principiantes y técnica',
    bio: 'Ideal si es tu primera vez en un gimnasio: enseña el uso del equipo, la técnica básica y a construir confianza desde el día uno.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop',
  },
] as const;

export const facilities = [
  {
    title: 'Zona de cardio',
    description: 'Cintas, bicicletas y elípticas para calentamiento y resistencia.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&h=800&fit=crop',
  },
  {
    title: 'Zona de fuerza',
    description: 'Máquinas y pesas libres para trabajar todo el cuerpo.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=700&fit=crop',
  },
  {
    title: 'Área funcional',
    description: 'Espacio libre para calentamiento, movilidad y ejercicios funcionales.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=700&fit=crop',
  },
  {
    title: 'Espacios limpios y ordenados',
    description: 'Instalaciones cuidadas, con atención constante a la higiene y el mantenimiento.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&h=700&fit=crop',
  },
] as const;

export const faqs = [
  {
    q: '¿El gimnasio es 24/7?',
    a: 'No. Contamos con acceso libre dentro de nuestro horario de atención. Consulta los horarios actualizados en esta página o escríbenos por WhatsApp.',
  },
  {
    q: '¿Necesito experiencia previa para entrenar aquí?',
    a: 'No. El gimnasio es apto para principiantes: te orientamos sobre el uso del equipo y, si lo deseas, puedes empezar con entrenamiento personalizado.',
  },
  {
    q: '¿Cómo funciona el entrenamiento personalizado?',
    a: 'Primero hacemos una evaluación de tus objetivos y nivel, luego diseñamos tu plan, entrenas con acompañamiento y hacemos ajustes según tus avances.',
  },
  {
    q: '¿Hay permanencia o contrato largo?',
    a: 'Ofrecemos planes flexibles. La modalidad exacta y las condiciones te las confirmamos por WhatsApp antes de inscribirte.',
  },
  {
    q: '¿Cómo agendo una visita o clase de prueba?',
    a: 'Escríbenos al WhatsApp +57 302 351 8805 y coordinamos una visita o una primera sesión sin compromiso.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'Estamos en [dirección placeholder]. Consulta el mapa en la sección de horarios y ubicación o pide indicaciones por WhatsApp.',
  },
] as const;
