import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hud from './components/Hud';
import Header from './components/Header';
import Story from './components/Story';
import Input from './components/Input';

function App() {
  return (<Router>
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </div>
    </div>
    < Input />
    <Hud />
  </Router>
  );
}

export default App;
