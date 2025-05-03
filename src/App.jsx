import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectDescription from './ProjectDescription'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProjectDescription />
  )
}

export default App
