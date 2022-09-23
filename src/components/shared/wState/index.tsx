import React, { useState } from 'react'

export default function Wstate(): JSX.Element {
  const [value, setValue] = useState('')
  const [count, setCount] = useState<number>(0)
  const handley = (e: any): void => {
    setValue(e.target.value)
  }
  const clear = (): void => {
    setValue('')
  }
  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>{value}</h1>
      <input onChange={handley} type="text" value={value} />
      <button onClick={clear} disabled={!value}>
        Clear
      </button>
      <h1>count: {count}</h1>
      <h1>value: {value}</h1>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  )
}