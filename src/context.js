import { createContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

export const shopContext = createContext()


const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.handleBasketShow = () => {
        dispatch({type: 'handleBasketShow'})
    }

    value.addToBasket = (item) => {
        dispatch({type:'addToBasket', payload: item})
    }
    value.incrDecr = (id, number) => {
        dispatch({type: 'incrDecr', payload:{id: id, number: number}})
    }
    value.clearBasket = (id) => {
        dispatch({type:'clearBasket', payload: id})
    }
    value.effectt = () => {
        dispatch({type: 'effect'})
    }





return (
    <shopContext.Provider value={value}>
        {children}
    </shopContext.Provider>
)

}