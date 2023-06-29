import { NavLink } from "react-router-dom"
import { useAuth } from "../utils/auth"

const Navbar = () => {
  const auth = useAuth()
  return (
      <nav className="primary">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          {!auth.user && <NavLink to='/login'>Login</NavLink>}
      </nav>
  )
}

export default Navbar