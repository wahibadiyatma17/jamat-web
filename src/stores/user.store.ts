import { User } from '@/schemas/user.schema';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStoreType = {
  user?: User;
  setUser: (user: User) => void;
  clearAllData: () => void;
};

export const useUserStore = create(
  persist<UserStoreType>(
    (set) => ({
      user: undefined,
      setUser: (newData: User) =>
        set(() => ({
          user: newData,
        })),
      clearAllData: () =>
        set(() => ({
          user: undefined,
        })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
