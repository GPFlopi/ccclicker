import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img  src="src/assets/CC.png" className="logo react" alt="React logo"
                onClick={() => setCount((count) => count + 1)}
          />
      </div>
      <h1>CCCount {count}</h1>
    </>
  )
}

export default App
