/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {IHeader, useLayout} from '../../core'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

const calculateStickyOffset = (header: IHeader): string => {
  if (header.fixed.desktop && header.fixed.tabletAndMobile) {
    return '{default: "200px", lg: "300px"}'
  }

  if (header.fixed.desktop && !header.fixed.tabletAndMobile) {
    return '{lg: "300px"}'
  }

  if (header.fixed.tabletAndMobile && !header.fixed.desktop) {
    return '{default: "200px", lg: false}'
  }

  return ''
}

const calculateShowSticky = (header: IHeader): boolean => {
  return (
    (header.fixed.desktop && header.fixed.tabletAndMobile) ||
    (header.fixed.desktop && !header.fixed.tabletAndMobile) ||
    (header.fixed.tabletAndMobile && !header.fixed.desktop)
  )
}

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header} = config
  const [stickyOffset, setStickyOffset] = useState<string>(calculateStickyOffset(header))
  const [showSticky, setShowSticky] = useState<boolean>(calculateShowSticky(header))
  useEffect(() => {
    setStickyOffset(calculateStickyOffset(header))
    setShowSticky(calculateShowSticky(header))
  }, [header])

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '))}
      {...attributes.headerMenu}
      data-kt-sticky={showSticky ? 'true' : 'false'}
      data-kt-sticky-name='header'
      data-kt-sticky-offset={stickyOffset}
    >
      <div
        className={clsx(classes.headerContainer.join(' '), 'd-flex flex-stack flex-wrap gap-2')}
        id='kt_header_container'
      >
        <DefaultTitle />

        {/* begin::Wrapper */}
        <div className='d-flex d-lg-none align-items-center ms-n2 me-2'>
          {/* begin::Aside mobile toggle */}
          <div className='btn btn-icon btn-active-icon-primary' id='kt_aside_toggle'>
            <KTIcon iconName='abstract-14' className='fs-1 mt-1' />
          </div>
          {/* end::Aside mobile toggle */}

          {/* begin::Logo */}

          <Link to='/dashboard' className='d-flex align-items-center'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/demo3.svg')} className='h-20px' />
          </Link>
          {/* end::Logo */}
        </div>
        {/* end::Wrapper */}
        <Topbar />
      </div>
    </div>
  )
}
