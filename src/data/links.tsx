// TYPAGE
import { linksProps, linksType, persoProps, route, projectProps, aproposProps } from "#types/typages";
// ICONS
import { FiGithub, FiCodepen } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaReact,
  FaSass,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  SiTypescript,
  SiJest,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { BiMap } from "react-icons/bi";
import { IoMdSchool } from "react-icons/Io";
import { SiRedux } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { TbBrandNextjs } from "react-icons/tb";
//
//
//
export const Typelinks: Record<string, linksType> = {
  INTERN: "intern",
  EXTERN: "extern",
};
// eslint-disable-next-line react-refresh/only-export-components
export const Links_Routes: route[] = [
  {
    label: "home",
    url: "/Portfolio/",
    type: "intern",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const S_thibaut: persoProps = {
  nav: [
    {
      label: "home",
      url: "/1337",
      type: "intern",
    },
  ],

  links: [
    {
      label: "phone",
      title: "07.70.39.00.83",
      url: "0770390083",
      type: "extern",
      icon: { icon: FaPhoneAlt },
      special: "tel",
      infos: "Appeler",
    },
    {
      label: "mail",
      title: "senechal.thibaut@hotmail.fr",
      url: "senechal.thibaut@hotmail.fr",
      type: "extern",
      icon: { icon: HiMail },
      special: "mail",
      infos: "Contacter",
    },
    {
      label: "github",
      title: "Nerion-1337",
      url: "https://github.com/Nerion-1337",
      type: "extern",
      icon: { icon: FiGithub },
      infos: "Découvrir",
    },
    {
      label: "codepen",
      title: "Nerion1337",
      url: "https://codepen.io/Nerion1337",
      type: "extern",
      icon: { icon: FiCodepen },
      infos: "Découvrir",
    },
    {
      label: "linkedin",
      title: "Senechal Thibaut",
      url: "https://www.linkedin.com/in/thibaut-senechal-aabbbb199/",
      type: "extern",
      icon: { icon: FaLinkedinIn },
      infos: "Ajouter",
    },
  ],
};

// eslint-disable-next-line react-refresh/only-export-components
export const framework: linksProps[] = [
  {
    label: "Sass",
    icon: { icon: FaSass },
  },
  {
    label: "TypeScript",
    icon: { icon: SiTypescript },
  },
  {
    label: "Next",
    icon: { icon: TbBrandNextjs   },
  },
  {
    label: "Redux",
    icon: { icon: SiRedux },
  },
  {
    label: "Jest",
    icon: { icon: SiJest },
  },
  {
    label: "Figma",
    icon: { icon: FaFigma },
  },
  {
    label: "NodeJS",
    icon: { icon: FaNodeJs },
  },
  {
    label: "MySQL",
    icon: { icon: GrMysql },
  },
  {
    label: "Express",
    icon: { icon: SiExpress },
  },
];
//
//
const img = "./assets/project/"
const icon = "./assets/icon_project/"
const url = "https://nerion-1337.github.io/"
const code = "https://github.com/Nerion-1337/"

// eslint-disable-next-line react-refresh/only-export-components
export const projets: projectProps[] = [
 {
    label: "Booki",
    framework: [{ 
      icon: [FaHtml5, FaCss3Alt],
      name: ["html", "css"]
    }],
    url: `${url}Booki-OCR/`,
    code: `${code}Booki-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> implémenter une interface responsive et respecter la sémantique ainsi que la maquette.</>),
    image: `${img}Booki.png`,
    icon: `${icon}Booki.svg`,
  },
  {
    label: "Ohmyfood",
    framework: [{ 
      icon: [FaHtml5, FaSass],
      name: ["html", "sass"]
    }],
    url: `${url}Ohmyfood-OCR/`,
    code: `${code}Ohmyfood-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> mettre en œuvre des effets CSS avancés tout en assurant une cohérence graphique et une structure de navigation.</>),
    image: `${img}Ohmyfood.png`,
    icon: `${icon}Ohmyfood.svg`,
  },
  {
    label: "GameOn",
    framework: [{ 
      icon: [FaHtml5, FaSass, SiJavascript],
      name: ["html", "sass", "javascript"]
    }],
    url: `${url}GameOn-OCR/`,
    code: `${code}GameOn-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> réaliser un formulaire qui vérifie les données et les récupère (ici pour simplement les afficher dans la console). Ajout personnel d'une animation hover dans la navigation.</>),
    image: `${img}GameOn.png`,
    icon: `${icon}GameOn.svg`,
  },
  {
    label: "Fisheye",
    framework: [{ 
      icon: [FaSass, SiJavascript, FaNodeJs, GrMysql],
      name: ["sass", "javascript", "node.js", "mysql"]
    }],
    url: `${url}Fisheye-OCR/`,
    code: `${code}Fisheye-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> assurer l'accessibilité d'un site web en générant ses événements avec JS et en utilisant des design patterns pour une application web modulaire.<br /><span className="objectif">Édition :</span> ajout personnel d'une version back-end sur la branche "SQL".</>),
    image: `${img}Fisheye.png`,
    icon: `${icon}Fisheye.svg`,
  },
  {
    label: "Les Petits Plats",
    framework: [{ 
      icon: [FaSass, SiJavascript],
      name: ["sass", "javascript"]
    }],
    url: `${url}Les-Petits-Plats-OCR/`,
    code: `${code}Les-Petits-Plats-OCR`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> réalisation d'un algorithme de recherche (avec boucles natives & méthodes des objets Array) afin d'afficher des recettes dynamiquement en fonction de la sélection utilisateur.</>),
    image: `${img}Les-Petits-Plats.png`,
    icon: `${icon}Les-Petits-Plats.svg`,
  },
  {
    label: "Billed",
    framework: [{ 
      icon: [SiJest],
      name: ["jest"]
    }],
    url: "",
    code: "https://github.com/Nerion-1337/Billed-OCR",
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> déboguer l'application avec Chrome Debugger et en réalisant des tests unitaires & d'intégration JS. Terminer avec un plan end-to-end.</>),
    image: `${img}Billed.png`,
    icon: `${icon}Billed.svg`,
  },
  {
    label: "LearnHome",
    framework: [{ 
      icon: [FaFigma],
      name: ["figma"]
    }],
    url: "https://www.figma.com/file/XYplrUx19n8RhQKCYcYiEk/Untitled?type=design&node-id=0-1&t=JiVbvvMq8E3dgL1G-0",
    code: "https://github.com/Nerion-1337/LearnHome-OCR",
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> modéliser une solution technique pour un client en générant une maquette. Identifier les besoins de l'application à partir d'un cahier des charges et en utilisant une méthodologie agile.</>),
    image: `${img}LearnHome.png`,
    icon: `${icon}LearnHome.svg`,
  },
  {
    label: "Kasa",
    framework: [{ 
      icon: [FaSass, FaReact],
      name: ["sass", "react"]
    }],
    url: `${url}Kasa-OCR/`,
    code: `${code}Kasa-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> création de composants et de routes sous React. Développement d'un carrousel qui peut défiler avec les boutons, la souris, le doigt ou automatiquement.</>),
    image: `${img}Kasa.png`,
    icon: `${icon}Kasa.svg`,
  },
  {
    label: "SportSee",
    framework: [{ 
      icon: [FaSass, FaReact, SiNextdotjs, SiTypescript, SiTailwindcss],
      name: ["sass", "react", "next", "typescript", "tailwind"]
    }],
    url: `${url}SportSee-OCR/`,
    code: `${code}SportSee-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> assurer la qualité des données d'une application, développer des éléments graphiques avancés à l'aide de bibliothèques et interagir avec un service web.</>),
    image: `${img}SportSee.png`,
    icon: `${icon}SportSee.svg`,
  },
  {
    label: "Hot-Takes",
    framework: [{ 
      icon: [FaNodeJs, SiMongodb, SiExpress],
      name: ["node.js", "mongoDB", "Express"]
    }],
    url: "",
    code: `${code}Hot-Takes-OCR/`,
    text: (<>Projet de la formation Développeur Web d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> prise en main des outils de back-end en mettant en œuvre des opérations CRUD et en stockant les données de manière sécurisée. Implémentation d'un modèle logique de données conformément à la réglementation.</>),
    image: `${img}Hot-Takes.png`,
    icon: `${icon}Hot-Takes.svg`,
  },
  {
    label: "Argent-Bank",
    framework: [{ 
      icon: [FaSass, FaReact, SiRedux],
      name: ["sass", "react", "redux"]
    }],
    url: `${url}AgentBank-OCR/`,
    code: `${code}ArgentBank-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> interaction et modélisation d'API au travers du state management Redux.</>),
    image: `${img}Argent-Bank.png`,
    icon: `${icon}Argent-Bank.svg`,
  },
  {
    label: "Wealth-Health",
    framework: [{ 
      icon: [FaSass, FaReact, SiRedux],
      name: ["sass", "react", "redux"]
    }],
    url: `${url}Wealth_Health-OCR/`,
    code: `${code}Wealth_Health-OCR/`,
    text: (<>Projet de la formation Développeur d'application - JavaScript React d'OpenClassrooms.<br /><span className="objectif">Objectif :</span> analyser une application réalisée avec un plugin jQuery et transformer l'application ainsi que le plugin en React. Publication d’un plugin sur NPM.</>),
    image: `${img}Wealth-Health.png`,
    icon: `${icon}Wealth-Health.svg`,
  },
  {
    label: "Portfolio",
    framework: [{
      icon: [FaSass, FaReact, SiTypescript],
      name: ["sass", "react", "typescript"]
    }],
    url: "",
    code: `${code}Portfolio`,
    text: (<>Voici mon deuxième portfolio, réalisé quelques mois après ma formation chez OpenClassrooms. J’ai tenté de réunir un maximum de compétences avec diverses animations (aucun framework d'animation utilisé) et la meilleure qualité de code possible (clair, évolutif et maintenable dans le temps).</>),
    image: `${img}Portfolio.png`,
    icon: `${icon}Portfolio.svg`,
  },
  {
    label: "Miam Miam",
    framework: [{
      icon: [FaSass, FaReact, SiTypescript, SiRedux, FaNodeJs, GrMysql],
      name:["sass", "react", "typescript", 'redux', "node.js", "mysql"]
     }],
    url:"https://youtu.be/n0g97rHkMho",
    code:`${code}MiamMIam`,
    text:(<>Projet Personnel: Application web de recette participatif permettant aux utilisateurs de gérer précisément leurs consommation macro et micro nutriment de leur plat favoris de façon journalier à mensuel. <span className="objectif">Gestion API Google, Youtube, Stripe.</span></>),
    image:`${img}Miam-Miam.png`,
    icon:`${icon}Miam-Miam.svg`,
  },
];



// eslint-disable-next-line react-refresh/only-export-components
export const apropos: aproposProps[] = [
  {
    title: "Thibaut Senechal",
    span: "Bordeaux - France",
    icon: { icon: BiMap },
    p: (<>Titulaire d'une licence STAPS et anciennement préparateur physique, j'ai choisi de donner un second souffle à ma carrière pour devenir développeur.<br /><br />J'ai toujours été passionné par la Tech et j'avais déjà eu l'occasion, petit, de toucher un peu au développement web.<br />Je souhaitais même, à l'origine, démarrer des études d'ingénieur en informatique, mais les aléas de la vie ont changé mes plans. C'est donc tout naturellement que j'ai décidé de revenir dans ce domaine.</>),
  },
  {
    title: "Développeur d'application JavaScript React",
    span: "Formation à distance - OpenClassrooms",
    icon: { icon: IoMdSchool },
    p: (<>Formation centrée sur les technologies JavaScript et React, dont l'apprentissage se fait par la réalisation concrète de 11 projets.<br /><br />C'est une <span className="objectif">formation d'un an que j'ai réalisée en 6 mois</span> avec seulement quelques notions de base en HTML/CSS/JS à la suite de quelques tutoriels vidéo.<br /><br />Apprenant rapidement, mon tuteur m'a proposé de découvrir aussi le back-end avec Node.js et les bases de données SQL et NoSQL, me permettant ainsi d'être <span className="objectif">fullstack</span>.</>),
  },

]