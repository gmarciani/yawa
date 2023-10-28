/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useLayout} from '../core'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row flex-stack`}>
        {/* begin::Copyright */}
        <div className='text-dark order-2 order-md-1'>
          <span className='text-gray-400 fw-bold me-1'>Created by</span>
          <a href='#' target='_blank' className='text-muted text-hover-primary fw-bold me-2 fs-6'>
            Keenthemes
          </a>
        </div>
        {/* end::Copyright */}

        {/* begin::Menu */}
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item'>
            <a href='#' className='menu-link px-2'>
              About
            </a>
          </li>
          <li className='menu-item'>
            <a href='#' className='menu-link px-2'>
              Contact
            </a>
          </li>
          <li className='menu-item'>
            <a href='#' className='menu-link px-2'>
              Purchase
            </a>
          </li>
        </ul>
        {/* end::Menu */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Footer}
