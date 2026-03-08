"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei"
import type { Mesh } from "three"

interface GlowOrbProps {
  primaryColor?: string
  secondaryColor?: string
  distort?: number
  className?: string
}

function Orb({ primaryColor = "#818cf8", secondaryColor = "#c084fc", distort = 0.5 }: Omit<GlowOrbProps, "className">) {
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.elapsedTime * 0.1
  })

  return (
    <>
      {/* Outer glow sphere */}
      <mesh scale={1.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={secondaryColor} transparent opacity={0.06} />
      </mesh>
      {/* Mid glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={primaryColor} transparent opacity={0.1} />
      </mesh>
      {/* Core */}
      <Float speed={2} floatIntensity={0.3} rotationIntensity={0.2}>
        <mesh ref={ref}>
          <sphereGeometry args={[1, 128, 128]} />
          <MeshDistortMaterial color={primaryColor} distort={distort} speed={3} roughness={0} metalness={0.2} />
        </mesh>
      </Float>
      <Sparkles count={60} scale={3} size={1.5} speed={0.4} color={secondaryColor} />
    </>
  )
}

export function GlowOrb({ primaryColor, secondaryColor, distort, className }: GlowOrbProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 2, 2]} intensity={2} color={primaryColor} />
        <pointLight position={[-2, -2, -2]} intensity={1} color={secondaryColor} />
        <Orb primaryColor={primaryColor} secondaryColor={secondaryColor} distort={distort} />
      </Canvas>
    </div>
  )
}
