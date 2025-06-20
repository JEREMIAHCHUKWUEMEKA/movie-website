import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import GenrePage from './assets/pages/GenrePage';
import MovieDetail from './assets/pages/MovieDetail';
import Recommendation from './assets/pages/Recommendation.JSX';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import ForgotPassword from './assets/pages/ForgotPassword';
import AuthGuard from './assets/components/AuthGuard';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
        <Route path="/movie/:id" element={<AuthGuard><MovieDetail /></AuthGuard>} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      </>

  );
};

export default App;