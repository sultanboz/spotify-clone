import React from 'react'
import { Icon } from 'Icons'

function DownloadApp() {
  return (
    <a href='#' className='h-10 flex items-center px-6 flex-shrink-0 text-sm gap-x-4 font-semibold text-link hover:text-white'>
            <Icon name="download" size={20}/>
        Uygulamayı Yükle
    </a>

  )
}

export default DownloadApp