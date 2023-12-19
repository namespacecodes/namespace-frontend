"use client"
import { Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls,Circle,Sphere, useTexture } from '@react-three/drei'
import { Flex } from '@react-three/flex'
import { useRef } from 'react'


const SphereComp = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={4} />
      <Flex justifyContent="flex-end" align="flex-start">
        <OrbitControls
          enableZoom={false}
          enableRotate
        />
        <Spher/>
        {/* <Picture/> */}
      </Flex>
    </Canvas>
  )
}



const Spher = () => {
  const groupRef = useRef<THREE.Group>(null!)
  useFrame((state, delta) => (groupRef.current.rotation.y += delta*0.5))
  return (
    <group ref={groupRef}>
    <Sphere  args={[2.5, 20, 20]} >
          <meshBasicMaterial wireframe color={"rgb(215,139,82)"} />
    </Sphere>
    <Picture/>
    </group>
  )
}

const Picture =()=>{
  const texture = useTexture('./demo.svg')
  return (
    <Circle args={[0.5,42]} position={[0,0,2.5]}> 
      <meshStandardMaterial map={texture}/>
    </Circle>
  )

}


export default SphereComp