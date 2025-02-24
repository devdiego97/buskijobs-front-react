import { ICurriculum } from "./curriculum";
import { IJob } from "./job";


export  interface ILevels{
    id:number,
    name:string,
    jobs?:IJob[],
    curriculuns?:ICurriculum[]
}
