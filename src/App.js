import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      {/* For each <Route> we pass two props i.e., path and element.
      + In 'path' we specify the URL for the component.
      + In 'element' we specify the component need to be rendered at that specific path.
    */}
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
    </>
  )
}

/*
For styling navbar link

~Refer to commit C3# to use Link
*/

export default App