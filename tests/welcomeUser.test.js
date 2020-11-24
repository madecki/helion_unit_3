import { welcomeUser } from '../welcomeUser';
import { userPartiallyInvalid } from './mocked/user';

describe('Sprawdzanie poprawności powitań', () => {
  test('Po podaniu wszystkich poprawnych danych, zwróci powitanie w poprawnym formacie', () => {
    const user = {
      firstName: '   Radek',
      lastName: '  Madecki',
      age: 100,
      city: '   Sosnowiec'
    }

    const validAnswer = 'Witaj Radek Madecki! Czy dobrze pamiętam, że masz 100 lat i mieszkasz w Sosnowiec? Dobrze Cię znowu widzieć!'

    expect(welcomeUser(user)).toBe(validAnswer);
  })

  test('Kiedy nie zostaną podane żadne dane, zwróci powitanie z domyślnymi wartościami', () => {
    const validAnswer = 'Witaj John Doe! Czy dobrze pamiętam, że masz 30 lat i mieszkasz w Katowice? Dobrze Cię znowu widzieć!'

    expect(welcomeUser()).toBe(validAnswer);
  })

  test('Kiedy zostanie podana część właściwości, zwróci powitanie z częściowo domyślnymi wartościami', () => {
    const validAnswer = 'Witaj John Madecki! Czy dobrze pamiętam, że masz 30 lat i mieszkasz w Sosnowiec? Dobrze Cię znowu widzieć!'
    expect(welcomeUser(userPartiallyInvalid)).toBe(validAnswer);
  })
})
