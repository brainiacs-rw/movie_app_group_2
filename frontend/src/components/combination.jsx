import React from 'react'
import Signup from './signup'
import Login from './login'
import UseEntering from './useEntering'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WelcomeSignUp from './welcomeSignUp'
import WelcomeLogin from './welcomeLogin'
import ChangePassword from './changePassword'
import Watchmovie from './watchmovie'

function Combination() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<UseEntering />}></Route>
             <Route path='/Login' element={<Login />}></Route>
             <Route path='/Signup' element={<Signup />}></Route>
             <Route path='/welcomeSignUp' element={<WelcomeSignUp />}></Route>
             <Route path='/watchmovie' element={<Watchmovie />}></Route>
             <Route path='/WelcomeLogin' element={<WelcomeLogin />}></Route>
             <Route path='/changePassword' element={<ChangePassword />}></Route>
         </Routes>
         </BrowserRouter>
    </div>
  )
}

export default Combination