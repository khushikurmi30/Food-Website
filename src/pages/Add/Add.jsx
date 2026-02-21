
import { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
  const Add = ({url}) => {
    
    const [image,setImage] = useState(false)
     const [data,setData] = useState({
      name:"",
      description:"",
      price:"",
      category:"Salad"
     })
     const onChangeHandler = (event) => {
      const name= event.target.name;
      const value= event.target.value;
      setData(data=>({...data,[name]:value}))
     }
     const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
    const response = await axios.post(`${url}/api/food/add`,formData);
     if (response.data.success){
     setData({
      name:"",
      description:"",
      price:"",
      category:"Salad"
     })
     setImage(false)
     toast.success(response.data.message)
     
    }}

  
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>
                 Uploaded image
            </p>
            <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''></img>
            </label>
            <input onChange ={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </div>
        <div className='add-product-name flex-col'>
            <p> Prodect name</p>
            <input type='text' name='name' onChange={onChangeHandler} value={data.name}  placeholder='type here' required/>

        </div>
        <div className='add-product-description flex-col'>
            <p> Prodect description</p>
<textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here' required ></textarea>     

        </div>
        <div className='add-category-price'>
            <div className='add-category flex-col'>
                <p> Product Category</p>
                <select onChange={onChangeHandler} name='category'>
                    <option value="salad">salad</option>
                    <option value="rolls">rolls</option>
                    <option value="deserts">deserts</option>
                    <option value="sandwich">sandwich</option>
                    <option value="cake">cake</option>
                    <option value="pure Veg">pure Veg</option>
                    <option value="pasta">pasta</option>
                    <option value="noodles">noodles</option>
                </select>
            </div>
            <div className='add-price flex-col'>
                <p> product price</p>
                <input onChange={onChangeHandler} value={data.price} type='Number' name ='price' placeholder='$20'/>

            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  
  )
}
  

export default Add;
