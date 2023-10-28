import clsx from 'clsx'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {tasks} from './sidebarData'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Tasks = () => {
  return (
    <div className='card card-flush card-p-0 shadow-none bg-transparent mb-5'>
      {/*begin::Header*/}
      <div className='card-header align-items-center border-0'>
        {/*begin::Title*/}
        <h3 className='card-title fw-bolder text-white fs-3'>Latest Tasks</h3>
        {/*end::Title*/}

        {/*begin::Toolbar*/}
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-icon btn-icon-white btn-active-color-primary me-n4'
            data-kt-menu-trigger='click'
            data-kt-menu-overflow='true'
            data-kt-menu-placement='bottom-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          <Dropdown1 />
        </div>
        {/*end::Title*/}
      </div>
      {/*end::Header*/}

      {/*begin::Body*/}
      <div className='card-body py-0'>
        {/*begin::Item*/}
        {tasks.map((t, index) => (
          <div
            key={`t-${index}`}
            className={clsx('d-flex flex-nowrap align-items-center ', {
              'mb-7': tasks.length - 1 > index,
            })}
          >
            {/*begin::Symbol*/}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label sidebar-bg-muted'>
                <KTIcon iconName={t.icon} className={clsx(`fs-2x text-${t.color}`)} />
              </span>
            </div>
            {/*end::Symbol*/}

            {/*begin::Text*/}
            <div className='d-flex flex-column'>
              <a href='#' className='text-white text-hover-primary fs-6 fw-bolder'>
                {t.title}
              </a>

              <span className='sidebar-text-muted fw-bold'>{t.description}</span>
            </div>
            {/*end::Text*/}
          </div>
        ))}
        {/*end::Item*/}
      </div>
      {/*end::Body*/}
    </div>
  )
}

export {Tasks}
