import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
//import {pizzas} from '../data/listado_pizzas';
import '../assets/css/Home.css';
import { useContext } from "react";
import { PizzasContext } from "../contexts/PizzasContext";


const Home = () => {
  const {pizzas} = useContext(PizzasContext)
  
  return (
    <div className="">
      <Header />
      <div className='row'>
        {pizzas.map((pizza, index) => (
          <div key={index} className='col-md-4' style={{ display: 'flex', justifyContent: 'center' }}>
            <CardPizza
              id= {pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              quantity={pizza.quantity}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home