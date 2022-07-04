import {createContext, ReactNode, useContext, useState} from 'react';

interface ContextData {
    valuers: string;
    valueUp: (valuers:string) => void;
}

interface ProviderProps{
    children:ReactNode;
}

export const Context =createContext({} as ContextData);

export function CountDownProvider({children}:ProviderProps){
    const [valuers, setValuers] = useState("untitled");

    const valueUp=(title:string)=>{
        setValuers(title);
    }
    return(
        <Context.Provider value={{
            valuers,
            valueUp
            
        }}>
            {children}      
        </Context.Provider>
    )
}