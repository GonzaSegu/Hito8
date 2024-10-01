


export const sumar = (id, pizzas) => {
    return pizzas.map(pizza => 
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
};

export const restar = (id, pizzas) => {    
    return pizzas.map(pizza =>
        pizza.id === id ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) } : pizza
    );
};

export const total = (pizzas)=> {
    return pizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
}
