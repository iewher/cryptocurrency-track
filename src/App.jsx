import React from 'react';
import './style/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Bottom from './components/Bottom/Bottom';

import Home from './structure/pages/page-home/Home';
import Top100 from './structure/pages/page-top-100/Top100';
import Check from './structure/pages/page-check/Check';
import Coin from './structure/pages/page-coin/Coin';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/top-100' element={<Top100 />} />
          <Route path='/check' element={<Check />} />
          <Route path='/coin' element={<Coin />} />
        </Routes>
        <Bottom />
      </div>
    </BrowserRouter>
  );
}

export default App;