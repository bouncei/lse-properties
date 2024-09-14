import { Gig } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProjectsStore {
  gigs: Gig[] | [];
  getGigs: () => void;
  getGigsById: () => void;
  getGigsByUser: () => void;
}

const initialState = {
  gigs: [],
  loading: false,
  success: false,
  error: null,
};

export const useGigsStore = create(
  persist<ProjectsStore>(
    (set, get) => ({
      ...initialState,
      getGigs: () => {},
      getGigsById: () => {},
      getGigsByUser: () => {},
    }),

    {
      name: "gigs-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { gigs } = state;
        return {
          ...initialState,
          gigs,

          getGigs: () => {},
          getGigsById: () => {},
          getGigsByUser: () => {},
        };
      },
    }
  )
);
