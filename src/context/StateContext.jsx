import { createContext } from "react";
import react from 'react';
import { useReducer,useContext } from "react";


export const StateContext = createContext();

export const StateProvider= ({initialState,reducer,children})=>(<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>) 


export const useStateProvider=()=>useContext(StateContext);