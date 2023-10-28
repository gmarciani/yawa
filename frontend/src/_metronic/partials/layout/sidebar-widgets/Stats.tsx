import {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown2} from '../../content/dropdown/Dropdown2'
import {statsData} from './sidebarData'

type Props = {
  category: 'tasks' | 'orders' | 'tickets' | 'notifcations' | 'mail'
}

const Stats: FC<Props> = ({category}) => {
  const stat = statsData.find((f) => f.category === category)
  if (!stat) {
    return null
  }

  return (
    <div className='card card-flush card-p-0 shadow-none bg-transparent mb-10'>
      {/*begin::Header*/}
      <div className='card-header align-items-center border-0'>
        {/*begin::Title*/}
        <h3 className='card-title fw-bolder text-white fs-3'>{stat.data.title}</h3>
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
          <Dropdown2 />
        </div>
        {/*end::Title*/}
      </div>
      {/*end::Header*/}

      {/*begin::Body*/}
      <div className='card-body'>
        {/*begin::Row*/}
        <div className='row g-5'>
          {/*begin::Col*/}
          {stat.data.items.map((i, index) => (
            <div className='col-6' key={`${stat.category}-${index}`}>
              {/*begin::Item*/}
              <div className='sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5'>
                {/*begin::Value*/}
                <div
                  className='text-white fs-2 fs-xxl-2x fw-bolder mb-1'
                  data-kt-countup='true'
                  data-kt-countup-value={i.value}
                  data-kt-countup-prefix=''
                >
                  {i.value}
                </div>
                {/*begin::Value*/}

                {/*begin::Label*/}
                <div className='sidebar-text-muted fs-6 fw-bold'>{i.label}</div>
                {/*end::Label*/}
              </div>
              {/*end::Item*/}
            </div>
          ))}
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Card Body*/}
    </div>
  )
}

export {Stats}
