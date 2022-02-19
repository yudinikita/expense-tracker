/**
 * Function is used to return a random number which is in the range provided to the parameters.
 * @param lower parameter holds the lower bound
 * @param upper parameter holds the upper bound
 * @return random number
 */
export const getRandomInt = (lower: number = 0, upper: number = 1): number => {
  const min = Math.ceil(lower)
  const max = Math.floor(upper)
  return Math.floor(Math.random() * (max - min)) + min
}
