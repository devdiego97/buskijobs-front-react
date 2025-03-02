
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IUser } from '../interfaces/user';

// Define o tipo do estado
interface IAuthStore {
  user: IUser| null,
  token:string | null,
  saveToken:(newToken:string | null)=>void,
  saveUser: (newUser:IUser) => void;
  deleteUser: () => void;
  deleteToken:()=>void
 
}

// Cria o store com persistência
const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
        token:null,
        saveToken: (newToken:string | null) => set({ token:newToken}),
        deleteToken: () => set(() => ({ token:null})),
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

export default useAuthStore;