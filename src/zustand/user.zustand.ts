
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IUser } from '../interfaces/user';

// Define o tipo do estado
interface IUserStore {
  user: IUser| null,
  saveUser: (newUser:IUser) => void;
  deleteUser: () => void;
 
}

// Cria o store com persistência
const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
        user:null,
        saveUser: (newUser:IUser | null) => set({ user: newUser}),
        deleteUser: () => set(() => ({ user:null})),
      
    }),
    {
      name: 'user-str', // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage
    }
  )
);

export default useUserStore;