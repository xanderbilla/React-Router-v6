/*

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
        <Route path='products' element={<Products />} >

          {/* In the case we want to render a child as a parent component we use index prop instead of path so that when the parent route is called by default the child component which we have configured will be rendered */}

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
For Dynamic Routes

~Refer to commit C8# 
*/

export default App