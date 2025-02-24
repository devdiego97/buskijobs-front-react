import { IApplication } from "./application";
import { ICategory } from "./category";
import { CompanyInterface } from "./company";
import { IContractType } from "./contractType";
import { ILevels } from "./levels";
import { IModelOperating } from "./modelOperating";


export  interface IJob{
    id: number;
    title: string;
    description: string;
    salary: number | string;
    city:string | null,
    state:string | null,
    requirements: string;
    benefits: string;
    createDate: string;
    exclusivepcd:boolean | number;
    expireDate: string;
    companyId: number | string,
    contractTypeId: number | string,
    modelOperatingId: number | string,
    levelId: number | string,
    company:CompanyInterface,
    applications:IApplication[] ,
    status:string,
    datSubscriptionMax:Date | string,
    category:ICategory,
    level?:ILevels,
    jobContractType?:IContractType,
    modelOperating?:IModelOperating
}


export interface PaginatedResult {
    total: number;
    page: number;
    pageSize: number;
    data: IJob[];
  }