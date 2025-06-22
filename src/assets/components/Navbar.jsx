import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Navbar.css';
import Sidebar from './Sidebar';
import Search from './Search';

const Navbar = () => {
    const location = useLocation();

    // Pages where you want to hide the search bar
    const hideOnRoutes = ['/login', '/signup', '/forgot-password'];
  
    const shouldHideSearch = hideOnRoutes.includes(location.pathname);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center">
        <div className="logo-container">
        <Link to="/">
            <img src="/MY LOGO.png" alt="Jeremie.C Logo" className="logo" />
          </Link>
        </div>
        
        {!shouldHideSearch && (
        <div className="search-wrapper">
          <Search />
        </div>
      )}

        {user ? (
          <button className="btn btn-outline-light" onClick={toggleSidebar}>
            ☰ Menu
          </button>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-danger">Sign Up</Link>
          </div>
        )}
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
