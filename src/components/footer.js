import React from 'react'
 

function Footer() {
  return (
    
    <footer className="text-center ">
     <div className="container p-4 pb-0">
  
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Inscription Gratuite</span>
          <button type="button" className="btn btn-outline-primary btn-rounded">
            Inscription!
          </button>
        </p>
      </section>
  
    </div>
    <div className="container pt-4">
       
      <section className="mb-4">
         
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-facebook-f"></i
        ></a>
  
        
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-twitter"></i
        ></a>

        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-google"></i
        ></a>   
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-instagram"></i
        ></a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-linkedin"></i
        ></a>
 
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-github"></i
        ></a>
      </section>     
    </div>
  
   
    <div className="text-center text-dark p-3" >
      © 2022 Copyright:
      <a className="text-dark" href="https://fivepoints.com/">fivepoints.com</a>
    </div>
    
  </footer>
   
  )
}

export default Footer