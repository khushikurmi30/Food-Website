import React, { useContext } from 'react'

import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
  const[menu,setmenu]=useState("Home");

  const{getTotalCartAmount,token,setToken}=useContext(StoreContext);

  
  const navigate = useNavigate();

  const logout = ()=>{
 localStorage.removeItem("token");
  setToken("");
  navigate("/");
 
}

  return (
    <div className='navbar'>
     <Link to ='/'><img src={assets.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
      <Link to='/'onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>  Home </Link>
      <a href="#Explore-Menu" onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
      <a href="#app-download"onClick={()=>setmenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
      <a href="#footer"onClick={()=>setmenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
     </ul>
     <div className="navbar-right">
      < img src={assets.search_icon}alt='search_icon'/>
      <div className="navebar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon}alt='basket_icon'/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
              </div>
     {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
     :<div className='navbar-profile'>
      <img src={assets.profile_icon} alt="" />
      <ul className="nav-profile-dropdown">
       {/* link the my orders page in order img */}
        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt='' /><p>Order</p></li>
        <hr/>
        <li  onClick={logout}><img src={assets.logout_icon} alt='' /><p>Logout</p>
        </li>
      </ul>
      
      </div>
      }
        
        </div>
      </div>
     
  )
}

export default Navbar
