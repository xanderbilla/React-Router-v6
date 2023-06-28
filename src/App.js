import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
    </>
  )
}

/*
For navigating programatically

~Refer to commit C4# to use Link
*/

export default App