import React from 'react'
import logo from '../logo.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
    

    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">about me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">contact</a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  )
}

export default Navbar
