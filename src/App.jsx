import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Transperent Queue</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This app alowed to anybody to see they application clear
        </p>
      </div>
      <p className="read-the-docs">
        How Does it work?
      </p>
    </>
  )
}

export default App
