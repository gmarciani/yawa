import {CreateUserApi, GetUserProfileApi, LoginApi, SendPasswordResetTokenApi} from '../../clients/yawa'
import {AuthModel, UserProfileModel} from './_models'

export async function login(username: string, password: string): Promise<AuthModel> {
  const response = await new LoginApi().login({
    username: username,
    password: password,
    neverExpire: false, // TODO Add support for remember me
  })
  const data = response.data
  return {
    username: data.username,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  } as AuthModel
}

export async function getUserProfile(username: string): Promise<UserProfileModel> {
  const response = await new GetUserProfileApi().getUserProfile(
      username
  )
  const data = response.data
  return {
    firstname: data.profile.firstname,
    lastname: data.profile.lastname,
    gender: data.profile.gender,
    dateOfBirth: data.profile.dateOfBirth,
    picture: data.profile.picture,
    email: 'giacomo.marciani+tofix@gmail.com',
    role: data.profile.role,
  } as UserProfileModel
}

export async function register(
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
) {
  return await new CreateUserApi().createUser({
    username: email,
    email: email,
    password: password,
  })
}

export async function requestPassword(email: string) {
  return await new SendPasswordResetTokenApi().sendPasswordResetToken(
      email
  )
}
