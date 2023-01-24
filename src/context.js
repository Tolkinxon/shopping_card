import {createContext } from "react";

export const shopContext = createContext()

export const ContextProvider = ({children}) => {
const value = {
    exapmle: 'hello world'
}
return (
    <shopContext.Provider value={value}>
        {children}
    </shopContext.Provider>
)

}