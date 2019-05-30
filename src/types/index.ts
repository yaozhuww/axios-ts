export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delelte' | 'DELETE' | 'put' | 'PUT'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType: XMLHttpRequestResponseType
  timeout: number
}

export interface AxiosResponse<T = any> {
  //传值 T 当没传是 是any类型
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosRequestConfig
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInterceptorMannager<T> {
  use(resolved: ResolvedFn<T>, rejected: RejectedFn): number

  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}

export interface AxiosConstructor {
  new (name: string, age: number): AxiosInterfase
}

export interface AxiosInterfase {
  name: string
  study(name: string): void
}

export interface ResoveedFn {
  <T>(data: any): Promise<T>
}

class a implements AxiosInterfase {
  name: string
  constructor(name: string, age: number) {
    this.name = name
  }
  study(name: string) {}
}

function createAxios(cons: AxiosConstructor, name: string, age: number): AxiosInterfase {
  return new cons(name, age)
}

create
