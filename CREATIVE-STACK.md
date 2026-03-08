# BoldPiq Creative Stack — Reference

> Single reference for every client website build. Tools, fonts, palettes, components, and workflow — all in one place.

---

## Animation Stack (Installed)

| Library | Role | Docs |
|---------|------|------|
| **Motion** (Framer Motion) | Spring physics, scroll values, AnimatePresence | motion.dev |
| **GSAP + ScrollTrigger** | Complex timelines, pinning, scrub | gsap.com |
| **Lenis** | Smooth momentum scroll (foundation) | lenis.dev |
| **React Three Fiber** | 3D / WebGL scenes | docs.pmnd.rs |
| **@react-three/drei** | 3D helpers (Float, MeshDistortMaterial, etc.) | drei.pmnd.rs |
| **tsParticles** | Particle systems | particles.js.org |

**Rule:** Lenis always on. Motion for React components. GSAP for complex scroll sequences. R3F for 3D.

---

## Component Library (Ready to Use)

Import from `@/components` — everything is exported from one file.

### Quick picks by use case

| I need... | Use |
|-----------|-----|
| Smooth scroll on every page | `LenisProvider` (already in layout) |
| Animated headline | `TextReveal`, `MorphingText`, `TextScramble` |
| Glitch / edgy text | `GlitchText` |
| Premium CTA button | `MagneticButton`, `LiquidButton`, `ShimmerButton` |
| Card hover effect | `TiltCard` |
| Click feedback | `RippleButton` |
| Custom cursor | `CursorFollower` |
| Section reveal on scroll | `ScrollReveal` (9 effects) |
| Sticky feature section | `StickyScroll` |
| Horizontal scroll section | `HorizontalScroll` |
| Scroll-driven wipe reveal | `RevealMask` |
| Animated marquee/ticker | `VelocityMarquee` |
| Timeline / process steps | `ScrollTimeline` |
| 3D hero visual | `FloatingGeometry`, `GlowOrb` |
| 3D background | `ParticleField`, `WavePlane` |
| Page preloader | `PageLoader` |
| Loading skeleton | `SkeletonCard` |
| Swipeable content | `SwipeCarousel` |
| FAQ / accordion | `AnimatedAccordion` |
| Feature tabs | `AnimatedTabs` |

---

## Typography

### Go-to Free Fonts (Premium Quality)

| Font | Style | Source | Best for |
|------|-------|--------|----------|
| **Satoshi** | Geometric sans | fontshare.com | Modern SaaS, tech |
| **Cabinet Grotesk** | Varied weight sans | fontshare.com | Bold editorial |
| **Clash Display** | Display sans | fontshare.com | Big hero headlines |
| **General Sans** | Humanist sans | fontshare.com | Body text, balanced |
| **Fraunces** | Optical serif | Google Fonts | Luxury, editorial |
| **Cormorant Garamond** | Elegant serif | Google Fonts | High-end, luxury |
| **Playfair Display** | Dramatic serif | Google Fonts | Fashion, premium |
| **Space Grotesk** | Techy sans | Google Fonts | SaaS, startup |
| **Inter** | System-like sans | Google Fonts | UI, dashboards |
| **Space Mono** | Monospace | Google Fonts | Code, brutalist |

### Pairing Rules
- **Luxury:** Cormorant Garamond (headers) + General Sans (body)
- **Modern SaaS:** Satoshi or Inter (all weights, single family)
- **Editorial:** Clash Display (headlines) + General Sans (body)
- **Bold/Aggressive:** Cabinet Grotesk Bold + Space Grotesk
- **Techy/Dark:** Space Grotesk + Space Mono

### Size Scale
```
Hero:        80–160px  |  letter-spacing: -0.04em  |  line-height: 1.0
H2:          48–72px   |  letter-spacing: -0.02em  |  line-height: 1.1
H3:          32–40px   |  letter-spacing: -0.01em  |  line-height: 1.2
Body:        16–18px   |  letter-spacing:  0       |  line-height: 1.7
Small/Label: 12–14px   |  letter-spacing:  0.1em   |  line-height: 1.5
```

---

## Color Systems

### Dark Mode (Default Recommendation)
```
Background:      #0A0A0A  (not pure black — has depth)
Surface:         #111111
Border:          rgba(255,255,255,0.08)
Text primary:    #FFFFFF
Text secondary:  #A0A0A0
Text muted:      #555555
```

### Light Mode
```
Background:      #FAFAF8  (warm white)
Surface:         #F4F4F0
Border:          #E5E5E0
Text primary:    #1A1A1A
Text secondary:  #666666
Text muted:      #999999
```

### Accent Color Combos (Proven)
| Name | Primary | Secondary | Feel |
|------|---------|-----------|------|
| **Indigo/Violet** | #6366F1 | #8B5CF6 | Modern tech, AI |
| **Cyan/Blue** | #06B6D4 | #3B82F6 | SaaS, clean |
| **Fuchsia/Pink** | #EC4899 | #A21CAF | Bold, creative |
| **Amber/Orange** | #F59E0B | #EF4444 | Energy, startup |
| **Emerald/Teal** | #10B981 | #06B6D4 | Health, finance |
| **Rose/Pink** | #F43F5E | #EC4899 | Lifestyle, beauty |
| **Neutral** | #FFFFFF | #A0A0A0 | Minimal, luxury |

### Gradient Formulas
```css
/* Mesh gradient (hero backgrounds) */
background: radial-gradient(at 40% 20%, #6366F1 0%, transparent 50%),
            radial-gradient(at 80% 0%,  #EC4899 0%, transparent 50%),
            radial-gradient(at 0%  50%, #06B6D4 0%, transparent 50%);

/* Text gradient */
background: linear-gradient(135deg, #6366F1, #EC4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Card border glow */
background: linear-gradient(#111, #111) padding-box,
            linear-gradient(135deg, #6366F1, #EC4899) border-box;
border: 1px solid transparent;
```

---

## Palette Tools

| Tool | Use | URL |
|------|-----|-----|
| **Realtime Colors** | Preview palette on real UI | realtimecolors.com |
| **Huemint** | AI palette generation | huemint.com |
| **Coolors** | Quick palette combos | coolors.co |
| **Radix Colors** | Accessible, dark-mode scales | radix-ui.com/colors |
| **Tints.dev** | Generate shade scales | tints.dev |

---

## Logo & Brand Tools

| Tool | Use | Cost |
|------|-----|------|
| **Figma** | Full brand/logo design | Free tier |
| **SVGator** | Animate SVG logos | Free tier |
| **Vectorize.io** | Raster → clean SVG | Free |
| **Canva** | Quick brand assets (connected via MCP) | Connected |

---

## Inspiration Sources

| Source | What to find there |
|--------|--------------------|
| **Awwwards** | Award-winning sites, current trends |
| **Mobbin** | Real app UI patterns, searchable |
| **Land-book** | Landing page inspiration |
| **Dark Design** | Dark UI specifically |
| **Lookup.design** | Component/section patterns |
| **Layers.to** | Figma community UI kits |

---

## Design Prompts

See **[PROMPTS.md](./PROMPTS.md)** — 110+ prompts covering:
- 10 hero section patterns
- 10 typography effects
- 15 micro-interactions
- 12 scroll animation patterns
- 8 3D/WebGL scenes
- 10 layout components
- Full-page patterns: Linear, Vercel, Stripe, Basement Studio, Raycast

---

## Client Build Workflow

1. **Brief** → Identify aesthetic (luxury / SaaS / bold / minimal / editorial)
2. **Palette** → Pick accent combo from table above, set dark/light base
3. **Typography** → Pick pairing from table above, set scale
4. **Hero** → Pick prompt from PROMPTS.md (H-01 to H-10)
5. **Components** → Pull from library, compose sections
6. **Scroll** → Lenis active globally, add ScrollReveal/StickyScroll/RevealMask per section
7. **3D** → Add FloatingGeometry or ParticleField if budget/brief warrants it
8. **Polish** → CursorFollower, PageLoader, micro-interactions on CTAs
