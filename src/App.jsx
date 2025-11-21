import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls, button } from 'leva'
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing'

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
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
    </>
    
  );
}

export default App;
