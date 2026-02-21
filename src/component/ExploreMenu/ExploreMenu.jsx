import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
      <h1> Explore our menu</h1>
      <p className='Explore-Menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elvate your dining experience, one delicion meal at a time.
      </p>
      <div className="Explore-Menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='Explore-Menu-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                    <p>{item.menu_name}</p>
                    </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
