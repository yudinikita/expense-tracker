export const getRandomItem = <T> (array: any[]): T => array[Math.floor(Math.random() * array.length)]

export const toArray = <T> (candidate?: T | T[] | false): T[] => {
  if (candidate === undefined || candidate === false) return []

  return Array.isArray(candidate) ? candidate : [candidate]
}
