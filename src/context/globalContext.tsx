import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { CursoType } from "../types/curso"
import { ModuleType } from "../types/module"


type props={
    children:ReactNode,
}
type ContextType={
    theme: 'light' | 'dark',
    handleTheme:(theme:'light' | 'dark')=>void,
    stateMobile:boolean,
    shareClass:CursoType | null,
    setShareClass:(classes:CursoType | null)=>void,
    shareModule:ModuleType | null,
    setShareModule:(module:ModuleType | null)=>void,
    handleStateMobile:(newState:boolean)=>void,
    stateModal:boolean,
    handleStateModal:(newState:boolean)=>void,
    stateModalLoading:boolean,
    handleStateModalLoading:(newState:boolean)=>void
}


const context=createContext<ContextType>({
    theme:'light',
    handleTheme:(theme:'light' | 'dark')=>{},
    stateMobile:false,
    handleStateMobile:()=>{},
    shareClass:null,
    setShareClass:(classes:CursoType | null)=>{},
    shareModule:null,
    setShareModule:(module:ModuleType | null)=>{},
    stateModal:false,
    handleStateModal:()=>{},
    stateModalLoading:false,
    handleStateModalLoading:(newState:boolean)=>{}
})

export const ContextProvider=({children}:props)=>{
    const [stateMobile,handleStateMobile]=useState<boolean>(false)
    const [stateModal,handleStateModal]=useState<boolean>(false)
    const [stateModalLoading,handleStateModalLoading]=useState<boolean>(false)
    const [shareClass,setShareClass]=useState<CursoType | null>(null)
    const [shareModule,setShareModule]=useState<ModuleType | null>(null)
    const [theme,handleTheme]=useState<'light' | 'dark'>('light')
   

const values={
    theme,handleTheme,
    stateMobile,handleStateMobile,stateModalLoading,handleStateModalLoading,stateModal,handleStateModal,shareClass,setShareClass,shareModule,setShareModule
}
    return <context.Provider value={values}>
        {children}
    </context.Provider>
}

export const useGlobalContext=()=>useContext(context)