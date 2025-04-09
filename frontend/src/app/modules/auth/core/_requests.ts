import {
  ActivateUserResponse,
  AuthenticationApi, ResetPasswordResponse, SendUserActivationTokenResponse,
  UsersApi,
} from '../../clients/yawa'
import {AuthModel, UserProfileModel} from './_models'
import log from '../../../logging/logger'
import {ErrorModel} from '../../actions/core/_models'

export async function login(email: string, password: string): Promise<AuthModel> {
  log.info(`Processing email=${email} password=${password}`)
  try {
    const response = await new AuthenticationApi().login({
      email: email,
      password: password,
      neverExpire: true, // TODO Add support for remember me
    })
    log.info(`Response: ${JSON.stringify(response)}`)
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

export async function getUserProfile(): Promise<UserProfileModel> {
  log.info(`Processing`)
  const response = await new UsersApi().getUserProfile()
  log.info(`Response: ${JSON.stringify(response)}`)
  const data = response.data
  return {
    firstname: data.profile.firstname,
    lastname: data.profile.lastname,
    gender: data.profile.gender,
    dateOfBirth: data.profile.dateOfBirth,
    picture: data.profile.picture,
    role: data.profile.role,
  } as UserProfileModel
}

export async function register(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
) {
  log.info(`Processing firstname=${firstname} lastname=${lastname} email=${email} password=${password}`)
  return await new UsersApi().createUser({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  })
}

export async function requestUserActivationToken(
  email: string
) {
  log.info(`Processing email=${email}`)
  try {
    const response = await new AuthenticationApi().sendUserActivationToken({
      email: email,
    })
    log.info(`Response: ${JSON.stringify(response)}`)
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
  log.info(`Processing token=${token}`)
  try {
    const response = await new AuthenticationApi().activateUser({
      token: token,
    })
    log.info(`Response: ${JSON.stringify(response)}`)
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
  log.info(`Processing email=${email}`)
  try {
    const response = await new AuthenticationApi().sendPasswordResetToken({
      email: email,
    })
    log.info(`Response: ${JSON.stringify(response)}`)
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
  log.info(`Processing password=${password} token=${token}`)
  try {
    const response = await new AuthenticationApi().resetPassword({
      password: password,
      token: token,
    })
    log.info(`Response: ${JSON.stringify(response)}`)
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
    const response = await new AuthenticationApi().refreshAuthentication({
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
