import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>     
       <nav class="navbar nav-cont bg-dark d-flex justify-content-start">
        <div class="container-fluid">
          <Link to='/' style={{textDecoration : 'none'}}>
            <a class="navbar-brand" style={{color : 'white'}}>
            <img src="https://img.icons8.com/3d-fluency/40/FA5252/cinema-.png"/>
              MovieApp
            </a>
            </Link>

            <Link to='/favourites' style={{textDecoration : 'none'}}> <span style={{color : 'white', marginRight : '3rem'}}>Favourite</span></Link>
        </div>
      </nav>
      </>

   
    )
  }
}
