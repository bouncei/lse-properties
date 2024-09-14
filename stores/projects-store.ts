import { Project } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProjectsStore {
  projects: Project[] | [];
  getProjects: () => void;
  getProjectById: () => void;
  getProjectsByUserId: () => void;
}

const initialState = {
  projects: [],
  loading: false,
  success: false,
  error: null,
};

export const useProjectsStore = create(
  persist<ProjectsStore>(
    (set, get) => ({
      ...initialState,
      getProjects: () => {},
      getProjectById: () => {},
      getProjectsByUserId: () => {},
    }),

    {
      name: "projects-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { projects } = state;
        return {
          ...initialState,
          projects,

          getProjects: () => {},
          getProjectById: () => {},
          getProjectsByUserId: () => {},
        };
      },
    }
  )
);
