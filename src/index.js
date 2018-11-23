export const searchExpression = '.'

export const isString = string => typeof string === typeof ''

export const isDottedString = string =>
  removeExtraDots(string).indexOf(searchExpression) !== -1

export const removeExtraDots = string =>
  string
    .split(searchExpression)
    .filter(item => item.length > 0)
    .join(searchExpression)

export const extractKeys = string =>
  removeExtraDots(string)
    .split(searchExpression)
    .reverse()

export const mapStringToObject = (string, object) => {
  if (!isString(string) || !isDottedString(string)) {
    return object
  }
  let keys = extractKeys(string).reverse()
  keys.forEach(key => {
    try {
      object = object[key]
      if(typeof object === typeof undefined) {
        throw Error('Undefined value reached.')
      }
    } catch (e) {
      return undefined
    }
  })
  return object
}

export default (string, objectValue) => {
  if (!isString(string) || !isDottedString(string)) {
    return objectValue
  }
  let keys = extractKeys(string)
  return keys
    .map((key, index) => (index === 0 ? { [key]: objectValue } : { [key]: {} }))
    .reduce((acc, cur) => {
      Object.assign(cur[Object.keys(cur)[0]], acc)
      return cur
    })
}
