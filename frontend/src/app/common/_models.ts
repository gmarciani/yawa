export interface ResponseModel {
  message: string
}

export interface ErrorModel {
  timestamp: string,
  status: number,
  error: string,
  exception: string,
  trace: string,
  message: string,
  path: string,
}
