import Button from "../ui/Button";
import { useProgressStore } from "@/lib/progressStore";
const resetProgress = useProgressStore((state) => state.resetProgress);
<Button onClick={resetProgress}
>
    Reset Progress
</Button>