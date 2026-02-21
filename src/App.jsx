

import react, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import Varify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    { showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>} >
        </Route>
         < Route path='/Cart' element={<Cart/>} >
        </Route>
        
           <Route path='/Order' element={<PlaceOrder/>}>
        </Route>
        <Route path='/Verify' element={<Varify/>}></Route>
        <Route path='/myorders' element={<MyOrders/>}></Route>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
