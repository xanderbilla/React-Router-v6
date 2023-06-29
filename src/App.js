/*
Let's say we want to navigate to different route based on some event. For example you are placing an order on an e-commerce application where you clicked on Place Order button and on successful you must be routed to Order Successful page.

To achieve such functionality we use useNavigate renderHook
*/

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'

const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
    </Routes>
    </>
  )
}

/*
For No match rotuing or 404 Page

~Refer to commit C5# to use Link
*/

export default App