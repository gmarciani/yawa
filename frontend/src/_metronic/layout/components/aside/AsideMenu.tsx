import React, {useRef, useEffect} from 'react'
import {useLocation} from 'react-router'
import {AsideMenuMain} from './AsideMenuMain'
import {DrawerComponent, ScrollComponent, ToggleComponent} from '../../../assets/ts/components'

type Props = {
  asideMenuCSSClasses: string[]
}

const AsideMenu: React.FC<Props> = ({asideMenuCSSClasses}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const {pathname} = useLocation()

  useEffect(() => {
    setTimeout(() => {
      DrawerComponent.reinitialization()
      ToggleComponent.reinitialization()
      ScrollComponent.reinitialization()
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div
      id='kt_aside_menu_wrapper'
      ref={scrollRef}
      className='w-100 hover-scroll-overlay-y d-flex pe-2'
      data-kt-scroll='true'
      data-kt-scroll-activate='{default: false, lg: true}'
      data-kt-scroll-height='auto'
      data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
      data-kt-scroll-wrappers='#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper'
      data-kt-scroll-offset='100'
    >
      <div
        id='#kt_aside_menu'
        data-kt-menu='true'
        className='menu menu-column menu-rounded fw-bold my-auto'
      >
        <AsideMenuMain />
      </div>
    </div>
  )
}

export {AsideMenu}
