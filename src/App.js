/*
The useSearchParams hook is used to read and modify the query string in the URL for the current location. 

Searchparams scenario img

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
For Lazy Loading

~Refer to commit C12# 
*/

export default App