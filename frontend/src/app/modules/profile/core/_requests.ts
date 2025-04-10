import log from '../../../logging/logger'
import {YAWA_FACTORY} from '../../clients/factories'
import {UsersApi} from '../../clients/yawa'
import {UserProfileModel} from './_models'

const userApi = YAWA_FACTORY.create(UsersApi)

export async function getUserProfile(): Promise<UserProfileModel> {
  const response = await userApi.getUserProfile()
  log.info(`Retrieved user profile: ${JSON.stringify(response)}`)
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
