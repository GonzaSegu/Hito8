import '../assets/css/Pizza.css';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { PizzasContext } from "../contexts/PizzasContext";
import { sumar } from '../utils/funciones';
import { NavLink } from "react-router-dom"

const Pizza = () => {
    const { id } = useParams()
    const [registro, setRegistro] = useState([]);
    const consulta_registro = async (id) =>{
        const response = await fetch ('http://localhost:5000/api/pizzas/'+id);
        const data = await response.json();
        setRegistro(data);
    }
    useEffect(() => {consulta_registro(id)}, [id]);
   
    const {pizzas, setPizzas} = useContext(PizzasContext)
    const handleSumar = (id) => {
        const nuevoPizzas = sumar(id, pizzas);
        setPizzas(nuevoPizzas);
    };

    return (
        <div className="pizza-card">
            <div>
                <img src={registro.img} alt={registro.name} />
            </div>
            <div className="pizza-textos">
                {registro.name ? (
                    <>
                        <h2>{registro.name}</h2>
                        <p>{registro.desc}</p>
                        <ul>
                            {registro.ingredients.map((x, index) => (
                                <li key={index}>{x}</li>
                            ))}
                        </ul>
                        <div className='pizza-precio'>
                            <div className='pizza-precio'>
                                <h3><strong>Precio:</strong> ${registro.price.toLocaleString()}</h3>
                            </div>
                            <button onClick={() => handleSumar(id)} className='btn_negro'>
                                <h4 >Añadir</h4>
                                <div>
                                    <img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '35px', marginLeft: '5px' }} />
                                </div>
                            </button>
                            <NavLink to="/">
                                <button className="btn btn-primary">
                                    Volver
                                </button>
                            </NavLink>
                        </div>  
                    </>
                ) : (
                    <p>Cargando..</p> 
                )}
            </div>
        </div>
    );
};
export default Pizza