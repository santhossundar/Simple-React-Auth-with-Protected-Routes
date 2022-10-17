import { useContext } from 'react'
import { AuthContext } from '../Context/Auth'
import { Link } from 'react-router-dom'

function Login() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h1>Login page ...</h1>
            <Link to='/'><button onClick={() => {handleLogin()}}>Login</button></Link>
        </div>
    )
}

export default Login
