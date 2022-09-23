import React, { useState } from 'react'
export default function Nstate(): JSX.Element {
  const [value, setValue] = useState('')
  const handley = (e: any): void => {
    setValue(e.target.value)
  }
  const clear = (): void => {
    setValue('')
  }
  const [count, setCount] = useState(0)
  const plus = (): void => {
    setCount(count + 1)
  }
  const minus = (): void => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>:Value {value}</h1>
      <h1>:Count {count}</h1>
      <input onChange={handley} value={value} type="text" />
      <button onClick={clear}>Clear</button>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}
