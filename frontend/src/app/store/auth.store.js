import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      role: null,
      permissions: [],

      login: (userData, accessToken, refreshToken) => set({
        user: userData,
        accessToken,
        refreshToken,
        role: userData.role,
        permissions: userData.permissions || [],
        isAuthenticated: true,
      }),

      setTokens: (accessToken, refreshToken) => set((state) => ({
        accessToken,
        refreshToken: refreshToken || state.refreshToken
      })),

      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          role: null,
          permissions: [],
        });
        localStorage.removeItem('auth-storage');
      },

      setUser: (userData) => set({ 
        user: userData,
        role: userData.role,
        permissions: userData.permissions || []
      }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
