import { isPalindrome } from './index.js'

describe('isPalindrome()', () => {
  it('return turn if a string is the same backwards and forwards', () => {
    expect(isPalindrome('racecar')).toBe(true)
    expect(isPalindrome('Avid diva')).toBe(true)
    expect(isPalindrome('Was it a car or a cat I saw')).toBe(true)
  })

  it('return false if a string is not spelled the same backwards and forwards', () => {
    expect(isPalindrome('racecard')).toBe(false)
    expect(isPalindrome('this is not a palidrome')).toBe(false)
  })

  it('returns false if the argument is not a string', () => {
    expect(isPalindrome(555444555)).toBe(false)
    expect(isPalindrome(['race', 'car'])).toBe(false)
  })
})