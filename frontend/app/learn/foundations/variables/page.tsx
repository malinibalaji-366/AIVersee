import LessonHeader from "@/components/lesson/LessonHeader";
import LessonContent from "@/components/lesson/LessonContent";
import LessonCode from "@/components/lesson/LessonCode";
import LessonChallenge from "@/components/lesson/LessonChallenge";
import LessonNavigation from "@/components/lesson/LessonNavigation";

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
            case "tip":
              return (
                <LessonContent
                  key={index}
                  title={block.title}
                  body={block.body}
                />
              );

            case "code":
              return (
                <LessonCode
                  key={index}
                  code={block.code}
                />
              );

            case "challenge":
              return (
                <LessonChallenge
                  key={index}
                  question={block.question}
                  options={block.options}
                />
              );

            default:
              return null;
          }
        })}

        <LessonNavigation />

      </div>

    </main>
  );
}