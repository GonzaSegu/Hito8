import React, { useContext } from 'react';
import '../assets/css/Form.css';
import { UserContext } from '../contexts/UserContext';

const Register = () => {
  const {handleregister, email, password, confirmPassword, setEmail, setPassword, setConfirmPassword} = useContext(UserContext)  
  
  return (
    <div className='form0'>
    <form className="form" onSubmit={handleregister}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Register


