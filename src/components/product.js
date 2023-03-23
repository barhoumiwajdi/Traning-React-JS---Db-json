
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

  const [products, setProducts] = useState([]);


  const fetchdata = async () => {
    const product = await axios.get('https://dummyjson.com/products');

    setProducts(product.data.products)
    console.log(product.data.products);



  }
  useEffect(() => {
    fetchdata()


  }, [])
  const deletehandle = async (id) => {
    console.log(id);

    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchdata();
  }

  return (
     
<section className="conatiner background-radial-gradient overflow-hidden">
  <h3 className='text-center text-white mt-5'>Liste de Produit Disponible </h3>
<Link to='/createProduct' type='button' class='btn btn-primary align-items-center justify-content-center w-100 mb-5'>Ajouter Produit</Link>
<div className='container product-container'>
      <table className="table stripped-table mt-5 text-light text-white">
      
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">images</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    {product.id}
                  </td>
                  <td>
                    {product.title}
                  </td>
                  <td>
                    {product.description}
                  </td>
                  <td>
                    {product.stock}
                  </td>
                  <td>
                    {product.price}
                  </td>
                  <td>
                    <img src={product.thumbnail} class="img-fluid rounded-top" height="100px" width="100px" alt="" />
                  </td>
                  <td>
                    <Link to={`/UpdateProduct/${product.id}`} type='button' value='Update' className='btn btn-primary px-5 mt-3' >Update</Link>
                    <input type='button' value='Delete' onClick={() => deletehandle(product.id)} className='btn btn-danger px-5 mt-3' />

                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
   </section>
  )
}

export default Product