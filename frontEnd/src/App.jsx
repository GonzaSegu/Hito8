import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './views/Home';
import Footer from './components/Footer';
import Register from './views/Register';
import Login from './views/Login';
import Cart from './views/Cart';
import Pizza from './views/Pizza';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';

function App() {
  const {token} = useContext(UserContext)
  
  return (
    <>
      <div className="footer-fix">
        <NavBar className="navbar"/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={ localStorage.getItem('token') && localStorage.getItem('token').length > 0 ? <Navigate to="/" /> : <Login />  } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Pizza /> } />
            <Route path='/profile' element={ localStorage.getItem('token') && localStorage.getItem('token').length > 0 ? <Profile /> : <Navigate to="/login" />  } />
            <Route path="*" element={<NotFound/>}/>      
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;

