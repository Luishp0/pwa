import React from "react";
import { Link } from "react-router-dom";
import "../css/registro.css";

const Registro = () => {
  return (
    <div className="body1">
        <div className="container">
      <h2>Registro</h2>
      <form>
        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <Link to={"/login"}>
            <button type="submit">Registrarse</button>
        </Link>
      </form>
    </div>
    </div>
    
  );
};

export default Registro;
