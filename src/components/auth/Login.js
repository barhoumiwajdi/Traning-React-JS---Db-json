import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
 const [LoginForm , setLoginForm]= useState({

    email:'',
    password :'',

  });
  
  const handleChange=(event)=>{
    const {id, value} = event.target
   // console.log(event.target.id);
   setLoginForm(()=>{
  return {...LoginForm ,[id]:value}
  
   }
   )
  
  }
  const handleClick = async ()=>{
    console.log(LoginForm);
    const users = await axios.get('http://localhost:3000/users')
    console.log(users);
    const trouve = users.data.find((user) => user.email === LoginForm.email && user.password===LoginForm.password);
if(trouve !==undefined)
{

navigate('/products')
}
else{
  console.log('verifier email and mot de passe');
  alert('verifier mdp et email')
}


  }
  return (
    <div> 
 
 
 
 
<section className="background-radial-gradient overflow-hidden  text-dark">
 

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-5 fw-bold ls-tight register-title">
          The best offer <br />
          <span >for your business</span>
        </h1>
        <p className="mb-4 opacity-70 register-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
        
              <div className="form-outline mb-4">
                <input type="email" onChange={handleChange} id='email' className="form-control" />
                <label className="form-label" for="form3Example3" >Email address</label>
              </div>
              <div className="form-outline mb-4">
                <input type="password" onChange={handleChange} id='password' className="form-control" />
                <label className="form-label" for="form3Example4" >Password</label>
              </div>
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

             
              <input type="button" onClick={handleClick} className="btn btn-primary btn-block mb-4 w-100" value="sign in" /> 
                

              
              <div className="text-center">
                <p>or sign in with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
        </div>
  )
}

export default Login
