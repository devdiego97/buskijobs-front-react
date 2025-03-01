

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ICompany } from '../interfaces/company';

// Define o tipo do estado
interface IThemeStore {
  theme:'light' | 'dark',
  handleTheme: (theme:'light' | 'dark') => void;

 
}

// Cria o store com persistência
const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
        theme:'light',
       handleTheme: (theme:'light' | 'dark') => set({ theme:theme}),
       
     
    }),
    {
      name: 'theme-str', // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage
    }
  )
);
export default useThemeStore;