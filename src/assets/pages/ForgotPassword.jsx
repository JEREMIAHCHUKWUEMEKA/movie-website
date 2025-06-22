import React, { useState } from 'react';
import './ForgotPassword.css';
import { auth } from '../Services/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your inbox for a password reset link.');
      setError('');
    } catch (err) {
      setMessage('');
      setError('Unable to send reset email. Try again later.');
    }
  };

  return (
    <div className="forgot-page">
      <form onSubmit={handleReset} className="forgot-form">
        <h2 className="forgot-title">Reset Password</h2>
        {message && <p className="message-text">{message}</p>}
        {error && <p className="error-text">{error}</p>}
        <input className='writeup'
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="forgot-button">Send Reset Link</button>
        <p className="forgot-link" onClick={() => navigate('/login')}>Back to Login</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
