import LessonHeader from "@/components/lesson/LessonHeader";
import LessonContent from "@/components/lesson/LessonContent";
import LessonCode from "@/components/lesson/LessonCode";
import LessonChallenge from "@/components/lesson/LessonChallenge";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import { TextBlock, CodeBlock, ChallengeBlock, } from "@/types/lesson";
import { lessons } from "@/data/lessons";

export default function VariablesLesson() {
  const lesson = lessons.foundations[0];

  return (
    <main className="min-h-screen bg-black px-8 py-12 text-white">

      <div className="mx-auto max-w-4xl">

        <LessonHeader
          title={lesson.title}
          duration={lesson.duration}
        />

        {lesson.content.map((block, index) => {
          switch (block.type) {
            case "text":
            case "tip":{
                const textBlock = block as TextBlock;
              return (
                <LessonContent
                  key={index}
                  title={textBlock.title}
                  body={textBlock.body}
                />
              );
            }
            case "code":{
                const codeBlock = block as CodeBlock;
              return (
                <LessonCode
                  key={index}
                  code={codeBlock.code}
                />
              );
            }
            case "challenge":{
                const challengeBlock = block as ChallengeBlock;
              return (
                <LessonChallenge
                  key={index}
                  question={challengeBlock.question}
                  options={challengeBlock.options}
                />
              );
            }
            default:
              return null;
          }
        })}

        <LessonNavigation />

      </div>

    </main>
  );
}