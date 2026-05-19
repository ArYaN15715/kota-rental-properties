# Design Brief: KOTA RENTAL & PROPERTIES

## Purpose & Emotional Intent
Premium, high-conversion real estate platform positioning Kota Rental & Properties as the trusted local rental consultant. Emotional drivers: "safe hands", "fast property help", "verified support", "no confusion".

## Visual Direction
**Tone**: Premium luxury + local trust + modern SaaS. Minimal, clean, glassmorphic accents. Non-generic, locally-rooted, high-conversion focus.

**Differentiation**: Glassmorphism UI + verified property green accents + local area authority + WhatsApp-first lead generation. Feels like a modern property assistance platform, not an old-school broker office.

## Color Palette (OKLCH)
| Semantic Token | Light Mode | Dark Mode | Purpose |
|---|---|---|---|
| Primary (Navy) | oklch(0.25 0.1 258) | oklch(0.65 0.14 260) | Deep trust, main CTAs, verified badges |
| Secondary (Royal) | oklch(0.45 0.15 260) | oklch(0.72 0.18 258) | Hover states, active navigation, secondary CTAs |
| Accent (Gold) | oklch(0.75 0.18 68) | oklch(0.82 0.2 68) | Warm highlights, premium accents, trust markers |
| Success (Green) | oklch(0.72 0.18 142) | oklch(0.78 0.22 142) | Verified properties, trust badges |
| Background | oklch(0.98 0.01 240) | oklch(0.12 0.02 240) | Page background, soft gradient |
| Card | oklch(0.99 0.01 240) | oklch(0.18 0.02 240) | Property cards, modals, elevated surfaces |
| Foreground | oklch(0.15 0.02 240) | oklch(0.95 0.01 240) | Body text, high contrast |

## Typography
| Role | Font | Usage |
|---|---|---|
| Display | Space Grotesk Bold | Headlines, premium CTAs, hero messaging |
| Body | Inter Regular | Body copy, descriptions, labels |
| Mono | JetBrains Mono | Prices, property IDs (if needed), code blocks |

## Elevation & Depth
- **Card Shadows**: Soft, warm (8px blur @ 12% opacity) on hover; elevated to 24px for focus states
- **Glassmorphism**: Backdrop blur 20px + white/slate transparency (30%) + subtle border for navbar, overlay modals
- **Layering**: Hero gradient background > featured cards (elevated) > footer (muted surface)

## Structural Zones
| Zone | Surface | Purpose |
|---|---|---|
| Navbar | Glass-morphism, sticky | Logo, nav links, "Call Now" CTA; shrinks on scroll |
| Hero | Gradient bg (slate→blue→slate), full-width | Headline, subheading, trust badges, 2x CTAs (primary + WhatsApp) |
| Featured Properties | Card grid (2-3 cols responsive) | Property images, verified badge, price, location, quick amenities |
| Why Choose Us | 6-card grid with soft glow | Feature highlights (Verified, Expert, Fast, Student-Friendly, Transparent, Support) |
| Local Authority | Area cards + map section | Kota neighborhoods: Talwandi, Vigyan Nagar, Rajeev Gandhi Nagar, Nayapura |
| Social Proof | Testimonial carousel | Auto-scroll, 5-star ratings, glass-morphic cards |
| Footer | Muted surface + trust line | Contact info, quick links, WhatsApp CTA, maps embed |

## Component Patterns
- **Property Cards**: Image + verified badge (top-right) + price (bold gold) + location + amenities + "View" CTA
- **Feature Cards**: Icon + title + description + hover: subtle glow animation
- **CTAs**: Primary (navy bg, white text, gold hover glow) + Secondary (outlined, navy text, white bg)
- **Trust Badges**: Emerald bg + checkmark icon (text-xs, semibold)
- **Testimonial Cards**: Glass-morphism + 5 stars + quote + name + role

## Motion & Animation
- **Scroll Reveals**: Fade-in (0.5s ease-out) on section entry
- **Card Hover**: Lift 2px + shadow elevation + 0.3s smooth transition
- **Glow Pulse**: Soft blue glow pulsing (2s loop) on feature cards
- **Floating Elements**: Subtle Y-axis float (±8px, 3s ease-in-out) on hero property cards
- **Button Hover**: Shadow glow + 0.2s transition

## Constraints & Anti-patterns
- **No:** Generic broker feel, cluttered layouts, excessive animations, rainbow colors, flat design
- **Yes:** Premium spacing, verified-first messaging, local authority signals, mobile-app-like premium feel
- **Avoid:** Reusing generic blue (#3B82F6), default Tailwind shadows, centered-only layouts

## Signature Detail
Glassmorphism navbar + verified green accent on property cards + WhatsApp floating button = trust + modernity + local conversion focus. The entire design reinforces: "These people know Kota. These listings are verified. Contact them now."

## SEO & Content Zones
Headlines target: rental properties Kota | rooms for students Kota | PG near coaching | verified rentals Kota | student accommodation | best properties. Each section uses location-specific h2/h3 tags.

## Responsive & Dark Mode
- **Mobile-first**: Hero stacks; cards 1 col on mobile, 2-3 on tablet/desktop; sticky bottom WhatsApp CTA
- **Dark Mode**: Intentional (not inverted), maintains navy primary with elevated lightness (0.65L), warmer backgrounds (0.12L → 0.18L), preserved contrast ratios
