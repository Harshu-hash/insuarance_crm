import { create } from 'zustand';

export const useLayoutStore = create((set) => ({
  sidebarCollapsed: false,
  isMobileSidebarOpen: false,

  toggleSidebar: () => set((state) => ({ 
    sidebarCollapsed: !state.sidebarCollapsed 
  })),

  setSidebarCollapsed: (collapsed) => set({ 
    sidebarCollapsed: collapsed 
  }),

  toggleMobileSidebar: () => set((state) => ({ 
    isMobileSidebarOpen: !state.isMobileSidebarOpen 
  })),

  closeMobileSidebar: () => set({ 
    isMobileSidebarOpen: false 
  }),
}));
