export type methods = 'get' | 'GET' | 'post' | 'POST'
export interface AxiosRequestConfig {
  url: string
  method?: methods
}
