import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <Routes>
      {/* For each <Route> we pass two props i.e., path and element.
      + In 'path' we specify the URL for the component.
      + In 'element' we specify the component need to be rendered at that specific path.
    */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

/*
This is not how regular user will navigate in application. We have a UI element called Link to which the user can click to navigate to a different route. It can also be done programtically after an action has been completed

~Refer to commit C2# to use Link
*/

export default App