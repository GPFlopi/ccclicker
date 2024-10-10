import { useState } from 'react'
import './App.css'
import {Button, ButtonGroup} from "@mui/material";
const SERVER = "https://ccclickercounter.onrender.com"

function App() {
  const [count, setCount] = useState(0)
    const [click_button_img, setClick_button_img] = useState("ccclicker/CC_huh.png")

    async function Count() {
        const response = await fetch(SERVER);
        setCount(Number(await response.text()));
    }
    Count()

    return (
    <>
        <ButtonGroup variant='text' arial-label='Medium-sized button group'>
            <Button onClick={() => setClick_button_img("ccclicker/CC_huh.png")}>Huh</Button>
            <Button onClick={() => setClick_button_img("ccclicker/CC_think.png")}>Think</Button>
            <Button onClick={() => setClick_button_img("ccclicker/CC_flirt.png")}>Flirt</Button>
        </ButtonGroup>
      <div>
          <img src={click_button_img} className="logo react" alt="CC"
                onClick={async () => {
                    await fetch(SERVER+'/inc/')
                    const response = await fetch(SERVER);
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
