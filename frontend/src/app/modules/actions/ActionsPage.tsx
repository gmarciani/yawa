/* eslint-disable jsx-a11y/anchor-is-valid */
import {Route, Routes} from 'react-router-dom'
import {ActivateUser} from './components/ActivateUser'
import {ActionsLayout} from './ActionsLayout'

const ActionsPage = () => (
  <Routes>
    <Route element={<ActionsLayout />}>
      <Route path='RequestUserActivation' element={<ActivateUser />} />
    </Route>
  </Routes>
)

export {ActionsPage}
