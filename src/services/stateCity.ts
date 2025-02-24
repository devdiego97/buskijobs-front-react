import { baseUrlGov } from '../config/axios.config';
import axios from "axios";



export interface IState {
    id: number;
    nome: string;
    sigla: string;
  }


  export interface ICity {
    id: number;
    nome: string;

  }
export const apiStatesCity={
    getStates:async()=>{
        try{
            const response = await axios.get<IState[]>(`${baseUrlGov}estados`)
            if(response.status === 200){
                return response.data
            }else{
                return 'error'
            }


        }catch(e){
            console.log(e)
        }
    },
    getCityFromState:async(stateid:number)=>{
        try{
        const response = await axios.get<ICity[]>(`${baseUrlGov}estados/${stateid}/municipios?orderBy=nome`)
        if(response.status === 200){
            return response.data
        }else{
            return 'error'
        }
        }catch(e){
            console.log(e)
        }
    },
    getCitys:async()=>{
        try{
            const response = await axios.get<{id:number,nome:string}[]>(`${baseUrlGov}municipios?orderBy=nome`)
            if(response.status === 200){
                return response.data
            }else{
                return 'error'
            }
            }catch(e){
                console.log(e)
            }
        }
}