import {FC, useState} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const ActivateUser: FC = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Extract token from URL query parameters
  const token = searchParams.get('token');

  return (
    <>
      {/* begin::Title */}
      <h1 className='fw-bolder fs-2hx text-gray-900 mb-4'>Activate User</h1>
      {/* end::Title */}

      {/* begin::Text */}
      <div className='fw-semibold fs-6 text-gray-500 mb-7'>Token: {token}</div>
      <div className='fw-semibold fs-6 text-gray-500 mb-7'>Outcome Message</div>
      {/* end::Text */}

      {/* begin::Illustration */}
      <div className='mb-3'>
        <img
          src={toAbsoluteUrl('/media/auth/welcome.png')}
          className='mw-100 mh-300px theme-light-show'
          alt=''
        />
        <img
          src={toAbsoluteUrl('/media/auth/welcome-dark.png')}
          className='mw-100 mh-300px theme-dark-show'
          alt=''
        />
      </div>
      {/* end::Illustration */}

      {/* begin::Link */}
      <div className='mb-0'>
        <Link to='/dashboard' className='btn btn-sm btn-primary'>
          Return Home
        </Link>
      </div>
      {/* end::Link */}
    </>
  )
}

export {ActivateUser}
