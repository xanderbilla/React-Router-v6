import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {

    /*
        A relative link is a link that doesn't start with the forward slash and inherit the closet route in which they are rendered

        Here features will append /featured to /products and new will append /new to /products/new

        If we use absolute path instead of relative path then the featured and new will construct the path from the root of the app and not the current URL.

        If the path is absolute it will open as localhost:3000/new instead of localhost:3000/products/new
    */


    return (
        <>
            <div>
                <input type="search" name="search" id="search" placeholder='Search products...' />
            </div>
            <nav className='secondary'>
                <Link to='new'>New</Link>
                <Link to='featured'>Featured</Link>
                <Outlet />
            </nav>
        </>
    )
}

export default Products