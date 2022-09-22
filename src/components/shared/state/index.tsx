import { useState } from 'react'

export default function State(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const handler = (e: any): void => {
    setValue(e.target.value)
  }
  const clear = (): void => {
    setValue('')
  }
  return (
    <div>
      <input onChange={handler} value={value} type="text" />
      <h1>{value}</h1>
      <button onClick={clear} disabled={!value}>
        delete
      </button>
    </div>
  )
}
