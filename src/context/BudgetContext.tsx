import { useReducer, createContext, ReactNode } from "react"
import { budgetReducer, initialState, BudgetActions, BudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

// export const BudgetContext = createContext<BudgetContextProps> ({} as BudgetContextProps) // opcion 1
export const BudgetContext = createContext<BudgetContextProps> (null!)

export const BudgetProvider = ( {children} : BudgetProviderProps)=>{

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider 
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}