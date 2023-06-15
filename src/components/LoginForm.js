import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="d-flex align-items-center mb-3 pb-1">
        <h1 className="letras" style={{ color: "white" }}>
          Inicio de Sesion
        </h1>
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="form2Example17"
          style={{ color: "white" }}
        >
          Correo
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="form2Example27"
          style={{ color: "white" }}
        >
          Contraseña
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="pt-1 mb-4">
        <Link
          to="/admin"
          className="btn btn-light"
          style={{ color: "#3F69C8" }}
        >
          Iniciar sesión
        </Link>
      </div>

      <p className="mb-5 pb-lg-2" style={{ color: "#FEFEFE" }}>
        ¿No tienes cuenta?{" "}
        <a href="/Registro" style={{ color: "#FEFEFE" }}>
          Registrate
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
