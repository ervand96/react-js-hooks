import React, { useState } from 'react'

export default function State() {
  const [value, setValue] = useState<string>('')
  console.log(value, 'value')
  const hendler = (e: any) => {
    setValue(e.target.value)
  }
  const delet = () => {
    setValue('')
  }
  return (
    <div>
      <input onChange={hendler} value={value} type="text" />
      <h1>{value}</h1>
      <button onClick={delet} disabled={!value}>
        maqrel
      </button>
    </div>
  )
}
