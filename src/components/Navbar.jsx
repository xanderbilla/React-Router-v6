/*
Styling the navbar menu corresponding to the active route in a different way.

*Note: 
-Navlink is a react-router component that knows whether or not the component is active link. 

- It recieves an active class when the link is the current route

- If inspect the element it will show the class="active" for that active link 

That we use to style the active link. We can use using CSS as shown in index.css or we can use function as shown below:
*/

import { NavLink } from "react-router-dom"

const navStyles = ({isActive}) => {
    //As soon as the link will be called NavLink component will set a property or flag called 'isActive' which can be destructured from the function parameter.

    return {
        fontWeight: isActive ? 'bold' : 'normal'
    }
}

const Navbar = () => {
  return (
      <nav>
          <NavLink className={navStyles} to='/'>Home</NavLink>
          <NavLink className={navStyles} to='/about'>About</NavLink>
      </nav>
  )
}

/* NavLink is mainly designed to create components like Navbar, breadcumbs or a set of Tabs where we would like to highlight selected item and provide useful context with screen readers

Link should be the component to use as you wouldn't want the active class being applied when it's not needed. 

*/

export default Navbar