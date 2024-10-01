import '../assets/css/CardPizza.css';
import { sumar } from '../utils/funciones';
import { useContext } from 'react';
import { PizzasContext } from '../contexts/PizzasContext';
import { useNavigate } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img, quantity }) => {
  const {pizzas, setPizzas} = useContext(PizzasContext)
  const handleSumar = (id) => {
    const nuevoPizzas = sumar(id, pizzas);
    setPizzas(nuevoPizzas);
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate('/pizza/' + id);
  };
 
  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
  
  return (
    <div className="card-pizza">
      <img src={img} alt={quantity}/>
      
      <div className='centrado'>
          <h4 >{name}</h4>
      </div>
      <hr />
      <div className='centrado'>
          <div>
              <h5>Ingredientes <img src="../src/assets/img/pizzita.jfif" alt="Ver más" style={{ width: '30px', marginLeft: '5px' }} /></h5>
          </div>
      </div>
      <div>
          {<p>{ingredients.join(", ")}</p>}
          {/*{ingredients.map((ingredient, index) => (<p key={index}>{ingredient}</p>))}   */}
      </div>
      <hr />
      <div className='centrado'> 
          <h4>Precio: {formattedPrice}</h4>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <button onClick={() => handleClick(id)} style={{ display: 'flex', alignItems:'center' }}>
          <div>
              <h6>Ver Más</h6>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
              <img src="../src/assets/img/ojos.png" alt="Ver más" style={{ width: '30px', marginLeft: '0px' }} />
          </div>
        </button>
        <button className='btn_negro' onClick={() => handleSumar(id)}>
          <div>
              <h6>Añadir</h6>
          </div>
          <div>
              <img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '25px', marginLeft: '5px' }} />
          </div>
        </button>
      </div>
    </div>
  );
 
}

export default CardPizza