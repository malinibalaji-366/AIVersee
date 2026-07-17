import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  sparks: number;

  streak: number;

  currentWorld: number;

  completedLessons: string[];

  unlockedLessons: string[];

  unlockedWorlds: number[];

  addSparks: (amount: number) => void;

  completeLesson: (lessonId: string) => void;

  unlockLesson: (lessonId: string) => void;

  unlockWorld: (worldId: number) => void;

  resetProgress: () => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      sparks: 0,

      streak: 1,

      currentWorld: 1,

      completedLessons: [],

      unlockedLessons: ["variables"],

      unlockedWorlds: [1],

      addSparks: (amount) =>
        set((state) => ({
          sparks: state.sparks + amount,
        })),

      completeLesson: (lessonId: string) =>
        set((state) => ({
          completedLessons: [
            ...new Set([...state.completedLessons, lessonId,]),
          ],
        })),

      unlockLesson: (lessonId) =>
        set((state) => ({
          unlockedLessons: [
            ...new Set([...state.unlockedLessons, lessonId]),
          ],
        })),

      unlockWorld: (worldId) =>
        set((state) => ({
          unlockedWorlds: [
            ...new Set([...state.unlockedWorlds, worldId]),
          ],
        })),

      resetProgress: () =>
        set({
          sparks: 0,
          streak: 1,
          currentWorld: 1,
          completedLessons: [],
          unlockedLessons: ["variables"],
          unlockedWorlds: [1],
        }),
    }),
    {
      name: "aiverse-progress",
    }
  )
);