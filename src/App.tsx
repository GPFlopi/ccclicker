import { useState} from 'react'
import './App.css'
import {Button, ButtonGroup} from "@mui/material";
const SERVER = "https://ccclickercounter.onrender.com"
// const SERVER = "http://127.0.0.1:8000"


interface ImageData {
    id: number;
    top: number;
    left: number;
    width: number;
    height: number;
}

function App() {
  const [count, setCount] = useState(0)
    const [click_button_img, setClick_button_img] = useState("ccclicker/button/CC_huh.png")

    const [images, setImages] = useState<ImageData[]>([]);

    async function Count() {
        const response = await fetch(SERVER);
        setCount(Number(await response.text()));
    }
    Count()

    const spawnImage = () => {
        // Generate random position
        const randomTop = Math.floor(Math.random() * window.innerHeight);
        const randomLeft = Math.floor(Math.random() * window.innerWidth);
        const randomHeight = Math.random() * (100 - 10) + 10
        const randomWidth = Math.random() * (100 - 10) + 10


        const newImage = {
            id: Date.now(), // Use a timestamp as a unique ID
            top: randomTop,
            left: randomLeft,
            width: randomWidth,
            height: randomHeight,
        };

        setImages(prevImages => [...prevImages, newImage]);

        setTimeout(() => {
            setImages(prevImages => prevImages.filter(image => image.id !== newImage.id));
        }, 3000);
    };

    return (
    <>
        <ButtonGroup variant='text' arial-label='Medium-sized button group'>
            <Button onClick={() => setClick_button_img("ccclicker/button/CC_huh.png")}>Huh</Button>
            <Button onClick={() => setClick_button_img("ccclicker/button/CC_think.png")}>Think</Button>
            <Button onClick={() => setClick_button_img("ccclicker/button/CC_flirt.png")}>Flirt</Button>
        </ButtonGroup>
      <div>
          <img src={click_button_img} className="logo react" alt="CC"
                onClick={async () => {
                    await fetch(SERVER+'/inc/')
                    const response = await fetch(SERVER);
                    setCount(Number(await response.text()));
                    spawnImage()


                }}
          />

          {images.map(image => (
              <img
                  key={image.id}
                  src="ccclicker/minion/otomo.png"
                  alt="Random"
                  style={{
                      position: 'absolute',
                      top: image.top,
                      left: image.left,
                      width: image.width,
                      height: image.height,
                  }}
              />
          ))}
      </div>
      <h1>CCCount is {count}</h1>
    </>
  )
}

export default App
