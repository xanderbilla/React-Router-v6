/*
Lazy loading is a technique where components are not required on the
homepage can be split into seperate code bundle and downloaded when
the user navigates to that page

It helps reduce initial load time thereby improving reload time 

To lazy load the components we need to use dynamic import and react suspense

Step 1: Import react component
Step 2: Import the component (on which we want to apply lazy loading) by passing the the component export as an argument of Lazy function

Lazing is a funciton that takes another function as an argument 
*/


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import Error from './components/Error'
import Products from './components/Products'
import New from './components/New'
import Featured from './components/Featured'
import Users from './components/Users'
import UserDetail from './components/UserDetail'
import Admin from './components/Admin'
const LazyAbout = React.lazy(() => import('./pages/About'))

/*

This React.Lazy return a promise by this dynamic import that later converted into a module that contain a default exported react component which of course is our About component (in this example)

But to avoid the react component suspension after lazy loading that is nothing but when we use lazy loading for any component that component loads when we nabigate but suspended from rendering if we don't use suspension

To apply suspense wrap the lazyload component with React.Suspense. on react suspense we have to specify a fallback prop which can be any react element let's say `loading...` 
*/

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Replace About with LazyAbout */}
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetail />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='products' element={<Products />} >
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

/*
For Authentication

~Refer to commit C13# 
*/

export default App