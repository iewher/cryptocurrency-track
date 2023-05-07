import React from 'react'
import './style/home-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import screen_desktop from './source/screen-desktop.png'
import screen_mobile from './source/screen-mobile.png'

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
            <div className='home-desktop-screen'>
              <img 
              src={screen_desktop}
              className='desktop-image'
              />
            </div>
            <div className='home-mobile-screen'>
              <img 
              src={screen_mobile}
              className='mobile-image'
              />
            </div>
          </div>
        </div>
    </div>
  )
}
