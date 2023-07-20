import React from 'react';

function RegisterForm({
    username,
    setUsername,
    lastname,
    setLastname,
    password,
    setPassword,
    email,
    setEmail,
    handleRegister
}) {
    return (
        <form onSubmit={handleRegister}>
            <div className="mb-3">
                <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="letras-r" style={{ color: '#3F69C8' }}>
            Registro
                    </span>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
            Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
            Apellido
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
            Correo electrónico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
            Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
          Registrarse
                </button>
            </div>
            <p className="mb-5 pb-lg-2" style={{ color: '#3F69C8' }}>
        ¿No tienes cuenta? <a href="/login" style={{ color: '#3F69C8' }}>Inicia sesión</a>
            </p>
        </form>
    );
}

export default RegisterForm;