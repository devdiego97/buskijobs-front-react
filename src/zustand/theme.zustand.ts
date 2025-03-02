

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define o tipo do estado
interface IThemeStore {
  theme: 'light' | 'dark';
  handleTheme: (theme: 'light' | 'dark') => void;
  deleteTheme: () => void;
}

// Cria o store com persistência
const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      handleTheme: (theme: 'light' | 'dark') => set({ theme }),
      deleteTheme: () => {
        localStorage.removeItem('theme-str'); // Remove o item do localStorage
        set({ theme: 'light' }); // Reseta o tema para o padrão
      },
    }),
    {
      name: 'theme-str', // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage
    }
  )
);

export default useThemeStore;