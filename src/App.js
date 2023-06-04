import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Admin from './components/Admin';
import Registro from './components/Registro'; 
import Card from './components/Card'; 
import User from './components/User'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/principal-admin" element={<Admin />} /> 
        <Route path="/principal-user" element={<User />} /> 
        <Route path="/carrito" element={<Card />} /> 
      </Routes>
    </Router>
  );
}

export default App;
