import { useState } from 'react'
import './App.css'
import CC from '/CC.svg'
// import fetch from 'node-fetch';

const SERVER = "https://ccclickercounter.onrender.com"

function App() {
  const [count, setCount] = useState(0)

    async function Count() {
        const response = await fetch(SERVER+'/counter/count/');
        setCount(Number(await response.text()));
    }
    Count()

    return (
    <>
      <div>
          <img src={CC} className="logo react" alt="CC"
                onClick={async () => {
                    await fetch(SERVER+'/counter/inc/')
                    const response = await fetch(SERVER+'/counter/count/');
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
