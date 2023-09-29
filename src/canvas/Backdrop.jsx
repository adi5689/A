/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import {AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.2}
      scale={10}
      rotation={[Math.PI / 2, 2, 0]}
      position={[0.3, -0.1, -0.1]}
    >

        <RandomizedLight 
            amount={4}
            radius={9}
            intensity={0.8}
            ambient={0.2}
            position={[5, 5, 10]}
        />
        <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.2}
            ambient={0.5}
            // rotation={[Math.PI / 2, 0, 0.5]}
            position={[-5, -5, 9]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop