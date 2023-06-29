import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
      <>
      <div>
          <input type="search" name="search" id="search" placeholder='Search products...'/>
          </div>

          {/* We shouldn't use the forward slash for nested routes */}

          {/* 2) However the product component doesn't know where to render child component for that react order provides an outlet component 
          
          The outlet component renders the component corrensponding to the matching child route from the parent list of routes.*/}

          <nav className='secondary'>
              <Link to='new'>New</Link>
              <Link to='featured'>Featured</Link>
              <Outlet/>
          </nav>
      </>
  )
}

export default Products