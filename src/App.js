import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './home';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Single from './components/single';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/blog/:slug' element={<Single />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
