import React, {useState} from 'react'
import './style/check-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import { GET_SELECTION_COIN } from '../../../components/GET_API/GET_API';

export default function Check() {
  return (
    <div className='check'>
        <div className='check-body'>
            <div className='check-table'>
              <GET_SELECTION_COIN />
            </div>
          </div>
    </div>
  )
}
