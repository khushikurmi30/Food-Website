import mongoose from "mongoose";

export const connectDB= async()=>
{
    await mongoose.connect('mongodb+srv://greatstack:khushi43@cluster0.ppploi9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}