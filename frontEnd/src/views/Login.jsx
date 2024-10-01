import React, { useContext } from 'react';
import '../assets/css/Form.css';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const {handlelogin, email, password, setEmail, setPassword} = useContext(UserContext)  

  return (
    <div className='form0'>
    <form className="form" onSubmit={handlelogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Login