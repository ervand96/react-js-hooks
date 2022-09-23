import { count } from 'console'
import React, { useState } from 'react'

export default function StateNew(): JSX.Element {
  const [value, setValue] = useState('')
  const handley = (e: any): void => {
    setValue(e.target.value)
  }
  const clear = (): void => {
    setValue('')
  }
  const [count, setCount] = useState<number>(0)
  const plus = (): void => {
    if (count <= 9) {
      setCount(count + 1)
    }
  }
  const minus = (): void => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <input onChange={handley} value={value} type="text" />
      <h1>value: {value}</h1>
      <h1>count: {count}</h1>
      <button onClick={clear} disabled={!value}>
        clear
      </button>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}
