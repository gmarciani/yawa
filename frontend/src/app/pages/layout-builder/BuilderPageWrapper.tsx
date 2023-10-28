import React, {FC} from 'react'
import {DisableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {BuilderPage} from './BuilderPage'

const BuilderPageWrapper: FC = () => {
  return (
    <DisableSidebar>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </DisableSidebar>
  )
}

export default BuilderPageWrapper
