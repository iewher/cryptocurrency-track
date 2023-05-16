import React from 'react'
import './style/home-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import screen_imac from './source/screen-imac.png'
import screen_macbook from './source/screen-macbook.png'
import screen_iphone from './source/screen-iphone.png'
import screen_ipad from './source/screen-ipad.png'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-block'>
          <div className='home-block-left'>
            <div className='home-text'>Вы можете посмотреть топ-100 криптовалют</div>
          </div>
          <div className='home-block-right'>
            <img src={screen_imac} width={'80%'} height={'60%'}/>
          </div>
        </div>
        <div className='home-block'>
          <div className='home-block-left'>
            { <img src={screen_macbook} width={'80%'} height={'50%'}/> }
          </div>
          <div className='home-block-right'>
            <div className='home-text'>Вы можете отслеживать криптовалюты, которые хотите</div>
          </div>
        </div>
        <div className='home-block'>
          <div className='home-block-left'>
            <div className='home-text'>Вы можете искать любые криптовалюты и читать про них подробную информацию</div>
          </div>
          <div className='home-block-right'>
            <img src={screen_iphone} width={'40%'} height={'70%'}/>
          </div>
        </div>
        <div className='home-block'>
          <div className='home-block-left'>
            { <img src={screen_ipad} width={'70%'} height={'60%'}/> }
          </div>
          <div className='home-block-right'>
            <div className='home-text'>Сайт полностью адаптирован под мобильные устройства</div>
          </div>
        </div>
      </div>
    </div>
  )
}
