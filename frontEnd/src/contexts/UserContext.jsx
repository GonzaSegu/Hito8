import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || "");    /* estudiar esta linea */
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token.length > 0) {
      fetch("http://localhost:5000/api/auth/me", {
        method: "GET",  
        headers: {
          Authorization:`Bearer ${token}` ,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }  
  }, [token]);
  

  const handlelogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Autenticación Exitosa!");
    localStorage.setItem("token", data.token);
    setToken( localStorage.getItem('token') )
    navigate("/");
  };

  const handleregister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios (no pueden estar vacíos)');
    } else if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      alert('El password y la confirmación del password deben ser iguales');
    } else {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}` ,
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      })
      const data = await response.json();
      alert(data?.error || "Registro Exitoso!");
      localStorage.setItem("token", data.token);
      setToken( localStorage.getItem('token') )
      navigate("/");
    }

  };

  const logOut = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("")
    setToken("")
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider value={{handlelogin, handleregister, logOut, email, setEmail, password,setPassword, confirmPassword, setConfirmPassword, token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider