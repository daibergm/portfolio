export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  url: string;
  isPrivate: boolean;
  repoUrl?: string;
}
