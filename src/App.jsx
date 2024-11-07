import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("red")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-5 "
      >
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl ">
      <button
      onClick={() => setcolor("blue")}
      className="outline-none px-4 py-2 rounded-3xl text-white"
      style={{backgroundColor: "blue"}}
      >blue</button>
      <button
      onClick={() => setcolor("orange")}
      className="outline-none px-4 py-2 rounded-3xl text-white"
      style={{backgroundColor: "orange"}}
      >orange</button>
      <button
      onClick={() => setcolor("pink")}
      className="outline-none px-4 py-2 rounded-3xl text-white"
      style={{backgroundColor: "pink"}}
      >pink</button>
      <button
      onClick={() => setcolor("green")}
      className="outline-none px-4 py-2 rounded-3xl text-white"
      style={{backgroundColor:"green"}}
      >green</button>

    </div>
    </div>
    </div>
  )
}

export default App
