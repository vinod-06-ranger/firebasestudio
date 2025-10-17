export type Contact = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  headshotUrl: string;
  contact: Contact;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type Skill = {
  id: string;
  name: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Platform' | 'Other';
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  year: string;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  skills: Skill[];
  education: Education[];
  achievements: Achievement[];
};
