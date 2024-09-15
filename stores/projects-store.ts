import { dummyProjects } from "@/constants";
import { Project } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProjectsStore {
  projects: Project[] | [];
  getUserProjects: (userId: string) => Promise<any>;
  getProjectById: (projectId: string) => Promise<any>;
}

const initialState = {
  // projects: [],
  projects: [],
  loading: false,
  success: false,
  error: null,
};

export const useProjectsStore = create(
  persist<ProjectsStore>(
    (set, get) => ({
      ...initialState,

      getUserProjects: async (userId) => {
        set({ projects: dummyProjects });

        return true;
      },
      getProjectById: async (projectId) => {
        return true;
      },
    }),

    {
      name: "projects-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { projects } = state;
        return {
          ...initialState,
          projects,

          getUserProjects: () => Promise.resolve(),
          getProjectById: () => Promise.resolve(),
        };
      },
    }
  )
);
