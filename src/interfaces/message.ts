import { IApplication } from "./application";
import { IUser } from "./user";


export interface IMessage{
    id:number,
    idapplication:number,
    idrecruiter:number,
    date:string,
    idcandidate:number,
    subject:string,
    message:string,
    application?:IApplication,
    candidate?:IUser,
    recruiter?:IUser
}