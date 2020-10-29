import React, { useState, useEffect } from 'react'
import { take, prepend } from '../helpers/array'
import { getRandomInt } from '../helpers/random'

const NUMBERS_COUNT_TO_TAKE = 5

const getNumbersString = (numbers, takeCount) =>
  `${take(takeCount, numbers).join(', ')}${numbers.length > 5 ? ',...' : ''}`

export const Randomizer = () => {
  const [numbers, setNumbers] = useState([])
  const [numbersString, setNumbersString] = useState()

  useEffect(() => {
    setNumbersString(getNumbersString(numbers, NUMBERS_COUNT_TO_TAKE))
  }, [numbers])

  const handleGenerate = () => {
    const number = getRandomInt(0, 100)
    setNumbers(prepend(number, numbers))
  }

  return (
    <div>
      <div>{numbersString || '<...>'}</div>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  )
}
