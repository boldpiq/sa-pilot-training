"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float, Environment } from "@react-three/drei"
import type { Mesh } from "three"

interface FloatingGeometryProps {
  shape?: "sphere" | "torus" | "octahedron" | "icosahedron"
  color?: string
  distort?: number
  speed?: number
  className?: string
}

function Shape({ shape = "sphere", color = "#6366f1", distort = 0.4, speed = 1.5 }: Omit<FloatingGeometryProps, "className">) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    ref.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  const geometry = {
    sphere: <sphereGeometry args={[1, 128, 128]} />,
    torus: <torusGeometry args={[0.8, 0.35, 64, 128]} />,
    octahedron: <octahedronGeometry args={[1, 4]} />,
    icosahedron: <icosahedronGeometry args={[1, 4]} />,
  }

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref}>
        {geometry[shape]}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export function FloatingGeometry({ shape, color, distort, speed, className }: FloatingGeometryProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="city" />
        <Shape shape={shape} color={color} distort={distort} speed={speed} />
      </Canvas>
    </div>
  )
}
