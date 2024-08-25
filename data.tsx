import { BookText, CodeSquare, HomeIcon, UserRound, Award,Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UCDvaO2XLKRxlbDfu9Onm2WA",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jair-sanchez-1509a72b9/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/?lang=es",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
    {
        id: 6,
        title: "Certificaciones",
        icon: <Award  size={25} color="#fff" strokeWidth={1} />,
        link: "/certificaciones",
    },
    {
        id: 7,
        title: "Skills",
        icon: <Rocket  size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "AI Developer",
        subtitle: "Inova Solutions en Español",
        description: "Colaboro con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital .Ademas desaarrollo soluciones con Inteligenica Artificial",
        date: "Abril 2024 ",
    },
    {
        id: 2,
        title: "Proyecto Web Pagina para un Hotel",
        subtitle: "Escuela Politecnica Nacional",
        description: "Trabaje en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Con tecnologias con JS,PHP,MySQL. ",
        date: "Nov 2023",
    },
    {
        id: 3,
        title: "AI Software Developer",
        subtitle: "Proyecto de Recnocimiento Facial",
        description: "Trabaje en un proyecto de reconocimietno facial con redes neuronales Convolucionales.",
        date: "Jul 2023",
    },
    {
        id: 4,
        title: "Proyecto de Inclusion Digital",
        subtitle: "Inclusion Digital EPN.",
        description: "Este proyecto se enfoca en reducir la brecha digital en comunidades vulnerables, proporcionando acceso a herramientas tecnológicas, capacitación en habilidades digitales y soporte técnico. A través de talleres y programas educativos, el proyecto busca empoderar a los participantes para que puedan aprovechar al máximo las oportunidades que ofrece el mundo digital.",
        date: "Ene 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 20,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 50,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20,
        text: "Certificaciones",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Inteligencia Artificial",
        description: "Desarrollo chatBots y modelos de Inteligencia Artifical con interfaces webs modernas e increibles",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "CyberSeguridad",
        description: "Con IA te puedo ayudar a estar mas protegido y menos vulnerable ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];