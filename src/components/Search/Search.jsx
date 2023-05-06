import React, { useState } from 'react'
import './style/search-style.css'

export default function Search() {
  return (
      <div className='search'>
        <input type='text' placeholder='Название монеты' className='search-input'></input>
        <button className='search-button'>Поиск</button>
      </div>
  )
}