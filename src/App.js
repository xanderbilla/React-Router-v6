/*
Let's handle the authentication. In some application we need to restrict the user to visit the route at some condition. Also called protected routes. We achieve this with the help of context route 

Scenario img


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
import Profile from './pages/Profile'
import { AuthProvider } from './utils/auth'
import Login from './components/Login'
import { RequireAuth } from './utils/RequireAuth'
const LazyAbout = React.lazy(() => import('./pages/About'))

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
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
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Products />} >
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </AuthProvider>
  )
}

export default App