import { OrbitControls } from "@react-three/drei";
import { Outline } from '@react-three/postprocessing'
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
      </mesh>
    </>
  );
};
