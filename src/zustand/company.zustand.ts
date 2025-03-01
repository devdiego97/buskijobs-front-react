

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ICompany } from '../interfaces/company';

// Define o tipo do estado
interface ICompanyStore {
  company: ICompany | null,
  saveCompany: (newCompany:ICompany) => void;
  deleteCompany: () => void;
 
}

// Cria o store com persistência
const useCompanyStore = create<ICompanyStore>()(
  persist(
    (set) => ({
        company:null,
        saveCompany: (newCompany:ICompany) => set({ company: newCompany}),
        deleteCompany: () => set(() => ({ company:null})),
     
    }),
    {
      name: 'company-str', // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage
    }
  )
);
export default useCompanyStore;