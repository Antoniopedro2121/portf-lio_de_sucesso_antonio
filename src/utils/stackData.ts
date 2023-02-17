import {
  SiPostgresql,
  SiSqlite,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "Styled componets", img: SiStyledcomponents },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django", img: DiDjango },
  { title: "Sqlite", img: SiSqlite },
];
