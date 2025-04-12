import {
  CTAType,
  ExperienceType,
  NavLinkType,
  ProjectType,
  SocialLinkType,
  SoftwareSkillType,
} from '.';

export interface Section {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  // company?: string;
  // companyUrl?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends Section {
  list: {
    title: string;
    items: string[];
  };
  img: string;
}

export type SkillType = {
  id: string;
  title: string;
  points: string[];
  softwareSkills: { name: string; icon: string }[];
  image?: {
    light: string;
    dark: string;
  };
};

export interface SkillsSectionType extends Section {
  skills: SkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}
