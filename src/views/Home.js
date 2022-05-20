import React from 'react'
import Section from 'components/Section'

function Home() {

  const items = [
    {
      id:1,
      title:"şarkı 1",
      description: "description 1",
      image: "https://images.unsplash.com/photo-1652808650614-cdc179283414?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069",
      type: "album"
    },
    {
      id:2,
      title:"şarkı 2",
      description: "description 2",
      image: "https://images.unsplash.com/photo-1652953826135-5b3f50906d85?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127",
      type: "album"
    }, 
      {
      id:3,
      title:"şarkı 3",
      description: "description 3",
      image: "https://images.unsplash.com/photo-1652695871803-532ad63dd466?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      type: "artist"
    },  
     {
      id:4,
      title:"şarkı 4",
      description: "description 4",
      image: "https://images.unsplash.com/photo-1652867063179-b383a9032346?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      type: "podcast"
    },  
     {
      id:5,
      title:"şarkı 5",
      description: "description 5",
      image: "https://images.unsplash.com/photo-1652811231425-8b6f2a720989?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072",
      type: "album"
    }
  ]
  return (
    <div className='grid gap-y-8'>
        <Section
        title="Recently played"
        more="/blabla"
        items= {items}
        />
           <Section
        title="Shows to try"
        more="/blabla"
        items= {items}
        />
        <Section
        title="Made for you"
        more="/blabla"
        items= {items}
        />
    </div>
  )
}

export default Home