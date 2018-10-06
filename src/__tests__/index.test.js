import objectMaker, {
  searchExpression,
  isString,
  isDottedString,
  removeExtraDots,
  extractKeys,
} from '../index'

describe('Object Maker', () => {
  describe('searchDotExpression', () => {
    it('should be .', () => {
      expect(searchExpression).toEqual('.')
    })
  })

  describe('Check is entry as string', () => {
    it('should return true for `` ', () => {
      const test = 10
      expect(isString(`${test}`)).toBeTruthy()
    })
  })

  describe('Remove extra dots from beginning or end of string', () => {
    it('should trim right and left', () => {
      expect(removeExtraDots('.author.name.')).toEqual('author.name')
    })
    it('should trim right', () => {
      expect(removeExtraDots('author.name.')).toEqual('author.name')
    })
    it('should trim left', () => {
      expect(removeExtraDots('.author.name')).toEqual('author.name')
    })
  })

  describe('Check is dot string', () => {
    it('should check is dot in string after trim dots', () => {
      expect(isDottedString('.name.')).toBeFalsy()
    })
  })

  describe('Check key extractor', () => {
    it('should extract keys from dotted string', () => {
      expect(extractKeys('.author.name.')).toBeInstanceOf(Array)
      expect(extractKeys('.author.name')).toContain('author')
      expect(extractKeys('author.name.')).toContain('name')
    })
  })

  describe('Is objectMaker works fine', () => {
    it('should return currect object', () => {
      expect(objectMaker('.package.author.name.', 'borvelt')).toEqual({
        package: { author: { name: 'borvelt' } },
      })
    })
  })
})
