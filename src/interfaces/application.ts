import { ICurriculum } from "./curriculum"
import { IJob } from "./job"
import { IMessage } from "./message"



export interface IApplication{
    id:number,
    idcurriculum:number,
    idjob:number,
    date:string,
    curriculum:ICurriculum,
    job:IJob,
    messages?:IMessage[]

}