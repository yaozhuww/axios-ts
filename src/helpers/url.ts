import { isDate, isObject, isPlainObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val).replace(/%40/g, '@')
}

export function buildURl(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex > -1) {
      url = url.slice(0, markIndex)
    }
    url = url.indexOf('?') === -1 ? `${url}?${serializedParams}` : `${url}&${serializedParams}`
  }

  return url
}
