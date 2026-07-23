
export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  outcome: string;
  content: string;
  avatar: string;
}

export interface ProblemPoint {
  icon: string;
  title: string;
  description: string;
}

export interface TransformationStep {
  step: number;
  title: string;
  description: string;
}

export interface CurriculumModule {
  number: string;
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ValueStackItem {
  title: string;
  description: string;
}
