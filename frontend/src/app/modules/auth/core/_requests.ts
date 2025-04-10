import {
  ActivateUserResponse,
  AuthenticationApi, ResetPasswordResponse, SendUserActivationTokenResponse,
  UsersApi,
} from '../../clients/yawa'
import {AuthModel} from './_models'
import log from '../../../logging/logger'
import {ErrorModel} from '../../actions/core/_models'
import {YAWA_FACTORY} from '../../clients/factories'

const authenticationApi = YAWA_FACTORY.create(AuthenticationApi)
const userApi = YAWA_FACTORY.create(UsersApi)

export async function login(email: string, password: string): Promise<AuthModel> {
  try {
    const response = await authenticationApi.login({
      email: email,
      password: password,
      neverExpire: true,
    })
    const data = response.data
    return {
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    } as AuthModel
  } catch (error: any) {
    log.error(`Cannot login: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function register(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
) {
  return await userApi.createUser({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  })
}

export async function requestUserActivationToken(
  email: string
) {
  try {
    const response = await authenticationApi.sendUserActivationToken({
      email: email,
    })
    const data = response.data
    return {
      message: data.message
    } as SendUserActivationTokenResponse
  } catch (error: any) {
    log.error(`Cannot request user activation: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function activateUser(
  token: string
) {
  try {
    const response = await authenticationApi.activateUser({
      token: token,
    })
    const data = response.data
    return {
      message: data.message
    } as ActivateUserResponse
  } catch (error: any) {
    log.error(`Cannot activate user: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function requestPassword(email: string) {
  try {
    const response = await authenticationApi.sendPasswordResetToken({
      email: email,
    })
    const data = response.data
    return {
      message: data.message
    } as ActivateUserResponse
  } catch (error: any) {
    log.error(`Cannot request password reset: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function resetPassword(password: string, token: string) {
  try {
    const response = await authenticationApi.resetPassword({
      password: password,
      token: token,
    })
    const data = response.data
    return {
      message: data.message
    } as ResetPasswordResponse
  } catch (error: any) {
    log.error(`Cannot request password reset: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function refreshAuthentication(refreshToken: string) {
  try {
    const response = await authenticationApi.refreshAuthentication({
      refreshToken: refreshToken,
    })
    const data = response.data
    return {
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    } as AuthModel
  } catch (error: any) {
    log.error(`Cannot refresh authentication: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}
