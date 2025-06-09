export const myProjects = [
    {
        id: 1,
        title: "Vampáginas",
        description: "Descubra obras de domínio público 📚",
        subDescription: [
            "O Vampáginas é um site dedicado à literatura, desenvolvido com React e integrado à API do Google Books.",
            "Oferece uma experiência intuitiva para explorar obras de domínio público, com sinopses, capas e detalhes dos autores.",
            "Conta com busca eficiente, recursos de filtragem e uma interface visual cativante.",
            "Visa construir uma comunidade de leitores, com recomendações, resenhas e discussões.",
        ],
        href: "https://vampaginas.vercel.app",
        logo: "",
        image: "/assets/projects/Vampaginas.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Styled Components",
                path: "/assets/logos/styled-components.svg",
            },
            {
                id: 3,
                name: "React Router",
                path: "/assets/logos/react-router.svg",
            },
            {
                id: 4,
                name: "Axios",
                path: "/assets/logos/api.svg",
            },
        ],

    },
    {
        id: 2,
        title: "FangTalk",
        description: "Aprenda idiomas de forma divertida e envolvente!",
        subDescription: [
            "FangTalk é uma plataforma educacional interativa focada no ensino de idiomas por meio de uma abordagem gamificada.",
            "Desenvolvido com Next.js 14 e estilizado com Tailwind CSS, oferece uma experiência fluida, responsiva e moderna.",
            "A autenticação é feita com Clerk, garantindo segurança e personalização para cada usuário.",
            "Utiliza Drizzle ORM com PostgreSQL (via Neon) para armazenar progresso, pontuações e desafios personalizados.",
            "Elementos visuais como barras de progresso e animações tornam o aprendizado mais envolvente e motivador.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/fangtalk.jpg",
        tags: [
            {
                id: 1,
                name: "Next.js",
                path: "/assets/logos/nextjs.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 3,
                name: "Clerk",
                path: "/assets/logos/Clerk.svg",
            },
            {
                id: 4,
                name: "Drizzle ORM",
                path: "/assets/logos/Drizzle.svg",
            },
            {
                id: 5,
                name: "PostgreSQL",
                path: "/assets/logos/postgresql.svg",
            },
        ],

    },
    {
        id: 3,
        title: "Sizing de Aplicações",
        description: "Gerencie e visualize o planejamento de projetos com gráficos de Gantt simplificados.",
        subDescription: [
            "Aplicação web interativa para criar, editar e visualizar sizings de projetos de forma intuitiva.",
            "Permite adicionar tarefas com nome, início e duração (em dias ou horas), editá-las e removê-las dinamicamente.",
            "Visualização em gráfico Gantt utilizando Chart.js via CDN para facilitar o acompanhamento visual do projeto.",
            "Salvamento automático e gerenciamento de sizings através de LocalStorage, com opção de exportação para CSV.",
            "Suporte a tema claro/escuro, redistribuição proporcional de durações e interface responsiva.",
        ],
        href: "", // insira a URL do projeto, se publicado
        logo: "",
        image: "/assets/projects/controle.png", // substitua pela imagem real, se houver
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/assets/logos/html5.svg",
            },
            {
                id: 2,
                name: "CSS",
                path: "/assets/logos/css3.svg",
            },
            {
                id: 3,
                name: "JavaScript",
                path: "/assets/logos/javascript.svg",
            },
            {
                id: 4,
                name: "Chart.js",
                path: "/assets/logos/git.svg",
            },
        ],

    },

];

export const mySocials = [
    // {
    //     name: "WhatsApp",
    //     href: "",
    //     icon: "/assets/socials/whatsApp.svg",
    // },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/victorlopesm/",
        icon: "/assets/socials/linkedIn.svg",
    },
    // {
    //     name: "Instagram",
    //     href: "https://www.instagram.com/ali.sanatidev/reels/",
    //     icon: "/assets/socials/instagram.svg",
    // },
];

export const experiences = [
    {
        title: "Analista de Desenvolvimento de Software",
        job: "FIS Brasil",
        date: "jun/2024 - mar/2025",
        contents: [
            "Atuação híbrida em soluções para o setor financeiro com foco em performance, segurança e integração de sistemas.",
            "Utilização de Python e ferramentas Microsoft para análise e automação de processos internos.",
            "Contribuição ativa na melhoria de fluxos de trabalho e suporte técnico especializado.",
        ],
    },
    {
        title: "Desenvolvedor Front-End",
        job: "Callink (antiga Fidelity)",
        date: "mar/2025 - presente",
        contents: [
            "Responsável por implantar e estruturar aplicações Next.js em ambientes corporativos complexos.",
            "Implementação de arquitetura em monorepo com suporte a múltiplas zonas (multizones) para garantir escalabilidade e modularidade.",
            "Colaboração com times de back-end e DevOps para integração contínua e entrega ágil de novas features.",
        ],
    },
    {
        title: "Desenvolvedor Fullstack",
        job: "Freelancer",
        date: "mar/2023 - presente",
        contents: [
            "Desenvolvimento de aplicações web e APIs personalizadas para clientes diversos, com foco em performance e responsividade.",
            "Stack variada incluindo React, Next.js, Node.js, Python e bancos de dados relacionais e NoSQL.",
            "Criação de portfólios e sistemas sob demanda, com foco em design moderno e experiência do usuário.",
        ],
    },
];


export const reviews = [
    {
        name: "Lucas",
        username: "@lucas.dev",
        body: "O front-end está impecável! Interface linda, fluida e moderna. Parabéns!",
        img: "https://robohash.org/lucas",
    },
    {
        name: "Mariana",
        username: "@mariana.codes",
        body: "Simplesmente perfeito. O design é responsivo e muito intuitivo!",
        img: "https://robohash.org/mariana",
    },
    {
        name: "Carlos",
        username: "@carlosjs",
        body: "A experiência de usuário é incrível. Tudo muito bem pensado!",
        img: "https://robohash.org/carlos",
    },
    {
        name: "Fernanda",
        username: "@fernandauf",
        body: "Adorei a paleta de cores e as animações suaves. Front-end de alto nível!",
        img: "https://robohash.org/fernanda",
    },
    {
        name: "Rafael",
        username: "@rafael.backend",
        body: "Além do front excelente, o back-end é bem estruturado e performático!",
        img: "https://robohash.org/rafael",
    },
    {
        name: "Aline",
        username: "@alineux",
        body: "A organização dos componentes e o uso do Tailwind está de parabéns!",
        img: "https://robohash.org/aline",
    },
    {
        name: "João",
        username: "@joaofront",
        body: "Visualmente impressionante. O layout se adapta perfeitamente a qualquer dispositivo.",
        img: "https://robohash.org/joao",
    },
    {
        name: "Bianca",
        username: "@bianca.dev",
        body: "O sistema funciona de forma fluida e o visual é super agradável. Excelente trabalho!",
        img: "https://robohash.org/bianca",
    },
];
