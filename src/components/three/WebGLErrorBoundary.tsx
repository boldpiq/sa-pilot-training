"use client"
import { Component, type ReactNode, type ErrorInfo } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  error: Error | null
}

/**
 * Wraps any @react-three/fiber Canvas to catch WebGL errors.
 * Shows a graceful fallback on mobile/unsupported browsers.
 *
 * Usage:
 *   <WebGLErrorBoundary fallback={<StaticImage />}>
 *     <FloatingGeometry />
 *   </WebGLErrorBoundary>
 */
export class WebGLErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("[WebGL] Falling back to static:", error.message, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return this.props.fallback ?? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)",
            borderRadius: "inherit",
          }}
        />
      )
    }
    return this.props.children
  }
}
