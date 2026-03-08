"use client"
import { useRef, useEffect } from "react"
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame, useMotionValue } from "motion/react"
import { wrap } from "@motionone/utils"

interface VelocityMarqueeProps {
  items: string[]
  baseVelocity?: number
  separator?: string
  className?: string
  itemClassName?: string
}

function MarqueeTrack({
  items,
  baseVelocity,
  separator,
  className,
  itemClassName,
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity! * (delta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden ${className ?? ""}`} style={{ overflowX: "hidden" }}>
      <motion.div
        style={{ x, display: "flex", whiteSpace: "nowrap" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className={itemClassName} style={{ display: "inline-flex", alignItems: "center" }}>
            {item}
            <span style={{ margin: "0 16px", opacity: 0.3 }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function VelocityMarquee({
  items,
  baseVelocity = -3,
  separator = "•",
  className,
  itemClassName,
}: VelocityMarqueeProps) {
  return (
    <div style={{ overflow: "hidden" }}>
      <MarqueeTrack
        items={items}
        baseVelocity={baseVelocity}
        separator={separator}
        className={className}
        itemClassName={itemClassName}
      />
    </div>
  )
}
