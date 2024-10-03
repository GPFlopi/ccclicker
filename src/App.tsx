import { useState } from 'react'
import './App.css'
import CC from '/CC.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={CC} className="logo react" alt="CC"
                onClick={() => setCount((count) => count + 1)}
          />
      </div>
      <h1>CCCount is {count}</h1>
    </>
  )
}

export default App
