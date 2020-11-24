import { correctSentence } from './correctSentence';

export const welcomeUser = ({firstName = 'John', lastName = 'Doe', age = 30, city = 'Katowice'} = {}) => {
  const greeting = `Witaj ${firstName} ${lastName}! Czy dobrze pamiętam, że masz ${age} lat i mieszkasz w ${city}? Dobrze Cię znowu widzieć!`;

  return correctSentence(greeting)
}
