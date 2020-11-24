import { correctSentence } from '../correctSentence';

describe('Sprawdzanie poprawiacza zdań', () => {
  test('Poprawia zdanie "ala ma kota, a kot ma Alę', () => {
    expect(correctSentence("ala ma kota, a kot ma Alę")).toBe("Ala ma kota, a kot ma Alę.");
  })

  test('Poprawia zdanie "   ala  ma kota,    a kot ma Alę   "', () => {
    expect(correctSentence("   ala  ma kota,    a kot ma Alę   ")).toBe("Ala ma kota, a kot ma Alę.");
  })

  test('Poprawia zdanie "to jest zdanie   bez kropki"', () => {
    expect(correctSentence("to jest zdanie   bez kropki")).toBe("To jest zdanie bez kropki.");
  })

  test('Poprawia zdanie "to jest zdanie   bez kropki!!!!"', () => {
    expect(correctSentence("to jest zdanie   bez kropki!!!!")).toBe("To jest zdanie bez kropki!!!!");
  })
})
