import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
  
  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-Item'>
      <div className="food-Item-img-container">
     <img className='food-Item-image' src={url+"/images/"+image} alt=''/>
      {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt='' />
        :<div className='food-item-counter'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}alt=''/>
          <p> {cartItems[id]}</p>
          <img onClick={()=>addToCart(id)}src={assets.add_icon_green}alt=''/>
        </div>
         }
      </div>
      <div className="food-Item-info">
        <div className="food-Item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt=''/>
        </div>
        <p className="food-Item-desc">
            {description}
        </p>
        <p className="food-Item-price">${price}</p>
      </div>
    </div>
    
  )
}

export default FoodItem 
