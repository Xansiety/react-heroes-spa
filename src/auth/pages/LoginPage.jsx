import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {onLoginUser} = useContext(AuthContext)
  const navigate = useNavigate();


  
  const onLogin = () => { 
    
    const lastPath = localStorage.getItem("lastPath") || '/marvel'

    onLoginUser('Fernando');  
    
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
