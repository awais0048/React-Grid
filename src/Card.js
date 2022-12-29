import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi.js'

const Card = () => {

const [Menudata,setMenuData]=useState(Menu)



  return (
    <div>
<MenuCard FullMenu={Menudata}/>

    </div>
  )
}

export default Resturant