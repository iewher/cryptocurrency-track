import React from 'react'
import './style/home-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import logo from './source/screen-desktop.jpg'

export default function Home() {
  return (
    <div className='home'>
        <div className='home-body'>
          <div className='home-left-screen'>
            <div className='home-block_text'>Вся криптовалюта на вашем экране</div>
            <div className='home-block_text'>Сайт полностью адаптирован под мобильные устройства</div>
            <div className='home-block_text'>Быстро, удобно, надежно</div>
          </div>
          <div className='home-right-screen'>
            <img 
            src={logo}
            className='home-image'
            />
          </div>
        </div>
    </div>
  )
}
