import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
  
  <nav className="navbar navbar-expand-lg navbar-dark text-dark">
     
    <div className="container-fluid text-dark">
    
      <button
        className="navbar-toggler text-dark"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <Link className="navbar-brand mt-2 mt-lg-0" to="#">
          <img
            src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://file-uploads.teachablecdn.com/468a5a8f5f744d949cec1af49fff09e1/81af8484151943489fdadf2c7ce968fd"
            height="30"
            alt="fivepoints Logo"
            loading="lazy"
          />
        </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
  
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/products">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/register">Register</Link>
          </li>
 
        </ul>
        
      </div>
      
  
     
      <div className="d-flex align-items-center">
        
        <Link className="text-reset me-3" to="#">
          <i className="fas fa-shopping-cart"></i>
        </Link>
  
        
        <div className="dropdown">
          <Link
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" to="#">Some news</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">Another news</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">Something else here</Link>
            </li>
          </ul>
        </div>

          <Link className="btn btn-outline-success my-2 my-sm-0" aria-current="page" to="/weather">Weather</Link>
        
      
      </div>
     
    </div>
    
  </nav>
   
  )
}

export default NavBar