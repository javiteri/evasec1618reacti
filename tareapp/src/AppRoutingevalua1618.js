import React from 'react';
import {BrowserRouter as Router,Routes, Route,  Navigate } from 'react-router-dom';
import NoFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function AppRoutingevalua1618() {

let loggedIn =false;

return (
  <Router>
    <Routes>
      <Route exact path="" element={ loggedIn ? <Navigate from="/" to="/login" replace/>: <Navigate from="/" to="/register-page" replace/>} />
      <Route exact path="/login" element={ <LoginPage />} />
      <Route exact path="/register-page" element={ <RegisterPage />} />
      <Route path="*" element={<NoFoundPage />} />
    </Routes>
  </Router>
    
  );
}

export default  AppRoutingevalua1618;