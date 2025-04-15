import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {ProfileSettings} from './components/settings/ProfileSettings'
import {AccountHeader} from './AccountHeader'
import {PaymentsSettings} from './components/settings/PaymentsSettings'
import {NotificationsSettings} from './components/settings/NotificationsSettings'
import {SecuritySettings} from './components/settings/SecuritySettings'


const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path='settings/profile'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Profile</PageTitle>
              <ProfileSettings />
            </>
          }
        />
        <Route
          path='settings/payments'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Payments</PageTitle>
              <PaymentsSettings/>
            </>
          }
        />
        <Route
          path='settings/notifications'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Notifications</PageTitle>
              <NotificationsSettings/>
            </>
          }
        />
        <Route
          path='settings/security'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Security</PageTitle>
              <SecuritySettings />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage
