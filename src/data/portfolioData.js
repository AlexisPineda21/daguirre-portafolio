export const portfolioData = {
  navigation: [
    { label: 'Sobre mí', href: '/#sobre-mi' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Reconocimientos', href: '/#reconocimientos' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  hero: {
    name: 'Daniela Aguirre',
    role: 'Diseñadora de modas',
    badge: 'Portafolio',
    tagline:
      'Moda con visión conceptual, sensibilidad material y una mirada contemporánea sobre la creación.',
    description:
      'Diseña proyectos que articulan investigación, narrativa visual y desarrollo de colecciones con intención estratégica.',
    primaryCta: {
      label: 'Ver proyectos',
      href: '/#proyectos',
    },
    secondaryCta: {
      label: 'Contactar',
      href: '/#contacto',
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
        title: 'Formación',
        value: 'Último semestre',
        description:
          'Diseño y Gestión de la Moda y el Textil en la Universidad de Medellín.',
      },
      {
        title: 'Enfoque',
        value: 'Moda + gestión',
        description:
          'Creación de colecciones, investigación, marca y proyectos creativos.',
      },
      {
        title: 'Base',
        value: 'Medellín',
        description:
          'Una mirada local con proyección profesional dentro del sector moda.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Una diseñadora emergente con criterio conceptual, sensibilidad textil y visión de marca.',
    description:
      'Daniela Aguirre es estudiante de último semestre de Diseño y Gestión de la Moda y el Textil, con énfasis en la creación de empresas de base creativa.',
    story: [
      'Su proceso parte de la investigación, la observación del contexto y la construcción de narrativas visuales que conectan cuerpo, materialidad e identidad.',
      'Desde su formación en la Universidad de Medellín, ha fortalecido una mirada integral que une desarrollo de colecciones, gestión de proyectos creativos y pensamiento estratégico aplicado a la moda.',
      'Su perfil combina precisión técnica, comunicación clara y una sensibilidad contemporánea para construir propuestas con intención estética y coherencia conceptual.',
    ],
    pillars: [
      {
        title: 'Investigación y concepto',
        description:
          'Construcción de propuestas a partir de observación, análisis de tendencias, referentes culturales y narrativa visual.',
      },
      {
        title: 'Colecciones con identidad',
        description:
          'Desarrollo de proyectos coherentes en silueta, materiales, intención, styling y lenguaje de marca.',
      },
      {
        title: 'Gestión creativa',
        description:
          'Planificación de procesos, organización de entregables y coordinación de proyectos con enfoque profesional.',
      },
    ],
  },
  projectsIntro: {
    eyebrow: 'Proyectos',
    title: 'Colecciones construidas desde concepto, oficio y exploración visual.',
    description:
      'Cada proyecto abre un universo propio. Selecciona una colección para navegar hacia su página de detalle.',
  },
  projects: [
    {
      id: 'deconstruccion',
      title: 'Deconstrucción',
      imageFolder: 'deconstruccion',
      coverImage: 'IMG_8844-2.jpg',
      themeColor: '#6a041a',
      themeTextColor: '#fff7ef',
      year: '2024',
      category: 'Pasarela / Concepto',
      description:
        'Exploración de siluetas fragmentadas y construcción textil desde la transformación de la prenda, con una mirada experimental y contemporánea.',
      details: [
        'Trabaja la prenda como una estructura abierta, capaz de ser reinterpretada desde cortes, capas y desplazamientos.',
        'Propone una lectura visual donde la forma se desmonta para revelar nuevas posibilidades de composición.',
        'Su lenguaje se apoya en contrastes, tensión formal y una narrativa de reconstrucción estética.',
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
      id: 'entrelazados-en-el-tiempo',
      title: 'Entrelazados en el tiempo',
      imageFolder: 'entrelazados en el tiempo',
      coverImage: '1-309.jpg',
      themeColor: '#2174d4',
      themeTextColor: '#f5f2ea',
      year: '2024',
      category: 'Colección / Enfoque social',
      description:
        'Propuesta que conecta memoria, tejido social e identidad a través de una narrativa sensible y una lectura del diseño como herramienta de conversación.',
      details: [
        'La colección se construye desde la relación entre memoria, vínculo y materialidad.',
        'Explora el acto de entrelazar como gesto simbólico y como recurso visual dentro de la prenda.',
        'Su intención es traducir historias colectivas en un lenguaje de moda cercano, sensible y contemporáneo.',
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
      id: 'nubes-de-papel',
      title: 'Nubes de papel',
      imageFolder: 'nubes de papel',
      coverImage: 'ffc96f79-aa06-4e58-baf4-048bb53bbaee.JPG',
      themeColor: '#FFB6D9',
      themeTextColor: '#1f1b17',
      year: '2025',
      category: 'Colección infantil',
      description:
        'Colección infantil que interpreta ligereza, juego y fantasía desde un lenguaje visual delicado, limpio y contemporáneo.',
      details: [
        'La colección traduce la imaginación infantil en formas suaves, proporciones delicadas y gestos lúdicos.',
        'Su universo visual trabaja ligereza, volumen y una narrativa poética alrededor del vestir.',
        'El proyecto busca equilibrar fantasía, claridad formal y sensibilidad de colección.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Nubes de papel',
        eyebrow: 'Proyecto 03',
        label: 'Nubes de papel',
        caption:
          'Espacio para fotografía de pasarela, detalle de colección o mood visual.',
        palette: ['#f3eee9', '#d5c8b8', '#998571'],
      },
    },
    {
      id: 'piel-viva',
      title: 'Piel Viva',
      imageFolder: 'piel viva',
      coverImage: 'a0ec7ba5-7c59-4435-806a-6f41af272bb5.JPG',
      themeColor: '#7ca081',
      themeTextColor: '#f5f2ea',
      year: '2025',
      category: 'Biovestido / Innovación material',
      description:
        'Investigación sobre biovestidos y superficies vivas que propone una relación entre moda, naturaleza y experimentación material.',
      details: [
        'Explora la posibilidad de que la prenda funcione como una superficie viva y cambiante.',
        'Relaciona cuerpo, textil y naturaleza desde una perspectiva experimental del vestir.',
        'Su desarrollo material propone una conversación entre diseño, cuidado y transformación orgánica.',
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
    },
    {
      id: 'multiplicidad-del-yo',
      title: 'Multiplicidad del yo',
      imageFolder: 'multiplicidad del yo',
      coverImage: '0177.jpg',
      themeColor: '#6a041a',
      themeTextColor: '#fff7ef',
      year: '2025',
      category: 'Colección / Identidad',
      description:
        'Colección que explora la identidad como un territorio cambiante, construido por capas, contrastes y gestos íntimos.',
      details: [
        'Aborda el yo como una composición múltiple donde conviven fuerza, vulnerabilidad y transformación.',
        'Trabaja una narrativa visual basada en capas, presencia corporal y variaciones de carácter.',
        'La propuesta conecta cuerpo, memoria y expresión personal desde una mirada editorial.',
      ],
      image: {
        src: '',
        alt: 'Placeholder del proyecto Multiplicidad del yo',
        eyebrow: 'Proyecto 05',
        label: 'Multiplicidad',
        caption:
          'Espacio para fotografía editorial, exploración de styling o narrativa visual.',
        palette: ['#eee7df', '#c7b5a5', '#6f6258'],
      },
    },
  ],
  recognitionsIntro: {
    eyebrow: 'Reconocimientos',
    title: 'Hitos que reflejan proyección, presencia en escenarios de moda y validación del proceso creativo.',
    description:
      'Una selección de participaciones, publicaciones y nominaciones que acompañan el crecimiento profesional de Daniela.',
  },
  recognitions: [
    {
      year: '2024',
      title: 'Colombiamoda 2024',
      project: 'Deconstrucción',
      description:
        'Participación en la pasarela “Futuros” de la Universidad de Medellín.',
    },
    {
      year: '2024',
      title: 'RAD Social 2024',
      project: 'Entrelazados en el tiempo',
      description:
        'Presentación de la colección en una charla sobre proyectos con enfoque social y su aporte al diseño.',
    },
    {
      year: '2025',
      title: 'gRADo de RAD Social 2025',
      project: 'Piel Viva',
      description:
        'Selección del vestuario como proyecto destacado de diseño colombiano, publicado en la plataforma gRADo.',
    },
    {
      year: '2025',
      title: 'Colombiamoda 2025',
      project: 'Piel Viva',
      description:
        'Participación como biovestido con crecimiento de plantas sobre la tela.',
    },
    {
      year: '2025',
      title: 'Colombiamoda 2025',
      project: 'Nubes de papel',
      description:
        'Participación en la pasarela “Futuros” de la Universidad de Medellín como colección infantil.',
    },
    {
      year: '2026',
      title: 'Premios Lápiz de Acero 2026',
      project: 'Biovestidos',
      description:
        'Nominación en la categoría Moda por un proyecto de biovestidos.',
    },
  ],
  education: {
    eyebrow: 'Educación',
    institution: 'Universidad de Medellín',
    location: 'Medellín, Colombia',
    degree: 'Diseño y Gestión de la Moda y el Textil',
    average: '4.4',
    stage: 'Último semestre',
    emphasis: 'Énfasis en creación de empresas de base creativa',
  },
  skills: {
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
