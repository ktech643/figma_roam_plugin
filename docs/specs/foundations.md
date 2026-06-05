# Foundations

Shared design tokens + accessibility rules. Every surface (mobile, web, plugin) reads from this.

## Brand colors
| Token | Light | Dark |
|-------|-------|------|
| `--roam-orange` | `#E05820` | `#FF7A3D` |
| `--roam-teal` | `#10A890` | `#3DD9BD` |
| `--roam-purple` | `#8040D0` | `#A77AE6` |
| `--warning` | `#D97706` | `#F59E0B` |
| `--bg` | `#FFF8F4` | `#181210` |
| `--surface` | `#FFFFFF` | `#241B18` |
| `--text` | `#1A1410` | `#FFF8F4` |
| `--muted` | `#7A6960` | `#A8978E` |
| `--border` | `#EFE3D8` | `#3A2D26` |

## Typography
- Display headings: **DM Serif Display** italic
- Body / UI: **DM Sans**
- Arabic: **Cairo**
- Code/IDs: **JetBrains Mono**

## Spacing scale
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64

## Radius
- Cards: 12px
- Buttons / chips: 8px
- Modals: 16px

## Accessibility
- WCAG AA contrast minimum
- Hit targets: 44pt iOS / 48dp Android / 44px web
- Visible focus rings on every interactive element
- `prefers-reduced-motion` respected
- All icons have semantic labels
- RTL supported across the board; numbers stay LTR
