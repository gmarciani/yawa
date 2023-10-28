import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown3} from '../../content/dropdown/Dropdown3'
import {orders} from './sidebarData'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Orders = () => {
  return (
    <div className='card card-flush card-p-0 shadow-none bg-transparent mb-5'>
      {/*begin::Header*/}
      <div className='card-header align-items-center border-0'>
        {/*begin::Title*/}
        <h3 className='card-title fw-bolder text-white fs-3'>Latest Orders</h3>
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
          <Dropdown3 />
        </div>
        {/*end::Title*/}
      </div>
      {/*end::Header*/}

      {/*begin::Body*/}
      <div className='card-body py-0'>
        {/*begin::Item*/}
        {orders.map((o, index) => (
          <div
            key={`o-${index}`}
            className={clsx('d-flex flex-nowrap align-items-center', {
              'mb-7': orders.length - 1 > index,
            })}
          >
            {/*begin::Image*/}
            <div className='symbol symbol-40px symbol-2by3 me-4'>
              <img src={toAbsoluteUrl(`/media/${o.image}`)} alt='' className='mw-100' />
            </div>
            {/*end::Image*/}

            {/*begin::Title*/}
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
              <a href='#' className='text-white fw-bold text-hover-primary fs-6'>
                {o.title}
              </a>
              <span className='sidebar-text-muted fw-bold fs-7 my-1'>{o.desc}</span>
            </div>
            {/*end::Title*/}
          </div>
        ))}
        {/*end::Item*/}
      </div>
      {/*end: Card Body*/}
    </div>
  )
}

export {Orders}
