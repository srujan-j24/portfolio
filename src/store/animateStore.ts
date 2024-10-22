import {create} from 'zustand'
interface AnimateStore {
  name: boolean;
  navbar: boolean;
  setName: () => void;
  setNavbar: () => void;
  setSectionId: (payload: number) => void;
  section: number;
}

export const useAnimateStore = create<AnimateStore>((set) => ({
  name: false,
  navbar: false,
  section: 0,
  setName: () => set((state: AnimateStore) => ({ ...state, name: true })),
  setNavbar: () => set((state: AnimateStore) => ({ ...state, navbar: true })),
  setSectionId: (payload:number) => set((state: AnimateStore) => ({ ...state, section: payload }))
}));