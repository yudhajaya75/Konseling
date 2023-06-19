import { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router-dom'

import Home from './pages/home/home'
import Home2 from './pages/home/home2'
import Login from './pages/login/login';
import Daftar from './pages/signup/signup';
import Layanan from './pages/layanan/layanan';
import Webinar from './pages/webminar/webinar'
import Webinar2 from './pages/webminar/webinar2'
import Webinar3 from './pages/webminar/webinar3'
import Pelatihan from './pages/pelatihan/pelatihan'
import Pelatihan2 from './pages/pelatihan/pelatihan2'
import Konsultasi from './pages/konsultasi/konsultasi'
import Blog from './pages/blog/blog'
import Blog2 from './pages/blog/blog2'
import Blog3 from './pages/blog/blog3'
import About from './pages/about/about';
import Payment from './pages/payment/payment';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Daftar />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home2' element={<Home2 />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/webinar' element={<Webinar />} />
        <Route path='/webinar2' element={<Webinar2 />} />
        <Route path='/webinar3' element={<Webinar3 />} />
        <Route path='/pelatihan' element={<Pelatihan />} />
        <Route path='/pelatihan2' element={<Pelatihan2 />} />
        <Route path='/konsultasi' element={<Konsultasi />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog2' element={<Blog2 />} />
        <Route path='/blog3' element={<Blog3 />} />
        <Route path='/about' element={<About />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;