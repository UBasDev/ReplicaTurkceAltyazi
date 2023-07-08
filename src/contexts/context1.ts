import { createContext } from "react"

interface IObject1{
    key1: string;
    key2: string;
}

export const context_Value1:IObject1 = {
    "key1": "value1",
    "key2": "value2",
}
export const Context1 = createContext<IObject1>(context_Value1)
export const Context_Provider1 = Context1.Provider