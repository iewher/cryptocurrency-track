import React, {useState} from 'react'
import './style/check-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import { GET_SELECTION_COIN } from '../../../components/GET_API/GET_API';

export default function Check() {
  return (
    <div className='block'>
        <Header />
        <div className='Body'>
          <div className='body-header'>Ваши отслеживаемые криптовалюты</div>
            <div className='table'>
              <GET_SELECTION_COIN />
            </div>
          </div>
        <Bottom />
    </div>
  )
}
