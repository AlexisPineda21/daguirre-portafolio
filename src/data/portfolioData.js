export const portfolioData = {
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Idiomas', href: '#idiomas' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    name: 'Daniela Aguirre',
    role: 'Diseñadora de modas',
    badge: 'Portafolio profesional',
    tagline:
      'Moda con visión conceptual, sensibilidad material y una mirada contemporánea sobre la creación.',
    description:
      'Diseña proyectos que articulan investigación, narrativa visual y desarrollo de colecciones con intención estratégica.',
    primaryCta: {
      label: 'Ver proyectos',
      href: '#proyectos',
    },
    secondaryCta: {
      label: 'Contactar',
      href: '#contacto',
    },
    image: {
      src: '',
      alt: 'Placeholder editorial para Daniela Aguirre',
      eyebrow: 'Lookbook personal',
      label: 'Daniela Aguirre',
      caption:
        'Retrato principal o imagen editorial lista para ser reemplazada por fotografía profesional.',
      palette: ['#f1e7dd', '#cdb39a', '#83624b'],
    },
    highlights: [
      {
        title: 'Colombiamoda',
        value: '2024 / 2025',
        description:
          'Participaciones con la Universidad de Medellín en la pasarela Futuros.',
      },
      {
        title: 'RAD Social',
        value: '2024 / 2025',
        description:
          'Presentación con enfoque social y publicación destacada en gRADo.',
      },
      {
        title: 'Lápiz de Acero',
        value: '2026',
        description:
          'Nominación en la categoría Moda por un proyecto de biovestidos.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Diseño de moda con criterio, investigación y dirección creativa.',
    description:
      'Daniela Aguirre es estudiante de último semestre de Diseño y Gestión de la Moda y el Textil, con énfasis en la creación de empresas de base creativa. Tiene habilidades en investigación, conceptualización, desarrollo de colecciones y gestión de proyectos.',
    note: 'Su enfoque combina sensibilidad estética, estructura conceptual y una lectura contemporánea del vestir.',
    focusAreas: [
      {
        title: 'Investigación y concepto',
        description:
          'Construcción de propuestas a partir de observación, análisis y narrativa visual.',
      },
      {
        title: 'Colecciones con identidad',
        description:
          'Desarrollo de proyectos coherentes en silueta, materiales, intención y lenguaje.',
      },
      {
        title: 'Gestión creativa',
        description:
          'Planificación de procesos, organización de entregables y visión estratégica de marca.',
      },
    ],
  },
  projectsIntro: {
    eyebrow: 'Proyectos destacados',
    title: 'Colecciones y propuestas que traducen concepto, oficio y proyección profesional.',
    description:
      'Una selección de proyectos que evidencian exploración formal, sensibilidad material y presencia en plataformas relevantes del diseño y la moda.',
  },
  projects: [
    {
      title: 'Deconstrucción',
      imageFolder: 'deconstruccion',
      year: '2024',
      category: 'Pasarela / Concepto',
      description:
        'Exploración de siluetas fragmentadas y construcción textil desde la transformación de la prenda, con una mirada experimental y contemporánea.',
      details: [
        'Participación en la pasarela “Futuros” de la Universidad de Medellín.',
        'Presentado en Colombiamoda 2024.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Deconstrucción',
        eyebrow: 'Proyecto 01',
        label: 'Deconstrucción',
        caption:
          'Espacio para look editorial, ficha visual o detalle de silueta.',
        palette: ['#efe5dc', '#c9b29a', '#7f6655'],
      },
    },
    {
      title: 'Entrelazados en el tiempo',
      imageFolder: 'entrelazados en el tiempo',
      year: '2024',
      category: 'Colección / Enfoque social',
      description:
        'Propuesta que conecta memoria, tejido social e identidad a través de una narrativa sensible y una lectura del diseño como herramienta de conversación.',
      details: [
        'Presentación de la colección en una charla sobre proyectos con enfoque social.',
        'Participación en RAD Social 2024 y su aporte al diseño.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Entrelazados en el tiempo',
        eyebrow: 'Proyecto 02',
        label: 'Entrelazados',
        caption:
          'Espacio para imagen de colección, materialidad o documento curatorial.',
        palette: ['#f0ebe4', '#d7c5b5', '#907866'],
      },
    },
    {
      title: 'Multiplicidad del yo',
      imageFolder: 'multiplicidad del yo',
      year: '2025',
      category: 'Colección / Identidad',
      description:
        'Colección que explora la identidad como un territorio cambiante, construido por capas, contrastes y gestos íntimos. Una propuesta preliminar que conecta cuerpo, memoria y expresión personal desde una mirada editorial.',
      details: [
        'Proyecto incorporado como nueva colección dentro del portafolio profesional.',
        'Descripción inicial pendiente de ajuste con información final del proceso creativo.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Multiplicidad del yo',
        eyebrow: 'Proyecto 03',
        label: 'Multiplicidad',
        caption:
          'Espacio para fotografía editorial, exploración de styling o narrativa visual.',
        palette: ['#eee7df', '#c7b5a5', '#6f6258'],
      },
    },
    {
      title: 'Piel Viva',
      imageFolder: 'piel viva',
      year: '2025',
      category: 'Biovestido / Innovación material',
      description:
        'Investigación sobre biovestidos y superficies vivas que propone una relación entre moda, naturaleza y experimentación material desde una perspectiva de diseño colombiano contemporáneo.',
      details: [
        'Vestuario seleccionado como proyecto destacado de diseño colombiano en la plataforma gRADo de RAD Social 2025.',
        'Participación en Colombiamoda 2025 como biovestido con crecimiento de plantas sobre la tela.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Piel Viva',
        eyebrow: 'Proyecto 04',
        label: 'Piel Viva',
        caption:
          'Espacio para imagen de biovestido, macro de superficie o proceso experimental.',
        palette: ['#ebe3d9', '#b8a38e', '#5f7155'],
      },
      note: 'Este universo de biovestidos también derivó en una nominación a los Premios Lápiz de Acero 2026 en la categoría Moda.',
    },
    {
      title: 'Nubes de papel',
      imageFolder: 'nubes de papel',
      year: '2025',
      category: 'Colección infantil / Pasarela',
      description:
        'Colección infantil que interpreta ligereza, juego y fantasía desde un lenguaje visual delicado, limpio y contemporáneo.',
      details: [
        'Participación en la pasarela “Futuros” de la Universidad de Medellín.',
        'Presentado en Colombiamoda 2025 como colección infantil.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Nubes de papel',
        eyebrow: 'Proyecto 05',
        label: 'Nubes de papel',
        caption:
          'Espacio para fotografía de pasarela, detalle de colección o mood visual.',
        palette: ['#f3eee9', '#d5c8b8', '#998571'],
      },
    },
  ],
  education: {
    eyebrow: 'Educación',
    title: 'Formación académica orientada al diseño y la gestión creativa.',
    description:
      'Un recorrido universitario que integra pensamiento de diseño, desarrollo de producto y visión empresarial aplicada al sector moda.',
    institution: 'Universidad de Medellín',
    location: 'Medellín, Colombia',
    degree: 'Diseño y Gestión de la Moda y el Textil',
    average: '4.4',
    stage: 'Último semestre',
    emphasis: 'Énfasis en creación de empresas de base creativa',
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Herramientas para desarrollar proyectos con claridad, sensibilidad y estructura.',
    description:
      'Capacidades técnicas y humanas que fortalecen el proceso creativo, la colaboración y la materialización de propuestas.',
    groups: [
      {
        title: 'Habilidades técnicas',
        items: [
          'Desarrollo de colecciones',
          'Gestión y planificación de proyectos creativos',
          'Investigación de tendencias y análisis del mercado',
          'Desarrollo de propuestas de marca',
          'Ilustración de moda',
          'Fichas técnicas',
          'Styling de moda',
        ],
      },
      {
        title: 'Habilidades blandas',
        items: [
          'Escucha activa',
          'Comunicación clara y efectiva',
          'Trabajo en equipo',
          'Organización y gestión del tiempo',
          'Pensamiento creativo',
          'Adaptabilidad',
        ],
      },
    ],
  },
  languagesIntro: {
    eyebrow: 'Idiomas',
    title: 'Comunicación clara en contextos locales e internacionales.',
    description:
      'Capacidad para desenvolverse en conversaciones profesionales y académicas dentro del entorno creativo.',
  },
  languages: [
    {
      language: 'Español',
      level: 'Nativo',
      note: 'Comunicación natural, profesional y cercana.',
    },
    {
      language: 'Inglés',
      level: 'B1',
      note: 'Nivel intermedio para intercambio académico y profesional.',
    },
  ],
  contact: {
    eyebrow: 'Contacto',
    title: 'Disponible para oportunidades laborales, colaboraciones y nuevos proyectos.',
    description:
      'Si quieres conocer más sobre su trabajo, conversar sobre una vacante o explorar una colaboración, este portafolio está abierto al diálogo.',
    email: 'daguirre434@soyudemedellin.edu.co',
    phone: '+57 3107043573',
    phoneHref: 'tel:+573107043573',
    emailHref: 'mailto:daguirre434@soyudemedellin.edu.co',
    location: 'Medellín, Colombia',
    social: [
      {
        label: 'Instagram',
        value: 'Placeholder disponible para agregar perfil',
        href: '',
      },
      {
        label: 'LinkedIn',
        value: 'Placeholder disponible para agregar perfil',
        href: '',
      },
    ],
  },
  footer: {
    name: 'Daniela Aguirre',
    message: 'Moda, concepto y dirección creativa con una sensibilidad editorial contemporánea.',
  },
}
