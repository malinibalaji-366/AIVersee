export type World = {
  id: number;
  title: string;
  emoji: string;
  description: string;
  lessons: number;
  progress: number;
  unlocked: boolean;
};

export const worlds: World[] = [
  {
    id: 1,
    title: "AI Foundations",
    emoji: "🌱",
    description: "Learn programming, logic, and AI basics.",
    lessons: 12,
    progress: 0,
    unlocked: true,
  },
  {
    id: 2,
    title: "Machine Learning",
    emoji: "🤖",
    description: "Train intelligent models using real datasets.",
    lessons: 15,
    progress: 0,
    unlocked: false,
  },
  {
    id: 3,
    title: "Deep Learning",
    emoji: "🧠",
    description: "Build powerful neural networks.",
    lessons: 18,
    progress: 0,
    unlocked: false,
  },
  {
    id: 4,
    title: "Generative AI",
    emoji: "🎨",
    description: "Create AI that writes, draws, and speaks.",
    lessons: 14,
    progress: 0,
    unlocked: false,
  },
  {
    id: 5,
    title: "Computer Vision",
    emoji: "👁",
    description: "Teach computers to understand images.",
    lessons: 13,
    progress: 0,
    unlocked: false,
  },
  {
    id: 6,
    title: "Natural Language Processing",
    emoji: "💬",
    description: "Build chatbots and language models.",
    lessons: 16,
    progress: 0,
    unlocked: false,
  },
];