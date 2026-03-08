# boldpiq-web — Elite Animation Component Library

> Production-grade React animation components and 110+ world-class design prompts. Built with Motion, GSAP, and React Three Fiber. Every component is hand-crafted — no mediocre defaults.

---

## Stack

- **Next.js 16** — App Router, TypeScript
- **Motion** (formerly Framer Motion) — spring physics, scroll-linked animations
- **GSAP + ScrollTrigger** — complex timelines and scroll choreography
- **React Three Fiber + Drei** — 3D/WebGL components
- **tsParticles** — particle systems
- **Tailwind CSS** — utility-first styling

---

## Component Library

### Text `src/components/text/`
| Component | Description |
|-----------|-------------|
| `MorphingText` | SVG blur-filter morphing between words (Vercel-style) |
| `TextScramble` | Matrix-style letter scramble on mount/hover |
| `GlitchText` | RGB-split CSS glitch effect |
| `TextReveal` | 3D word/char flip reveal with rotateX |

### Micro-Interactions `src/components/micro/`
| Component | Description |
|-----------|-------------|
| `MagneticButton` | Spring physics cursor-following button |
| `MagneticText` | Per-letter cursor attraction with spring physics |
| `TiltCard` | 3D perspective tilt with glare overlay |
| `RippleButton` | Material ripple from exact click position |
| `ShimmerButton` | Moving shimmer gradient + border glow |
| `LiquidButton` | Blob expands from cursor on hover |
| `AnimatedToggle` | Spring toggle with custom colors/sizes |
| `CursorFollower` | mix-blend-mode:difference cursor dot |

### Scroll `src/components/scroll/`
| Component | Description |
|-----------|-------------|
| `ScrollReveal` | 9 effect types: fade, clip, scale, blur, rotate |
| `VelocityMarquee` | Ticker that reacts to scroll velocity and direction |
| `HorizontalScroll` | Vertical-to-horizontal scroll conversion |
| `ScrollTimeline` | Step-by-step scroll-driven timeline |
| `StickyScroll` | Linear/Stripe-style sticky left panel |
| `RevealMask` | Scroll-driven clip-path reveal (ltr/rtl/ttb/btt) |

### 3D / WebGL `src/components/three/`
| Component | Description |
|-----------|-------------|
| `FloatingGeometry` | Distorted floating sphere/torus/icosahedron |
| `ParticleField` | Configurable 3D particle cloud with mouse interaction |
| `WavePlane` | Animated undulating mesh plane (solid or wireframe) |
| `GlowOrb` | Distorted orb with sparkles and dynamic point lights |

### Layout `src/components/layout/`
| Component | Description |
|-----------|-------------|
| `AnimatedAccordion` | Spring height accordion with icon rotation |
| `AnimatedTabs` | Layout-animated tab indicator with directional content |

### Loaders `src/components/loaders/`
| Component | Description |
|-----------|-------------|
| `PageLoader` | Full-screen count-up preloader |
| `ProgressBar` | Fixed-position bar (controlled or indeterminate) |
| `Skeleton` / `SkeletonCard` | Shimmer skeleton screens |

### Gestures `src/components/gestures/`
| Component | Description |
|-----------|-------------|
| `DragToReveal` | Drag any direction to reveal content behind |
| `SwipeCarousel` | Touch/drag carousel with spring-physics + dots |

---

## Usage

```tsx
import {
  MagneticButton, TextScramble, ScrollReveal,
  FloatingGeometry, StickyScroll, PageLoader,
} from "@/components"
```

---

## Design Prompts

**[PROMPTS.md](./PROMPTS.md)** — 110+ detailed prompts derived from award-winning sites (Awwwards, CSS Design Awards, FWA). Each prompt includes exact px values, timing, easing, colors, and interaction specs.

**13 categories:**
Hero · Typography · Micro-Interactions · Scroll · 3D/WebGL · Layout · Color Systems · Page Transitions · Cursor · Loading · Full-Page Patterns (Linear, Vercel, Stripe, Basement Studio, Raycast)

---

## Development

```bash
npm install
npm run dev
# http://localhost:3000
```

---

*Studied: Linear, Vercel, Stripe, Lusion, Basement Studio, Active Theory, Aristide Benoist, Resend, Raycast, Craft*
