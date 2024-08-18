import { create } from "zustand";
import { createJSONStorage, persist, StorageValue } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { User } from "@/lib/types";

interface UserStore {
  user: User | null;
  isTokenExpired: boolean;
  disableSessionWarning: () => void;
  update: (user: User) => void;
  logout: () => void;
}

const tokenExpirationTime = (token: string) => {
  const decodedToken: any = jwtDecode(token);
  return decodedToken.exp * 1000;
};

const isTokenExpiredHandler = (token: string) => {
  const expirationTime = tokenExpirationTime(token);
  return Date.now() > expirationTime;
};

const initialState = {
  user: null,
  isTokenExpired: false,
  loading: false,
  success: false,
  error: null,
};

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      ...initialState,

      disableSessionWarning: () => set({ isTokenExpired: false }),
      update: (user: User) => set({ user, isTokenExpired: false }),
      logout: () => set({ user: null, isTokenExpired: false }),
    }),

    {
      name: "user-stotage", // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { user, isTokenExpired } = state;
        return {
          ...initialState,
          user,
          isTokenExpired:
            user && isTokenExpiredHandler(user.token) ? true : isTokenExpired,
          disableSessionWarning: () => {},
          update: () => {},
          logout: () => {},
        };
      },
    }
  )
);
