"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticleFieldProps {
  count?: number
  color?: string
  size?: number
  spread?: number
  speed?: number
  className?: string
}

function Particles({ count = 2000, color = "#6366f1", size = 0.015, spread = 5, speed = 0.3 }: Omit<ParticleFieldProps, "className">) {
  const ref = useRef<THREE.Points>(null)

  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const rnd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread
      rnd[i] = Math.random()
    }
    return [pos, rnd]
  }, [count, spread])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.05
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

export function ParticleField({ count, color, size, spread, speed, className }: ParticleFieldProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <Particles count={count} color={color} size={size} spread={spread} speed={speed} />
      </Canvas>
    </div>
  )
}
