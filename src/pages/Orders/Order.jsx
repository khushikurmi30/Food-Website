import React from 'react'
import './Order.css'
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import { assets } from '../../assets/assets';
  const Orders =({url}) =>{
    const[orders,setOrders]= useState([]);
    const fetchAllOreders = async () => {

   const response = await axios.get(url+"/api/order/list");
   if(response.data.success){
 // setorder is used to get print in console log all 
 //data will come in array your order
    setOrders(response.data.data);
    console.log(response.data.data);

   }
   else{
    toast.error("Error")
   }
    }
       
    const statusHandler = async (event,orderId)=>{
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if(response.data.success){
        await fetchAllOreders();
      }
    
    }


    useEffect(()=>{
      fetchAllOreders();
    },[]);
  
  return (
    <div className='order add'>
      <h3>Order Page</h3>
        <div className='order-list'>
          {orders.map((order,index)=>(
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt=""/>
              <div>
                <p className='order-item-food'>
                  {/*  in this method at the end product ther will be not comma */}
                  {order.items.map((item,index)=>{
                    if (index===order.items.length-1){
                      return item.name + " x " + item.quantity
                    }
                    else{
                      return item.name + " x "+ item.quantity +","
                    }
                  })}
                </p>
                {/* this is used for print name, address, state, city, 
                phone number of the user below the item */}
                <p className='order-item-name'>{order.address.firstName+" " +order.address.lastName}</p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.City+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}

            </p>
                  
         </div>
         <p className='order-items-phone'>{order.address.phone}</p>
        </div>
        <p>Items :  {order.items.length}</p>
        <p>${order.amount}</p>
        <select onChange={(event)=>statusHandler(event,order._id)}value={order.status}>
          <option value="Food Processing">Food Processing</option>
          <option value="Out for delivery">Out for delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
          ))}
        </div>

    </div>
  )
  }

export default Orders
