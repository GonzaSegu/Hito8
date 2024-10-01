import { useState, useEffect, createContext } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    const getPizzas = async () =>{
        const response = await fetch('http://localhost:5000/api/pizzas')
        const data = await response.json()
        const datamod = data.map(pizza => ({ ...pizza, quantity: 0 }))
        setPizzas(datamod)
    }
    useEffect(() => {getPizzas()}, [])

    return(
        <PizzasContext.Provider value={{pizzas, setPizzas}}>
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider