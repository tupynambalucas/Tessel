import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AdminViewType = 'users' | 'home' | 'config';

interface AdminNavigationState {
  currentView: AdminViewType;
  setView: (view: AdminViewType) => void;
}

export const useAdminNavigation = create<AdminNavigationState>()(
  persist(
    (set) => ({
      currentView: 'home',
      setView: (view) => set({ currentView: view }),
    }),
    {
      name: 'admin-navigation-storage',
    },
  ),
);
