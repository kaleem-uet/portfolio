
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 2,
    title: "KPITB internship ",
    type: "certification",
    year: "2022",
    description:
      "Completed a 6-month internship at KPITB, gaining hands-on experience in software development.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "UNICEF Student Representative",
    type: "academic",
    year: "2016",
    description:
      "Served as a student representative for UNICEF, promoting children's rights and welfare.",
    icon: Star,
  },
  {
    id: 4,
    title: "Javascript Certification",
    type: "certification",
    year: "2023",
    description:
      "Completed comprehensive javascript programming certification.",
    icon: Award,
  },
  {
    id: 5,
    title: "Javascript algorithms and dataStructures",
    type: "certification",
    year: "2022",
    description:
      "Earned certification in Javascript algorithms and data structures .",
    icon: Award,
  },
  {
    id: 6,
    title: "Prompt engineer Certification",
    type: "certification",
    year: "2023",
    description:
      "Completed specialized training in AI prompt engineer techniques.",
    icon: Award,
  },
];
