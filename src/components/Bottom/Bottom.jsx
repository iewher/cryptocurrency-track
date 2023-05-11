import React from 'react'
import { Link } from 'react-router-dom'
import './style/bottom-style.css'
import {AiFillGithub} from 'react-icons/ai'
import {BsTelegram} from  'react-icons/bs'

const URL_GIT = 'https://github.com/iewher/cryptocurrency-track';
const URL_TG = 'https://t.me/iewher';

export default function Bottom() {
  return (
    <div className='bottom'>
      <div className='bottom-rights'>
        © 2023 Cryptocurrency track. All rights reserved
      </div>
      <Link to={URL_GIT}>
        <button className='bottom-git'>
          <AiFillGithub className='icons'/>
        </button>
      </Link>
      <Link to={URL_TG}>
        <button className='bottom-telegram'>
          <BsTelegram className='icons'/>
        </button>
      </Link>
    </div>
  )
}
