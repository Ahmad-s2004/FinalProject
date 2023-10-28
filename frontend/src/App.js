import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Accessories from './pages/Accessories/Accessories';
import AccessoriesProduct from './pages/Accessories/AccessoriesProduct';
import MainHome from './pages/MainHome';
import Women from './pages/Women/Women';
import WomenProduct from './pages/Women/WomenProduct';
import Men from './pages/Men/Men';
import MenProduct from './pages/Men/MenProduct';
import Kids from './pages/Kids/Kids';
import KidsProduct from './pages/Kids/KidsProduct';
import NewInProduct from './pages/NewIn/NewInProduct';
import NewIn from './pages/NewIn/NewIn';
import Home from './pages/Home/Home';
import HomeProduct from './pages/Home/HomeProduct';
import Cart from './pages/Cart/Cart';
import CheckoutPage from './pages/Cart/CheckoutPage';
import ExchangeReturn from './pages/ExchangeReturn';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import TrackOrder from './pages/TrackOrder';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FabricGlossary from './pages/FabricGlossary';
import SafePay from './pages/SafePay';
import Blogs from './pages/Blogs';
import PinkEdit from './pages/PinkEdit.js';
import SapphireX from './pages/SapphireX';

function App() {
  return (
    <>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<MainHome/>} />
          <Route path='/women' element={<Women/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/newin' element={<NewIn/>}/>
          <Route path='/newin/:_id' element={<NewInProduct/>}/>
          <Route path='/home/:_id' element={<HomeProduct/>}/>
          <Route path='/kids/:_id' element={<KidsProduct/>}/>
          <Route path='/accessories/:_id' element={<AccessoriesProduct/>}/>
          <Route path='/women/:_id' element={<WomenProduct/>}/>
          <Route path='/men/:_id' element={<MenProduct/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/exchange&return' element={<ExchangeReturn/>} />
          <Route path='/FAQs' element={<FAQs/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/track-order' element={<TrackOrder/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/fabric-glossary' element={<FabricGlossary/>} />
          <Route path='/safepay' element={<SafePay/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/pink-edit' element={<PinkEdit/>} />
          <Route path='/sapphire-x-naimal' element={<SapphireX/>} />
          
        </Routes>
        <Footer/>
        </>
  );
}

export default App;