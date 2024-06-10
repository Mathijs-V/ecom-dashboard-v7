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
import Navbar from './components/Navbar';
//Admin imports
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/create' element={<Create />} />
          <Route path='/admin/edit/:id' element={<Edit />} />
          <Route path='/admin/delete/:id' element={<Delete />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/blog/:slug' element={<Single />} />
          <Route path='/search' element={<Search />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
