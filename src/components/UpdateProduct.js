import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  const params = useParams()
  const navigate =useNavigate();
  const [updateform , setupdateform]= useState({
    name:'',
    descripton :'',
    quantity:'', 
    price:'',
  });
   const handleChange=(event)=>{
    const {id, value} = event.target
   // console.log(event.target.id);
   setupdateform(()=>{
  return {...updateform ,[id]:value}
  
   }
     )
     }

useEffect(()=>{
  const fetchdata = async()=>{
    const data= await axios.get(`http://localhost:3000/products/${params.id}`);
    setupdateform(data.data)
  
    }
fetchdata();
},[params.id]);

const handlesubmit = async ()=>{
 await axios.put(`http://localhost:3000/products/${params.id}` , updateform);
 navigate('/products')
}
  return (
    <div className="background-radial-gradient overflow-hidden  text-dark"> 
    <form className='p-4'>
    <span className='titles'> Name</span>
    <input type='text' className='form-control' value={updateform.name} onChange={handleChange} id='name'/>  
    <span className='titles'> Desciption</span>
    <input type='text' className='form-control'  value={updateform.description} onChange={handleChange}  id='description'/>  
     
    <span className='titles'> Quantity</span>
    <input type='number' className='form-control'  value={updateform.quantity} onChange={handleChange}  id='quantity'/> 
    <span className='titles'> price</span>
    <input type='number' className='form-control'  value={updateform.price} onChange={handleChange}  id='price'/> 
     
    <input type='button' value='Update Produit' onClick={handlesubmit} className='btn btn-primary px-5 mt-3'/> 
    </form>
    
    
        </div>
  )
}

export default UpdateProduct