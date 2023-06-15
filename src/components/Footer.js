import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function Footer() {
 
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h3>¡Contactanos!</h3>
                    <form className="footer-form">
                        <div className="input-group">
                        <input type="email" className="form-contro" placeholder="Correo electrónico" />
                        <button type="submit" className=" btn-primary">Enviar</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
      </footer>
      

    )  
}

export default Footer;