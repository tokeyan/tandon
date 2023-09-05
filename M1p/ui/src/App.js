import './App.scss';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import OTP from './pages/auth/OTP';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AuthContext } from './context/authcontext/AuthContext';
import { useContext } from 'react';
import Otploader from './componenets/otp/Otploader';
import UserProfile from './pages/userProfile/UserProfile';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/signin' element={<Signin />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Routes>
        <Route path='/verifyotp/:id' element={<OTP />} />
      </Routes>
      <Routes>
        <Route path='/otploader' element={<Otploader />} />
      </Routes>
      <Routes>
        <Route path='/userprofile/:id' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
