import invariant from 'invariant'

export const searchDotExpression = '\\.'

export const isString = string => typeof string === typeof ''

export const isDotBeginningOfString = string =>
  string.search(searchDotExpression) === 0

export const isDotEndOfString = string =>
  string.search(searchDotExpression) === string.length - 1

export const isDottedString = string =>
  removeExtraDots(string).length ? true : false

export const removeExtraDots = string => {
  if (isDotBeginningOfString(string)) {
    string = string.substring(1, string.length)
  }
  if (isDotEndOfString(string)) {
    string = string.substring(0, -1)
  }
  return string
}

export default (string, objectValue) => {
  invariant(
    isString(string) && isDottedString(string),
    'objectDot except string.',
  )
  let keys = string.split('.').reverse()
  return keys
    .map((key, index) => (index === 0 ? { [key]: objectValue } : { [key]: {} }))
    .reduce((acc, cur) => {
      Object.assign(cur[Object.keys(cur)[0]], acc)
      return cur
    })
}
