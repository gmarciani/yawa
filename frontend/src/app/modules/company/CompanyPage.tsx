import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'


const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Company',
    path: '/company/about',
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

const CompanyPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            {/*<AccountHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='about'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>About</PageTitle>
              {/*<Overview />*/}
            </>
          }
        />
        <Route
          path='terms-of-service'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Terms of Service</PageTitle>
              {/*<ProfileSettings />*/}
            </>
          }
        />
        <Route
          path='contacts'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Contacts</PageTitle>
              {/*<PaymentsSettings/>*/}
            </>
          }
        />
        <Route index element={<Navigate to='/company/about' />} />
      </Route>
    </Routes>
  )
}

export default CompanyPage
