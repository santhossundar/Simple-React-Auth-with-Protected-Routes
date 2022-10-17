import { Routes, Route, Link } from 'react-router-dom'
import Login from './Comp/Login'
import Profile from './Comp/Profile'
import Protected from './Comp/Protected'
import Home from './Comp/Home'
import { AuthProvider } from './Context/Auth'

function App() {
  return (
    <div className="App">   
      <AuthProvider>
        <Link to='/'>Home</Link>&emsp;
        <Link to='/profile'>Profile</Link>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Protected><Profile /></Protected>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
