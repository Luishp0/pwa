import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  return (
    <div className="body1">
        <div className="container">
      <h2>Iniciar sesion</h2>
      <form>
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Contrasena</label>
        <input type="password" id="password" name="password" />

        <div className="button-container">
          <Link to={"/inicio"} >
            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </Link>
 
          <Link to="/registro" className="register-buttom">
            <button >
              Registrar
            </button>
          </Link>
          
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
