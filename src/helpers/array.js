export const concat = (arr1, arr2) => [...arr1, ...arr2]
export const append = (item, arr) => [...arr, item]
export const prepend = (item, arr) => [item, ...arr]
export const take = (count, arr) => arr.slice(0, count)
export const contains = (item, arr) => arr.includes(item)
export const difference = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item))
