import {useEffect} from 'react'
import {useAuth} from '../core/Auth'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {AuthModel} from "../core/_models";
import {getUserProfile} from "../../profile/core/_requests";

export function OAuth2Callback() {
  const {saveAuth, setCurrentUser} = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const handleOAuth2Callback = async () => {
      try {
        const userId = searchParams.get('userId')
        const accessToken = searchParams.get('accessToken')
        const refreshToken = searchParams.get('refreshToken')

        if (accessToken && refreshToken) {
          const auth = {
            userId: userId,
            accessToken: accessToken,
            refreshToken: refreshToken,
          } as AuthModel

          saveAuth(auth)
          const userProfile = await getUserProfile()
          setCurrentUser(userProfile)
          navigate('/home')
        } else {
          navigate('/auth/login')
        }
      } catch (error) {
        console.error('OAuth2 callback error:', error)
        navigate('/auth/login')
      }
    }

    handleOAuth2Callback()
  }, [saveAuth, setCurrentUser, navigate, searchParams])

  return (
    <div className='d-flex flex-center flex-column flex-column-fluid'>
      <div className='text-center'>
        <h1 className='fw-bolder text-gray-900 mb-4'>Processing OAuth2 Login...</h1>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </div>
  )
}
