import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const SignOut = ({ onSignOut }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      if (onSignOut) onSignOut(); // Close the sidebar
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <button onClick={handleSignOut} className="btn btn-danger w-100 mt-3">
      Sign Out
    </button>
  );
};

export default SignOut;
