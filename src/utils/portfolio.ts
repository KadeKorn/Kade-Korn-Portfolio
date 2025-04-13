import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

export const socialLinks: StringKeyValueType = {
  instagram: '',
  twitter: '',
  github: '',
  linkedin: 'https://www.linkedin.com/in/kadekorn/',
};

export const author = {
  name: 'Kade Korn',
  email: 'kadekorn@gmail.com',
};

export const seoData = {
  title: 'Kade Korn | Data Analyst',
  description:
    'Kade Korn is a data analyst who transforms complex data into actionable insights across finance, health, and marketing domains.',
  author: author.name,
  image: 'Kade-Korn.jpeg',
  url: '',
  keywords: [
    'Kade Korn',
    'Data Analyst Portfolio',
    'Kade Korn Analyst',
    'Business Intelligence',
    'SQL Python Data',
  ],
};

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    // { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

export const heroSection: HeroSectionType = {
  subtitle: "Hi there, I'm",
  title: 'Kade Korn.',
  tagline:
    'I dive deep into data to uncover insights that fuel better decisions.',
  description:
    'With experience in enterprise analytics and dashboard development, I help businesses in finance, health, and marketing make smarter, data-driven decisions.',
  specialText: 'Data Analyst | SQL & Python Enthusiast',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Tools & Technologies I use regularly:',
    items: ['SQL', 'Python', 'Power BI', 'Tableau', 'Airflow', 'dbt'],
  },
  img: '/kade-korn.jpeg',
};

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'data analysis & visualization',
      image: {
        light: '/images/data-analytics-light.svg',
        dark: '/images/data-analytics-dark.svg',
      },
      points: [
        'Analyzing trends and patterns using SQL and Python',
        'Building dynamic dashboards in Tableau and Power BI',
        'Delivering actionable insights to stakeholders',
      ],
      softwareSkills: [
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'Tableau', icon: 'logos:tableau-icon' },
        { name: 'Power BI', icon: 'simple-icons:powerbi' },
      ],
    },
    {
      id: getId(),
      title: 'data engineering workflows',
      image: {
        light: '/images/data-engineering-light.svg',
        dark: '/images/data-engineering-dark.svg',
      },
      points: [
        'Creating data pipelines with dbt and Airflow',
        'Optimizing ETL processes and data validation',
        'Ensuring scalability and performance in analytics workflows',
      ],
      softwareSkills: [
        { name: 'dbt', icon: 'simple-icons:dbt' },
        { name: 'Airflow', icon: 'logos:airflow-icon' },
        { name: 'Databricks', icon: 'simple-icons:databricks' },
      ],
    },
  ],
};

export const experienceSection: ExperienceSectionType = {
  title: 'Professional Experience',
  experiences: [
    {
      company: 'Starbucks',
      companyUrl: 'https://www.starbucks.com',
      role: 'Data Analyst II – Fintech',
      started: 'Mar 2024',
      upto: 'Present',
      tasks: [
        'Lead analytics for point-of-sale and financial systems in EMEA.',
        'Built dashboards in Power BI and Tableau to visualize capital project metrics.',
        'Reduced incident resolution times by 40% through automated workflows.',
        'Enhanced data governance and self-service analytics using Unity Catalog in Databricks.',
      ],
    },
    {
      company: 'Starbucks',
      companyUrl: 'https://www.starbucks.com',
      role: 'Data Analyst I – Fintech',
      started: 'Jun 2023',
      upto: 'Mar 2024',
      tasks: [
        'Redesigned ETL pipelines with SQL and Power Automate to reduce delivery time by 25%.',
        'Improved POS data stability by cutting bugs 82.6% through query optimization.',
        'Built dashboards for enhancement request tracking, reducing duplicates by 34%.',
      ],
    },
  ],
};

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Marketing Dashboard (Placeholder)',
      url: '',
      repo: '',
      img: '/1675095433754.jpeg',
      year: 2024,
      tags: ['Power BI', 'SQL', 'Marketing'],
    },
    {
      id: getId(),
      name: 'Financial Forecasting App (Placeholder)',
      url: '',
      repo: '',
      img: '/1675095433754.jpeg',
      year: 2024,
      tags: ['Python', 'Time Series', 'Finance'],
    },
  ],
};

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "let's connect",
  paragraphs: [
    "I'm currently open to data analyst opportunities, collaborations, or casual chats about data.",
    'Shoot me a message and let’s see where it goes!',
  ],
  link: `mailto:${author.email}`,
};

export const socialSection: SocialSectionType = {
  socialLinks: [
    { icon: 'tabler:brand-github', url: socialLinks.github },
    { icon: 'lucide:linkedin', url: socialLinks.linkedin },
  ],
};

export const footerSection: FooterSectionType = {
  title: '',
  link: '',
};
