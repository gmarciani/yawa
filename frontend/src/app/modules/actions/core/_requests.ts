import {
  ActivateUserRequest, ActivateUserResponse, AuthenticationApi,
} from '../../clients/yawa'
import {ErrorModel} from './_models'
import log from '../../../logging/logger'

export async function activateUser(token: string): Promise<ActivateUserResponse> {
  log.info(`Processing token=${token}`)
  try {
    const response = await new AuthenticationApi().activateUser({
      token: token
    } as ActivateUserRequest)
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
