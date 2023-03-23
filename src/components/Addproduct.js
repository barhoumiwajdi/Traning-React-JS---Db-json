import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const navigate = useNavigate();
  const [AddproductForm, setAddproductForm] = useState({
    name: '',
    descripton: '',
    quantity: '',
    price: '',
  });
  const handleChange = (event) => {
    const { id, value } = event.target
    // console.log(event.target.id);
    setAddproductForm(() => {
      return { ...AddproductForm, [id]: value }
    })
  }
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/products', AddproductForm)
      navigate('/products')
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form className='background-radial-gradient overflow-hidden  text-dark p-4'>
        <span className='titles'> Name</span>
        <input type='text' className='form-control' onChange={handleChange} id='name' />
        <span className='titles'> Desciption</span>
        <input type='text' className='form-control' onChange={handleChange} id='description' />

        <span className='titles'> Quantity</span>
        <input type='number' className='form-control' onChange={handleChange} id='quantity' />
        <span className='titles'> price</span>
        <input type='number' className='form-control' onChange={handleChange} id='price' />

        <input type='button' value='Ajouter Produit' onClick={handleSubmit} className='btn btn-primary px-5 mt-3' />
      </form>


    </div>
  )
}

export default AddProduct