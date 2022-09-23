import React, { useState } from 'react'
export default function NewBr(): JSX.Element {
  const [value, setValue] = useState('')
  const handley = (e: any) => {
    setValue(e.target.value)
  }
  const clear = () => {
    setValue('')
  }
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
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
        Clear
      </button>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}
