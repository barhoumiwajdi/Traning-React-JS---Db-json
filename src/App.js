//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/register';
import Product from './components/product';
import AddProduct from './components/Addproduct';
import UpdateProduct from './components/UpdateProduct';
import Weather from './components/Weather';
import NavBar from './components/Widgets/NavBar';
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';
import Footer from './components/footer';
import Profil from './components/page/profil';

function App() {
  return (
    <div  className="default">
      <Router>
        <NavBar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Product />} />
          <Route path='/createProduct' element={<AddProduct />} />
          <Route path='/UpdateProduct/:id' element={<UpdateProduct />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/profil' element={<Profil />} />
        </Routes>
         <Footer />
      </Router>
       

    </div>
  );
}

export default App;
