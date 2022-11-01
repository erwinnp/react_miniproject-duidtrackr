import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import AddTransactionPage from '../pages/AddTransactionPage';

const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='add' element={<AddTransactionPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoutes;
