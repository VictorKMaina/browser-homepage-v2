export function pluralize(word: string, number: number, ending = 's'){
  if(number === 1) return word
  else return word + ending
}
