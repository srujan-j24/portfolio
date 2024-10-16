import {create} from 'zustand'
interface AnimateStore {
  name: boolean;
  navbar: boolean;
  setName: () => void;
  setNavbar: () => void;
  section: string
}

export const useAnimateStore = create<AnimateStore>((set) => ({
  name: false,
  navbar: false,
  section: 'home',
  setName: () => set((state: AnimateStore) => ({ ...state, name: true })),
  setNavbar: () => set((state: AnimateStore) => ({ ...state, navbar: true }))
}));