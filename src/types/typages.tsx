import { IconType } from "react-icons";
//
// CONSTRUCTION TYPAGE
//
export interface iconProps {
  icon: IconType;
}
//
export interface listIconProps {
  icon: IconType[];
  name: string[];
}
//
// SÉCURISER DONNÉES
//
export type linksType = "intern" | "extern";
//
//
//
export interface linksProps {
  label?: string;
  title?: string;
  url?: string;
  type?: linksType;
  icon: iconProps;
  special?: string;
  infos?: string;
}
//
//
export interface persoProps {
  nav: route[];
  links: linksProps[];
}
//
//
export interface route {
  label: string;
  url: string;
  type: linksType;
}
//
//
export interface projectProps{
  label?: string;
  framework: listIconProps[];
  url?: string;
  code?: string;
  text?: React.ReactNode;
  image?: string;
  icon?: string;
}
//
//
export interface aproposProps{
  title: string;
  span: string;
  icon: iconProps;
  p: React.ReactNode;
}