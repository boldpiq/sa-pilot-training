"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface WavePlaneProps {
  color?: string
  wireframe?: boolean
  speed?: number
  amplitude?: number
  segments?: number
  className?: string
}

function Wave({ color = "#6366f1", wireframe = false, speed = 1, amplitude = 0.3, segments = 80 }: Omit<WavePlaneProps, "className">) {
  const ref = useRef<THREE.Mesh>(null)
  const geo = useMemo(() => new THREE.PlaneGeometry(8, 8, segments, segments), [segments])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const position = ref.current.geometry.attributes.position
    const time = clock.elapsedTime * speed
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const y = position.getY(i)
      position.setZ(i, Math.sin(x * 1.5 + time) * amplitude + Math.sin(y * 1.5 + time * 0.8) * amplitude * 0.5)
    }
    position.needsUpdate = true
    ref.current.geometry.computeVertexNormals()
  })

  return (
    <mesh ref={ref} geometry={geo} rotation={[-Math.PI / 3, 0, 0]}>
      <meshStandardMaterial color={color} wireframe={wireframe} side={THREE.DoubleSide} />
    </mesh>
  )
}

export function WavePlane({ color, wireframe, speed, amplitude, segments, className }: WavePlaneProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Wave color={color} wireframe={wireframe} speed={speed} amplitude={amplitude} segments={segments} />
      </Canvas>
    </div>
  )
}
