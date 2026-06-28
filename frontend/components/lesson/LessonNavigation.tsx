import Button from "@/components/ui/Button";

export default function LessonNavigation() {
  return (
    <div className="mt-12 flex justify-between">

      <Button className="bg-white/10">
        ← Previous
      </Button>

      <Button>
        Next Lesson →
      </Button>

    </div>
  );
}