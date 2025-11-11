import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {PasswordReset} from './components/PasswordReset'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import {RequestUserActivation} from './components/RequestUserActivation'
import {ActivateUser} from './components/ActivateUser'
import {DeleteUser} from './components/DeleteUser'
import {OAuth2Callback} from './components/OAuth2Callback'

const AuthPage = () => (
  <Routes>
    <Route path='oauth2/callback' element={<OAuth2Callback />} />
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='password-reset' element={<PasswordReset />} />
      <Route path='request-user-activation' element={<RequestUserActivation />} />
      <Route path='activate-user' element={<ActivateUser />} />
      <Route path='delete-user' element={<DeleteUser />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
