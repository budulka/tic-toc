import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Field from './Field/Field'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Field/>
    </>
  )
}

export default App
