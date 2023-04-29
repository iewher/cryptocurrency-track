import React from 'react'
import '../style/style.css'

export default function Header() {
  return (
    <div className='Header'>
        <div className='name'>
          Cryptocurrency track
        </div>
        <div className='buttons'>
          <button className='button-home'>Главная</button>
          <button className='button-top-100'>Топ-100</button>
          <button className='button-check'>Отслеживаемое</button>
        </div>
        <div className='input'>
          <input type='text' placeholder='Название монеты' className='search'></input>
        </div>
        <div className='settings'>
          <button className='button-setting'>Setting</button>
        </div>
    </div>
  )
}

