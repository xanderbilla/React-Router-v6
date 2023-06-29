/*
Let's say we are creating admin dashboard and we have a list of users at /users but when we click on each user for each user it should show individual details. FOr that we use dynamic route.
*/

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import Error from './components/Error'
import Products from './components/Products'
import New from './components/New'
import Featured from './components/Featured'
import Users from './components/Users'
import UserDetail from './components/UserDetail'
import Admin from './components/Admin'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />

        {/* We can use /user/1 /user/2 ... but what if we have 100s or 1000 of users so it's not convinient to use this approach. That's where dynamic approach comes into picture

        For our scenario the user id that is 1, 2 ... will be dynamic value. 
        React will render the UserDetail component as long as the /user/:userId pattern will be match or followed

        The userId can be string or number

        In case let's say we have a speciifc route for specific user that is Admin then the question is which component will be rendered. And in such cases react-router try to find the exact matching route before aproaching dynamic route

        Dynamic routes can be nested as well.
      */}

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
For URL Params

~Refer to commit C9# 
*/

export default App