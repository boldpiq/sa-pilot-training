# World-Class Web Design Prompts

> 100+ detailed, proven design prompts derived from studying award-winning sites (Awwwards, CSS Design Awards, FWA). Each prompt is specific enough to produce production-grade output. Pick, combine, or modify.

---

## Hero Sections

### H-01 — Kinetic Type Hero (Basement Studio style)
Build a full-viewport hero section with kinetic typography as the sole visual element. Headline: 120–160px Inter ExtraBold, negative letter-spacing (-0.04em), pure white on black (#000). Each word reveals with a clip-path animation — mask slides from left over 600ms (cubic-bezier 0.76, 0, 0.24, 1), 80ms stagger between words. Subheading (20px, weight 400, #A0A0A0) fades in after the headline completes. CTA: ghost button with white border, text "Explore Work", hover fills white with black text in 200ms. No images, no gradients — typography IS the design.

### H-02 — Animated Gradient Hero (Vercel / Linear style)
Full-viewport hero with a morphing gradient background cycling through 4 colors: indigo #4F46E5 → violet #7C3AED → fuchsia #A21CAF → indigo, 30s loop with linear timing. Headline centered, 80px, Inter Bold, pure white, letter-spacing -0.03em. Stagger each letter in with translateY(40px) → 0 + opacity 0 → 1, 25ms delay per letter, 700ms duration, ease-out. Subheading (22px, #FFFFFF99) fades in 300ms after headline completes. Primary CTA: solid white button, black text, 8px radius, hover scale 1.04. Gradient subtly shifts direction on mouse move using cosine interpolation.

### H-03 — Split-Screen Hero (Lusion / Aristide Benoist style)
50/50 split viewport. Left: dark #0A0A0A background, headline 64px Cormorant Garamond Light, white, line-height 1.1. Subheading 18px light sans-serif below with 40px gap. Right: full-bleed portrait photography or abstract 3D render, slight parallax on scroll (moves at 60% speed). Thin 1px vertical divider between halves, animates in by growing from 0 to full height over 800ms on load. On mobile: stacked, image first (40vh), text below (60vh).

### H-04 — 3D Interactive Hero (Active Theory / Lusion)
Canvas-based Three.js hero. Floating distorted sphere (MeshDistortMaterial, color #6366F1, distort 0.5, speed 3) centered in viewport. Responds to mouse: rotates max ±15° on both axes with spring physics (stiffness 80, damping 20). Sparkles particle system around orb (60 particles, color #C084FC). Headline positioned bottom-left, 72px, white, slides up from translateY(60px) on load. Environment map: city preset. Alpha background for seamless integration. On mobile: static render, no mouse tracking.

### H-05 — Horizontal Reveal Hero (editorial)
Headline text in two halves: left half reveals with clip-path inset(0 100% 0 0 → 0 0 0 0) and right half with inset(0 0 0 100% → 0 0 0 0), both over 900ms, staggered 100ms apart, ease [0.76, 0, 0.24, 1]. Full headline size: 96px, Playfair Display Bold, tracking -0.02em, black on white. Below: a fine 1px horizontal line draws from center outward (scaleX 0 → 1 from center, 600ms, 200ms delay). Subheading fades after line completes. Purely typographic with one horizontal divider element.

### H-06 — Video Background Hero (cinematic)
100vh section. Background: full-bleed autoplay muted looping video (preferably cinematic/abstract), 70% dark overlay (black). Centered content: overline label (11px, 0.15em letter-spacing, uppercase, #FFFFFF80) fades in at 0ms. Headline (60px, white, Fraunces or editorial serif, line-height 1.1) slides up at 200ms. 32px body text (white, 0.8 opacity) at 500ms. CTA button at 800ms. Scroll indicator arrow at bottom bounces (translateY 0 → 8px → 0, infinite, 1.5s ease-in-out). Performance: preload video poster image.

### H-07 — Particle Hero (tsParticles)
Dark background #050510. Full-viewport particle field: 1500 particles, 1px size, color #6366F1 at 60% opacity, connected by lines when within 120px (0.3 opacity lines). Particles drift slowly (speed: 0.8). Mouse repels particles within 150px radius. Central headline: 80px Inter Bold, white, fades in after 400ms particle settle. Hero has no border with next section — particles continue subtly into it with fade-out opacity gradient at bottom.

### H-08 — Countdown / Bold Number Hero
Giant countdown or impactful number. Number: 400–600px, Inter ExtraBold, #000 on #FAFAFA, overflows intentionally off-screen edges. Counter increments from 0 → target (e.g. 2847 clients) over 2s on load using requestAnimationFrame with ease-out curve. Headline above: 16px, uppercase, 0.2em tracking. Subheading below: 24px, short value proposition. CTA: minimal text link with underline animation. Design uses the number as an artistic element.

### H-09 — Glassmorphism Hero
Layered depth: blurred abstract gradient background (three radial gradients, 60% opacity, colors: #6366F1, #EC4899, #06B6D4 on dark #0D0D0D base). Centered glass card (backdrop-filter blur(40px), background rgba(255,255,255,0.05), 1px border rgba(255,255,255,0.1), border-radius 24px). Inside card: headline 48px, white. Body: 16px #FFFFFF90. CTA pill button: white background, black text, 50px height, 16px radius. Card slides up on load from translateY(40px) over 600ms.

### H-10 — Scrolljack Intro (locomotive-style)
First 200vh is reserved for a sticky hero with scroll-driven narrative. Viewport stays locked on hero panel while scrolling reveals content in steps. Step 1 (0–33%): logo + tagline appear. Step 2 (33–66%): Feature 1 value prop fades in, first fades out. Step 3 (66–100%): CTA appears, all other text fades. After 200vh: normal page flow resumes with a cinematic slide-off transition. Uses framer-motion's useScroll + useTransform tied to scroll progress.

---

## Typography

### T-01 — Scramble Reveal Headline
Hero or section headline uses TextScramble component. On mount or intersection: each character cycles through random ASCII characters 3× before landing on correct character. Duration: 40ms per cycle × 3 cycles per character = 120ms per character. Total effect for 20-char headline: ~1.4 seconds. Trigger on scroll for below-fold headings. Color: accent color during scramble (#6366F1), settles to white. Easing: none (immediate, digital feel).

### T-02 — Variable Font Weight Animation
Headline using Inter variable font. On hover or scroll, font-weight animates from 300 → 900 → 600 using CSS transitions on `font-variation-settings`. Duration: 800ms cubic-bezier. Also animate letter-spacing from -0.04em → 0em simultaneously. Creates dramatic typographic transformation. Best used on large (80px+) headlines where weight change is visually impactful.

### T-03 — Staggered Word Reveal (3D flip)
TextReveal component: headline split word-by-word. Each word: starts at rotateX(-90deg) + opacity 0 (below the fold-axis). Animates to rotateX(0deg) + opacity 1, 500ms, ease [0.21, 0.47, 0.32, 0.98]. 80ms stagger between words. Perspective: 1000px on parent. Creates book-page-turn feel. Best for hero headlines and feature section openers.

### T-04 — Glitch Text on Hover
Text with CSS RGB-split glitch effect. On hover: ::before and ::after pseudo-elements (same text) with clip-path animation cycling through random Y positions (inset(0 0 90% 0), etc.). Color offsets: before = #FF006E shifted -3px X, after = #00F5FF shifted +3px X. Animation alternates every 50ms, plays for 600ms then settles. Perfect for dark-mode navigation items, CTA labels, or feature headings.

### T-05 — Morphing Text Carousel
MorphingText component: 4–6 words cycling in sequence. Current word blurs out (filter: blur(8px) + opacity: 0, 500ms), next word blurs in (blur(8px) → 0 + opacity 0 → 1, 500ms). Hold each word for 2000ms. SVG feGaussianBlur filter for cinematic blur quality. Words: brand values or features ("Fast", "Reliable", "Elegant", "Precise"). Headline around it static: "We build ___." Use in hero, stats sections.

### T-06 — Kinetic Counter Stats
Three stats side by side (e.g. "10,000+ Users", "99.9% Uptime", "48hr Support"). Each number counts up from 0 on scroll-into-view using easeOut curve over 1.5s. Numbers: 64px, Inter ExtraBold. Label: 14px, #A0A0A0 below. Use requestAnimationFrame, not setInterval, for smooth 60fps counting. Decimal support. Comma formatting for thousands. On mobile: stacked vertically.

### T-07 — Editorial Quote Pull
Full-width section with single large quote (48–72px, Cormorant Garamond Italic, line-height 1.3). Quote mark: oversized (160px, color #6366F1, opacity 0.3) positioned top-left of text block. Author below: 16px, weight 500, with horizontal rule above. Quote text reveals with mask animation (clip-path inset from bottom). Dark background #111, white text. No other design elements — the typography is the visual.

### T-08 — Overline → Headline → Body Stagger
Section opener pattern. Overline (12px, uppercase, 0.2em tracking, accent color) fades from opacity 0 + translateX(-20px) → full, 400ms. Headline (56px) slides up from translateY(30px) + opacity 0, 600ms, 100ms after overline. Body paragraph fades from opacity 0, 500ms, 200ms after headline. CTA slides up, 400ms, 300ms after body. Total choreography: ~1.2s. Trigger on scroll intersection (threshold 0.3). Repeat per section.

### T-09 — Marquee Text Divider
Section divider using VelocityMarquee. Repeating text "Award Winning · Since 2024 · World-Class ·" (and repeat). Base speed slow (80px/s). On scroll down: velocity multiplier 3–4× (fast). On scroll up: negative multiplier (reverses). 48px, all-caps, Inter Bold, 0.1em tracking. Two rows moving opposite directions for visual depth. Thin 1px borders above and below. Accent color or white on dark background.

### T-10 — Typeface Showcase Section
Full-bleed section showing the typeface at every weight. Font: Inter. Display weights 100–900 each as a row. Each row: weight number left (14px, #A0A0A0), sample text right (36px, "The quick brown fox"). Rows stagger in on scroll (50ms between). On hover each row: slight scale 1.02, brief highlight. Background #000, white text. Footer: "Typography powered by [Font Name]". Purely aesthetic but signals design craft.

---

## Micro-Interactions

### M-01 — Magnetic CTA Button
MagneticButton wrapping primary CTA. Button follows cursor with spring physics (stiffness 400, damping 30) within 80px orbit radius. Button text also magnetically shifts (inner text moves at 30% of button movement). On hover: button scale 1.05, box-shadow expands from 0 to `0 20px 60px rgba(99,102,241,0.4)`. Pill shape: 56px height, 140px min-width, 28px radius. Label: "Get Started →" with arrow that moves right 4px on hover.

### M-02 — Liquid Hover Button
LiquidButton: dark background button. On hover: liquid blob expands from cursor position — radial gradient blob grows from 0% to 200% radius. Blob color: accent #6366F1 at 60% opacity. Button text color transitions white → black if blob covers it (mix-blend-mode). On hover exit: blob shrinks back to cursor position. Duration: 600ms, ease [0.25, 0.46, 0.45, 0.94]. Great for primary CTAs.

### M-03 — Shimmer Card Hover
Card component with shimmer border on hover. Border: 1px solid transparent with background-clip: border-box. On hover: rotating conic gradient (0deg → 360deg, 2s linear infinite) creates rainbow/shimmer border effect. Card background: #0F0F0F. Shadow: 0 0 40px rgba(99,102,241,0.15). Content inside: padding 32px. Corners: 16px radius. Shimmer intensity increases on focus for accessibility.

### M-04 — 3D Tilt Card with Glare
TiltCard component. On mouse enter: card rotates ±12° on both X and Y axes, perspective 1000px. Glare layer: white gradient that follows mouse position (appears on the opposite side of mouse). Box-shadow shifts direction based on tilt. On leave: spring-back to flat (stiffness 200, damping 20). Best on feature cards, portfolio items, testimonial cards. Add subtle scale 1.02 on hover.

### M-05 — Ripple Click Effect
RippleButton: on click, circular ripple expands from exact click position. Ripple: white at 30% opacity, 2px → 200px diameter, opacity 30% → 0%, duration 600ms. Multiple ripples can stack from rapid clicks. All ripples clean up after animation completes. Works on any clickable element — buttons, cards, nav items. Subtle enough to not distract from content.

### M-06 — Cursor Follower (mix-blend-mode)
CursorFollower: 24px circle, white, mix-blend-mode: difference. Follows cursor with 80ms lag (spring stiffness 300, damping 30). On hover over text/links: expands to 64px. On hover over buttons: transforms to border-only circle (2px stroke, no fill). On media: hides cursor and shows "View" label inside expanded circle. Cursor dot disappears when leaving browser window. Hide default cursor on desktop only.

### M-07 — Hover Image Reveal on Nav
Navigation link: on hover, a small image (200×130px, 12px radius) appears positioned above the link, fades in with scale 0.8 → 1 + opacity 0 → 1 over 300ms. Image shows a preview of the target section/page. Follows mouse X position slightly for parallax. On leave: reverse animation 200ms. Works for services nav, portfolio items, case study links. Creates "Awwwards portfolio" feel.

### M-08 — Magnetic Text Characters
MagneticText: headline or navigation where each individual character is a separate span. On mouse proximity (within 60px): each character repels from cursor with spring physics (stiffness 200, damping 15). Characters return to origin on cursor exit. Max displacement: 20px. Creates undulating wave as cursor moves across text. Use on bold navigation items or hero taglines.

### M-09 — Stagger Hover Grid
Grid of items (services, features, logos). On hover of any item: hovered item stays at full opacity, all siblings reduce to 30% opacity simultaneously (transition 300ms). On leave: all return to full opacity 300ms. Creates elegant focus effect. Cursor on hovered item: scale 1.03, shadow. Clean, refined, used by Stripe and Linear for feature grids.

### M-10 — Interactive Toggle Switch
AnimatedToggle: spring-physics switch. Knob springs from left to right (stiffness 500, damping 30) on click. Track color morphs from #D1D5DB → #6366F1 in 200ms. On enable: subtle scale bounce 1.0 → 1.1 → 1.0 on the knob. Optional label: "Monthly / Annual" for pricing sections. Size variants: sm (32×18px), md (44×24px), lg (56×32px).

### M-11 — Number Incrementer Button
+/- quantity selector. Plus button: on click, number slides out upward (translateY(-20px) + opacity 0) and new number slides in from below (translateY(20px) → 0), 300ms spring. Minus button: opposite direction. Number uses AnimatePresence with mode="wait". Haptic-style: button briefly scales to 0.95 on click. Works for cart, pricing configurators, seats selectors.

### M-12 — Underline Draw-In Link
Navigation and inline links. Default: no underline. On hover: underline draws from left (scaleX 0 → 1, transformOrigin left, 300ms ease-out). On leave: erases from left (transformOrigin right, 250ms ease-in). Underline: 1px or 2px, accent color or white (depending on theme). Optionally: slight translateY(-1px) on the text simultaneously. Used on nav links at Vercel, Linear.

### M-13 — Accordion with Spring Height
AnimatedAccordion: height animates with spring physics (stiffness 300, damping 35) not CSS transition. Item open: rotates + icon from 0° to 45°. Content area: clip with overflow hidden, height 0 → auto. Multiple items: close previous when new opens (single-open mode). Divider lines between items: 1px, #E5E7EB (light) or #2A2A2A (dark). Open item: title turns accent color.

### M-14 — Tab Indicator (Framer Layout)
AnimatedTabs: shared layout animation for active tab indicator. Indicator: background pill under active tab, moves fluidly with spring physics as selection changes. Tabs: min-width 80px, 44px height, 8px radius. Active text: accent color or dark on light indicator. Content area: directional animation (slides left/right based on tab order, 300ms spring). Works for pricing tiers, feature comparisons.

### M-15 — Floating Action Menu
FAB button in bottom-right. On hover/click: 3–5 action items radiate out in an arc (fan pattern). Each item: circular button, 48px, icon-only, tooltip on hover. Arc: 180° semi-circle, items spaced 52px apart. Spring-in animation per item with 60ms stagger. Backdrop: subtle blur appears. On close: spring-back in reverse stagger. Perfect for persistent utility menus.

---

## Scroll Animations

### S-01 — Clip-Path Section Reveal
Section heading with RevealMask (direction: "ttb"). As section enters viewport, clip-path animates from inset(0 0 100% 0) → inset(0 0 0% 0) over the scroll range "start 80%" to "start 30%". The text reveals from top to bottom as user scrolls. Pair with a hero image using "ltr" direction for complementary reveal. The reveal tied directly to scroll position — not a one-shot animation.

### S-02 — Sticky Feature Showcase (Linear style)
StickyScroll component with 4 features. Left panel (sticky, 60vh): shows animated illustration or screenshot per active feature. Right column: 4 scroll-through panels, each 80vh tall. Active feature = text at full opacity (1.0), inactive = 0.3 opacity. Transition: 300ms ease. Left panel image crossfades (opacity 0 → 1, 400ms) when active feature changes. Features: icon + title (28px) + description (16px, 1.8 line-height).

### S-03 — Scroll-Driven Counter (percentage)
Section with large percentage numbers (e.g. "94%", "3.2×", "50K+"). Each number: scroll-linked from 0 to target value. Uses useScroll on the section and useTransform to map scroll progress 0→1 to value 0→target. Rounds to integer or one decimal. 64px, Inter ExtraBold. Label below: 14px, #A0A0A0. Motivating stats section — numbers grow as you scroll through, not just on enter.

### S-04 — Horizontal Scroll Section (storytelling)
HorizontalScroll: 4–6 panels, each 100vw. Vertically scrolled wrapper maps to horizontal translation. Each panel: full-viewport card with large visual. Content reveals inside each panel when it reaches center (opacity + scale animation). Scroll progress bar at bottom shows position (thin accent line grows left-to-right). Last panel: strong CTA. Panel transitions: smooth, no snap (continuous scroll).

### S-05 — Velocity Marquee
VelocityMarquee: dual-row marquee, rows moving opposite directions. Content: client logos + separator dots. Speed: 60px/s base. Scroll down: velocity multiplies to 200px/s. Scroll up: reverses direction. Pause on hover. Uses spring damping so speed changes feel physical. Height: 80px rows, 20px gap between. Logos: grayscale at 60%, hover = full color.

### S-06 — Parallax Card Stack
4 cards stacked with different parallax rates. Card 1 (bottom): moves at 15% of scroll speed. Card 2: 25%. Card 3: 40%. Card 4 (top): 60%. Creates depth as user scrolls — cards peel apart. Each card: 100% width, 500px height, border-radius 20px, dark background, content centered. Start positions offset so stack looks neat at page-load position. Scroll-linked using useScroll + useTransform.

### S-07 — SVG Path Drawing on Scroll
Full-width SVG (e.g. wavy line, connecting dots, or timeline path). stroke-dasharray = total path length. stroke-dashoffset maps from total length → 0 based on scroll progress (section occupying 200vh). Line draws itself exactly as user scrolls. 2px stroke, accent color. Behind the path: content nodes (circles at junctions) fade in as path reaches them. Visual: roadmap, timeline, or process flow.

### S-08 — Scroll Timeline Steps
ScrollTimeline: 5-step process. Each step has a large step number (120px, color 10% opacity), title (32px), and body (16px, 1.8 line-height). Vertical dashed line connecting steps (left side). Active step: highlighted with accent color, step number goes to 100% opacity. Steps activate based on scroll position. On desktop: alternate left-right positioning. On mobile: single column.

### S-09 — Image Scale on Scroll
Hero or feature image: starts at scale(1.1) and reduces to scale(1.0) as section scrolls into view (scale 1.1 → 1.0 mapped to scroll progress 0 → 0.5). Creates cinematic "zoom settle" effect. Optionally: slight desaturate (filter: saturate(0.5)) → saturate(1) simultaneously. Overflow: hidden on parent to contain scale. Pairs beautifully with text that fades in over the image.

### S-10 — Sticky Logo Grid (client logos)
Logo section: single row visible on desktop. On scroll through section (section is 300vh tall, sticky inner), logos fade in one by one with 200ms stagger. After all 8 logos are visible, they organize into a 4×2 grid. Grid formation is animated (each logo translates to its grid position). After grid forms, a stat counter appears below. Cinematic reveal of social proof.

### S-11 — Scroll-Linked Color Theme Shift
Background and text colors change based on scroll position. Section 1: dark (#000, white text). Section 2: indigo (#1E1B4B, light text). Section 3: white (#FFF, dark text). Section 4: black again. Transitions: smooth color lerp over 40vh of scroll range. Uses useScroll + useTransform with backgroundColor interpolation. No jarring jumps — smooth cinematic journey through the page.

### S-12 — Photo Reveal on Scroll (clip-path)
RevealMask wrapping a feature image. Direction: "btt" (bottom-to-top reveal). As image scrolls into viewport, clip-path animates from inset(100% 0 0 0) → inset(0 0 0 0) scroll-linked. The "wipe" reveals bottom-to-top giving sense of the image rising. Pair with text on the side that reveals simultaneously in "ltr" direction. Creates coordinated editorial reveal.

---

## 3D and WebGL

### W-01 — Distorted Sphere Product Visual
FloatingGeometry: sphere shape, color matching brand (#6366F1). distort=0.5, speed=1.5 for organic, liquid-like movement. Placed right-side on split-screen layout (60% visual, 40% text). Environment: city HDRI for realistic reflections. ambient + directional + point lights for volumetric feel. MeshDistortMaterial with metalness 0.8, roughness 0.1 for premium finish. Mouse interactivity: slight rotation tracking on desktop.

### W-02 — Wireframe Wave Background
WavePlane: wireframe=true, color=#6366F1, segments=100. Camera top-down perspective looking at the undulating grid. Wave amplitude 0.4, speed 0.8 (slow, meditative). Place as full-screen canvas background. Overlay page content on top. Opacity: canvas at 40% to not overwhelm. Responsive: reduce segment count to 40 on mobile for performance. Creates geometric/tech aesthetic.

### W-03 — Particle Constellation
ParticleField: 3000 particles, 0.012 size, color #C084FC, spread=8. Connected lines between nearby particles (within 100px distance, 0.2 opacity). Mouse interaction: particles within 200px radius gently flow toward cursor. Rotation speed: 0.08 (very slow). Overlay: radial gradient from transparent to #050510 at edges (vignette). Perfect full-screen hero background for dark tech/AI products.

### W-04 — Torus Knot Loader
Three.js torus knot (TorusKnotGeometry, 0.8, 0.3, 200, 20). MeshStandardMaterial, color #818CF8. Rotates on X and Y axes. On page load: appears as a loader/transition element, fills screen, then shrinks to logo size (scale 3→0.2) as content appears. 1.5s animation, ease-in-out. After content loads: persists as small decorative element in corner or header. Premium "we sweat the details" signal.

### W-05 — Interactive Globe
Three.js sphere with globe map texture (or wireframe latitude/longitude lines). Country dots highlight on hover (using raycasting). Slow auto-rotation (0.003 rad/s). Click country: camera zooms to region, label appears. For: "We serve X countries", client maps, distribution demos. Stars particle field behind globe for space feel. Earth glow effect: bloom pass or emissive ring mesh.

### W-06 — 3D Product Showcase
OrbitControls enabled: user can drag to rotate product 360°. Product mesh loaded from glTF/glb file. Turntable auto-rotation on load (stops when user interacts). Features labeled: dotted lines from mesh points to UI labels. Labels: white, 12px, appear/fade with camera angle. CTA below canvas: "Customize" | "Buy Now". Premium for physical product sites.

### W-07 — Floating Text in 3D Space
Three.js Text component (troika-three-text or @react-three/drei Text). Multiple words floating in 3D at different Z depths. Camera moves forward slowly (z: 100 → 0 over 8 seconds). Words pass by camera creating depth-of-field cinematic sequence. Words: brand adjectives or feature names. 3D collision: words rotate independently, no overlap. Creates immersive opening sequence.

### W-08 — Glow Orb with Particles
GlowOrb component: distorted sphere center, sparkles around it, outer glow rings. Colors: primaryColor=#818CF8, secondaryColor=#C084FC. Point lights colored to match for environmental glow on surroundings. Used as: section divider, loading screen centerpiece, "AI brain" visualization. Optionally: orb reacts to audio input (mic) for interactive demos.

---

## Layout Components

### L-01 — Bento Grid (Raycast / Linear style)
CSS Grid layout: mixed cell sizes. 12-column grid, rows of equal height (220px). Card 1: spans 8 cols (large feature). Card 2: spans 4 cols. Cards 3+4: each 6 cols. Cards 5+6+7: 4+4+4 cols. Each card: dark background #111, 16px radius, 32px padding, 1px border rgba(255,255,255,0.08). On hover: border brightens to rgba(255,255,255,0.2), shadow appears. Cards stagger-animate in on scroll (50ms stagger, translateY(20px) → 0 + opacity).

### L-02 — Masonry Gallery
Pinterest-style masonry layout using CSS columns (3 cols desktop, 2 tablet, 1 mobile). Images: varied heights, 8px gap. Each image: hover reveals overlay (dark 60% + image title + link arrow). Image loads: fade-in from opacity 0 over 400ms. Lazy loading: IntersectionObserver based. On click: full-screen lightbox with prev/next navigation. Used for: portfolio grids, inspiration boards.

### L-03 — Case Study Card Grid
Large cards (400px height, 100% width on mobile, 48% desktop). Card: full-bleed background image, gradient overlay from transparent → dark bottom 40%. White text overlaid bottom-left. Tags: small pill badges top-right (white bg, dark text, 4px radius). On hover: image scale 1.05 (overflow hidden on parent), overlay darkens from 50% → 70%, "View Case Study →" slides up from bottom (translateY(20px) → 0). 300ms all effects.

### L-04 — Feature Comparison Table
3-tier comparison: Starter / Pro / Enterprise. Columns equal width. Row striping: alternating #F9FAFB / #FFFFFF (light) or #111 / #0A0A0A (dark). Header row sticky (position: sticky, top: 0). Checkmark: animated SVG check (path draws in 300ms on scroll). Cross: simple × icon. Popular tier: highlight with #6366F1 header row, top badge "Most Popular". Mobile: swipe between plans (tabbed interface).

### L-05 — Testimonial Wall (staggered cards)
Full-width section with 3-column masonry testimonials. Cards: white on dark, 24px radius, 32px padding. Each quote: 14–16px, 1.6 line-height, italic. Author: row with 48px avatar (circle), name bold, title small. Cards appear with stagger-in on scroll (60ms between). On hover: slight lift (translateY(-4px), shadow increase). Auto-cycling highlight: one card glows with accent border per 3 seconds.

### L-06 — Timeline (vertical, scroll-driven)
ScrollTimeline: 5 milestones. Left: vertical line (1px, #2A2A2A). Connector dots: 12px circles at each milestone. Active = accent filled, inactive = outline. As user scrolls: line draws from top (stroke-dashoffset animation). Content right: year (14px, accent), event title (28px), description (16px). Alternating left/right content on desktop. Mobile: single column. Year numbers slide in from right.

### L-07 — Pricing Toggle (Annual/Monthly)
AnimatedTabs wrapping two price sets. Toggle: pill shape, slides between "Monthly" / "Annual" with spring-physics indicator. Annual: show savings badge "Save 20%" appears with scale-in animation. Price number: AnimatePresence, numbers slide up/down when switching. Confetti micro-burst when selecting Annual. CTA buttons per plan: stagger-scale in on toggle change.

### L-08 — Fullscreen Menu Overlay
Hamburger → fullscreen nav. On open: dark overlay (rgba 0.98) expands from top-left corner (clip-path: circle(0% at top left) → circle(150%)). Nav links: 72px, stagger-in with 60ms delay, slide from translateX(-40px). Close button: × rotates in. Social links at bottom. Menu link hover: scramble text effect (TextScramble). Current page indicator: accent dot left of link. Close on ESC key.

### L-09 — Floating Navigation (blur-bg)
Fixed header: on scroll past 80px, background transitions from transparent to backdrop-filter: blur(20px) + rgba(0,0,0,0.6). Logo left, nav center, CTA right. Nav links: underline-draw-in on hover. CTA: solid accent button, 40px height. Mobile: hamburger opens drawer from right (80vw, full height, spring slide-in). Drawer: stacked links, 24px, with section icons. Active route highlighted with accent left border.

### L-10 — Step-by-Step Process Section
4-step process with large step numbers (1, 2, 3, 4 in 200px, opacity 5%). Each step: numbered, title (32px), description (16px), optional illustration. Steps laid out in 2×2 grid on desktop, vertical on mobile. Connecting arrows between steps: SVG curved arrows, animate on scroll intersection. Active step (nearest to center of viewport): gets highlighted border/glow. Scroll drives step activation.

---

## Color and Visual

### V-01 — Dark Mode with Accent Gradient
Primary palette: background #0A0A0A, text #FFFFFF, secondary text #A0A0A0. Accent: gradient #6366F1 → #8B5CF6. Applied to: CTA buttons, active states, borders, underlines, step numbers. Gradient on text: `background-clip: text; -webkit-text-fill-color: transparent`. Section dividers: 1px gradient lines (accent gradient, horizontal). Avoid pure black backgrounds — use #0A0A0A or #0F0F13 for depth.

### V-02 — Warm Minimal (Craft / luxury editorial)
Background #FAFAF8 (warm white). Text #1A1A1A. Accent: terracotta #D97559 or warm gold #C9A84C. Section breaks: 120px padding. Typography: Cormorant Garamond headers, Inter body. Images: warm-toned photography. Borders: 1px #E8E0D5 (warm gray). Hover states: backgroundColor #F0E8E0. CTA: solid terracotta button, white text, 4px radius (not pill — more refined).

### V-03 — High-Contrast Brutalist
Background: pure white #FFFFFF. Text: pure black #000000. Single accent: electric red #FF0000 or yellow #FFDD00. No gradients. No rounded corners (0px radius everywhere). Typography: Inter Black or Space Mono. Borders: 2–3px solid black on all interactive elements. Hover: black/white inversion (background #000, text #FFF). Padding: generous but rigid. No animations except purposeful transitions (200ms step() timing function for digital feel).

### V-04 — Neon on Dark
Background: #050510 (near-black with slight blue tint). Neon accents: cyan #00F5FF + magenta #FF006E. Glow effects: text-shadow, box-shadow with neon colors (spread: 0, blur: 20px, color: accent). Typography: Inter or IBM Plex Mono for tech feel. Section headings: neon gradient text. Cards: dark bg #0D0D20, neon border-glow on hover. Particle field background. CTAs: neon outline button with glow on hover.

### V-05 — Gradient-Mesh Background
Full-page gradient mesh: 5 radial gradients overlapping. Colors: #6366F1 (top-left), #EC4899 (top-right), #06B6D4 (bottom-left), #8B5CF6 (center), #F59E0B (bottom-right). Each gradient: 600px radius, 60% opacity. Background color: #0D0D0D. Mesh animates slowly: each gradient point moves in slow sine-wave motion (10–20s period). White text on top. Creates sophisticated, modern AI-company aesthetic.

### V-06 — Monochromatic Indigo
Single hue: indigo. Background: #1E1B4B (darkest). Sections: #2D2A5E, #3730A3, #4338CA. Text: #E0E7FF (lightest tint). Accent: #818CF8 (lighter tint for CTAs). Borders: #4338CA. Typography: all Inter. Creates unified, distinctive brand feel. No accent color needed — hierarchy purely through shade. CTA: solid #818CF8 button on darkest background = strong contrast within monochromatic system.

### V-07 — Y2K Gradient Revival
Background: white #FFFFFF. Bold gradients: hot pink #FF69B4 → orange #FF8C00 on large headline text. Secondary: lime #32CD32 → cyan #00CED1 on feature highlights. Shapes: circular blobs, star bursts (CSS clip-path polygon). Typography: rounded, playful — Poppins Bold or Nunito ExtraBold. Hover: color-shift animations. Borders: thick (3px), hot pink. Design: joyful, high-energy, Y2K nostalgia.

---

## Page Transitions

### P-01 — Diagonal Wipe Transition
Between page loads: curtain appears from bottom-left corner, sweeps to top-right (clip-path polygon animates). Curtain: solid brand color (#6366F1). Duration: 400ms in, page swap, 400ms out. Gives site cinematic feel. Implement with AnimatePresence + layout-aware routing. On mobile: simplify to vertical wipe (performance).

### P-02 — Scale + Blur Transition
Exiting page: scale to 1.04 + blur(8px) + opacity 0 over 300ms. Entering page: scale from 0.96 + blur(8px) + opacity 0 → 1 over 300ms, 50ms delay. Creates depth-shift transition as if camera refocusing. Used by Framer, Apple, Linear. Subtle — doesn't distract from content.

### P-03 — Numbered Page Counter Loader
On route change: full-screen overlay shows page number counting (e.g. "02 →") then reveals. Count: large number (200px, ExtraBold), animates from previous to next number with vertical scroll. Background: brand dark color. Duration: 600ms total. Fades out to reveal new page. Creates strong brand identity in transitions.

### P-04 — Curtain Reveal
PageLoader component: initial page load. Full-screen black overlay with centered counter (0–100%, large number). Progress tied to actual asset loading (Promise.all on critical resources). After 100%: overlay slides up (translateY(0 → -100%), 600ms ease [0.76, 0, 0.24, 1]). Page content underneath is already rendered. Smooth, professional, premium feel.

---

## Cursor

### C-01 — Expanding Cursor on Hover
Default: 12px circle, dark, mix-blend-mode: difference. On interactive element hover: circle expands to 64px, becomes border-only (background: transparent, border: 2px accent). On text hover: collapses to 4px. Transition: 200ms spring. On click: brief shrink to 8px (100ms) then spring back. Custom text inside expanded cursor for video elements: "Play" or "View".

### C-02 — Cursor Trail
10 trailing dots follow cursor with increasing delay (each dot: 20ms more lag than previous). Dots: 6px → 2px gradient sizing (front to back). Color: gradient from accent at front to transparent at back. Create with array of motion values or element cloning. Performance: RAF-based, not setInterval. On mobile: disabled (no cursor).

### C-03 — Magnetic Cursor (button only)
Cursor behaves normally everywhere except over buttons. On button hover: cursor "locks" to button center with spring physics (cursor snaps to button center offset from actual position). Button itself also moves toward cursor (MagneticButton). Combined: button and cursor meet halfway. Release: both spring back. Stiffness 400, damping 25. Highly distinctive, awards-level polish.

---

## Loading States

### LD-01 — Progress Bar (page load)
ProgressBar component at top of page. On route change: bar immediately appears at 20%, slowly grows to 85% (3s ease-out), then snaps to 100% and fades out on complete. Indeterminate mode: shimmer bar slides left-to-right continuously. Color: accent. Height: 3px. Z-index: above all content. No label needed.

### LD-02 — Skeleton Screens
SkeletonCard: before content loads, show animated skeleton. Layout matches actual content structure. Shimmer: white highlight slides across gray shapes (1.6s loop, linear). On content load: AnimatePresence fades skeleton out, content fades in (crossfade 400ms). Gives perceived performance boost — users see structure immediately.

### LD-03 — Logo Preloader
On initial site load: centered logo (SVG) draws itself (stroke animation, 1.5s). Scale: small → full size over 500ms. Then: logo blurs and fades (blur(0) → blur(20px), opacity 1 → 0, 400ms). Page content appears behind it. Elegant, brand-forward. Works best when logo has an interesting SVG path structure.

---

## Patterns from Specific Award-Winning Sites

### SITE-01 — Linear.app Full Page Pattern
Background: #000000. Sections: 160px padding top/bottom. Hero: Animated gradient mesh background + centered headline (80px, Inter Bold, white, -0.04em tracking). Navigation: fixed, transparent → blur(20px) on scroll. Feature sections: HorizontalScroll with snap. Stats: 3-column count-up row. Pricing: Comparison table with feature rows. Footer: minimal, 4-column links, dark.

### SITE-02 — Vercel-Inspired Product Site
Hero: Full-screen cinematic video background (muted, autoplay). Overlay: dark 60%. Centered content stack. Command palette demo: animated terminal window showing commands typing. Feature grid: 3-column, cards with code snippets. Testimonials: Logo grid (clients) + 3-card rotating carousel. CTA section: full-width gradient background, large headline, two CTAs.

### SITE-03 — Stripe-Style FinTech Layout
Split alternating sections: image left/text right then text left/image right. Section height: 80vh each. Large imagery: 600px+ wide, high-quality. Typography: Mix of serif (feature callouts) + sans (body). Color: navy #0A2540 sections alternating with white. Trust signals: Security badges, compliance logos in dedicated strip. Pricing: Prominent, honest, transparent.

### SITE-04 — Basement Studio Portfolio
Homepage: Single large title (60vw width, 160px). Project grid: Large thumbnails, title overlay on hover (slides up). Each project page: Full-screen case study with horizontal scroll. Background: pitch black. Typography: only Sans-serif, max 2 weights. Navigation: minimal, top-right, white. No hero images — the work IS the hero.

### SITE-05 — Raycast Dark Glass
Dark background #1A1A2E. Bento grid layout: mixed card sizes. Cards: glassmorphism (backdrop-filter blur(20px), rgba(255,255,255,0.03) background, 1px border rgba(255,255,255,0.08)). Feature cards contain animated app screenshots. Gradient glow behind key cards (accent color radial gradient, 30% opacity). Typography: SF Pro or Inter, light weights. Keyboard shortcut badges in UI.

---

## Bonus: Prompt Templates

### PT-01 — Custom Hero Generator
"Build a [AESTHETIC] hero section for a [INDUSTRY] company. Headline: [FONT], [SIZE]px, [COLOR], '[HEADLINE TEXT]'. Background: [DESCRIPTION]. Animation: [ANIMATION TYPE] over [DURATION]ms with [EASING]. Interactive element: [DESCRIPTION]. CTA: '[BUTTON TEXT]', [STYLE]. Mobile: [MOBILE ADAPTATION]."

### PT-02 — Section Opener Pattern
"Create a section opener with: Overline: '[TEXT]', 12px, uppercase, [ACCENT COLOR], fade-in 400ms. Headline: '[TEXT]', [SIZE]px, [FONT], slide-up 600ms (100ms delay). Body: '[TEXT]', 16px, [COLOR], fade-in 500ms (200ms delay). All triggered at intersection threshold 0.3. Stagger: 100ms between each element."

### PT-03 — Card Component
"Design a [TYPE] card with: Size [WIDTH]×[HEIGHT]px. Background: [COLOR]. Border: 1px [COLOR]. Radius: [PX]px. Padding: [PX]px. Content: [DESCRIPTION]. Hover state: [DESCRIPTION], [DURATION]ms, [EASING]. Shadow: [DESCRIPTION]."

---

*Last updated: 2026 — sourced from Awwwards SOTD, CSS Design Awards, FWA, and direct analysis of Linear, Vercel, Stripe, Lusion, Basement Studio, Active Theory, Aristide Benoist, Resend, Raycast, Craft.*
