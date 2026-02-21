import userModel from '../models/userModels.js'
import orderModel from "../models/orderModel.js";
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
//placing user order for frontend
const placeOrder = async(req,res) =>{
//to connect url frontend
    const frontend_url = "http://localhost:5174";

//creating new order
try{
    const newOrder = new orderModel({
      userId:req.userId,
      items:req.body.items,
      amount:req.body.amount,
      address:req.body.address
    });
    //and saving ther
    await newOrder.save();
    //cleaning or updating the class data
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
//stripe payment is neccesary 
//item is important to calculate the price of item
    const line_items = req.body.items.map((item)=>({
        price_data:{
        currency:"inr",
        product_data:{
            name:item.name
        },
        //to convert in indian rupess we write *80
        unit_amount:item.price*100*90.58
    },
    quantity:item.quantity
    }))
// adding one more entry for delivary changes
    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"Delivery Changes"

            },
            unit_amount:2*100*90.58

        },
        quantity:1
    })
    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
       cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

    })
    //  we have send the session url as a response 
    res.json({success:true,session_url:session.url});
}
catch(error){
 console.log(error);
 res.json({sucess:false,message:"Error"});
}
};
//to verify the order

const verifyOrder = async(req,res) =>{
const {orderId,success}=req.body;
try {
    if (success == "true"){
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"paid"})
    }
    else
    {
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:false,message:"Not Paid"});
}
} catch(error){
    console.log(error);
    res.json({success:false,message:"Error"});

}
    
}
//user order for frontend
const userOrders  = async (req,res) => {
 try{
    const ordres = await orderModel.find({userId:req.userId});
    res.json({success:true,data:ordres})
 }
 catch(error){
  console.log(error);
  res.json({success:false,message:"Error"})
 }
 
}
//listing order for admin pamel

const listOrders = async(req,res)=>{
    try{
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error" })

}
}
//api for updateing order status

const updateStatus = async (req,res)=>{
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Update"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus};
