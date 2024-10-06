// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import './App.css'; // Optional: Global CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;

