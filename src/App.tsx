import { useState } from 'react'
import './App.css'
import CC from '/CC.svg'
// import fetch from 'node-fetch';

function App() {
  const [count, setCount] = useState(0)

    async function Count() {
        const response = await fetch('http://127.0.0.1:8000/counter/count/');
        setCount(Number(await response.text()));
    }
    Count()

    return (
    <>
      <div>
          <img src={CC} className="logo react" alt="CC"
                onClick={async () => {
                    await fetch('http://127.0.0.1:8000/counter/inc/')
                    const response = await fetch('http://127.0.0.1:8000/counter/count/');
                    setCount(Number(await response.text()));
                    }
                }
          />
      </div>
      <h1>CCCount is {count}</h1>
    </>
  )
}



export default App
