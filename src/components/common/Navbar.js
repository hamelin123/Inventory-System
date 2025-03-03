import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Inventory System</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/inventory" className="hover:text-blue-200">Inventory</Link>
          <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;