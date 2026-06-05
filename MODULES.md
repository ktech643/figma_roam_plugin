# Plugin source modularization

Runtime is now menu-driven (`mobile` / `admin` / `backend` / `all`) via `figma.command`.

Source is still a single `code.txt` for now. The intended physical split, line ranges
in the current file, is:

| Module | Functions | Approx lines in code.txt |
|--------|-----------|--------------------------|
| `src/core.js` | constants (PAINT_TOKENS, TEXT_TOKENS, MOBILE_SECTIONS, ADMIN_SCREENS, ADMIN_NAV_GROUPS, ACCENT, SCREEN_CONTENT), helpers (hexToRgb, solidPaint, slugify, createFrame/Text/Rect/Section, font loader, style upserters), assertSafeToRun, main() dispatcher | 1–520 + 5588–end |
| `src/mobile.js` | drawScreenBody, drawPhoneChrome, drawAndroidChrome, buildDesignSystemPage, drawComponentSpec + COMPONENT_GROUPS, buildComponentsPage, buildMobilePage, buildAccessibilityPage | 332–960 + 5386–5466 |
| `src/admin.js` | ADMIN_NAV_GROUPS, envForScreen, drawAdminChrome, ACTIONS map, buildAdminPage | 433–983 |
| `src/backend.js` | backendHeader, backendCard, sectionHeader, fullRows, all build*B*Page / FL / W1 / M1–M6 / R1 / Checklist / Prototype / Handoff | 984–5586 |

A `build.sh` should `cat` them in this order: `core` → `mobile` → `admin` → `backend` → `_main.js`.

**Until split:** edit `code.txt` directly, then `cp code.txt code.js && node -c code.js`.
