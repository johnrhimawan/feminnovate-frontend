import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './style'
import JobListingPage from './pages/JobListingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <JobListingPage/>
  )
}

export default App
