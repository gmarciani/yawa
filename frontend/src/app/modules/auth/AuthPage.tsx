import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {PasswordReset} from './components/PasswordReset'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import {RequestUserActivation} from './components/RequestUserActivation'
import {ActivateUser} from './components/ActivateUser'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='password-reset' element={<PasswordReset />} />
      <Route path='request-user-activation' element={<RequestUserActivation />} />
      <Route path='activate-user' element={<ActivateUser />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
