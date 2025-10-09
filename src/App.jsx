import React from 'react';
import './App.css'
import HomePage from './pages/HomePage';
import CEP from './pages/CEP';
import UsarParametros from './pages/UsarParametros';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div div="app-container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cep" element={<CEP />} />
          <Route path="/post/:id" element={<UsarParametros />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App