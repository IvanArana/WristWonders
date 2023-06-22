import React from "react";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="container">
      <Navbar />

      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 col-lg-7">
              <div
                style={{ borderRadius: "1rem", backgroundColor: "#3F69C8" }}
                className="row g-0"
              >
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src="https://scontent.fisj1-1.fna.fbcdn.net/v/t39.30808-6/351325960_617122323716457_1602048674086500203_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=aDyitYiGq84AX9VSmj4&_nc_ht=scontent.fisj1-1.fna&oh=00_AfAw6gMILloUtcml4i8BcBsOEiWy7Ok9Efuyk0aZKljRZg&oe=6480EE26"
                    alt="login form"
                    className="w-100"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "500px" }}
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