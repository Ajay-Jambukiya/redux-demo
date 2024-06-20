import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Redux demo</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"></button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                <NavLink to='/' style={{textDecoration:'none',color:'white'}}>Home</NavLink> <span className="visually-hidden">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/add' style={{textDecoration:'none',color:'white'}}> Add User</NavLink>
                 
                  </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <NavLink to='/view' style={{textDecoration:'none',color:'white'}}> View Users</NavLink>
                </a>
            </li>
        </ul>
    </div>
    </nav>
    

  )
}

export default Navbar
