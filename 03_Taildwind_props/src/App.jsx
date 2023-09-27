import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Anuj kumar rai",
    age : 21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4  '>TailWind Css TEST</h1>
    <Card  username = "Anuj kumar" btnText="Click me" />
    <Card username="Anuj" btnText = "vist me"/>
    </>
  )
}

export default App
