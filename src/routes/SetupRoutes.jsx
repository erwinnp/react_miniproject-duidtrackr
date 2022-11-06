import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import AddTransactionPage from '../pages/AddTransactionPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='add' element={<AddTransactionPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoutes;
