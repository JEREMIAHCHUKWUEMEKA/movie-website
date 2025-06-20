import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const SignOut = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
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
