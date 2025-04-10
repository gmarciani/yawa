import {AuthModel} from './_models'
import {refreshAuthentication} from './_requests'

const AUTH_LOCAL_STORAGE_KEY = 'YAWA.auth'
export const AUTH_REFRESH_PERIOD_SECONDS = 600

const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const authValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)

  if (!authValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(authValue) as AuthModel
    if (auth) {
      return auth
    }
  } catch (error) {
    console.error(`Cannot read auth from local storage key ${AUTH_LOCAL_STORAGE_KEY}`, error)
  }
}

const setAuth = (auth: AuthModel) => {

  if (!localStorage) {
    return
  }

  try {
    const authValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, authValue)
  } catch (error) {
    console.error(`Cannot write auth to local storage key ${AUTH_LOCAL_STORAGE_KEY}`, error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    console.error("Cannot remove auth: local storage not accessible")
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error(`Cannot delete auth from local storage key ${AUTH_LOCAL_STORAGE_KEY}`, error)
  }
}

export async function refreshAuth() {
  const auth = getAuth()

  if (!auth) {
    console.log("Cannot refresh auth: current auth not found")
    return
  }

  const refreshToken = auth.refreshToken

  if (!refreshToken) {
    console.log("Cannot refresh auth: refresh token not found in current auth")
    return
  }

  console.log("Refresh token found: refreshing auth...")
  try {
    const auth = await refreshAuthentication(refreshToken)
    setAuth(auth)
  } catch (error: any) {
    console.log(`Cannot refresh auth: ${error}`)
  }
}

export {getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY}
