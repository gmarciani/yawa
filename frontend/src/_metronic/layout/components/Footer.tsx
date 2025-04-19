/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useLayout} from '../core'

const COMPANY_NAME: string = 'YAWA, Inc.'
const COMPANY_WEBSITE: string = 'https://github.com/gmarciani/yawa'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row flex-stack`}>
        {/* begin::Copyright */}
        <div className='text-dark order-2 order-md-1'>
          <span className='text-gray-400 fw-bold me-1'>All rights reserved to</span>
          <a href={COMPANY_WEBSITE} target='_blank' className='text-muted text-hover-primary fw-bold me-2 fs-6'>
            {COMPANY_NAME}
          </a>
        </div>
        {/* end::Copyright */}

        {/* begin::Menu */}
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item'>
            <a href='/company/about' className='menu-link px-2'>
              About
            </a>
          </li>
          <li className='menu-item'>
            <a href='/company/terms-of-service' className='menu-link px-2'>
              Terms of Service
            </a>
          </li>
          <li className='menu-item'>
            <a href='/company/contacts' className='menu-link px-2'>
              Contacts
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
