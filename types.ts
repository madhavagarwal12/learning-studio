
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Module {
  week: number;
  title: string;
  description: string;
  icon: string;
  topics: string[];
}
