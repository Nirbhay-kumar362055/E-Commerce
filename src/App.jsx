import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Order from './pages/Order.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path = '/' element={<Home/>} ></Route>
        <Route path = '/collection' element={<Collection/>} ></Route>
        <Route path = '/about' element={<About/>} ></Route>
        <Route path = '/contact' element={<Contact/>} ></Route>
        <Route path = '/product/:productId' element={<Product/>} ></Route>
        <Route path = '/cart' element={<Cart/>} ></Route>
        <Route path = '/login' element={<Login/>} ></Route>
        <Route path = '/placeOrder' element={<PlaceOrder/>} ></Route>
        <Route path = '/order' element={<Order/>} ></Route>
        
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
