import '../assets/css/Profile.css'
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { logOut, user } = useContext(UserContext);
  
  return (

    <div className="profile">
      {user ? (
        <>
          <button type="button" className="btn btn-success">Email: {user.email}</button>
          <button onClick={()=>{logOut()}} type="button" className="btn btn-danger">
            Cerrar Sesión
          </button>
        </>
      ) : null
      } 
    </div>
  );
}
export default Profile


