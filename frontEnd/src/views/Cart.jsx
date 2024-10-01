import '../assets/css/Cart.css';
import { sumar, restar, total } from '../utils/funciones'
import { useContext } from 'react';
import { PizzasContext } from "../contexts/PizzasContext";
import { UserContext } from '../contexts/UserContext';

const Cart = () => {
    const {pizzas, setPizzas} = useContext(PizzasContext)
    const {token} = useContext (UserContext)

    const handleSumar = (id) => {
        const nuevoPizzas = sumar(id, pizzas);
        setPizzas(nuevoPizzas);  // Actualiza el estado con el nuevo array
    };

    const handleRestar = (id) => {
        const nuevoPizzas = restar(id, pizzas);
        setPizzas(nuevoPizzas);  // Actualiza el estado con el nuevo array
    };
    const handletotal= total(pizzas)


    const handlecheckout = async(e) => {
        e.preventDefault()

        const carrito = {
            cart: pizzas.map(index => ({
              id: index.id,
              name: index.name,
              price: index.price,
              quantity: index.quantity
            })),
          };

        const response = await fetch("http://localhost:5000/api/checkouts", {
          method : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}` ,
          },
          body: JSON.stringify(carrito), 
        })
        const data = await response.json();
        alert(data?.error || "Compra realizada Exitosamente!");
        const datamod = pizzas.map(pizza => ({ ...pizza, quantity: 0 }))
        setPizzas(datamod)
      }

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {handletotal === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul className="cart-list">
                    {pizzas.map(pizza => (
                        <li key={pizza.id} className="cart-item">
                            { pizza.quantity === 0 ? (
                                null
                            ) :  (
                            <div className="cart-card">
                                <img className="cart-card-img" src={pizza.img} alt={pizza.name} />
                                <div className="cart-card-body">
                                    <h3 className="cart-card-title">{pizza.name}</h3>
                                    <p><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
                                    <p><strong>Cantidad:</strong> {pizza.quantity}</p>
                                    <div className="cart-card-buttons">
                                        <button className="btn btn-danger" onClick={() => handleRestar(pizza.id)}>-</button>
                                        <button className="btn btn-success" onClick={() => handleSumar(pizza.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${handletotal.toLocaleString()}</h3>
           
            <button className="btn btn-primary" disabled={!token } onClick={handlecheckout}>
                Pagar
            </button>
        </div>
    );
};

export default Cart;

/* {handletotal === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (*/