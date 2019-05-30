import { isPlainObject } from './utils'

function normallizeHeaderName(headers: any, normallizeName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (headers[name] == normallizeName.toLowerCase()) {
      headers[normallizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normallizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-type']) {
      headers['Content-Type'] = 'application/json;chatset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
