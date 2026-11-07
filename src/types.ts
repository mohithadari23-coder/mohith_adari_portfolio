export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technology: string[];
  techString: string;
  actionLabel: string;
  type: 'vote-eligibility-python' | 'skillpath-ai' | 'n8n-ai-news';
  externalUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}
