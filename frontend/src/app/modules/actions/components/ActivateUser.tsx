import React, {FC, useEffect, useState} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {activateUser} from '../core/_requests'
import {ErrorModel} from '../core/_models'

const ActivateUser: FC = () => {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<number | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const actionTitle = 'Activate User'

  const username = searchParams.get('username')
  const token = searchParams.get('token')

  useEffect(() => {
    if (!username) {
      setError('Missing parameter: username')
      return
    }
    if (!token) {
      setError('Missing parameter: token')
      return
    }

    const callBackend = async () => {
      setLoading(true)
      try {
        setLoading(true)
        const response = await activateUser(username, token)
        console.log(`response = ${JSON.stringify(response)}`)
        setMessage(response.message)
      } catch (err: any) {
        console.log(`error = ${JSON.stringify(err)}`)
        setStatus(err.status)
        setError(err.error)
        setMessage(err.message)
      } finally {
        setLoading(false)
      }
    }
    callBackend()
  }, [username, token])

  let imageLight = error ? '/media/auth/500-error.png' : '/media/auth/ok.png'
  let imageDark = error ? '/media/auth/500-error-dark.png' : '/media/auth/ok-dark.png'

  return (
    <>
      {/* begin::Title */}
      <h1 id='title' className='fw-bolder fs-2hx text-gray-900 mb-4'>
        {actionTitle}
      </h1>
      {/* end::Title */}

      {/* begin::Text */}
      {/* Display all URL parameters */}
      <div id='parameters' className='fw-semibold fs-6 text-gray-500 mb-7'>
        <div className='fw-bolder text-dark'>Parameters</div>
        {Array.from(searchParams.entries()).map(([key, value]) => (
          <div>{key}={value}</div>
        ))}
      </div>

      {/* begin::Loading */}
      {loading && (
        <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...{' '}
          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
      )}
      {/* end::Loading */}

      {/* Display the response */}
      <div id='parameters' className='fw-semibold fs-6 text-gray-500 mb-7'>
        <div className='fw-bolder text-dark'>Response</div>
        <div>Status={status}</div>
        <div>Error={error}</div>
        <div>Message={message}</div>
      </div>
      {/* end::Text */}

      {/* begin::Illustration */}
      <div className='mb-3'>
        <img
          src={toAbsoluteUrl(imageLight)}
          className='mw-100 mh-300px theme-light-show'
          alt=''
        />
        <img
          src={toAbsoluteUrl(imageDark)}
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
