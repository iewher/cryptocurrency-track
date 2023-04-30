import React, { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './style/search-style.css'

export default function Search() {
  return (
      <div className='input'>
        <input type='text' placeholder='Название монеты' className='search'></input>
      </div>
  )
}