
# Megaton Seguros — Design System

Megaton Seguros is a consultative insurance brokerage (corretora) based in São Paulo, 20+ years in market, serving individuals, SMEs, and large companies. Core lines: health & dental plans, medical malpractice (RC médico), life, home, auto insurance. Differentiator: a physician on the ownership team who guides technical/regulatory decisions. Site: megatonseguros.com.br · LinkedIn: linkedin.com/company/megaton-seguros · Instagram: @megatonseguros

**Positioning:** Tecnologia + Consultoria + Atendimento Humano + Inteligência Artificial. "A Megaton não vende seguros. Ela vende tranquilidade através de inteligência." Brand archetypes: Sábio (primary), Cuidador (secondary), Criador (third). Sophistication level: premium-accessible, SaaS-like — think HubSpot/Notion/Stripe/Linear/Asana applied to insurance, never "banco" or legacy-insurer stiffness.

## Sources
- `uploads/Logo Megaton.png` — official logo (copied to `assets/logo-megaton.png`).
- `uploads/ChatGPT Image 29 de jul. de 2026, 10_16_19.png` — AI-generated visual reference sheet showing an intended direction (colors, type, components, sample applications). Used as a directional reference for building this **original** system — not copied pixel-for-pixel, per the client's own brief ("não copiar nenhuma das referências, mas utilizar a linguagem visual delas").
- Full written brand brief pasted by the user (positioning, DNA, palette, type, components, do's/don'ts) — this readme operationalizes that brief into tokens, CSS, and components.
- No Figma file or codebase was attached; no production website/app source exists yet. All components and UI kits here are originated from the brief + reference image, not reverse-engineered from an existing product.

## Index
- `styles.css` — root stylesheet (imports below); `tokens/` — colors, typography, spacing/radius/shadow, fonts.
- `assets/logo-megaton.png` — official logo.
- `components/core/` — Button, Badge. `components/forms/` — Input, Select. `components/feedback/` — Card, Alert, Avatar.
- `ui_kits/site/` — marketing site recreation (Hero, ProductGrid, Testimonial, Footer, `index.html`).
- `ui_kits/client-portal/` — client-area dashboard (sidebar, stat cards, policy list).
- `ui_kits/whatsapp/` — WhatsApp business-card style message mock.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadows, logo).
- `SKILL.md` — portable skill file for Claude Code / other agent environments.
- `thumbnail.html` — project tile for the homepage.

## Content fundamentals
- **Voice:** consultative expert, warm but efficient — "entendemos profundamente o assunto e usamos esse conhecimento para proteger pessoas." Never bureaucratic, never salesy-hype.
- **Person:** speaks directly to the reader informally as "você" (not formal "o senhor/a senhora"), e.g. *"Inteligência que protege o que realmente importa."*, *"Tecnologia, consultoria e atendimento humano para oferecer as melhores soluções em seguros para você, sua família e sua empresa."*
- **Headlines:** short, declarative, two-part with a bold/colored second clause for emphasis (e.g. **Seguro inteligente.** / Para pessoas inteligentes.). Sentence case, not title case. Periods after short declarative fragments, used almost like a stamp.
- **Body copy:** plain-language, short sentences, no jargon walls, no dense paragraphs — brief supporting lines under headlines (1–2 sentences max).
- **CTAs:** action + benefit, always visible, capsule buttons: "Cotação agora", "Falar no WhatsApp", "Saiba mais".
- **Numbers/proof:** used sparingly — years in business, response times — never dashboards of vanity stats.
- **Emoji:** not used in UI copy or components. The brief's category icon list uses emoji only as shorthand in planning docs — actual product icons are outline line-icons (Lucide-style), never emoji glyphs.
- **Avoid:** bureaucratic tone, wall-of-text disclaimers, insurance jargon, multiple button styles on one screen, more than a small accent of red per screen.

## Visual foundations
- **Color:** Megaton Red `#D94167` is the institutional accent — logo, primary buttons, links, highlighted words in headlines. Used sparingly (accent, not fill). Graphite `#4C4C55` carries text/headings/menus. Tech blue `#2563EB` is the secondary "intelligence" color — used for focus states, AI-related features, secondary highlights — and can coexist with red on one screen but not compete for the same emphasis. Green/orange/red-crimson are semantic only (success/warning/error), never decorative. Background is white or `--gray-50` (#F4F5F7); at most one background tint per screen alongside white.
- **Type:** Display/headings in Plus Jakarta Sans (ExtraBold 800 for H1/H2, Bold 700 for H3/H4). Body/UI text in Manrope (400/500/600). Large type is a core brand signal — H1 64px/72px line-height, generous whitespace around it. No third typeface.
- **Backgrounds:** flat white or light-gray fields, no photography-as-background patterns except the hero (right-aligned humanized photo bleeding to the edge, layered over a soft red diagonal wedge — see reference image). No repeating textures. Discrete geometric accents only (thin curves, soft translucent circles) — never busy patterns, never gradients as a dominant device (used only as *very* subtle two-stop washes, e.g. a faint red→white diagonal behind hero photography).
- **Imagery:** humanized, candid — people mid-conversation, reviewing a laptop/tablet, signing a document, real families/professionals. Bright, natural light, low contrast, no posed stock-photo stiffness, no vintage/yellow-toned stock. Never illustrated people, never clipart.
- **Icons:** outline-only, ~2px stroke, Lucide-style (see Iconography section). Never filled, never colored-mixed, never emoji as UI icons.
- **Radius:** 16px default, 24px for large cards, 999px (capsule) for buttons/tags, 14px for inputs. Consistent — never mix radius scales on one screen.
- **Shadows:** always very soft — sm `0 2px 8px rgba(0,0,0,.04)`, md `0 8px 24px rgba(0,0,0,.06)`, lg `0 16px 40px rgba(0,0,0,.08)`. Never hard/dark drop shadows.
- **Cards:** the primary content container. White surface, 24px radius, 32px padding, soft shadow (md), no border or a hairline `--border-subtle` only when sitting on a tinted background.
- **Buttons:** Primary = solid red capsule, white text, 52px height. Secondary = red outline capsule. Ghost = text-only, no border. WhatsApp = solid green capsule with WhatsApp glyph. Never mix button styles within one screen/section.
- **Inputs:** 52px height, 14px radius, gray placeholder, blue border on focus (ties focus state to the "tech" color, distinct from the red brand accent).
- **Hover/press states:** hover = one step darker on the same color scale (e.g. red-500 → red-600) or a subtle background tint on ghost/outline; press = slight scale-down (0.98) with no color jump. Transitions are short and discrete (150–200ms ease-out) — no bounce, no dramatic motion. Microanimations only: hover lifts, fades, smooth transitions.
- **Layout:** 12-column grid, 1320px max container, 8px spacing base (scale: 4/8/12/16/24/32/40/48/64/80/96/128). Lots of negative space, few elements per screen, modular card-based composition rather than dense multi-column data screens (except CRM/dashboard contexts where density is intentionally higher but still cards-based).
- **Transparency/blur:** minimal — reserved for subtle overlay chips on photography (e.g. a translucent white pill labelling a photo) — never full glassmorphism panels.

## Iconography
No icon codebase was provided. Per brief: use an outline icon set (Lucide or Phosphor, 2px stroke, never filled). This system links **Lucide** via CDN (`unpkg.com/lucide-static`) as the closest open, outline-consistent match — flagged here as a substitution since no icon files/sprite were supplied. Category icons (Auto, Vida, Empresarial, Residencial, Saúde, Odonto, RC Médico, etc.) should be simple single-glyph outline icons from the same set, never emoji, never filled/colored icon mixes. If Megaton has a proprietary icon set, replace this substitution.

## Fonts
Plus Jakarta Sans and Manrope are linked via Google Fonts (`tokens/fonts.css`) — no font files were supplied, and these are the exact families specified in the brief (not a substitution), so no flag needed there.

## Intentional additions
- **Avatar, Alert, Badge/Tag** components: not explicitly itemized as named primitives in the brief, but required to build the "Componentes" inventory it lists (tags/badges, avatares, alertas) — built to brief spec, not invented beyond it.

## Caveats / open items
- No production codebase or Figma exists yet — this system originates from the written brief + one AI-reference image, so treat it as v1 to validate against real brand/marketing assets as they're produced.
- No proprietary icon set or logo variants (dark bg, monochrome) were supplied — only one logo file (white background, no alpha). Ask for an icon sprite/font and a transparent-background logo (plus a light/dark lockup) if available.
- No real customer photography was supplied — UI kits use image placeholders where photography belongs; please supply real photos before shipping.
