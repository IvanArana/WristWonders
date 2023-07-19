import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

function Register() {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
    // Lógica para enviar los datos del registro al servidor
    };

    return (
        <div className="container">
            <Navbar />

            <section className="vh-100" style={{ backgroundColor: 'white' }}>
                <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
                    <div className="card" style={{ maxWidth: '90%', backgroundColor: '#D9D9D9' }}>
                        <div className="card-body p-4 p-lg-5 text-black">
                            <RegisterForm
                                username={username}
                                setUsername={setUsername}
                                lastname={lastname}
                                setLastname={setLastname}
                                password={password}
                                setPassword={setPassword}
                                email={email}
                                setEmail={setEmail}
                                handleRegister={handleRegister}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;