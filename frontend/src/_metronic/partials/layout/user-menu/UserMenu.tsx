/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {toAbsoluteApiUrl, toAbsoluteUrl} from '../../../helpers'
import {Languages} from '../header-menus/Languages'

const UserMenu = () => {
  const {currentUser, logout} = useAuth()
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={(currentUser?.picture && toAbsoluteApiUrl(currentUser?.picture)) || toAbsoluteUrl('/media/avatars/blank.png')} alt='avatar' />
          </div>
          {/* end::Avatar */}

          {/* begin::Username */}
          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {currentUser?.firstname} {currentUser?.lastname}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
            <div className='fw-bold text-muted fs-7'>
              {currentUser?.role}
            </div>
          </div>
          {/* end::Username */}
        </div>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className='separator my-2'></div>
      {/* end::Menu separator */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          Profile
        </Link>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>Requests</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>5</span>
          </span>
        </a>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          Wallet
        </a>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5 my-1'>
        <Link to='/crafted/account/settings' className='menu-link px-5'>
          Settings
        </Link>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className='separator my-2'> </div>
      {/* end::Menu separator */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {UserMenu}
