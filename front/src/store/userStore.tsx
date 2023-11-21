import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserState {
  username: string;
  searchUser: boolean;
  userScore: number;
  opponentScore: number;
  setUserScore: () => void;
  setOpponentScore: () => void;
  setSearchUser: (status: boolean) => void;
  setUsername: (newUsername: string) => void;
  deleteEverything: () => void;
}

const useUserStore = create<UserState>()(
  immer(
    devtools(
      persist(
        (set) => ({
          username: "",
          searchUser: false,
          userScore: 0,
          opponentScore: 0,

          setUserScore: () =>
            set((state) => ({ userScore: state.userScore + 1 })),
          setOpponentScore: () =>
            set((state) => ({ opponentScore: state.opponentScore + 1 })),
          setSearchUser: (status) => set(() => ({ searchUser: status })),
          setUsername: (newUsername) => set(() => ({ username: newUsername })),
          deleteEverything: () => set({}, true),
        }),
        {
          name: "user-storage",
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    )
  )
);
export default useUserStore;
