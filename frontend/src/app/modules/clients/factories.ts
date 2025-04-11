import axios, {AxiosInstance} from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {Configuration} from './yawa'
import {getAuth} from '../auth'

class YawaHeaders {
  public static readonly PREFIX: string = 'X-YAWA'
  public static readonly USER_AGENT: string = `${this.PREFIX}-User-Agent`
  public static readonly REQUEST_ID: string = `${this.PREFIX}-Request-Id`
}

class YawaFactory {

  private readonly configuration: Configuration
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.configuration = new Configuration({
      basePath: process.env.REACT_APP_YAWA_ENDPOINT
    })
    this.axiosInstance = this.createAxiosInstance()
  }

  public create<T>(ClassRef: new (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => T) {
    return new ClassRef(this.configuration, undefined, this.axiosInstance)
  }

  private createAxiosInstance() {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_YAWA_ENDPOINT,
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json',
        [YawaHeaders.USER_AGENT]: 'yawa-frontend',
        [YawaHeaders.REQUEST_ID]: uuidv4(),
      },
    })

    axiosInstance.interceptors.request.use( (config) => {
        const auth = getAuth()
        if (auth && auth.accessToken) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`
        }

        return config
      },
      (err: any) => Promise.reject(err)
    )

    return axiosInstance
  }
}

/*export function setupAxios(axios: any) {
  console.log(`Setup Axios: ${process.env.REACT_APP_YAWA_ENDPOINT}`)
  axios.baseURL = process.env.REACT_APP_YAWA_ENDPOINT
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const auth = getAuth()
      if (auth && auth.accessToken) {
        config.headers.Authorization = `Bearer ${auth.accessToken}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}*/

export const YAWA_FACTORY = new YawaFactory()
