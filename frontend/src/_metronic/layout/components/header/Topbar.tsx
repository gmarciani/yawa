import {KTIcon} from '../../../helpers'
import {Search, ThemeModeSwitcher} from '../../../partials'

const Topbar = () => {
  return (
    <div className='d-flex align-items-center flex-shrink-0'>
      {/* Search */}
      <Search
        className='w-lg-250px'
        mobileToggleBtnClass='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px'
      />

      {/* begin::Activities */}
      <div className='d-flex align-items-center ms-3 ms-lg-4'>
        {/* begin::Drawer toggle */}
        <div
          className='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px'
          id='kt_activities_toggle'
        >
          <KTIcon iconName='notification-bing' className='fs-1' />
        </div>
        {/* end::Drawer toggle */}
      </div>
      {/* end::Activities */}

      {/* CHAT */}
      <div className='d-flex align-items-center ms-3 ms-lg-4'>
        {/* begin::Drawer wrapper */}
        <div
          className='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative'
          id='kt_drawer_chat_toggle'
        >
          <KTIcon iconName='message-text-2' className='fs-1' />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div>
        {/* end::Drawer wrapper */}
      </div>

      {/* begin::Sidebar Toggler */}
      <button
        className='btn btn-icon btn-active-icon-primary w-40px h-40px d-xxl-none ms-2 me-n2 d-none'
        id='kt_sidebar_toggler'
      >
        <KTIcon iconName='setting-2' className='fs-2x' />
      </button>
      {/* end::Sidebar Toggler */}

      {/* begin::Theme mode */}
      <div className={'d-flex align-items-center ms-3 ms-lg-4'}>
        <ThemeModeSwitcher toggleBtnClass='btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px' />
      </div>
      {/* end::Theme mode */}
    </div>
  )
}

export {Topbar}
