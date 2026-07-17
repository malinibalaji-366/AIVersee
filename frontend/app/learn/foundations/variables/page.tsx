"use client";
import LessonHeader from "@/components/lesson/LessonHeader";
import LessonContent from "@/components/lesson/LessonContent";
import LessonCode from "@/components/lesson/LessonCode";
import LessonChallenge from "@/components/lesson/LessonChallenge";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import LessonComplete from "@/components/lesson/LessonComplete";
import { TextBlock, CodeBlock, ChallengeBlock, } from "@/types/lesson";
import { lessons } from "@/data/lessons";
import { useProgressStore } from "@/lib/progressStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UnlockAnimation from "@/components/lesson/UnlockAnimation";

export default function VariablesLesson() {
  const lesson = lessons.foundations[0];
  const router = useRouter();
  const [showUnlock , setShowUnlock] = useState(false);
  const completeLesson = useProgressStore((state) => state.completeLesson);
  const unlockLesson = useProgressStore((state) => state.unlockLesson);
  const addSparks = useProgressStore((state) => state.addSparks);
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
                  code={challengeBlock.code}
                  options={challengeBlock.options}
                  answer={challengeBlock.answer}
                />
              );
            }
            default:
              return null;
          }
        })}
        <LessonComplete
          title="Variables"
          sparks={30}
          onContinue={() => {
            addSparks(30);
            completeLesson("variables");
            unlockLesson("datatypes");

            setShowUnlock(true);

            setTimeout(() => {
              router.push("/learn/foundations/datatypes");
            }, 2000);
          }}
        />
        <LessonNavigation />
          <UnlockAnimation 
          show={showUnlock}
          lesson="Datatypes"
          />
      </div>
    </main>
  );
}