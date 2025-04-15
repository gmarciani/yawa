import {UsersApi} from '../../clients/yawa'
import log from '../../../logging/logger'
import {ErrorModel} from '../../actions/core/_models'
import {YAWA_FACTORY} from '../../clients/factories'

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
