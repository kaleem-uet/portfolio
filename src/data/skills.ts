
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript","C++","Python",],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS","HTML/CSS", "MUI", "Bootstrap"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Agile/Scrum","Figma", "Postman", "VS Code", "GitHub", "Vercel", "Netlify", "Supabase", "Heroku", "AWS", "Docker", "Nginx", "Redis", "GraphQL", "WebSockets", "RESTful APIs", "CI/CD", "Jest", "Cypress", "SonarQube"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  },
];
