import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURl } from '../helpers/url'
import { transformRequest, tranformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transfromHeaders(config)
  config.data = transformData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURl(url!, params)
}

function transformData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}

function transfromHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): any {
  const { data } = res
  return tranformResponse(data)
}
