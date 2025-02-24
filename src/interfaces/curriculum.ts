import { IExperience } from "./experience";
import { ILevels } from "./levels";
import { ISkills } from "./skills";
import { ITrainnings } from "./trainnings";
import { IUser } from "./user";

export interface  ICurriculum {
    id:number,
    iduser: number,
    idlevel:number,
    name: string,
    office: string;
    email:string,
    lastname:string,
    tel:string,
    city:string,
    state:string,
    dateNasc:string | Date,
    pcd:number ,
    deficiency: string | null,
    about:string,
    linkedin:string | null,
    github:string | null,
    user:IUser,
    trainnings:ITrainnings[],
    experiences:IExperience[],
    skills:ISkills[]
    level:ILevels







}