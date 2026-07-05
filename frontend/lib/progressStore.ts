import { create } from "zustand";
import { persist } from "zustand/middleware";
type ProgressState = {
  sparks: number;
  streak: number;
  completedLessons: string[];

  addSparks: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  resetProgress:() => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
  sparks: 0,
  streak: 1,
  completedLessons: [],

  addSparks: (amount) =>
    set((state) => ({
      sparks: state.sparks + amount,
    })),

  completeLesson: (lessonId) =>
    set((state) => ({
      completedLessons:
      state.completedLessons.includes(lessonId) ? state.completedLessons: [...state.completedLessons, lessonId],
    })),
    resetProgress: () =>set({
      sparks: 0,
      streak: 1,
      completedLessons: [],
    }),
  }),
{
  name: "aiverse-progress",
}
  )
);