import { useEffect } from 'react'
import {AUTH_REFRESH_PERIOD_SECONDS, refreshAuth} from '../core/AuthHelpers'

export const AuthRefresher = () => {
  useEffect(() => {
    const interval = setInterval(async () => {
      await refreshAuth()
    }, AUTH_REFRESH_PERIOD_SECONDS * 1000)

    return () => clearInterval(interval)
  }, [])

  return null
}
