import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Routes, Route,  Navigate } from 'react-router-dom';
import NoFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

let loggedIn =true;

return (
  <Router>
    <Routes>
      <Route exact path="" element={ loggedIn ? <Navigate from="/" to="/dashboard" replace/>: <Navigate from="/" to="/login" replace/>} />
      <Route exact path="/login" element={ <LoginPage />} />
      <Route exact path="/dashboard" element={ loggedIn ? <DashBoardPage/>: <Navigate from="/" to="/login" replace/>} />
      <Route path="*" element={<NoFoundPage />} />
    </Routes>
  </Router>
    
  );
}

export default  AppRoutingFinal;