import {useLayout} from '../layout/core'
import {ThemeModeComponent} from '../assets/ts/layout'

const isAbsoluteUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://')
}

export const toAbsoluteUrl = (pathname: string) =>
  isAbsoluteUrl(pathname) ? pathname : process.env.PUBLIC_URL + pathname

export const toAbsoluteApiUrl = (pathname: string) =>
  isAbsoluteUrl(pathname) ? pathname : `${process.env.REACT_APP_API_URL}/${pathname}`

export const useIllustrationsPath = (illustrationName: string): string => {
  const {config} = useLayout()

  const extension = illustrationName.substring(
    illustrationName.lastIndexOf('.'),
    illustrationName.length
  )
  const illustration =
    ThemeModeComponent.getMode() === 'dark'
      ? `${illustrationName.substring(0, illustrationName.lastIndexOf('.'))}-dark`
      : illustrationName.substring(0, illustrationName.lastIndexOf('.'))
  return toAbsoluteUrl(
    `/media/illustrations/${config.illustrations?.set}/${illustration}${extension}`
  )
}
