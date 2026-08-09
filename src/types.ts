export interface Project {
  id: string;
  title: string;
  category: "graphic" | "video" | "uiux"| "motion";
  categoryLabel: string;
  image: string;
  video?: string;
  thumbnail?: string;
  description: string;
  longDescription: string;
  orientation?: "portrait" | "landscape";
  client: string;
  role: string;
  year: string;
  duration: string;
  skillsUsed: string[];
  challenge: string;
  solution: string;
  keyDeliverables: string[];
  mediaEmbed?: string; // For motion graphics simulation
  gallery?: string[]; // Extra images for slider
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
  deliverables: string[];
  averageTurnaround: string;
}

export interface Skill {
  id: string;
  name: string;
  logo: string; // Tailwind bg color or icon identifier
  colorClass: string;
  textColorClass: string;
  proficiency: number;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  logoText: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}
