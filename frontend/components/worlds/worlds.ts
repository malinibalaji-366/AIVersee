export type World = {
  id: number;
  title: string;
  icon: string;
  description: string;
  lessons: number;
  progress: number;
  unlocked: boolean;
  color: string;
};

export const worlds: World[] = [
  {
    id: 1,
    title: "AI Foundations",
    icon: "Sprout",
    description: "Learn programming, logic, and AI basics.",
    lessons: 12,
    progress: 0,
    unlocked: true,
    color:"text-green-400",
  },
  {
    id: 2,
    title: "Machine Learning",
    icon: "Bot",
    description: "Train intelligent models using real datasets.",
    lessons: 15,
    progress: 0,
    unlocked: false,
    color:"text-cyan-400",
  },
  {
    id: 3,
    title: "Deep Learning",
    icon: "Brain",
    description: "Build powerful neural networks.",
    lessons: 18,
    progress: 0,
    unlocked: false,
    color: "text-pink-400",
  },
  {
    id: 4,
    title: "Generative AI",
    icon: "PaletteIcon",
    description: "Create AI that writes, draws, and speaks.",
    lessons: 14,
    progress: 0,
    unlocked: false,
    color: "text-orange-400",
  },
  {
    id: 5,
    title: "Computer Vision",
    icon: "Cpu",
    description: "Teach computers to understand images.",
    lessons: 13,
    progress: 0,
    unlocked: false,
    color: "text-gray-200",
  },
  {
    id: 6,
    title: "Natural Language Processing",
    icon: "MessageCircle",
    description: "Build chatbots and language models.",
    lessons: 16,
    progress: 0,
    unlocked: false,
    color: "text-blue-400"
  },
];