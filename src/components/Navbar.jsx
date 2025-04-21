// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Update the path if needed

function Navbar() {
  return (
    <nav className="bg-white p-4 flex items-center shadow-md">
      {/* Logo */}
      <img src={Logo} alt="MediGo Logo" className="h-12 mr-6" />

      {/* Navigation Links */}
      <div className="flex space-x-6 text-primary text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/medicines" className="hover:underline">Medicines</Link>
        <Link to="/consultation" className="hover:underline">Consultation</Link>
        <Link to="/chatbot" className="hover:underline">Chatbot</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;