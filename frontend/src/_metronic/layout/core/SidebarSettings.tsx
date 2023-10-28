/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useEffect} from 'react'
import {WithChildren} from '../../helpers'
import {useLayout} from './LayoutProvider'

const EnableSidebar: FC<WithChildren> = ({children}) => {
  const {config} = useLayout()
  const {sidebar} = config

  useEffect(() => {
    if (sidebar.display) {
      document.getElementById('kt_sidebar')?.classList.remove('d-none')
      document.body.classList.add('sidebar-enabled')
      document.getElementById('kt_sidebar_toggler')?.classList.remove('d-none')
    }
  }, [sidebar.display])

  return <>{children}</>
}

const DisableSidebar: FC<WithChildren> = ({children}) => {
  useEffect(() => {
    document.getElementById('kt_sidebar')?.classList.add('d-none')
    document.body.classList.remove('sidebar-enabled')
    document.getElementById('kt_sidebar_toggler')?.classList.add('d-none')
  }, [])

  return <>{children}</>
}

export {EnableSidebar, DisableSidebar}
