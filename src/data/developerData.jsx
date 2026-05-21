import React from "react";
import htmlSvg from "@/components/Icons/html.svg";
import cssSvg from "@/components/Icons/css.svg";
import javascriptSvg from "@/components/Icons/javascript.svg";
import javaSvg from "@/components/Icons/java.svg";
import reactSvg from "@/components/Icons/react.svg";
import nodejsSvg from "@/components/Icons/nodejs.svg";
import dockerSvg from "@/components/Icons/docker.svg";
import mysqlSvg from "@/components/Icons/mysql.svg";
import sassSvg from "@/components/Icons/sass.svg";
import springSvg from "@/components/Icons/spring.svg";
import tailwindSvg from "@/components/Icons/tailwind.svg";

export const DEVELOPER = {
  name: "Wellington Bernardes",
  role: "Front-End Developer",
  bio1: "Sou um desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais que proporcionam experiências incríveis aos usuários. Com foco em desenvolvimento web, busco constantemente aprender novas tecnologias e aplicar as melhores práticas do mercado.",
  bio2: "Minha jornada no desenvolvimento começou com a curiosidade de entender como as aplicações web funcionam. Desde então, venho me dedicando a aprimorar minhas habilidades em React e outras tecnologias modernas do ecossistema JavaScript.",
  bio3: "Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, com o objetivo de contribuir para projetos inovadores e fazer parte de uma equipe que valoriza qualidade e criatividade.",
  email: "wellington.vargas.bernardes80@gmail.com",
  linkedin: "www.linkedin.com/in/wellington-bernardes-dev",
  github: "github.com/Wbernard98",
};

export const SKILLS = [
  {
    name: "HTML",
    icon: <img src={htmlSvg} alt="HTML" style={{ width: "100%", height: "100%" }} />,
    color: "#E44D26",
  },
  {
    name: "CSS",
    icon: <img src={cssSvg} alt="CSS" style={{ width: "100%", height: "100%" }} />,
    color: "#264DE4",
  },
  {
    name: "JavaScript",
    icon: <img src={javascriptSvg} alt="JavaScript" style={{ width: "100%", height: "100%" }} />,
    color: "#F7DF1E",
  },
  {
    name: "Java",
    icon: <img src={javaSvg} alt="Java" style={{ width: "100%", height: "100%" }} />,
    color: "#ED8B00",
  },
  {
    name: "React",
    icon: <img src={reactSvg} alt="React" style={{ width: "100%", height: "100%" }} />,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: <img src={nodejsSvg} alt="Node.js" style={{ width: "100%", height: "100%" }} />,
    color: "#339933",
  },
  {
    name: "Docker",
    icon: <img src={dockerSvg} alt="Docker" style={{ width: "100%", height: "100%" }} />,
    color: "#2496ED",
  },
  {
    name: "MySQL",
    icon: <img src={mysqlSvg} alt="MySQL" style={{ width: "100%", height: "100%" }} />,
    color: "#4479A1",
  },
  {
    name: "Sass",
    icon: <img src={sassSvg} alt="Sass" style={{ width: "100%", height: "100%" }} />,
    color: "#CC6699",
  },
  {
    name: "Spring",
    icon: <img src={springSvg} alt="Spring" style={{ width: "100%", height: "100%" }} />,
    color: "#6DB33F",
  },
  {
    name: "Tailwind CSS",
    icon: <img src={tailwindSvg} alt="Tailwind CSS" style={{ width: "100%", height: "100%" }} />,
    color: "#06B6D4",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Dashboard Analytics",
    desc: "Plataforma completa de analytics com visualização de dados em tempo real, gráficos interativos e relatórios personalizados.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#7C3AED",
    emoji: "📊",
  },
  {
    id: 2,
    title: "E-Commerce App",
    desc: "Aplicativo de e-commerce moderno com carrinho de compras, sistema de pagamento e gerenciamento de produtos.",
    tags: ["React", "Node.js", "GraphQL", "MySQL"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%)",
    accent: "#9333EA",
    emoji: "🛒",
  },
  {
    id: 3,
    title: "App de Finanças",
    desc: "Aplicação de controle financeiro pessoal com metas, relatórios mensais e integração bancária.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)",
    accent: "#8B5CF6",
    emoji: "💸",
  },
  {
    id: 4,
    title: "Design System",
    desc: "Biblioteca de componentes acessíveis e reutilizáveis com documentação interativa e testes automatizados.",
    tags: ["React", "Storybook", "CSS Modules"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #1e1e3f 50%, #252545 100%)",
    accent: "#8B5CF6",
    emoji: "🎨",
  },
];

export const NAV_LINKS = [
  "inicio",
  "sobre",
  "habilidades",
  "projetos",
  "contato",
];

export const NAV_LABELS = {
  inicio: "Início",
  sobre: "Sobre",
  habilidades: "Habilidades",
  projetos: "Projetos",
  contato: "Contato",
};

export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}