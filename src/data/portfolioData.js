import profilePhoto from '../../images/Foto de perfil/foto-perfil.jpg?url'

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
      'Moda con enfoque conceptual y sensibilidad material, entendida como un medio para pensar y comunicar ideas.',
    description:
      'Desarrollo proyectos que conectan investigación, narrativa y creación, dando lugar a conceptos que se traducen en piezas con significado.',
    primaryCta: {
      label: 'Ver proyectos',
      href: '/#proyectos',
    },
    secondaryCta: {
      label: 'Contactar',
      href: '/#contacto',
    },
    image: {
      src: profilePhoto,
      alt: 'Retrato de Daniela Aguirre',
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
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Diseñadora enfocada en la construcción de significado, interesada en saber cómo las ideas toman forma.',
    description:
      'Soy Daniela Aguirre, estudiante de último semestre de diseño gestión de la moda y el textil de la Universidad de Medellín, con énfasis en creación de empresa de base creativa y un gran interés por transformar ideas en piezas.',
    story: [
      'Soy una diseñadora que trabaja desde la construcción de sentido más que desde la forma misma. Mi proceso inicia en la historia, el mensaje y el concepto, porque entiendo la moda como un lenguaje capaz de transmitir, cuestionar y comunicar algo que realmente genere impacto. Me interesa crear prendas que no se queden en lo visual, sino que tengan significado y generen una conexión con quien las observa o las habita. Mi enfoque es conceptual y narrativo, busco construir ideas que se traduzcan en experiencias. Cada proyecto lo abordo como un proceso de exploración donde el pensamiento, la intención y la materialización se entrelazan para dar lugar a una moda que dice algo, que propone y que deja una sensación más allá de lo evidente.',
    ],
    pillars: [
      {
        title: 'Punto de partida',
        description:
          'Todo comienza con una inquietud. Algo que no termino de entender o que me genera curiosidad. Investigo, observo y conecto ideas hasta construir una base que me permita desarrollar desde ahí.',
      },
      {
        title: 'Lo que atraviesa el trabajo',
        description:
          'No me interesa hacer piezas vacías. Busco que cada colección tenga algo que decir, que comunique una idea o una emoción y que genere una relación con quien la ve o la usa.',
      },
      {
        title: 'Cómo toma forma',
        description:
          'Aterrizo esas ideas en decisiones concretas como silueta, proporción, textura. Cada elección responde a una intención, hasta que todo se alinea en una pieza que sostiene lo que quiero expresar.',
      },
    ],
  },
  projectsIntro: {
    eyebrow: 'Proyectos',
    title: 'Colecciones que surgen de preguntas y de la necesidad de poner ideas en forma.',
    description:
      'Este portafolio es un diario. Un lugar donde voy dejando fragmentos de mí a través de cada colección. Cada una responde a una forma distinta de ver, de pensar y de habitar. No son solo prendas, son registros de ideas, de inquietudes y de formas de habitar. Porque no soy una sola cosa, y este proceso tampoco lo es.',
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
        'Deconstrucción nace de la necesidad de cuestionar lo que se nos ha enseñado a ser. Propone abrir un nuevo discurso sobre las masculinidades, uno más amplio, más libre, donde otras formas de habitar el cuerpo puedan existir sin ser invalidadas. Es una respuesta a los estándares que históricamente han limitado, juzgado y violentado todo aquello que se sale de lo establecido. A quienes no encajan, a quienes incomodan, a quienes han tenido que silenciarse para ser aceptados. A través del vestuario, el proyecto busca visibilizar esas tensiones y dar lugar a otras expresiones. No como una tendencia, sino como una postura, la de permitir que cada cuerpo se construya desde su propia forma de ser.',
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
        'Nosotros nos erguimos con orgullo en nuestra historia, tejida con hilos de resistencia, desde los confines de la esclavitud mis antepasados lucharon contra las cadenas que los detenían. No sé quién soy… pero en la historia pienso encontrarme, mi familia proviene de un linaje lleno de cultura y memoria, ramificaciones que construyeron comunidades e historias de lucha y resiliencia, de ella hago parte. Hoy quiero conmemorarlos y festejarlos, haciéndolos parte de este camino creativo, soy heredera de aquellos que gritaron cantos de libertad y a través de hilos y tejidos continuare con este testimonio de fortaleza.',
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
        'La colección se inspira en los sueños y aspiraciones de los niños de la fundación Caespro, creando un mundo imaginario donde ellos son los héroes de sus propias historias. No se trata solo de ropa, sino de una narrativa visual que celebra la esperanza, la creatividad y el potencial ilimitado de cada niño. A través de diseños coloridos, estampados creativos y detalles evocadores, cada prenda refleja el papel especial que cada uno tiene en este universo de fantasía. La colección resalta la capacidad de los niños para transformar su realidad mediante el arte y la autoexpresión, especialmente aquellos que han crecido en entornos difíciles, permitiéndoles pintar un mundo lleno de sueños, esperanza y libertad.',
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
        'Piel viva surge de cuestionar la idea de separación. Durante mucho tiempo hemos entendido el cuerpo humano como algo aislado, como un límite que nos distancia de lo que nos rodea. Este proyecto propone lo contrario, pensar el cuerpo como un territorio en relación, permeable, atravesado por lo vivo. Aquí, lo humano no se impone ni se separa, sino que coexiste. Se desdibuja la frontera entre lo propio y lo externo, entre lo que controlamos y lo que simplemente sucede. El vestir deja de ser una barrera y se convierte en una forma de habitar, de relacionarse, de entender el cuerpo desde otra sensibilidad. Piel viva nos invita a repensar cómo nos ubicamos en el mundo, a reconocer lo vivo como algo que no está afuera, sino que nos atraviesa, nos sostiene y nos transforma.',
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
        'La obsesión por alcanzar la perfección se convierte en una dinámica que desgarra la identidad hasta fragmentarla en múltiples versiones de uno mismo. Las personas comienzan a habitar diferentes personajes, cada uno diseñado para encajar en las expectativas ajenas. Estas capas funcionan como máscaras que prometen aceptación, pero que al mismo tiempo quebrantan la autenticidad, generando un vacío interno cada vez más profundo. Donde las voces se multiplican y disputan el control, transformando el cuerpo en un campo de batalla entre lo que se es, lo que se espera ser y lo que jamás se podrá alcanzar.',
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
    title: 'Algunos momentos que han marcado mi recorrido.',
    description:
      'Espacios, publicaciones y reconocimientos que se han ido sumando en el camino...',
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
    description: '',
    email: 'daguirre434@soyudemedellin.edu.co',
    phone: '+57 3107043573',
    phoneHref: 'tel:+573107043573',
    emailHref: 'mailto:daguirre434@soyudemedellin.edu.co',
    location: 'Medellín, Colombia',
    social: [
      {
        label: 'Instagram',
        value: '@dani_aguirren',
        href: 'https://www.instagram.com/dani_aguirren?igsh=dXB6ZXF0c3hocThn&utm_source=qr',
      },
      {
        label: 'LinkedIn',
        value: 'daniela-aguirre-nuñez',
        href: 'https://www.linkedin.com/in/daniela-aguirre-nuñez-9478473ab',
      },
    ],
  },
  footer: {
    name: 'Daniela Aguirre',
    message: 'Moda, concepto y dirección creativa con una sensibilidad editorial contemporánea.',
  },
}
