import { createContext } from "react";

export const Context = createContext()

const ContextProvider = ({children}) =>{

    const values = {

    }
    return <Context.Provider value={values}>{children}</Context.Provider>
}
export default ContextProvider