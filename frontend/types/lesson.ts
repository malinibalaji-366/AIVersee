export type TextBlock = {
  type: "text" | "tip";
  title: string;
  body: string;
};

export type CodeBlock = {
  type: "code";
  language: string;
  code: string;
};

export type ChallengeBlock = {
  type: "challenge";
  question: string;
  code: string;
  options: string[];
  answer: string;
};

export type LessonBlock =
  | TextBlock
  | CodeBlock
  | ChallengeBlock;

export type Lesson = {
  id: number;
  slug: string;
  title: string;
  duration: string;
  progress: number;
  content: LessonBlock[];
};