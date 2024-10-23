import secureLocalStorage from "react-secure-storage";

export const SecureStorageAdapter = {
  getItem: (key: string): string | null => {
    const value = secureLocalStorage.getItem(key);
    // Ensure we only return strings or null
    if (typeof value === "string") {
      return value;
    }
    return null;
  },
  setItem: (key: string, value: string) => {
    // Supabase expects strings, so we enforce the type here
    secureLocalStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    secureLocalStorage.removeItem(key);
  },
};
