import React, { useState } from 'react'

import styles from './state.module.scss'

const computed = () => {
  return Math.trunc(Math.random() * 20)
}

export default function UseState(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const [state, setState] = useState<object>({
    title: 'Name',
    date: Date.now(),
  })

  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: 'Taza',
      }
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.state}>Use State</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={updateTitle}>Change Name</button>
    </div>
  )
}
