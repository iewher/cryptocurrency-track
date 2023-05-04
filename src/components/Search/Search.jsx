import React, { useState } from 'react'
import './style/search-style.css'

export default function Search() {
  return (
      <div className='input'>
        <input type='text' placeholder='Название монеты' className='search'></input>
        <button className='button-search'>Поиск</button>
      </div>
  )
}