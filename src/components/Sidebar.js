import React from 'react'
import logo from "img/logo.svg"
import { Icon } from 'Icons'
import Menu from './Sidebar/Menu'
import PlayList from './Sidebar/PlayList'
import DownloadApp from './Sidebar/DownloadApp'

 function Sidebar() {
  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>

      <a href='#' className='mb-7 px-6'>
      <img src={logo} className='h-10'></img>
      </a>
   
      <Menu />
      <nav className='mt-6'>
        <ul>
          <li>
            <a href='#' className='py-2 px-6 flex items-center text-sm text-link font-semibold group hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-opacity-60  bg-white rounded-sm text-black group-hover:bg-opacity-100'>
              <Icon name="plus" size={12}/>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href='#' className='py-2 px-6 flex items-center text-sm text-link font-semibold group hover:text-white'>
            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-60 group-hover:opacity-100'>
            <Icon name="heartFilled" size={12}/>
            </span>
            Beğenilen Şarkılar
             

            </a>
          </li>
        </ul>
      </nav>

      <PlayList/>
      <DownloadApp/>

     
      
      </aside>
  )
}

export default Sidebar 