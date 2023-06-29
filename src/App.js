/*
Nested route - React router allows us to switch between portion inside the page. 

See scenario

To achieve the above scenario we use Nested Routes
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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />

{/*1) In nested route react-router automatically form the full path for the children route. Here featured and new is a child route component with full path `/products/featured` and new is `/products/new` */}

        <Route path='products' element={<Products />} >
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

/*
For Index Routes

~Refer to commit C7# 
*/

export default App