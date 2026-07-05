import Button from "@/components/ui/Button";
import { ArrowLeft , ArrowRight} from "lucide-react";

export default function LessonNavigation() {
  return (
    <div className="mt-12 flex justify-between">

      <Button className="flex gap-2 items-center bg-white/10">
        <ArrowLeft size={18}/> Previous
      </Button>

      <Button className="flex gap-2 items-center">
        Next Lesson <ArrowRight size={18} />
      </Button> 

    </div>
  );
}