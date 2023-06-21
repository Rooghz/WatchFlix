import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Payment from './Components/Payment';
import HomePage from './Components/HomePage';
import MovieDetailsPage from './Components/MovieDetailsPage';
import Dashboard from './Components/Dashboard';
import CategoriesPage from './Components/Categories';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
};

export default App;
