import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import {ActivateUser} from "./components/ActivateUser";
import {ResetPassword} from "./components/ResetPassword";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='activate-user' element={<ActivateUser />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
