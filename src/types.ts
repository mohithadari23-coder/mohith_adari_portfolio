export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technology: string[];
  techString: string;
  actionLabel: string;
  type: 'grade-calc' | 'voting-calc' | 'genai-experiments';
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
