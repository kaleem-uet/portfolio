
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Algozen.io",
    description:
      "A platform for traders to create trading algorithms by drag and drop.",
    image: "/algo.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "GitHub", "Git", "VS Code"],
    links: {
      github: "",
      live: "https://dev.algozen.io/",
    },
  },
  {
    id: 2,
    title: "Archiwiz Client Portal",
    description:
      "A seamless, collaborative portal for architects, designers, and clients to manage and access architectural files.",
    image: "/portal.png",
    tags: ["React", "MUI", "Supabase", "GitHub", "Git", "VS Code"],
    links: {
      github: "",
      live: "https://portal.archiwiz.com/",
    },
  },
  {
    id: 3,
    title: "CIMS Tire Registration",
    description:
      "Tire registration service ensuring immediate registration and safety-related recall notifications.",
    image: "/cims.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "",
      live: "https://electronictireregistration.com/Account/Login?ReturnUrl=%2F",
    },
  },
  {
    id: 4,
    title: "Safe Solutions",
    description:
      "A portfolio website showcasing the services of Safe Solutions, built using React.js and Tailwind CSS.",
    image: "/safe.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Supabase", "MUI"],
    links: {
      github: "",
      live: "https://safesolutionsconsultants.com/",
    },
  },
  {
    id: 5,
    title: "Archiwiz",
    description:
      "Portfolio website for Archiwiz using Next.js and Tailwind CSS.",
    image: "/archiwiz.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "https://archiwiz.com/",
    },
  },
  {
    id: 6,
    title: "BitCoder Labs",
    description:
      "Portfolio website for BitCoder Labs, built with React.js and MUI.",
    image: "/bcl.png",
    tags: ["React", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "https://bitcoderlabs.com/",
    },
  },
  {
    id: 7,
    title: "NSL",
    description:
      "A sports management platform for managing leagues, tournaments, and events.",
    image: "/nsl.png",
    tags: ["React", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 8,
    title: "ETUDIER EN ROUMANIE",
    description:
      "Platform for students to explore universities and scholarships in Romania.",
    image: "/edt.png",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Supabase", "MUI"],
    links: {
      github: "",
      live: "https://etudier-en-roumanie.vercel.app/en",
    },
  },
  {
    id: 9,
    title: "Multi Theme Dashboard",
    description: "A customizable dashboard with multiple themes and layouts.",
    image: "/dash.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 10,
    title: "E-commerce Dashboard",
    description:
      "A dashboard for managing e-commerce stores including products, orders, and customers.",
    image: "/drivestay.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 11,
    title: "Law GPT",
    description:
      "GPT-3 powered app generating legal documents based on user input, built with Ruby on Rails and Tailwind CSS.",
    image: "/law.png",
    tags: ["Ruby on Rails", "Tailwind CSS", "OpenAI"],
    links: {
      github: "",
      live: "https://law-gpt-ruby.vercel.app/",
    },
  },
  {
    id: 12,
    title: "Poha",
    description:
      "A GPT-3 powered legal document generator built with Ruby on Rails and Tailwind CSS.",
    image: "/elv.png",
    tags: ["Ruby on Rails", "Tailwind CSS", "OpenAI"],
    links: {
      github: "",
      live: "https://poha-newdesign123.vercel.app/",
    },
  },
  {
    id: 13,
    title: "Car App",
    description:
      "A car rental platform allowing users to search and book rental cars.",
    image: "/car-rent.png",
    tags: ["Next.js", "Tailwind CSS", "MUI"],
    links: {
      github: "",
      live: "https://car-app-next.vercel.app/",
    },
  },
  {
    id: 14,
    title: "Three.js Practice Project",
    description: "A simple project practicing Three.js features.",
    image: "/three.png",
    tags: ["Three.js", "React", "Tailwind CSS"],
    links: {
      github: "",
      live: "https://car-app-next.vercel.app/",
    },
  },
  {
    id: 15,
    title: "Solar System",
    description: "A 3D solar system visualization created using Three.js.",
    image: "/solar.png",
    tags: ["Three.js", "React", "Tailwind CSS"],
    links: {
      github: "",
      live: "https://solar-system-psi-ten.vercel.app/",
    },
  },
  {
    id: 16,
    title: "School Layout Design",
    description: "A portfolio website for a school.",
    image: "/school.png",
    tags: ["React", "Tailwind CSS", "Supabase", "MUI"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 17,
    title: "Covid-19 Tracker",
    description: "Real-time COVID-19 tracker built with Next.js and MUI.",
    image: "/covid19.png",
    tags: ["Next.js", "Tailwind CSS", "MUI"],
    links: {
      github: "",
      live: "https://covid-19-tracker-seven-sigma.vercel.app/",
    },
  },
  {
    id: 18,
    title: "Eduui",
    description:
      "An online learning platform for students with a modern theme.",
    image: "/eduvi.png",
    tags: ["Next.js", "Tailwind CSS", "MUI"],
    links: {
      github: "",
      live: "https://eduvi-zeta.vercel.app/",
    },
  },
  {
    id: 19,
    title: "Hekto",
    description:
      "An e-commerce website built with React.js and Node.js backend.",
    image: "/hekto.png",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "MUI"],
    links: {
      github: "",
      live: "https://hekto-wheat.vercel.app/",
    },
  },
];

