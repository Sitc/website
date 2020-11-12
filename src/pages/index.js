import React from 'react'
import '../styles/index.scss'
import { Canvas } from 'react-three-fiber'
import Box from '../components/scene'

export default function Home() {
  console.log(
    '%cIf you want to develop interesting and blazing fast websites. Don`t hesitate, contact me!',
    'position: relative; max-width: 30em;background-color: #fff;padding: 1.125em 1.5em;font-size: 1.25em;border-radius: 1rem;box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);'
  )
  return (
    <div className="layer">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}
