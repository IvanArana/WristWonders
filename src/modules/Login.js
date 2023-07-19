import React from 'react';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import Image from '../img/Reloj.jpeg';

function Login() {
    return (
        <div className="container">
            <Navbar />

            <section className="vh-100" style={{ backgroundColor: 'white' }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8 col-lg-7">
                            <div
                                style={{ borderRadius: '1rem', backgroundColor: '#3F69C8' }}
                                className="row g-0"
                            >
                                <div className="col-md-6 d-none d-md-block">
                                    <img
                                        src={Image}
                                        alt="login form"
                                        className="w-100"
                                        style={{ borderRadius: '1rem 0 0 1rem', height: '500px' }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <LoginForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;