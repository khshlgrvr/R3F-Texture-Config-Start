import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls, button } from 'leva'

function App() {
  useControls({
    color: '#ff9621',
    
    testBool: true,

    buttonName: button(() => {
      console.log('Button Pressed')
    }),

    screenshot: button(() => {
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    })
  })



  return (
    <>
      This boilerplate code for React Three Fiber includes Leva for UI controls
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    </>
    
  );
}

export default App;
