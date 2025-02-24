import { IJob } from "./job";
import { IUser } from "./user";

export interface CompanyInterface{
    id:number,
    idcreator:number,
    name:string,
    logo:string,
    about:string,
    cnpj:string,
    email:string,
    instagram:string,
    site:string,
    linkedin:string,
    tel:string,
    city:string,
    state:string,
    user:IUser,
    jobs:IJob[]
}