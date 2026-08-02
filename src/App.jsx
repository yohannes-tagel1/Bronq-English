import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className="title text-3xl font-bold bg-blue-500 text-red p-4">Vite + React</h1>
    <p className="text-lg text-gray-600">Hello Vite + React!</p>

      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h2 class="text-2xl font-bold underline">
    Hello world!
  </h2>
   </>
  )
}

export default App
