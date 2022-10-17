import { useContext } from 'react'
import { AuthContext } from '../Context/Auth'
import { Navigate } from 'react-router-dom'

function Protected({ children }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return children;
}

export default Protected
