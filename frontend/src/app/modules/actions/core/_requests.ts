import {
  ActivateUserRequest,
  UsersApi,
} from '../../clients/yawa'
import {ErrorModel, ResponseModel} from './_models'
import {AxiosError} from 'axios'

export async function activateUser(username: string, token: string): Promise<ResponseModel> {
  try {
    const response = await new UsersApi().activateUser(
      username,
      { token: token } as ActivateUserRequest
    )
    const data = response.data
    return {
      message: data.message
    } as ResponseModel
  } catch (error: any) {
    throw error.response.data as ErrorModel
  }
}
