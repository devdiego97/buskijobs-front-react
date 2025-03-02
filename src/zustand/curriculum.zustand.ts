import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ICurriculum } from '../interfaces/curriculum';

// Define o tipo do estado
interface ICurriculumStore {
  curriculum: ICurriculum | null,
  saveCurriculum: (newcurriculum:ICurriculum | null) => void;
  deleteCurriculum: () => void;
 
}

// Cria o store com persistência
const useCurriculumStore = create<ICurriculumStore>()(
  persist(
    (set) => ({
        curriculum:null,
        saveCurriculum: (newCurriculum: ICurriculum | null) => set({ curriculum: newCurriculum }),
      deleteCurriculum: () => set(() => ({ curriculum:null})),
     
    }),
    {
      name: 'curriculum-str', // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage
    }
  )
);

export default useCurriculumStore;