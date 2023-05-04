import React from 'react'
import './style/home-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import logo from './source/screen-desktop.jpg'

export default function Home() {
  return (
    <div className='block-home'>
        <Header />
        <div className='body-home'>
          <div className='left-screen'>
            <div className='block_text'>Вся криптовалюта на вашем экране</div>
            <div className='block_text'>Сайт полностью адаптирован под мобильные устройства</div>
            <div className='block_text'>Быстро, удобно, надежно</div>
          </div>
          <div className='right-screen'>
            <img 
            src={logo}
            className='image'
            />
          </div>
        </div>
        <Bottom />
    </div>
  )
}
