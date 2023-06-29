import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
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