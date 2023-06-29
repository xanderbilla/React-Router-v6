/*
What if there is no route that user want to access but there is no such URL. We must let user to know that there is no such route exist.
*/

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import Error from './components/Error'

const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='*' element={<Error />} />
      
        {/* 
        
        * this route element will only render when there will be no matching route

        */}
    </Routes>
    </>
  )
}

/*
For Nested Routes

~Refer to commit C6# to use Link
*/

export default App