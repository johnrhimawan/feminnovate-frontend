import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className={`${styles.heading1} text-yellow`}>hello</h1>
  )
}

export default App
