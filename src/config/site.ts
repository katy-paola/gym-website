export const SITE_URL = "https://snapfitness2026.example.com";

export const site = {
  name: "Snap Fitness",
  tagline: "Supera tus límites",
  description:
    "Gimnasio con acceso libre y entrenamiento personalizado. Un espacio moderno, limpio y con equipo profesional para lograr tus objetivos de fitness.",
  instagram: "https://www.instagram.com/snapfitness2026/",
  instagramHandle: "@snapfitness2026",
  phoneDisplay: "+57 302 351 8805",
  phoneRaw: "+573023518805",
  whatsapp: "https://wa.me/573023518805",
  whatsappMessage:
    "Hola, me gustaría información sobre membresías y el entrenamiento personalizado de Snap Fitness.",
  address: {
    street: "Calle 00 # 00-00",
    city: "San Pedro",
    department: "Sucre",
    country: "Colombia",
    mapsUrl: "https://maps.google.com/?q=Snap+Fitness",
  },
  hours: [
    { days: "Lunes a viernes", hours: "5:00 a. m. – 8:00 p. m." },
    { days: "Sábados", hours: "6:00 a. m. – 11:00 a. m." },
  ],
  is24_7: false,
} as const;

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#membresia", label: "Membresía" },
  { href: "#entrenamiento", label: "Entrenamiento" },
  { href: "#equipo", label: "Equipo" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    title: "Acceso libre al gimnasio",
    description:
      "Entrena cuando quieras dentro de nuestro horario de atención. Usa el equipo de cardio y fuerza a tu ritmo, sin rigideces ni esperas.",
    icon: "key",
  },
  {
    title: "Entrenamiento personalizado",
    description:
      "Un plan diseñado según tus objetivos, nivel y disponibilidad, con la guía de un entrenador que te acompaña en cada sesión.",
    icon: "target",
  },
  {
    title: "Asesoría y seguimiento",
    description:
      "Recomendaciones de técnica, rutina y hábitos para que avances de forma segura y sostenida, no solo el primer mes.",
    icon: "chart",
  },
  {
    title: "Ambiente inclusivo",
    description:
      "Un espacio limpio, ordenado y sin juicios, pensado tanto para principiantes como para personas con experiencia.",
    icon: "heart",
  },
] as const;

export const membership = {
  includes: [
    "Acceso al gimnasio en horario de atención",
    "Uso de equipos de cardio y fuerza",
    "Orientación inicial para empezar con seguridad",
    "Espacios limpios y con mantenimiento",
    "Atención del equipo en el lugar",
  ],
  plans: [
    {
      name: "Por día",
      price: "$3.500",
      period: "Paga solo el día que vayas",
      cta: "Reservar por WhatsApp",
      highlighted: false,
      features: [
        "Acceso al gimnasio por un día",
        "Uso de equipos de cardio y fuerza",
        "Orientación del equipo",
      ],
    },
    {
      name: "Mensual",
      price: "$70.000",
      period: "Por mes",
      cta: "Reservar por WhatsApp",
      highlighted: true,
      features: [
        "Acceso al gimnasio todo el mes",
        "Uso de equipos de cardio y fuerza",
        "Orientación inicial",
        "Atención del equipo",
      ],
    },
    {
      name: "Entrenamiento personalizado",
      price: null,
      period: "Precio según tus objetivos",
      cta: "Pedir cotización",
      highlighted: false,
      features: [
        "Plan según tus objetivos",
        "Diseñada para tu nivel",
        "Ajustes según tus avances",
      ],
    },
  ],
} as const;

export const trainingSteps = [
  {
    step: "01",
    title: "Evaluación inicial",
    description:
      "Conversamos sobre tus objetivos, experiencia, disponibilidad y cualquier condición que debamos tener en cuenta.",
  },
  {
    step: "02",
    title: "Plan a medida",
    description:
      "Diseñamos una rutina adaptada a tu nivel: frecuencia, ejercicios, progresión y enfoque (fuerza, composición corporal, energía…).",
  },
  {
    step: "03",
    title: "Entrenamiento guiado",
    description:
      "Ejecutas cada sesión con acompañamiento del entrenador: técnica correcta, intensidad adecuada y motivación constante.",
  },
  {
    step: "04",
    title: "Seguimiento y ajustes",
    description:
      "Revisamos avances y ajustamos el plan para que sigas progresando sin estancamientos ni lesiones.",
  },
] as const;

export const trainers = [
  {
    name: "Nombre del entrenador",
    role: "Entrenador",
    specialty: "Orientación en el gimnasio",
    image:
      "https://images.unsplash.com/photo-1711006366881-5076ba350008?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "Nombre del entrenador",
    role: "Entrenador",
    specialty: "Orientación en el gimnasio",
    image:
      "https://images.unsplash.com/photo-1578924608828-79a71150f711?w=600&h=600&fit=crop&crop=faces",
  },
] as const;

export const facilities = [
  {
    title: "Zona de cardio",
    description:
      "Cintas, bicicletas y elípticas para calentamiento y resistencia.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&h=800&fit=crop",
  },
  {
    title: "Zona de fuerza",
    description: "Máquinas y pesas libres para trabajar todo el cuerpo.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=700&fit=crop",
  },
  {
    title: "Área funcional",
    description:
      "Espacio libre para calentamiento, movilidad y ejercicios funcionales.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=700&fit=crop",
  },
  {
    title: "Espacios limpios y ordenados",
    description:
      "Instalaciones cuidadas, con atención constante a la higiene y el mantenimiento.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&h=700&fit=crop",
  },
] as const;

export const faqs = [
  {
    q: "¿El gimnasio es 24/7?",
    a: "No. Contamos con acceso libre dentro de nuestro horario de atención. Consulta los horarios actualizados en esta página o escríbenos por WhatsApp.",
  },
  {
    q: "¿Necesito experiencia previa para entrenar aquí?",
    a: "No. El gimnasio es apto para principiantes: te orientamos sobre el uso del equipo y, si lo deseas, puedes empezar con entrenamiento personalizado.",
  },
  {
    q: "¿Cómo funciona el entrenamiento personalizado?",
    a: "Primero hacemos una evaluación de tus objetivos y nivel, luego diseñamos tu plan, entrenas con acompañamiento y hacemos ajustes según tus avances.",
  },
  {
    q: "¿Puedo elegir el entrenador del personalizado?",
    a: "Sí. Al escribir por WhatsApp puedes indicar con cuál entrenador prefieres coordinar. Si no especificas ninguno, te atiende el equipo disponible.",
  },
  {
    q: "¿Hay permanencia o contrato largo?",
    a: "No. Puedes pagar el día ($3.500) o el mes ($70.000); el entrenamiento personalizado se cotiza por WhatsApp.",
  },
  {
    q: "¿Cómo agendo una visita o clase de prueba?",
    a: "Escríbenos al WhatsApp +57 302 351 8805 y coordinamos una visita o una primera sesión sin compromiso.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en [dirección placeholder]. Consulta el mapa en la sección de horarios y ubicación o pide indicaciones por WhatsApp.",
  },
] as const;
