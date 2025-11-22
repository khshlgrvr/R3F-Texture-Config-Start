import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls, button } from 'leva'
import { EffectComposer, Selection, Select, Outline } from '@react-three/postprocessing'


function Selectable({ children }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Select enabled={hovered}>
      {React.cloneElement(children, {
        onPointerOver: (e) => {
          e.stopPropagation()
          setHovered(true)
        },
        onPointerOut: () => setHovered(false)
      })}
    </Select>
  )
}



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
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#666666"]} />
      <mesh position={[0, -1, 0]} scale={[10, 0.01, 10]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={100}
            width={1000}
          />
        </EffectComposer>

        <Selectable>
          <mesh position={[0, 0, 0]}>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </Selectable>
        <Selectable>
          <mesh position={[1.5, 0, 0]}>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </Selectable>
        <Selectable>
          <mesh position={[-1.5, 0, 0]}>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </Selectable>
      </Selection>
    </Canvas>
  )
}

export default App;
