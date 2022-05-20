import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from 'react-router-dom';

function Navigation() {

    const history = useNavigate()

  return (
    <nav className='flex items-center gap-x-4'>

<button onClick={() => history(-1)} className='h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
    <Icon size={22} name="prev"/>
</button>
<button  onClick={() => history(+1)} className='h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
    <Icon size={22} name="next"/>
</button>
    </nav>
  )
}

export default Navigation