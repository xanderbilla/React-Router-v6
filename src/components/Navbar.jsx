//Link component provide the feature to navigate to another route, to do that we use a prop called 'to' followed by the path of that component on which it is rendered

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>

          {/* If we Inspect the element the <Link> component is an anchor tag with href attribute followed by path
          
          Note: 
          - If we want to navigate some external route we must use the same old anchor tag.
          - For the prop value of 'to' if we remove slash the behavior will change. However the behavior may change depending on the route we are currently rendering the link component from and that is called relative path.

          - If the path begins with forward slash it is called absolute route and match the same route in the route config.
          */}

      </nav>
  )
}

export default Navbar