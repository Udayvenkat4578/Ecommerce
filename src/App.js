import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartdata from './components/Cartdata';
import Nav from './components/Nav';
import Signin from './components/Signin'
import User from './components/User';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartdata" element={<Cartdata />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
