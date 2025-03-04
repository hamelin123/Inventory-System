import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Inventory System</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          
          {user ? (
            <>
              <Link to="/inventory" className="hover:text-blue-200">Inventory</Link>
              <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
              <button 
                onClick={handleLogout} 
                className="hover:text-blue-200"
              >
                Logout
              </button>
              <span className="ml-4 text-blue-200">Hello, {user.username || user.email}</span>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-200">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;