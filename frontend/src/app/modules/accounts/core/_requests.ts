import {
  UpdateUserProfileRequestGenderEnum,
  UpdateUserProfileRequestLanguageEnum,
  UserProfileGenderEnum, UserProfileLanguageEnum,
  UsersApi,
} from '../../clients/yawa'
import log from '../../../logging/logger'
import {ErrorModel} from '../../actions/core/_models'
import {YAWA_FACTORY} from '../../clients/factories'
import {IProfileDetails} from '../components/settings/SettingsModel'
import {getGenderEnum, getLanguageEnum} from './_utils'

const userApi = YAWA_FACTORY.create(UsersApi)

export async function updateUserProfilePicture(file: File): Promise<string> {
  try {
    const response = await userApi.updateUserPicture(file)
    const data = response.data
    return data.path
  } catch (error: any) {
    log.error(`Cannot update user profile picture: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function deleteUserProfilePicture(): Promise<string> {
  try {
    const response = await userApi.deleteUserPicture()
    const data = response.data
    return data.message
  } catch (error: any) {
    log.error(`Cannot delete user profile picture: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}

export async function updateUserProfile(profile: IProfileDetails): Promise<void> {
  try {
    const response = await userApi.updateUserProfile({
      firstname: profile.firstname,
      lastname: profile.lastname,
      gender: getGenderEnum(profile.gender),
      dateOfBirth: profile.dateOfBirth,
      phone: profile.phone,
      location: profile.location,
      language: getLanguageEnum(profile.language),
      picture: profile.picture,
    })
    const data = response.data
    console.log(`Update profile response data: ${data}`)
  } catch (error: any) {
    log.error(`Cannot update user profile: ${JSON.stringify(error)}`)
    throw error.response.data as ErrorModel
  }
}
