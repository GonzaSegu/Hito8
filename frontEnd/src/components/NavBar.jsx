import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { total } from '../utils/funciones'
import { PizzasContext } from "../contexts/PizzasContext";
import { UserContext } from '../contexts/UserContext';
 
const NavBar = () => {
    const { logOut} = useContext(UserContext)
    const {pizzas, setPizzas} = useContext(PizzasContext)
    const [price, quantity]   = [pizzas] 
      

    const handletotal= total(pizzas)  

    const setActiveClass = ({ isActive }) =>
      isActive ? "text-white ms-2 text-bold" : "text-danger text-decoration-none ms-2";

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h2>Pizzería Mamma Mia!</h2>
          <NavLink className={setActiveClass} to="/">
            <button className='btn_negro'>
              <img src="../src/assets/img/pizzota.jfif" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Home
            </button>
          </NavLink>
          { localStorage.getItem('token') && localStorage.getItem('token').length > 0 ? (
            <>
              <NavLink className={setActiveClass} to="/profile">
                <button className='btn_negro'>
                  <img src="../src/assets/img/profile.png" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} />  Profile
                </button>
              </NavLink>
              
                <button onClick={()=>{logOut()}} className={"badge bg-danger ms-4"} style={{ height: "2rem" }}>
                  Cerrar sesíon
                </button>
             
            </>
            ) : (
            <>
              <NavLink className={setActiveClass} to="/login">
                <button className='btn_negro'><img src="../src/assets/img/login.png" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Login</button>
              </NavLink>
              <NavLink className={setActiveClass} to="/register">
                <button className='btn_negro'><img src="../src/assets/img/registrarse.jfif" alt="Ver más" style={{ width: '26px', marginLeft: '5px' }} /> Register</button>
              </NavLink>
            </>
            )}
        </div>
        <div className="navbar-left">
          <NavLink className={setActiveClass} to="/cart">
            <button className='btn_negro'><img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '25px', marginLeft: '5px' }} /> Total: ${handletotal.toLocaleString()}</button>
          </NavLink>
        </div>
      </nav>
    );
}
  
  export default NavBar;