import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BearState {
  username: string;
  setUsername: (newUsername: string) => void;
  deleteEverything: () => void;
}

const useUserStore = create<BearState>()(
  immer(
    devtools(
      (set) => ({
        username: "",
        setUsername: (newUsername) => set(() => ({ username: newUsername })),
        deleteEverything: () => set({}, true),
      }),
      {
        name: "user-storage",
      }
    )
  )
);
export default useUserStore;
