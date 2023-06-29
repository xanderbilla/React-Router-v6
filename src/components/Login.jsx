import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    const redirect = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirect, {replace: true})
    }
    return (
        <div>
            <label htmlFor="user">
                Username: <input type="text" name="user" id="user" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login