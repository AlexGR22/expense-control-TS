import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"
export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setBudget(+e.target.value) // otra opción para transformar el string a number
        setBudget(e.target.valueAsNumber)

    }

    const isValid = useMemo(() => {

        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({type: 'add-budget', payload: {budget}})
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-ble-600 font-bold text-center"></label>
            </div>
            <input
                id="budget"
                type="number"
                className="w-full bg-white border border-gray-200 p-2"
                placeholder="Definir presupuesto"
                name="budget"
                value={budget}
                onChange={handleChange}
            />

            <input 
                type="submit" 
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 text-white font-bold uppercase disabled:opacity-50" value="Definir presupuesto"
                disabled={isValid}
            />
        </form>
    )
}
