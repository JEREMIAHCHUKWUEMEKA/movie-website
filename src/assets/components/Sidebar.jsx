import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn btn btn-light mb-3" onClick={onClose}>
         ✕
      </button>
      <ul className="list-unstyled">
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/recommendation" onClick={onClose}>Recommended</Link></li>
        <li><Link to="/genre/action" onClick={onClose}>Action</Link></li>
        <li><Link to="/genre/comedy" onClick={onClose}>Comedy</Link></li>
        <li><Link to="/genre/horror" onClick={onClose}>Horror</Link></li>
        <li><Link to="/genre/romantic" onClick={onClose}>Romantic</Link></li>
        <li><Link to="/genre/cyber" onClick={onClose}>Cyber</Link></li>
        <li><Link to="/genre/drama" onClick={onClose}>Drama</Link></li>
        <li><Link to="/genre/cartoon" onClick={onClose}>Cartoon</Link></li>
      </ul>
      
    <div className="sidebar-footer">
    <SignOut onSignOut={onClose} />
    </div>
    </div>
    
  );
};

export default Sidebar;
