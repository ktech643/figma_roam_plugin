// Roamlu Setup Plugin v2.2 — RENAME THIS FILE TO code.js
// Generates v2.0 file skeleton: pages, paint + text styles, named frames with chrome.

const ROOT_MARKER = "roamlu-setup-v2";
const GENERATION_NOTE = "Generated from Roamlu Figma Designer Brief v2.0 and Brand Guide v2.0";

const PAGE_ORDER = [
  "■ Design System", "■ Components",
  "■ 01 — Onboarding", "■ 02 — Auth", "■ 03 — Home", "■ 04 — eSIM",
  "■ 05 — VoIP", "■ 06 — VPN", "■ 07 — AI", "■ 08 — Billing",
  "■ 09 — Loyalty", "■ 10 — Account", "■ 11 — System", "■ 12 — Admin Web",
  "■ B0 — Backend Setup",
  "■ B1 — Data Model",
  "■ B2 — API Contract",
  "■ B3 — Auth & Security",
  "■ Prototype", "■ Handoff Notes"
];

const PAINT_TOKENS = [
  { name: "color/brand/orange",     light: "#E05820", dark: "#FF7840", usage: "CTAs, logo, primary buttons" },
  { name: "color/brand/teal",       light: "#10A890", dark: "#18D8B8", usage: "VPN, security, trust" },
  { name: "color/brand/purple",     light: "#8040D0", dark: "#B070FF", usage: "AI features, recommendations" },
  { name: "color/bg/app",           light: "#FFF8F4", dark: "#181210", usage: "App background" },
  { name: "color/bg/surface",       light: "#FFE8DC", dark: "#221A16", usage: "Cards, modals, sheets" },
  { name: "color/bg/surface-2",     light: "#F5F0ED", dark: "#2A1E18", usage: "Inputs, secondary cards" },
  { name: "color/border/default",   light: "#E8E0DB", dark: "#2A1E18", usage: "Dividers, borders" },
  { name: "color/text/primary",     light: "#1C0804", dark: "#F8EAD8", usage: "Headings" },
  { name: "color/text/secondary",   light: "#7A6058", dark: "#B8A098", usage: "Subtext" },
  { name: "color/text/disabled",    light: "#B8A098", dark: "#4A3830", usage: "Disabled" },
  { name: "color/semantic/success", light: "#16A34A", dark: "#22C55E", usage: "Success" },
  { name: "color/semantic/warning", light: "#D97706", dark: "#F59E0B", usage: "Warning" },
  { name: "color/semantic/error",   light: "#DC2626", dark: "#EF4444", usage: "Error" }
];

const TEXT_TOKENS = [
  { name: "text/display",         family: "DM Serif Display", style: "Italic",    size: 36, lineHeight: 43.2, description: "Hero taglines" },
  { name: "text/h1",              family: "DM Sans",          style: "Bold",      size: 28, lineHeight: 36.4, description: "Screen titles" },
  { name: "text/h2",              family: "DM Sans",          style: "SemiBold",  size: 22, lineHeight: 30.8, description: "Section headers" },
  { name: "text/h3",              family: "DM Sans",          style: "SemiBold",  size: 17, lineHeight: 23.8, description: "Card titles" },
  { name: "text/body-regular",    family: "DM Sans",          style: "Regular",   size: 15, lineHeight: 24,   description: "Body" },
  { name: "text/body-medium",     family: "DM Sans",          style: "Medium",    size: 15, lineHeight: 24,   description: "Emphasized body" },
  { name: "text/label-large",     family: "DM Sans",          style: "Medium",    size: 13, lineHeight: 18.2, description: "Buttons, nav" },
  { name: "text/label-small",     family: "DM Sans",          style: "Medium",    size: 11, lineHeight: 15.4, description: "Tags, chips" },
  { name: "text/caption",         family: "DM Sans",          style: "Bold",      size: 10, lineHeight: 13,   description: "All-caps" },
  { name: "text/price",           family: "DM Sans",          style: "ExtraBold", size: 28, lineHeight: 30.8, description: "Pricing" },
  { name: "text/mono",            family: "JetBrains Mono",   style: "Regular",   size: 13, lineHeight: 19.5, description: "Code, IDs" },
  { name: "text/body-regular/ar", family: "Cairo",            style: "Regular",   size: 15, lineHeight: 25.5, description: "Arabic body" },
  { name: "text/label-large/ar",  family: "Cairo",            style: "Medium",    size: 13, lineHeight: 18.2, description: "Arabic labels" },
  { name: "text/h1/ar",           family: "Cairo",            style: "Bold",      size: 28, lineHeight: 39.2, description: "Arabic headings" }
];

const MOBILE_SECTIONS = [
  { page: "■ 01 — Onboarding", screens: [
    ["01","Splash Screen","P1"],["02","Onboarding 1 Hero","P1"],["03","Onboarding 2 Services","P1"],
    ["04","Onboarding 3 Coverage","P1"],["05","Language Select","P1"],["06","Region Select","P1"],
    ["07","Permissions","P2"],["08","Welcome Login Gate","P1"]
  ]},
  { page: "■ 02 — Auth", screens: [
    ["09","Login","P1"],["10","Register","P1"],["11","Phone Verification","P1"],["12","Forgot Password","P2"],
    ["13","Reset Password","P2"],["14","Email Verification","P2"],["15","SSO Loading","P2"],
    ["S-01","2FA Setup Wizard","P1"],["S-02","2FA Challenge","P1"],["S-03","Biometric Enable","P1"]
  ]},
  { page: "■ 03 — Home", screens: [
    ["16","Home No Plan","P1"],["17","Home Active Plan","P1"],["18","Home Multiple Plans","P2"],
    ["19","Home Expiring Soon","P2"],["20","Notifications Panel","P2"]
  ]},
  { page: "■ 04 — eSIM", screens: [
    ["21","eSIM Plans Browser","P1"],["22","eSIM Plan Detail","P1"],["23","eSIM Country Search","P1"],
    ["24","eSIM Regional Bundle","P1"],["25","Purchase Review","P1"],["26","Purchase Payment","P1"],
    ["27","Purchase Success","P1"],["28","My eSIMs List","P1"],["29","eSIM Detail Usage","P1"],
    ["30","Installation Guide","P2"],["E-01","Compatibility Check","P1"],["E-02","Top Up Plan Select","P1"],
    ["E-03","Top Up Review Pay","P1"]
  ]},
  { page: "■ 05 — VoIP", screens: [
    ["31","VoIP Empty","P1"],["32","VoIP Filled","P1"],["33","Browse Numbers","P1"],["34","Number Detail","P1"],
    ["35","Purchase Review","P1"],["36","Purchase Success","P1"],["37","Call History","P2"],
    ["38","In App Dialer","P2"],["V-01","Active Call","P1"],["V-02","Incoming Call","P1"]
  ]},
  { page: "■ 06 — VPN", screens: [
    ["39","VPN Disconnected","P1"],["40","VPN Connecting","P1"],["41","VPN Connected","P1"],
    ["42","Server List","P1"],["43","VPN Settings","P2"]
  ]},
  { page: "■ 07 — AI", screens: [
    ["44","AI Chat Welcome","P1"],["45","AI Chat Active","P1"],["46","AI Recommendation Card","P1"],
    ["47","AI Advisor History","P2"]
  ]},
  { page: "■ 08 — Billing", screens: [
    ["48","Plans PAYG","P1"],["49","Plans Monthly","P1"],["50","Plans Yearly","P1"],
    ["51","My Subscription","P1"],["52","Payment Methods","P2"],["53","Billing History","P2"],
    ["B-01","Add New Card","P1"],["B-02","Cancellation Flow","P1"]
  ]},
  { page: "■ 09 — Loyalty", screens: [
    ["54","Loyalty Dashboard","P1"],["55","How To Earn","P2"],["56","Redeem Points","P2"],
    ["57","Referral Program","P1"]
  ]},
  { page: "■ 10 — Account", screens: [
    ["58","Account Profile","P1"],["59","Edit Profile","P2"],["60","App Settings","P2"],
    ["61","Notification Settings","P2"],["62","Security Settings","P2"],["63","Support Help","P2"],
    ["64","FAQ Screen","P2"],["65","About Roamlu","P3"],["66","Delete Account","P3"],
    ["S-06","Session Timeout Lock","P1"],["S-07","3DS Payment Challenge","P1"]
  ]},
  { page: "■ 11 — System", screens: [
    ["G-01","Network Error","P1"],["G-02","No Internet","P1"],["G-03","Maintenance Mode","P1"],
    ["G-04","Push Notification Landing","P1"],["G-05","Whats New","P2"],["G-06","GDPR Consent","P1"],
    ["G-07","VPN Legal Disclaimer","P1"],["G-08","Refund Policy Notice","P1"],["G-09","eSIM Transfer Error","P1"],
    ["G-10","Captive Portal Detection","P1"],["G-11","VPN Reconnecting Banner","P1"],
    ["G-12","Payment Timeout","P1"],["G-13","VoIP Call Quality Warning","P2"],
    ["G-14","Free Trial Expiry","P2"],["G-15","Re Onboarding Returning User","P3"]
  ]}
];

const ADMIN_SCREENS = [
  ["A00","Admin Login","P1"],["A01","Dashboard Overview","P1"],["A02","Users List","P1"],
  ["A03","User Detail","P1"],["A04","eSIM Orders","P1"],["A05","VoIP Numbers","P1"],
  ["A06","VPN Sessions","P1"],["A07","Revenue Analytics","P1"],["A08","Subscription Plans","P1"],
  ["A09","Pricing Management","P1"],["A10","Provider Config","P1"],["A11","VPN Server Mgmt","P1"],
  ["A12","Loyalty Points","P1"],["A13","Referral Program","P1"],["A14","Marketing Campaigns","P1"],
  ["A15","Support Tickets","P1"],["A16","Notifications Center","P1"],["A17","App Settings","P1"],
  ["A18","Admin Users","P1"],["A19","Revenue Reconciliation","P1"]
];

const WARNINGS = [];

// Picked at runtime from FONT_CANDIDATES — first available wins
let PRIMARY_FONT = { family: "Inter", style: "Regular" };
let PRIMARY_FONT_BOLD = { family: "Inter", style: "Bold" };

const FONT_CANDIDATES = [
  { regular: { family: "Inter",     style: "Regular" }, bold: { family: "Inter",     style: "Bold" } },
  { regular: { family: "Roboto",    style: "Regular" }, bold: { family: "Roboto",    style: "Bold" } },
  { regular: { family: "Helvetica", style: "Regular" }, bold: { family: "Helvetica", style: "Bold" } },
  { regular: { family: "Arial",     style: "Regular" }, bold: { family: "Arial",     style: "Bold" } }
];

function hexToRgb(hex) {
  const c = hex.replace("#", ""); const n = parseInt(c, 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}
function solidPaint(hex) { return [{ type: "SOLID", color: hexToRgb(hex) }]; }
function slugify(v) { return v.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
function tag(n) { n.setPluginData("generator", ROOT_MARKER); }

function clearGeneratedChildren(page) {
  for (const c of [...page.children]) if (c.getPluginData("generator") === ROOT_MARKER) c.remove();
}
function findOrCreatePage(i, name) {
  let p = figma.root.children[i];
  if (!p) { p = figma.createPage(); figma.root.appendChild(p); }
  p.name = name; return p;
}
async function loadFontSafe(family, style) {
  try { await figma.loadFontAsync({ family, style }); return true; }
  catch (e) { WARNINGS.push(`Font missing: ${family} ${style}`); return false; }
}
async function pickPrimaryFont() {
  for (const c of FONT_CANDIDATES) {
    try {
      await figma.loadFontAsync(c.regular);
      await figma.loadFontAsync(c.bold);
      PRIMARY_FONT = c.regular;
      PRIMARY_FONT_BOLD = c.bold;
      return true;
    } catch (e) { /* try next */ }
  }
  // Last resort: any available font
  const fonts = await figma.listAvailableFontsAsync();
  if (fonts.length > 0) {
    PRIMARY_FONT = fonts[0].fontName;
    PRIMARY_FONT_BOLD = fonts[0].fontName;
    await figma.loadFontAsync(PRIMARY_FONT);
    WARNINGS.push(`Using fallback font: ${PRIMARY_FONT.family} ${PRIMARY_FONT.style}`);
    return true;
  }
  return false;
}
async function upsertPaintStyle(name, hex, description) {
  const all = await figma.getLocalPaintStylesAsync();
  const existing = all.find((s) => s.name === name);
  const s = existing || figma.createPaintStyle();
  s.name = name; s.description = description; s.paints = solidPaint(hex);
  return s;
}
async function upsertTextStyle(name, fontName, size, lineHeight, description) {
  const all = await figma.getLocalTextStylesAsync();
  const existing = all.find((s) => s.name === name);
  const s = existing || figma.createTextStyle();
  s.name = name; s.description = description; s.fontName = fontName;
  s.fontSize = size; s.lineHeight = { value: lineHeight, unit: "PIXELS" };
  return s;
}
function createSection(page, name, x, y, w, h) {
  const s = figma.createSection(); s.name = name; s.x = x; s.y = y;
  s.resizeWithoutConstraints(w, h); tag(s); page.appendChild(s); return s;
}
function createFrame(parent, name, x, y, w, h, fillHex, strokeHex) {
  const f = figma.createFrame(); f.name = name; f.x = x; f.y = y;
  f.resizeWithoutConstraints(w, h); f.fills = solidPaint(fillHex);
  if (strokeHex) { f.strokes = solidPaint(strokeHex); f.strokeWeight = 1; }
  f.cornerRadius = 0; tag(f); parent.appendChild(f); return f;
}
function createText(parent, chars, x, y, size, fillHex, font, width) {
  const t = figma.createText(); t.fontName = font || PRIMARY_FONT;
  t.characters = chars; t.fontSize = size; t.fills = solidPaint(fillHex);
  t.x = x; t.y = y; if (width) t.resize(width, t.height);
  tag(t); parent.appendChild(t); return t;
}
function createRect(parent, x, y, w, h, fillHex, radius) {
  const r = figma.createRectangle(); r.x = x; r.y = y; r.resize(w, h);
  r.fills = solidPaint(fillHex); if (radius) r.cornerRadius = radius;
  tag(r); parent.appendChild(r); return r;
}

function drawPhoneChrome(frame, id, title, mode, dir) {
  const isDark = mode === "dark", isRtl = dir === "rtl";
  const bg      = isDark ? "#181210" : "#FFF8F4";
  const surface = isDark ? "#221A16" : "#FFE8DC";
  const text    = isDark ? "#F8EAD8" : "#1C0804";
  const sub     = isDark ? "#B8A098" : "#7A6058";
  const border  = isDark ? "#2A1E18" : "#E8E0DB";

  frame.fills = solidPaint(bg);
  createRect(frame, 0, 0, 390, 59, surface);
  createText(frame, isRtl ? "٩:٤١" : "9:41", isRtl ? 330 : 24, 22, 14, text);
  createText(frame, isRtl ? "●●● 5G" : "5G ●●●", isRtl ? 24 : 310, 22, 12, text);

  createText(frame, title, 24, 80, 22, text, PRIMARY_FONT_BOLD, 342);
  createText(frame, id, 24, 112, 11, sub);

  createRect(frame, 24, 148, 342, 540, surface, 16);
  createText(frame, "[ content area ]", 40, 168, 13, sub);

  createRect(frame, 0, 746, 390, 64, surface);
  createRect(frame, 0, 746, 390, 1, border);
  const labels = isRtl ? ["حسابي", "الاتصال", "الشريحة", "الرئيسية"] : ["Home", "eSIM", "Connect", "Account"];
  for (let i = 0; i < 4; i++) {
    const x = 24 + i * 86;
    createRect(frame, x + 30, 762, 24, 24, sub, 6);
    createText(frame, labels[i], x + 14, 790, 10, sub);
  }
  createRect(frame, 121, 822, 148, 5, sub, 3);
}

function drawAndroidChrome(frame, id, title) {
  frame.fills = solidPaint("#FFF8F4");
  createRect(frame, 0, 0, 360, 24, "#FFE8DC");
  createText(frame, "Android", 12, 6, 11, "#7A6058");
  createText(frame, title, 16, 44, 22, "#1C0804", PRIMARY_FONT_BOLD, 328);
  createText(frame, id, 16, 76, 11, "#7A6058");
  createRect(frame, 16, 112, 328, 600, "#FFE8DC", 16);
  createRect(frame, 0, 736, 360, 64, "#FFE8DC");
}

function drawAdminChrome(frame, id, title, isTablet) {
  const w = isTablet ? 768 : 1440;
  const sidebarW = isTablet ? 64 : 240;
  frame.fills = solidPaint("#F5F0ED");
  createRect(frame, 0, 0, sidebarW, frame.height, "#FFFFFF");
  createRect(frame, sidebarW, 0, 1, frame.height, "#E8E0DB");
  if (!isTablet) {
    createText(frame, "Roamlu Admin", 24, 24, 16, "#1C0804", PRIMARY_FONT_BOLD);
    const items = ["Dashboard", "Users", "eSIM Orders", "VoIP", "VPN", "Revenue", "Plans", "Settings"];
    for (let i = 0; i < items.length; i++) createText(frame, items[i], 24, 80 + i * 36, 13, "#7A6058");
  }
  createRect(frame, sidebarW, 0, w - sidebarW, 64, "#FFFFFF");
  createRect(frame, sidebarW, 64, w - sidebarW, 1, "#E8E0DB");
  createText(frame, title, sidebarW + 24, 22, 18, "#1C0804", PRIMARY_FONT_BOLD);
  createText(frame, id, w - 80, 24, 11, "#7A6058");
  createRect(frame, sidebarW + 24, 88, w - sidebarW - 48, frame.height - 112, "#FFFFFF", 12);
  createText(frame, "[ admin content ]", sidebarW + 40, 108, 13, "#7A6058");
}

async function createStyles() {
  for (const t of PAINT_TOKENS) {
    await upsertPaintStyle(`${t.name}/light`, t.light, `${t.usage} — light`);
    await upsertPaintStyle(`${t.name}/dark`, t.dark, `${t.usage} — dark`);
  }
  for (const t of TEXT_TOKENS) {
    const ok = await loadFontSafe(t.family, t.style);
    if (!ok) continue;
    await upsertTextStyle(t.name, { family: t.family, style: t.style }, t.size, t.lineHeight, t.description);
  }
}

async function buildDesignSystemPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Roamlu Design System", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, GENERATION_NOTE, 0, -72, 16, "#7A6058", PRIMARY_FONT, 900);
  createSection(page, "Section A — Color Tokens", 0, 0, 1700, 900);
  createSection(page, "Section B — Typography", 0, 980, 1700, 900);
  createSection(page, "Section C — Spacing & Radius", 0, 1960, 1700, 720);
  createSection(page, "Section D — Icons & Illustrations", 0, 2760, 1700, 720);

  let sx = 40, sy = 80;
  for (const t of PAINT_TOKENS) {
    const card = createFrame(page, t.name, sx, sy, 220, 160, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 12;
    createText(card, t.name, 16, 12, 11, "#1C0804");
    createRect(card, 16, 36, 88, 88, t.light, 8);
    createRect(card, 116, 36, 88, 88, t.dark, 8);
    createText(card, "L", 50, 132, 10, "#7A6058");
    createText(card, "D", 152, 132, 10, "#7A6058");
    sx += 240; if (sx > 1400) { sx = 40; sy += 180; }
  }
}

async function buildComponentsPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Roamlu Components", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "Auto Layout · light + dark + RTL variants required", 0, -72, 16, "#7A6058", PRIMARY_FONT, 900);
  const sections = [
    ["Buttons & Inputs",     0,    0, 1500, 720],
    ["Cards & Navigation",   0,  800, 1500, 720],
    ["Security & System",    0, 1600, 1500, 720],
    ["AI · VPN · Voice",     0, 2400, 1500, 720]
  ];
  for (const [n, x, y, w, h] of sections) createSection(page, n, x, y, w, h);
}

async function buildMobilePage(page, screens) {
  clearGeneratedChildren(page);
  createText(page, page.name, 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "Each screen: light/ltr · dark/ltr · light/rtl · light/android", 0, -72, 16, "#7A6058", PRIMARY_FONT, 1200);
  const rowHeight = 980;
  for (let i = 0; i < screens.length; i++) {
    const [id, title, priority] = screens[i];
    const y = 40 + i * rowHeight;
    createText(page, `${id} — ${title} — ${priority}`, 0, y, 18, "#1C0804", PRIMARY_FONT_BOLD, 800);
    const slug = slugify(title);
    const iosLight = createFrame(page, `${id}/${slug}/light/ltr`, 0, y + 40, 390, 844, "#FFF8F4");
    const iosDark  = createFrame(page, `${id}/${slug}/dark/ltr`, 430, y + 40, 390, 844, "#181210");
    const iosRtl   = createFrame(page, `${id}/${slug}/light/rtl`, 860, y + 40, 390, 844, "#FFF8F4");
    const android  = createFrame(page, `${id}/${slug}/light/android`, 1290, y + 62, 360, 800, "#FFF8F4");
    drawPhoneChrome(iosLight, id, title, "light", "ltr");
    drawPhoneChrome(iosDark,  id, title, "dark",  "ltr");
    drawPhoneChrome(iosRtl,   id, title, "light", "rtl");
    drawAndroidChrome(android, id, title);
  }
}

async function buildAdminPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Roamlu Admin Web", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "Desktop 1440 · Tablet 768", 0, -72, 16, "#7A6058", PRIMARY_FONT, 900);
  const rowHeight = 1060;
  for (let i = 0; i < ADMIN_SCREENS.length; i++) {
    const [id, title, priority] = ADMIN_SCREENS[i];
    const y = 40 + i * rowHeight;
    createText(page, `${id} — ${title} — ${priority}`, 0, y, 18, "#1C0804", PRIMARY_FONT_BOLD, 900);
    const slug = slugify(title);
    const desktop = createFrame(page, `${id}/${slug}/desktop`, 0, y + 40, 1440, 900, "#F5F0ED");
    const tablet  = createFrame(page, `${id}/${slug}/tablet`, 1500, y + 96, 768, 960, "#F5F0ED");
    drawAdminChrome(desktop, id, title, false);
    drawAdminChrome(tablet, id, title, true);
  }
}

async function buildPrototypePage(page) {
  clearGeneratedChildren(page);
  createText(page, "Prototype Flow Map", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "10 client-review journeys — wire connections between matching frame IDs", 0, -72, 16, "#7A6058", PRIMARY_FONT, 1100);
  const journeys = [
    ["P-01 First-time onboarding", "01 → G-06 → 02 → 03 → 04 → 06 → 07 → 08 → 16"],
    ["P-02 Returning login + 2FA", "09 → S-02 → 17"],
    ["P-03 First eSIM purchase", "21 → 22 → 25 → G-08 → 26 → S-07 → 27 → 30"],
    ["P-04 eSIM top-up", "29 → E-02 → E-03 → 27"],
    ["P-05 VPN first activation", "39 → G-07 → 40 → 41"],
    ["P-06 AI → purchase", "44 → 45 → 46 → 48"],
    ["P-07 Subscription cancel", "51 → B-02 → 51"],
    ["P-08 GDPR consent trigger", "G-06 → resume route"],
    ["P-09 Captive portal", "17 → G-10"],
    ["P-10 Support / recovery", "63 → 64 / 09 → 12 → 13 → S-03 → 17"]
  ];
  for (let i = 0; i < journeys.length; i++) {
    const [n, f] = journeys[i]; const y = i * 90;
    createText(page, n, 0, y, 18, "#1C0804", PRIMARY_FONT_BOLD, 400);
    createText(page, f, 0, y + 28, 14, "#7A6058", PRIMARY_FONT, 1200);
  }
}

// Backend phase pages — start with B0 only; later phases add their own entries.
const ACCENT = { orange: "#E05820", teal: "#10A890", purple: "#8040D0", warning: "#D97706" };

const BACKEND_PAGES_DISABLED_OLD = [
  { name: "■ B0 — Backend Setup", title: "B0 — Backend Setup & Scaffold",
    subtitle: "NestJS modular monolith · Postgres 16 + Prisma · Redis + BullMQ · REST / OpenAPI 3.1 · scaffold only — no business logic, no data model, no auth",
    rules: [
      { t: "warning", v: "Stack fixed · no substitutions · NestJS + Postgres 16 + Prisma + Redis/BullMQ + REST/OpenAPI 3.1" },
      { t: "warning", v: "All config via env vars · validated on boot · fail fast · zero secrets in code" },
      { t: "warning", v: "Money = integer minor units (BigInt) + ISO 4217 currency · floats forbidden everywhere" },
      { t: "orange",  v: "Single error envelope { error: { code, message, details } } · global filter enforces" },
      { t: "teal",    v: "Request-ID + structured JSON logging · propagated end-to-end" },
      { t: "orange",  v: "Provider integrations behind adapter interfaces · sandbox stubs ship with B0 · live wires in B4" },
    ],
    sections: [
      "01 · Folder structure (src/common · config · database · modules · providers · prisma · test)",
      "02 · ConfigModule · zod-validated env · fail fast on missing / invalid",
      "03 · Money utility · Currency ISO 4217 enum · ESLint rule blocks float-money",
      "04 · AllExceptionsFilter · maps Nest + Prisma + adapter errors → envelope",
      "05 · RequestId + Pino logger · /health + /ready endpoints",
      "06 · OpenAPI 3.1 wired at /docs · empty paths · ready for B2",
      "07 · Six provider adapter interfaces + sandbox stubs (esim · voip · vpn · payment · push · sms)",
      "08 · docker-compose · api + postgres:16 + redis:7 with healthchecks",
      "09 · .env.example · every var grouped by phase · B3/B4/B5/FL placeholders",
      "10 · README · pnpm dev · db:migrate · db:seed · test · openapi · adapter modes",
      "Exit checklist · pnpm dev boots · /health /ready /docs work · sandbox adapters deterministic",
    ],
  },
  { name: "■ B1 — Data Model", title: "B1 — Data Model · PostgreSQL + Prisma",
    subtitle: "Keystone schema · API + web admin + Flutter all derive from this · review harder than any other phase",
    rules: [
      { t: "warning", v: "Money = BigInt minor units + ISO 4217 currency column · never Float · enforced at schema + lint" },
      { t: "orange",  v: "All timestamps timestamptz UTC · created_at + updated_at on every table" },
      { t: "orange",  v: "UUID v4 primary keys · gen_random_uuid() · no auto-increment ints" },
      { t: "warning", v: "Soft-delete via deleted_at on user-facing rows · hard delete only where law requires" },
      { t: "orange",  v: "FK indexed everywhere · unique constraints on identity (email, phone, iccid, did)" },
      { t: "warning", v: "Append-only tables · audit_log · points_ledger · calls · esim_usage · payments" },
    ],
    sections: [
      "D1 · Identity & auth · users · auth_sessions · refresh_tokens (rotation chain) · totp_secrets · biometric_enrollments · verifications · password_resets · devices",
      "D2 · Catalog & provisioning · esim_plans · esim_orders · esims (provision_status SEPARATE from install_status) · esim_usage · esim_topups · voip_plans · voip_numbers · voip_orders · calls · vpn_servers · vpn_sessions",
      "D3 · Billing · subscription_plans · subscriptions · payment_methods (token refs only) · payments · invoices · refunds · tax_lines · webhook_events",
      "D4 · Loyalty & growth · loyalty_accounts · points_ledger (signed entries · balance is computed) · rewards · redemptions · referrals",
      "D5 · AI advisor · advisor_threads · advisor_messages · recommendations (links to esim_orders on accept)",
      "D6 · Admin & system · admin_users + roles + permissions · audit_log (append-only) · support_tickets · faqs · notifications · push_deliveries · consents (versioned) · regional_flags · provider_configs · feature_flags",
      "Seed · Gulf eSIM bundles · subscription tiers · regional_flags (VPN/VoIP off in restricted markets) · admin + roles · FAQs en/ar · rewards",
      "Pending · retention periods · KYC scope · CDR retention · erasure scope · consent versioning policy",
      "Exit · 0000_init compiles · enums on all status columns · seed idempotent · regional defaults safe",
    ],
  },
  { name: "■ B2 — API Contract", title: "B2 — API Contract · REST + OpenAPI 3.1",
    subtitle: "Single source of truth for Flutter + Web Admin · generated from controllers + DTOs · no hand-written client models",
    rules: [
      { t: "orange",  v: "OpenAPI 3.1 generated from controllers + DTOs · single source of truth" },
      { t: "warning", v: "Error envelope universal · { error: { code, message, details } } on every 4xx / 5xx" },
      { t: "orange",  v: "Cursor pagination · { data, nextCursor } · no offset/limit" },
      { t: "orange",  v: "Versioned base /api/v1 · admin under /api/v1/admin · breaking → v2" },
      { t: "warning", v: "Money in responses = { amount: minor-units, currency: ISO4217 } · no naked numbers" },
      { t: "warning", v: "Idempotency-Key required on payment + provisioning POSTs" },
      { t: "warning", v: "Region-gated routes return typed 403 REGION_DISABLED · never generic" },
    ],
    sections: [
      "G1 · Auth · register · login · refresh · logout · verify-email · verify-phone · 2FA setup/verify/challenge · biometric enroll · forgot/reset password",
      "G2 · Users / account · profile · devices · notification settings · sessions list+revoke · delete account · consent accept (versioned)",
      "G3 · eSIM · plans (filter country/region) · plan detail · compatibility check · order (idempotent) · status · my esims · install (LPA/QR/Universal Link) · top-up",
      "G4 · VoIP · plans · browse DIDs · number detail · purchase (idempotent) · my numbers · CDRs · release",
      "G5 · VPN · server list · session · status · end · settings · all region-gated",
      "G6 · Billing · plans · subscription · change/cancel · payment-methods · quote · payments (3DS-aware) · invoices · refunds",
      "G7 · Loyalty · account (computed balance) · ledger · rewards · redemptions · referrals · share code",
      "G8 · AI · threads · messages · recommendations · accept (→ esim order) · dismiss",
      "G9 · Notifications · inbox · mark read · push token register/unregister",
      "G10 · System · /health · /ready · /api/v1/config · whats-new · maintenance",
      "Admin · /api/v1/admin · users · orders · DIDs · VPN sessions · revenue · plans · provider-configs · regional-flags · refunds · audit-log · reconciliation",
      "Webhooks (signed) · payment · esim · voip · push · idempotent on (provider, event_id) · excluded from public SDK",
      "Errors · VALIDATION_FAILED · AUTH_REQUIRED · FORBIDDEN · REGION_DISABLED · IDEMPOTENCY_CONFLICT · RATE_LIMITED · PAYMENT_REQUIRES_ACTION · PROVISIONING_FAILED",
      "Codegen · Flutter (dart-dio) · Web admin (openapi-typescript) · Postman/Insomnia · CI fails on drift",
      "Exit · openapi.json committed · all routes documented · clients regenerate cleanly",
    ],
  },
  { name: "■ B3 — Auth & Security", title: "B3 — Auth & Security",
    subtitle: "Maps to 09–15 · S-01 · S-02 · S-03 · S-06 · 62 · Argon2id · refresh rotation + reuse detection · 2FA · biometric · step-up",
    rules: [
      { t: "warning", v: "Argon2id passwords · never bcrypt-low / SHA · password material never logged or returned" },
      { t: "warning", v: "Access ~15m · refresh long-lived · rotated every use · reuse → revoke whole token family" },
      { t: "orange",  v: "Refresh tokens hashed at rest · device-bound · access JWTs carry user_id + scopes only · zero PII" },
      { t: "warning", v: "Rate-limit + lockout on login / OTP / reset / 2FA · generic failure messages · no enumeration" },
      { t: "warning", v: "OTPs single-use · short expiry · hashed at rest · attempt-limited" },
      { t: "warning", v: "Consent (GDPR / VPN-legal / refund) persisted with version + timestamp · never inferred from UI" },
      { t: "orange",  v: "Audit log on every security action · login · logout · 2FA · password · session · deletion" },
    ],
    sections: [
      "Flow 01 · Registration → email + phone OTP → status active · 10 → 11 → 14 → 03",
      "Flow 02 · Login → (2FA challenge if enrolled) → session · 09 → S-02 → 17 · partial-auth bridges challenge",
      "Flow 03 · Refresh rotation + reuse detection · replay → revoke entire family + force re-auth",
      "Flow 04 · Step-up for sensitive actions · S-06 · STEP_UP_REQUIRED if step_up_at stale · biometric or password",
      "Flow 05 · 2FA setup → challenge → recovery (S-01 / S-02) · TOTP + 8 single-use recovery codes · disable needs password+code",
      "Flow 06 · Biometric enroll + verify (S-03) · device keypair · server stores public key · sign challenge nonce",
      "Flow 07 · Forgot → reset → invalidate all sessions · 12 → 13 · always-200 forgot · burn token on reset",
      "Flow 08 · SSO callback (Apple / Google) · 15 · first SSO login still captures GDPR consent",
      "Flow 09 · Account deletion (66) · anonymize PII · preserve finance + audit · revoke all sessions",
      "Guards · @RequireAuth · @RequireScopes · @RequireRole · @StepUp · @RateLimit · @Idempotent · @AuditAction",
      "Limits · login 10/5min · 2FA 5/session · forgot 5/hr · verify 5/10min · register 10/hr/ip · reset 3/token",
      "New tables (feeds B1) · rate_limit_buckets · lockouts · security_events · recovery_codes · step_up_grants · password_history",
      "Tests · refresh-reuse · OTP caps · 2FA path · session revoke · password-reset session kill · step-up · generic-failure timing · idempotent register · SSO consent · deletion preserves finance",
      "Pending · deletion retention window · SSO providers · inactivity timeout · password policy · soft-lock visibility",
      "Exit · Argon2id tuned · rotation + reuse green · rate-limits live · S-06 round-trip works · OpenAPI updated",
    ],
  },
  { name: "■ B4 — Provider Adapters", title: "B4 — Provider Adapters",
    subtitle: "Six adapters · sandbox + live · swappable via env · no vendor SDK leaks into services",
    rules: [
      { t: "orange",  v: "Every external integration goes through an adapter · services never import vendor SDKs" },
      { t: "warning", v: "Webhook = source of truth · client confirmation never trusted · idempotent on (provider, event_id)" },
      { t: "orange",  v: "Sandbox + live impls per adapter · {PROVIDER}_MODE env selects · sandbox is deterministic" },
      { t: "warning", v: "Provision split · esim provision_status (provider activated) ≠ install_status (user installed on device)" },
      { t: "warning", v: "PaymentProvider returns Money envelopes · 3DS-aware · raw card data never crosses our API" },
    ],
    sections: [
      "EsimProvider · listPlans · createOrder · provision · fetchUsage · topUp · webhook esim_activated",
      "VoipProvider · browseNumbers · reserveNumber · assignNumber · releaseNumber · fetchCdrs · webhook voip_assigned",
      "VpnProvider · listServers · issueConfig · endSession · fetchSessionStatus · keys are one-shot · region-gated",
      "PaymentProvider · createPaymentIntent · confirm · createSetupIntent · attach/detach payment-method · createRefund · listEvents · 3DS branch",
      "PushProvider · registerToken · send · deliveryReceipts · feeds notifications + push_deliveries",
      "SmsProvider · sendOtp · sendTransactional · used by B3 verification + B5 dunning",
      "Provider configs · driven by provider_configs table · sandbox/live flag · settings JSONB · admin UI A10",
      "Outbox + retries · provider_events outbox · BullMQ retries with exponential backoff · DLQ surfaces in admin",
      "Tests · sandbox determinism · webhook idempotency · provision-vs-install split · 3DS requires_action path",
      "Pending · live PSP choice (FL D1) · push provider (FCM + APNs) · SMS provider per market",
      "Exit · all six adapters live in sandbox mode · webhooks signed + idempotent · admin can flip provider via config",
    ],
  },
  { name: "■ B5 — Billing & 3DS", title: "B5 — Billing & 3DS",
    subtitle: "PaymentIntent · 3DS/SCA · webhook-as-source-of-truth · auto-refund on failed provision · subscription dunning · reconciliation",
    rules: [
      { t: "warning", v: "All amounts integer minor units + ISO 4217 · totals computed server-side · client-sent prices ignored" },
      { t: "orange",  v: "Payments via PaymentProvider adapter · no PSP SDK in services" },
      { t: "warning", v: "3DS / SCA assumed required · every charge uses PaymentIntent flow with requires_action handling" },
      { t: "warning", v: "Raw card data never reaches backend · only provider token references stored" },
      { t: "warning", v: "Idempotency-Key required on every charge and refund · same key never double-charges" },
      { t: "warning", v: "Webhook is source of truth · never trust client confirmation · signed + idempotent" },
      { t: "warning", v: "Failed provision after successful payment → auto-refund or flagged manual-review · never charged-but-undelivered" },
    ],
    sections: [
      "Flow 01 · One-time purchase · 25 Review → 26 Payment → S-07 3DS → 27 Success → 19 Install · webhook payment_succeeded → B4 provision",
      "Flow 02 · Payment timeout (G-12) · timeout job · timed_out · retry with same idem-key · race-safe vs late webhook",
      "Flow 03 · Paid-but-provisioning-failed → auto-refund · B4 reports failed → createRefund + notify",
      "Flow 04 · Subscription trial → active → renew / dunning / cancel (G-14) · webhook drives every transition",
      "Flow 05 · Add card (B-01) · setup-intent · 3DS for verification · attach payment-method",
      "Flow 06 · Refund · customer-initiated request · finance-role admin reviews per FL D4 · status webhook",
      "Flow 07 · Webhook intake · signature verify · idempotent on event_id · maps to internal state machine",
      "Flow 08 · Reconciliation loop (A19) · compare provider events vs payments · reconciliation_flags",
      "PaymentProvider methods · createPaymentIntent · confirm · cancel · setup-intent · attach/detach PM · subscriptions create/update/cancel · refund · listEvents",
      "New tables · tax_lines · dunning_attempts · reconciliation_flags · refund_policies (versioned text)",
      "Pending · live PSP (FL D1) · proration mode (FL D4) · e-invoicing build vs MoR (FL D3)",
      "Exit · 3DS green in sandbox · webhook idempotent · auto-refund triggers on provision-fail · dunning loop alive · A19 surfaces drift",
    ],
  },
  { name: "■ FL — Finance & Legal", title: "FL — Finance & Legal Decisions",
    subtitle: "Configuration + decisions, not build instructions · feeds B5 · NOT legal / tax / financial advice — confirm with counsel",
    rules: [
      { t: "warning", v: "Disclaimer · figures researched June 2026 from secondary sources · rates / mandates / App Store policy all move · counsel sign-off required" },
      { t: "orange",  v: "Output of FL is config + decisions wired into provider_configs / regional_flags / refund_policies · not code" },
    ],
    sections: [
      "D1 · Payment processor for the Gulf · candidates Tap · PayTabs · Telr · Checkout.com · Network Intl. · Stripe (UAE limited) · MoR (Paddle/Dodo) · build keeps PaymentProvider adapter · Stripe ref for dev · regional live (Tap or PayTabs) via provider_configs",
      "D2 · App Store payment channel · 3.1.5 / 3.1.3(e) · eSIM + VoIP + top-ups = external PSP · VPN ambiguous (decide before iOS submission) · loyalty IAP if sold directly · refund channel follows the channel choice",
      "D3 · VAT per market · UAE 5% · KSA 15% · Bahrain 10% · Oman 5% · Qatar 0% · Kuwait none yet · place-of-supply ambiguous for travel connectivity · non-resident registration from first sale (B2C UAE/KSA digital) · entity / domicile resolves first",
      "D4 · Refund policy & proration · external PSP → our policy + UAE/KSA consumer-protection law · IAP → Apple owns refund · eSIM non-refundable once provisioned (B4 split makes this defensible) · proration native (Stripe) vs manual (regional)",
      "Feeds B5 · provider_configs · regional_flags.vat_rate · place_of_supply · payment_channel · proration_mode · einvoicing_required · refund_policies (text + version)",
      "Open items · entity / domicile · written place-of-supply ruling (KSA 15% gate) · e-invoicing build vs MoR · VPN App Store call · refund wording vs consumer-protection law · live PSP fees confirmation",
      "Exit · adapter wired in B0 · regional_flags extended · refund_policies seeded · KSA gate stays disabled until ruling lands · channel decision recorded in Handoff",
    ],
  }
];

// === Active backend pages ===========================================
// Single source of truth for which backend pages get built.
const BACKEND_PAGES = [
  {
    name: "■ B0 — Backend Setup",
    kicker: "B0 · BACKEND · PHASE B0 · SETUP & SCAFFOLD",
    title: "Backend Setup & Scaffold",
    subtitle: "NestJS modular monolith · Postgres 16 + Prisma · Redis + BullMQ · REST / OpenAPI 3.1 · scaffold only — no business logic, no data model, no auth.",
    rules: [
      { t: "warning", v: "Stack is fixed · NestJS + Postgres 16 + Prisma + Redis/BullMQ + REST/OpenAPI 3.1 · no substitutions" },
      { t: "warning", v: "B0 builds scaffold only · no business logic · no product endpoints · no data model (B1) · no auth (B3)" },
      { t: "warning", v: "All config via env vars · validated on boot · fail fast · zero secrets in code or git history" },
      { t: "warning", v: "Money is integer minor units (BigInt) + ISO 4217 currency code · floats forbidden everywhere" },
      { t: "orange",  v: "Single error envelope · { error: { code, message, details } } · enforced by global exception filter" },
      { t: "teal",    v: "Request-ID propagated end-to-end · structured JSON logging · request-id + user-id on every line" },
      { t: "orange",  v: "Provider integrations go through adapter interfaces only · sandbox stubs in B0 · live in B4" },
      { t: "teal",    v: "OpenAPI 3.1 generated from controllers + DTOs · /docs serves it · single source of truth for clients" },
    ],
    foundationals: [
      { t: "orange",  k: "ConfigModule",         v: "Reads process.env into a typed object validated by zod · boot crashes on missing/invalid · config.get<T>() narrows TS." },
      { t: "warning", k: "Money + Currency",     v: "Money = { amount: bigint, currency: ISO4217 } · toMinor / fromMinor / format · ESLint custom rule blocks float-money." },
      { t: "orange",  k: "AllExceptionsFilter",  v: "One filter app-wide · maps Nest + Prisma + validation + adapter errors → error envelope · never leaks stacks in prod." },
      { t: "teal",    k: "RequestId + Logger",   v: "RequestIdInterceptor stamps every request · Pino emits JSON with request-id + user-id + route + duration." },
      { t: "teal",    k: "/health & /ready",     v: "/health = process alive · /ready = DB + Redis reachable · used by docker healthchecks + LB later." },
      { t: "teal",    k: "OpenAPI 3.1 at /docs", v: "@nestjs/swagger configured · title · version · server URL · error envelope schema · empty paths now (B2 fills)." },
      { t: "orange",  k: "Provider adapters",    v: "Six interfaces · EsimProvider · VoipProvider · VpnProvider · PaymentProvider · PushProvider · SmsProvider · sandbox stubs deterministic by env." },
    ],
    adapters: [
      { t: "orange",  k: "EsimProvider",     v: "listPlans · createOrder · provision(orderId) · fetchUsage(iccid) · topUp(iccid, planId)" },
      { t: "orange",  k: "VoipProvider",     v: "browseNumbers(country) · reserveNumber · assignNumber · releaseNumber · fetchCdrs(numberId)" },
      { t: "teal",    k: "VpnProvider",      v: "listServers(region) · issueConfig(userId, serverId) · endSession · fetchSessionStatus" },
      { t: "orange",  k: "PaymentProvider",  v: "createPaymentIntent(amount, currency, idem) · confirm · setupIntent · createRefund · listEvents" },
      { t: "purple",  k: "PushProvider",     v: "registerToken(userId, token, platform) · send(userId, payload) · deliveryReceipts(cursor)" },
      { t: "purple",  k: "SmsProvider",      v: "sendOtp(phone, code) · sendTransactional(phone, body)" },
    ],
    compose: [
      { t: "orange",  k: "api",      v: "Node 20 · mounts src · depends_on postgres + redis (healthy) · expose 3000" },
      { t: "teal",    k: "postgres", v: "postgres:16-alpine · named volume · healthcheck pg_isready" },
      { t: "purple",  k: "redis",    v: "redis:7-alpine · appendonly · healthcheck redis-cli ping" },
    ],
    env: [
      { t: "orange",  k: "NODE_ENV",                p: "B0",            v: "development | test | staging | production" },
      { t: "orange",  k: "PORT",                    p: "B0",            v: "API HTTP port · default 3000" },
      { t: "orange",  k: "API_BASE_URL",            p: "B0",            v: "Public base URL · used in OpenAPI server block" },
      { t: "orange",  k: "LOG_LEVEL",               p: "B0",            v: "trace | debug | info | warn | error · default info" },
      { t: "orange",  k: "DATABASE_URL",            p: "B0",            v: "Postgres connection string · pooled" },
      { t: "orange",  k: "REDIS_URL",               p: "B0",            v: "Redis connection · used by BullMQ + cache" },
      { t: "warning", k: "ESIM_PROVIDER_MODE",      p: "B0/B4",         v: "sandbox | live · sandbox now · live wires in B4" },
      { t: "warning", k: "VOIP_PROVIDER_MODE",      p: "B0/B4",         v: "sandbox | live" },
      { t: "warning", k: "VPN_PROVIDER_MODE",       p: "B0/B4",         v: "sandbox | live" },
      { t: "warning", k: "PAYMENT_PROVIDER_MODE",   p: "B0/B4/B5",      v: "sandbox | live · live adapter (Tap / PayTabs / Stripe-ref) wires in B4" },
      { t: "warning", k: "PUSH_PROVIDER_MODE",      p: "B0/B4",         v: "sandbox | live (FCM/APNs)" },
      { t: "warning", k: "SMS_PROVIDER_MODE",       p: "B0/B4",         v: "sandbox | live" },
      { t: "purple",  k: "JWT_ACCESS_SECRET",       p: "B3 · pending",  v: "Pending B3 — Auth & Security" },
      { t: "purple",  k: "JWT_REFRESH_SECRET",      p: "B3 · pending",  v: "Pending B3" },
      { t: "purple",  k: "PSP_API_KEY",             p: "B4/B5 · pending", v: "Pending B4 / FL D1 · processor TBD" },
      { t: "purple",  k: "ESIM_PROVIDER_API_KEY",   p: "B4 · pending",  v: "Pending B4" },
      { t: "purple",  k: "VOIP_PROVIDER_API_KEY",   p: "B4 · pending",  v: "Pending B4" },
      { t: "purple",  k: "FCM_SERVICE_ACCOUNT",     p: "B4 · pending",  v: "Pending B4 · push" },
    ],
    tests: [
      "/health returns 200 · /ready returns 200 when DB + Redis up",
      "/ready returns 503 when DB down · structured error envelope",
      "throw HttpException · response is { error: { code, message, details } } · request-id present",
      "missing required env var · app fails to boot with named var in error message",
      "money utility · toMinor(1.234, 'AED') rounds correctly · fromMinor symmetric",
      "ESLint custom rule fails on a deliberate float-money assignment",
      "OpenAPI doc served at /docs · contains error envelope schema · empty paths object",
      "EsimProvider sandbox · listPlans returns deterministic fixture · same hash across runs",
    ],
    exit: [
      "pnpm dev boots cleanly against docker-compose stack",
      "/health · /ready · /docs all return expected responses",
      "All env vars in .env.example documented · grouped by phase · validated on boot",
      "Six provider adapters defined as interfaces · sandbox stubs return deterministic fixtures",
      "Money utility shipped · float-money ESLint rule fails on a deliberate violation",
      "Error envelope verified end-to-end · request-id propagated in every log line",
      "OpenAPI doc generated · empty paths · ready for B2 to fill in",
    ],
  },
  {
    name: "■ B1 — Data Model",
    kind: "b1",
    kicker: "B1 · BACKEND · DATA MODEL · POSTGRESQL + PRISMA · KEYSTONE",
    title: "Data Model · PostgreSQL + Prisma",
    subtitle: "Single source of truth · API + Web Admin + Flutter all derive from this · review harder than any other phase. Six domains · UUID v4 keys · timestamptz UTC · Money = BigInt minor + ISO 4217 currency · soft-delete on user-facing rows · append-only audit / ledger / CDR / payments.",
    rules: [
      { t: "warning", v: "Money = BigInt minor units + ISO 4217 currency column · never Float / never Decimal-as-float · enforced at schema + lint" },
      { t: "orange",  v: "Timestamps timestamptz UTC · created_at + updated_at on every table · updated_at maintained by trigger or Prisma middleware" },
      { t: "orange",  v: "UUID v4 primary keys · gen_random_uuid() · no auto-increment ints anywhere" },
      { t: "warning", v: "Soft-delete via deleted_at on user-facing rows kept for audit/finance · hard delete only where law requires (account deletion)" },
      { t: "orange",  v: "Explicit FKs · index on every FK · index on common query columns · unique on identity (email · phone · iccid · did)" },
      { t: "orange",  v: "Enums for fixed lifecycles (status fields) · never free strings · enum values are stable contracts visible in OpenAPI" },
      { t: "warning", v: "Append-only tables · audit_log · points_ledger · calls · esim_usage · payments · INSERT only · no UPDATE / no DELETE" },
      { t: "teal",    v: "Tenant-safe by construction · every user-owned row carries user_id FK · region-gated rows respect regional_flags at write-time" },
    ],
    domains: [
      {
        t: "orange", id: "D1", title: "Identity & auth",
        blurb: "User identity · sessions · refresh-token rotation · 2FA · password / verification flows · registered devices. Auth flows themselves land in B3.",
        tables: [
          "users · id · email (unique) · phone (unique) · locale=ar · region · status · kyc_status · password_hash · created_at · updated_at · deleted_at",
          "auth_sessions · id · user_id · device_id · ip · user_agent · started_at · last_seen_at · revoked_at",
          "refresh_tokens · id · session_id · token_hash · parent_id · rotated_at · used_at · revoked_at · expires_at  (rotation chain · reuse detection)",
          "totp_secrets · id · user_id (unique) · secret_enc · confirmed_at · disabled_at",
          "biometric_enrollments · id · user_id · device_id · public_key · created_at · revoked_at",
          "verifications · id · user_id (nullable) · type (email/phone) · target · code_hash · expires_at · consumed_at",
          "password_resets · id · user_id · token_hash · expires_at · used_at",
          "devices · id · user_id · push_token · platform · model · esim_capable · last_seen_at · revoked_at",
        ],
        enums: "UserStatus · KycStatus · VerificationType · DevicePlatform",
      },
      {
        t: "orange", id: "D2", title: "Catalog & provisioning",
        blurb: "eSIM / VoIP / VPN catalog · orders · fulfilled instruments. Critical split: install_status (user installed) is separate from provision_status (provider activated).",
        tables: [
          "esim_plans · id · country_code · region_code · data_mb · validity_days · price_amount · price_currency · cost_amount · cost_currency · provider_id · active",
          "esim_orders · id · user_id · plan_id · status · idempotency_key (unique) · price_amount · price_currency · payment_id · created_at · updated_at",
          "esims · id · order_id (unique) · iccid (unique) · lpa_activation_string · qr_ref · provision_status · install_status · expires_at",
          "esim_usage · id · esim_id · used_mb · period_start · period_end · recorded_at  (append-only)",
          "esim_topups · id · esim_id · plan_id · status · payment_id · created_at",
          "voip_plans · voip_numbers (did unique · status reserved→active→released · assigned_user) · voip_orders",
          "calls · id · number_id · direction · duration_sec · cost_amount · cost_currency · started_at  (append-only CDR)",
          "vpn_servers (region · capacity · public_key ref · enabled) · vpn_sessions (user · server · started_at · ended_at · bytes)",
        ],
        enums: "EsimOrderStatus · EsimProvisionStatus · EsimInstallStatus · VoipNumberStatus · CallDirection",
      },
      {
        t: "orange", id: "D3", title: "Billing",
        blurb: "Subscriptions · payment methods (token refs only) · payments + 3DS · invoices · refunds · webhook events. Money everywhere is integer minor + ISO 4217.",
        tables: [
          "subscription_plans · id · code · interval (monthly/yearly/payg) · price_amount · price_currency · trial_days · active",
          "subscriptions · id · user_id · plan_id · status · current_period_end · trial_end · canceled_at",
          "payment_methods · id · user_id · provider_id · provider_token (ref only) · brand · last4 · exp_month · exp_year · default_flag",
          "payments · id · user_id · provider_id · intent_ref · amount · currency · status · three_ds_status · idempotency_key (unique) · captured_at",
          "invoices · id · user_id · subscription_id (nullable) · total_amount · currency · status · pdf_ref · issued_at",
          "refunds · id · payment_id · reason · amount · currency · status · created_at",
          "tax_lines · id · invoice_id · region · rate · base · amount",
          "webhook_events · id · provider · event_id (unique with provider) · payload_jsonb · received_at · processed_at",
        ],
        enums: "PaymentStatus · ThreeDsStatus · SubscriptionStatus · InvoiceStatus · RefundStatus",
      },
      {
        t: "teal", id: "D4", title: "Loyalty & growth",
        blurb: "Append-only points ledger — balance is always sum(ledger), never a mutable column. Rewards · redemptions · referrals.",
        tables: [
          "loyalty_accounts · id · user_id (unique) · created_at",
          "points_ledger · id · account_id · delta (signed int) · reason · source_type · source_id · created_at  (INSERT only · balance computed)",
          "rewards · id · code · cost_points · type · payload_jsonb · active",
          "redemptions · id · account_id · reward_id · points_spent · status · created_at",
          "referrals · id · referrer_id · referee_id · status · attributed_at · reward_payment_id",
        ],
        enums: "RedemptionStatus · ReferralStatus",
      },
      {
        t: "purple", id: "D5", title: "AI advisor",
        blurb: "Threads · messages · grounded recommendations linking back into eSIM orders on accept.",
        tables: [
          "advisor_threads · id · user_id · started_at · last_message_at",
          "advisor_messages · id · thread_id · role (user/assistant/system) · content · tokens · created_at",
          "recommendations · id · user_id · recommended_plan_id · rationale · status (shown/accepted/dismissed) · esim_order_id (on accept)",
        ],
        enums: "AdvisorRole · RecommendationStatus",
      },
      {
        t: "orange", id: "D6", title: "Admin & system",
        blurb: "Admin realm separate from users · RBAC · append-only audit · support · notifications · versioned consents · regional flags · provider config · feature flags.",
        tables: [
          "admin_users · roles · permissions · role_permissions  (RBAC)",
          "audit_log · id · actor_admin_id · action · entity · entity_id · before_jsonb · after_jsonb · created_at  (append-only)",
          "support_tickets · ticket_messages · faqs (en/ar)",
          "notifications · push_deliveries",
          "consents · id · user_id · type (GDPR / VPN-legal / refund) · version · accepted_at  (versioned)",
          "regional_flags · region · esim_enabled · voip_enabled · vpn_enabled · vat_rate · place_of_supply · payment_channel",
          "provider_configs · provider_key · type · settings_jsonb · enabled · sandbox_flag",
          "feature_flags · key · enabled · rollout_percent · audience_jsonb",
        ],
        enums: "ConsentType · TicketStatus · NotificationKind",
      },
    ],
    seed: [
      "Gulf eSIM bundles · UAE / KSA / Bahrain / Oman / Qatar / Kuwait + popular destinations (Turkey, UK, USA, EU)",
      "Subscription plans · PAYG · monthly · yearly · trial days configured",
      "Regional flags · VPN + VoIP DISABLED in restricted markets as the safe default",
      "One admin_user + roles + permissions seeded · super-admin only initially",
      "FAQs · en + ar parallel content · linked to support categories",
      "Rewards catalog · sample low-cost rewards for end-to-end loyalty test",
    ],
    pending: [
      "Data retention windows · CDR retention (regulatory minimum vs. ours) · audit_log retention · soft-deleted user retention",
      "KYC scope · which markets require · which products trigger · what fields are mandatory",
      "Erasure scope · GDPR right-to-erasure boundary vs. finance/audit retention",
      "Consent versioning policy · trigger for re-prompt · grace period · backfill strategy",
      "Cost vs. price split · do we expose cost to admin only · who can edit · audit retention on price changes",
    ],
    exit: [
      "0000_init compiles cleanly · prisma migrate dev passes on a fresh volume",
      "Enums on every status column · no free strings",
      "Seed is idempotent · re-running does not duplicate or break unique constraints",
      "Regional defaults safe · VPN/VoIP off in restricted markets out-of-the-box",
      "Indexes on every FK and on common query columns",
      "Append-only invariants enforced (DB-level CHECK or trigger) on audit_log · points_ledger · calls · esim_usage · payments",
      "Money columns are BigInt minor + ISO 4217 currency · zero Float/Decimal-as-float anywhere",
      "Provision / install split present on esims · provision_status ≠ install_status",
    ],
  },
  {
    name: "■ B2 — API Contract",
    kind: "b2",
    kicker: "B2 · BACKEND · API CONTRACT · REST + OPENAPI 3.1",
    title: "API Contract · REST + OpenAPI 3.1",
    subtitle: "Generated from controllers + DTOs · single source of truth · Web Admin (TS) and Flutter (dart-dio) regenerate from this · cursor pagination · money envelopes · idempotency on payments + provisioning · region-gated 403 typed.",
    rules: [
      { t: "orange",  v: "OpenAPI 3.1 generated from controllers + DTOs · single source of truth · CI fails on drift" },
      { t: "warning", v: "Error envelope universal · { error: { code, message, details } } on every 4xx / 5xx response" },
      { t: "orange",  v: "Cursor pagination · { data, nextCursor } · no offset/limit · documented per list endpoint" },
      { t: "orange",  v: "Versioned base /api/v1 · admin under /api/v1/admin · breaking changes ship behind /api/v2" },
      { t: "warning", v: "Money in responses = { amount: minor-units, currency: ISO4217 } · no naked numbers anywhere" },
      { t: "warning", v: "Idempotency-Key header required on every payment + provisioning POST · 24-hour replay window" },
      { t: "warning", v: "Region-gated routes return typed 403 REGION_DISABLED with reason · never a generic forbidden" },
      { t: "teal",    v: "Auth declared per route · scope/role on every authenticated endpoint · admin namespace separate" },
    ],
    groups: [
      { id: "G1", title: "Auth", t: "orange", endpoints: [
        { m: "POST",  p: "/api/v1/auth/register",          a: "public",   d: "Email + phone registration · status pending" },
        { m: "POST",  p: "/api/v1/auth/login",             a: "public",   d: "Login · returns partial-auth if 2FA enrolled" },
        { m: "POST",  p: "/api/v1/auth/refresh",           a: "public",   d: "Refresh rotation · reuse → revoke family" },
        { m: "POST",  p: "/api/v1/auth/logout",            a: "user",     d: "Revoke current session" },
        { m: "POST",  p: "/api/v1/auth/verify-email",      a: "public",   d: "Consume email OTP" },
        { m: "POST",  p: "/api/v1/auth/verify-phone",      a: "public",   d: "Consume phone OTP" },
        { m: "POST",  p: "/api/v1/auth/2fa/setup",         a: "user",     d: "TOTP enrol · returns secret + QR ref" },
        { m: "POST",  p: "/api/v1/auth/2fa/verify",        a: "user",     d: "Confirm enrollment" },
        { m: "POST",  p: "/api/v1/auth/2fa/challenge",     a: "partial",  d: "Submit code during login challenge" },
        { m: "POST",  p: "/api/v1/auth/biometric/enroll",  a: "user",     d: "Register device public key" },
        { m: "POST",  p: "/api/v1/auth/forgot",            a: "public",   d: "Always-200 · email reset link" },
        { m: "POST",  p: "/api/v1/auth/reset",             a: "public",   d: "Reset password · invalidate sessions" },
      ] },
      { id: "G2", title: "Users / account", t: "orange", endpoints: [
        { m: "GET",   p: "/api/v1/me",                          a: "user", d: "Get profile" },
        { m: "PATCH", p: "/api/v1/me",                          a: "user", d: "Update profile" },
        { m: "GET",   p: "/api/v1/me/devices",                  a: "user", d: "List registered devices" },
        { m: "DELETE",p: "/api/v1/me/devices/:id",              a: "user", d: "Revoke device" },
        { m: "GET",   p: "/api/v1/me/notifications-settings",   a: "user", d: "Read prefs" },
        { m: "PATCH", p: "/api/v1/me/notifications-settings",   a: "user", d: "Update prefs" },
        { m: "GET",   p: "/api/v1/me/sessions",                 a: "user", d: "List active sessions" },
        { m: "DELETE",p: "/api/v1/me/sessions/:id",             a: "user", d: "Revoke session" },
        { m: "DELETE",p: "/api/v1/me",                          a: "user (step-up)", d: "Delete account · preserves finance/audit" },
        { m: "POST",  p: "/api/v1/me/consents",                 a: "user", d: "Accept consent (type + version)" },
      ] },
      { id: "G3", title: "eSIM", t: "orange", endpoints: [
        { m: "GET",   p: "/api/v1/esim/plans",                  a: "public", d: "List plans · filter country/region · cursor" },
        { m: "GET",   p: "/api/v1/esim/plans/:id",              a: "public", d: "Plan detail" },
        { m: "POST",  p: "/api/v1/esim/compatibility",          a: "user",   d: "Device + carrier compatibility check" },
        { m: "POST",  p: "/api/v1/esim/orders",                 a: "user · idem", d: "Create order · idempotent" },
        { m: "GET",   p: "/api/v1/esim/orders/:id",             a: "user",   d: "Order status" },
        { m: "GET",   p: "/api/v1/esim/me",                     a: "user",   d: "My eSIMs · cursor" },
        { m: "GET",   p: "/api/v1/esim/me/:id",                 a: "user",   d: "eSIM detail + usage" },
        { m: "GET",   p: "/api/v1/esim/me/:id/install",         a: "user",   d: "LPA string · QR · Universal Link" },
        { m: "POST",  p: "/api/v1/esim/me/:id/topup",           a: "user · idem", d: "Top-up create · idempotent" },
      ] },
      { id: "G4", title: "VoIP", t: "orange", endpoints: [
        { m: "GET",   p: "/api/v1/voip/plans",                  a: "public",        d: "Number plans · cursor" },
        { m: "GET",   p: "/api/v1/voip/numbers",                a: "user",          d: "Browse available DIDs · region-gated" },
        { m: "GET",   p: "/api/v1/voip/numbers/:id",            a: "user",          d: "Number detail" },
        { m: "POST",  p: "/api/v1/voip/orders",                 a: "user · idem",   d: "Purchase number · idempotent" },
        { m: "GET",   p: "/api/v1/voip/me",                     a: "user",          d: "My numbers · cursor" },
        { m: "GET",   p: "/api/v1/voip/me/:id/cdrs",            a: "user",          d: "Call history · cursor" },
        { m: "DELETE",p: "/api/v1/voip/me/:id",                 a: "user (step-up)",d: "Release number" },
      ] },
      { id: "G5", title: "VPN · region-gated", t: "teal", endpoints: [
        { m: "GET",   p: "/api/v1/vpn/servers",                 a: "user", d: "Server list · filtered by region" },
        { m: "POST",  p: "/api/v1/vpn/sessions",                a: "user", d: "Issue config · 403 REGION_DISABLED if blocked" },
        { m: "GET",   p: "/api/v1/vpn/sessions/:id",            a: "user", d: "Session status" },
        { m: "DELETE",p: "/api/v1/vpn/sessions/:id",            a: "user", d: "End session" },
        { m: "GET",   p: "/api/v1/vpn/settings",                a: "user", d: "Per-user defaults" },
      ] },
      { id: "G6", title: "Billing", t: "orange", endpoints: [
        { m: "GET",   p: "/api/v1/billing/plans",               a: "public",       d: "Subscription plans" },
        { m: "GET",   p: "/api/v1/billing/subscription",        a: "user",         d: "Current subscription" },
        { m: "POST",  p: "/api/v1/billing/subscription",        a: "user · idem",  d: "Change / start subscription" },
        { m: "DELETE",p: "/api/v1/billing/subscription",        a: "user (step-up)", d: "Cancel" },
        { m: "GET",   p: "/api/v1/billing/payment-methods",     a: "user",         d: "List PMs" },
        { m: "POST",  p: "/api/v1/billing/payment-methods",     a: "user",         d: "Add via provider token" },
        { m: "DELETE",p: "/api/v1/billing/payment-methods/:id", a: "user",         d: "Remove" },
        { m: "POST",  p: "/api/v1/billing/payments/intents",    a: "user · idem",  d: "Create payment intent · 3DS-aware" },
        { m: "GET",   p: "/api/v1/billing/payments/:id",        a: "user",         d: "Payment status" },
        { m: "GET",   p: "/api/v1/billing/invoices",            a: "user",         d: "Invoice list · cursor" },
        { m: "POST",  p: "/api/v1/billing/refunds",             a: "user",         d: "Refund request" },
      ] },
      { id: "G7", title: "Loyalty", t: "teal", endpoints: [
        { m: "GET",   p: "/api/v1/loyalty/account",             a: "user", d: "Balance computed from ledger" },
        { m: "GET",   p: "/api/v1/loyalty/ledger",              a: "user", d: "Ledger history · cursor" },
        { m: "GET",   p: "/api/v1/loyalty/rewards",             a: "user", d: "Rewards catalog" },
        { m: "POST",  p: "/api/v1/loyalty/redemptions",         a: "user · idem", d: "Redeem · concurrency-safe" },
        { m: "GET",   p: "/api/v1/loyalty/referrals",           a: "user", d: "Referral state" },
        { m: "POST",  p: "/api/v1/loyalty/referrals/share-code", a: "user", d: "Generate / fetch share code" },
      ] },
      { id: "G8", title: "AI", t: "purple", endpoints: [
        { m: "GET",   p: "/api/v1/ai/threads",                  a: "user",  d: "Thread list" },
        { m: "POST",  p: "/api/v1/ai/threads",                  a: "user",  d: "Create thread" },
        { m: "POST",  p: "/api/v1/ai/threads/:id/messages",     a: "user",  d: "Post message · server calls model adapter" },
        { m: "GET",   p: "/api/v1/ai/recommendations",          a: "user",  d: "Recommendations grounded to catalog" },
        { m: "POST",  p: "/api/v1/ai/recommendations/:id/accept", a: "user · idem", d: "Accept → routes into eSIM order" },
        { m: "POST",  p: "/api/v1/ai/recommendations/:id/dismiss", a: "user", d: "Dismiss" },
      ] },
      { id: "G9", title: "Notifications", t: "purple", endpoints: [
        { m: "GET",   p: "/api/v1/notifications",               a: "user", d: "Inbox · cursor" },
        { m: "POST",  p: "/api/v1/notifications/:id/read",      a: "user", d: "Mark read" },
        { m: "POST",  p: "/api/v1/notifications/push-tokens",   a: "user", d: "Register push token" },
        { m: "DELETE",p: "/api/v1/notifications/push-tokens/:id", a: "user", d: "Unregister" },
      ] },
      { id: "G10", title: "System", t: "teal", endpoints: [
        { m: "GET",   p: "/health",                             a: "public", d: "Process alive" },
        { m: "GET",   p: "/ready",                              a: "public", d: "DB + Redis reachable" },
        { m: "GET",   p: "/api/v1/config",                      a: "public", d: "Client config + feature flags" },
        { m: "GET",   p: "/api/v1/whats-new",                   a: "user",   d: "Release notes" },
        { m: "GET",   p: "/api/v1/maintenance",                 a: "public", d: "Maintenance window status" },
      ] },
    ],
    admin: [
      { m: "POST",  p: "/api/v1/admin/auth/login",                a: "admin (separate realm)", d: "Admin login · isolated from users" },
      { m: "GET",   p: "/api/v1/admin/users",                     a: "admin · users.read",     d: "User search" },
      { m: "GET",   p: "/api/v1/admin/orders",                    a: "admin · orders.read",    d: "Order search" },
      { m: "GET",   p: "/api/v1/admin/voip/numbers",              a: "admin · voip.read",      d: "DID inventory" },
      { m: "GET",   p: "/api/v1/admin/vpn/sessions",              a: "admin · vpn.read",       d: "Active VPN sessions" },
      { m: "GET",   p: "/api/v1/admin/revenue",                   a: "admin · finance.read",   d: "Revenue dashboard" },
      { m: "PATCH", p: "/api/v1/admin/plans/:id",                 a: "admin · catalog.write",  d: "Edit plan · audited" },
      { m: "PATCH", p: "/api/v1/admin/provider-configs/:key",     a: "admin · system.write",   d: "Switch provider mode · audited" },
      { m: "PATCH", p: "/api/v1/admin/regional-flags/:region",    a: "admin · system.write",   d: "Toggle region gate · audited" },
      { m: "POST",  p: "/api/v1/admin/refunds/:id/decision",      a: "admin · finance.write",  d: "Approve / deny refund · audited" },
      { m: "GET",   p: "/api/v1/admin/audit-log",                 a: "admin · audit.read",     d: "Append-only audit log" },
      { m: "GET",   p: "/api/v1/admin/reconciliation",            a: "admin · finance.read",   d: "A19 · drift surfaces here" },
    ],
    webhooks: [
      { t: "warning", k: "POST /webhooks/payment", v: "PSP events · signature-verified · idempotent on (provider, event_id) · drives payment state machine" },
      { t: "warning", k: "POST /webhooks/esim",    v: "Provider provisioning callback · sets esim.provision_status · install_status untouched" },
      { t: "orange",  k: "POST /webhooks/voip",    v: "Number assignment · status transitions · CDR settlement events" },
      { t: "purple",  k: "POST /webhooks/push",    v: "Delivery receipts · feeds push_deliveries" },
    ],
    errors: [
      "VALIDATION_FAILED · 422 · DTO failed class-validator · details lists per-field issues",
      "AUTH_REQUIRED · 401 · No / expired access token",
      "FORBIDDEN · 403 · Authenticated but insufficient scope/role",
      "REGION_DISABLED · 403 · regional_flags blocks this market for this product",
      "STEP_UP_REQUIRED · 401 · Sensitive action needs fresh biometric / password",
      "IDEMPOTENCY_CONFLICT · 409 · Same key, different payload",
      "RATE_LIMITED · 429 · Bucket exhausted · Retry-After header set",
      "PAYMENT_REQUIRES_ACTION · 402 · 3DS challenge needed · client-side resume",
      "PROVISIONING_FAILED · 502 · Provider rejected · auto-refund triggered if paid",
      "NOT_FOUND · 404 · Resource missing or not visible to caller",
      "CONFLICT · 409 · State machine refuses transition",
      "INTERNAL · 500 · Generic · stack hidden · logged with request-id",
    ],
    codegen: [
      { t: "orange", k: "Flutter (dart-dio)",      v: "openapi-generator-cli generate -g dart-dio · committed under flutter_app/lib/api · CI fails on drift vs spec" },
      { t: "purple", k: "Web admin (TS)",          v: "openapi-typescript + openapi-fetch · committed under web-admin/src/api · CI fails on drift" },
      { t: "teal",   k: "Postman / Insomnia",      v: "Collection generated from openapi.json · published to internal workspace per release" },
    ],
    exit: [
      "openapi.json committed under repo root · regenerated on every build",
      "Every endpoint listed above has a controller + DTO · documented with @ApiOperation",
      "Dart and TS clients regenerate cleanly from openapi.json · zero hand edits",
      "Mock server (Prism) serves the spec · Flutter + Web Admin tracks unblocked",
      "Error envelope schema present · referenced by every error response in the spec",
      "Money envelope referenced by every monetary field · zero naked numbers in responses",
      "Idempotency-Key documented on payment + provisioning POSTs · 24h replay window",
      "Region-gated routes return REGION_DISABLED 403 with reason · documented in spec",
      "Spec FROZEN + tagged at end of B2 · breaking changes go through /api/v2",
    ],
  },
  {
    name: "■ B3 — Auth & Security",
    kind: "b3",
    kicker: "B3 · BACKEND · AUTH & SECURITY · ARGON2ID · JWT ROTATION · 2FA · BIOMETRIC · STEP-UP",
    title: "Auth & Security · Argon2id · JWT rotation · 2FA · Biometric · Step-up",
    subtitle: "Maps to Figma 09–15, S-01/S-02/S-03 (2FA + biometric), S-06 (session lock), and the session list on screen 62. Generic non-enumerating errors. Every security-sensitive action writes audit. Refresh reuse → revoke whole token family.",
    rules: [
      { t: "warning", v: "Argon2id only · never bcrypt-low-cost · never SHA · never log password material" },
      { t: "warning", v: "Access tokens ~15 min · refresh tokens long-lived · rotated on every use · reuse → revoke family" },
      { t: "warning", v: "Refresh tokens hashed at rest · bound to a device record · access tokens carry only id + scopes/roles" },
      { t: "warning", v: "OTPs single-use · short-expiry · hashed at rest · attempt-limited · resend cooldown" },
      { t: "orange",  v: "Generic non-enumerating auth errors · never reveal whether email/phone exists" },
      { t: "orange",  v: "Idempotency-Key honored on register · no duplicate accounts on retry" },
      { t: "teal",    v: "Consents (GDPR / VPN-legal / refund) persisted versioned at acceptance · not inferred from UI" },
      { t: "purple",  v: "Audit on every security action · login · logout · 2FA enable/disable · password change · session revoke · deletion" },
    ],
    states: [
      { t: "orange",  k: "Registration → verification → active", v: "Register creates user pending · email + phone OTP required · status flips to active only after both" },
      { t: "orange",  k: "Login → 2FA challenge → session", v: "If 2FA enrolled · login returns short-lived challenge token (not access) · /2fa/challenge completes" },
      { t: "warning", k: "Refresh rotation + reuse detection", v: "Each refresh issues new pair · old hash retained · replay of old token revokes the entire family · forces re-auth" },
      { t: "purple",  k: "Step-up for sensitive actions", v: "Payment · subscription cancel · account delete · require fresh biometric or password even within valid session · 401 STEP_UP_REQUIRED" },
      { t: "teal",    k: "Inactivity lock (S-06)", v: "Server-enforced policy · stale session prompts re-auth · Security Settings exposes timeout config" },
    ],
    flows: [
      { t: "orange",  k: "Register + verify", v: "POST /auth/register (Idempotency-Key) → user pending · email + SMS OTPs · /auth/verify-email + /auth/verify-phone → active · GDPR consent persisted with version" },
      { t: "orange",  k: "Login + 2FA", v: "POST /auth/login → access+refresh OR partial-auth challenge if 2FA · POST /auth/2fa/challenge with TOTP or recovery code → full session" },
      { t: "warning", k: "Refresh + rotation", v: "POST /auth/refresh → new pair · token-family table tracks parent → child · replay of consumed token nukes family + audit + force re-auth" },
      { t: "orange",  k: "Logout / logout-all", v: "POST /auth/logout revokes current · POST /auth/logout-all revokes whole family for user · sessions list updates" },
      { t: "teal",    k: "Sessions list + revoke (62)", v: "GET /me/sessions returns device · last-seen · IP/region · current flag · DELETE /me/sessions/:id revokes single" },
      { t: "purple",  k: "2FA setup (S-01) + challenge (S-02)", v: "POST /auth/2fa/setup → TOTP secret + QR · /auth/2fa/verify confirms · recovery codes hashed + single-use · disable requires password + current code" },
      { t: "purple",  k: "Biometric enroll (S-03)", v: "Device generates keypair · public key + device binding stored · login = device signs server challenge · biometric is convenience over existing credential · never standalone identity" },
      { t: "warning", k: "Forgot / reset (12 + 13)", v: "Always-200 response · single-use expiring token · reset enforces password policy · invalidates ALL existing sessions on success" },
      { t: "orange",  k: "Change password (62)", v: "Requires current password · invalidates other sessions · keeps current · audit row" },
      { t: "purple",  k: "SSO callback (15)", v: "OAuth/OIDC behind ProviderInterface · Apple + Google stubbed · first SSO login provisions user · still captures GDPR consent" },
      { t: "warning", k: "Account deletion (66)", v: "Step-up required · hard-delete or anonymize PII per B1 retention · preserve finance/audit · revoke all sessions · final audit entry" },
      { t: "teal",    k: "SMS / email dispatch", v: "Synchronous API enqueues into BullMQ · SmsProvider + EmailProvider adapters · sandbox stubs in dev · webhook-free elsewhere" },
    ],
    guards: [
      { t: "orange",  k: "@RequireAuth() / @RequireScope()", v: "Per-endpoint declarative guards · scope/role checked at the route · partial-auth challenge token cannot reach @RequireAuth routes" },
      { t: "purple",  k: "@StepUp(level)", v: "Decorates payment + cancel + delete · checks last_step_up_at < window · else 401 STEP_UP_REQUIRED · client surfaces biometric/password sheet" },
      { t: "warning", k: "Rate limit + lockout", v: "Buckets per IP + per identity · login · 2FA · forgot · reset · OTP-resend · 429 RATE_LIMITED with Retry-After" },
      { t: "warning", k: "Replay & timing", v: "Constant-time comparisons on tokens + OTP hashes · request-id + structured log on every auth event · never log token values" },
      { t: "teal",    k: "Device binding", v: "Refresh tied to devices.id · device revoke cascades to sessions · push token follows device" },
    ],
    tables: [
      { t: "orange",  k: "auth_sessions", v: "id · user_id · device_id · token_family_id · created_at · last_used_at · revoked_at · ip · region" },
      { t: "warning", k: "refresh_tokens", v: "id · session_id · token_hash · parent_id · used_at · revoked_at · expires_at · reuse_detected_at" },
      { t: "purple",  k: "totp_secrets", v: "user_id · secret_enc · enabled_at · disabled_at · recovery_codes (hashed array · single-use)" },
      { t: "purple",  k: "biometric_enrollments", v: "device_id · public_key · algo · enrolled_at · revoked_at" },
      { t: "warning", k: "verifications", v: "user_id · type (email/phone) · code_hash · expires_at · attempts · consumed_at" },
      { t: "warning", k: "password_resets", v: "user_id · token_hash · expires_at · consumed_at · ip" },
      { t: "teal",    k: "consents", v: "user_id · type · version · accepted_at · ip · locale" },
      { t: "purple",  k: "audit_log (append-only)", v: "actor · action · entity · entity_id · before/after JSON · request_id · created_at" },
    ],
    tests: [
      "Refresh-token reuse detection · replay invalidates family + forces re-auth + audit row written",
      "OTP expiry + max attempts · attempt cap returns generic error · last attempt locks for cooldown",
      "2FA challenge accepts TOTP · recovery code is single-use · second use rejected",
      "Session revoke-by-id immediate · subsequent access token from that session rejected on next refresh",
      "Password reset invalidates ALL existing sessions · old refresh tokens rejected after reset",
      "Step-up enforcement · payment + cancel + delete fail without fresh step-up · succeed after biometric/password",
      "Generic non-enumerating errors · register/login/forgot return identical timing + body for unknown vs known identity",
      "Rate limit · login + OTP buckets exhaust → 429 with Retry-After · clear after window",
      "Biometric · device-signed challenge verifies · revoked device key rejected",
      "Account deletion · finance/audit retained · sessions revoked · final audit entry present",
    ],
    pending: [
      "Inactivity timeout duration · per-product or global (security vs friction call)",
      "Account-deletion retention window · finance vs PII anonymization timing (legal call)",
      "SSO providers shipped at launch · Apple required for iOS · Google optional · enterprise deferred",
      "Recovery-code count + regeneration policy · 8 vs 10 · regenerate invalidates prior set",
      "Step-up freshness window per action · payment vs delete may differ",
    ],
    exit: [
      "Argon2id verified · password hashes never logged · never returned · timing constant",
      "Refresh rotation + reuse detection green in e2e · family revoke audited",
      "2FA enrolment + challenge + recovery code green · disable requires password + code",
      "Biometric enroll + challenge green · device-revoke invalidates key",
      "Sessions list + revoke wired to screen 62 · current-session flag correct",
      "Step-up guard enforced on payment + subscription cancel + account delete",
      "Generic non-enumerating errors verified · register + login + forgot identical shape",
      "Rate limits + lockouts in place on all auth endpoints · 429 typed",
      "Consents persisted versioned · GDPR + VPN-legal + refund · timestamped + IP",
      "OpenAPI updated · auth state machine documented · STEP_UP_REQUIRED + RATE_LIMITED in error catalog",
    ],
  },
];

// ---- Helpers (defensive) -------------------------------------------
function safeText(parent, chars, x, y, size, fillHex, font, width) {
  if (!chars) return null;
  try {
    return createText(parent, String(chars), x, y, size, fillHex, font || PRIMARY_FONT, width);
  } catch (e) {
    WARNINGS.push("text failed: " + (e && e.message ? e.message : String(e)));
    return null;
  }
}

function backendCard(page, x, y, w, h, accent) {
  const card = createFrame(page, "card", x, y, w, h, "#FFFFFF", "#E8E0DB");
  card.cornerRadius = 14;
  createRect(card, 0, 0, 4, h, accent);
  return card;
}

function sectionHeader(page, kicker, title, x, y) {
  safeText(page, kicker, x, y, 11, "#7A6058", PRIMARY_FONT, 1500);
  safeText(page, title, x, y + 18, 22, "#1C0804", PRIMARY_FONT_BOLD, 1500);
  return y + 60;
}

// ---- Dispatch: per-phase builder -----------------------------------
async function buildBackendPage(page, spec) {
  if (spec.kind === "b1") return buildBackendB1Page(page, spec);
  if (spec.kind === "b2") return buildBackendB2Page(page, spec);
  if (spec.kind === "b3") return buildBackendB3Page(page, spec);
  return buildBackendB0Page(page, spec);
}

const METHOD_TONE = { GET: "#10A890", POST: "#E05820", PATCH: "#8040D0", PUT: "#8040D0", DELETE: "#D97706" };

function backendHeader(page, spec, PAGE_W) {
  safeText(page, spec.kicker, 0, 0, 11, "#E05820", PRIMARY_FONT, PAGE_W);
  safeText(page, spec.title, 0, 22, 44, "#1C0804", PRIMARY_FONT_BOLD, PAGE_W);
  safeText(page, spec.subtitle, 0, 82, 14, "#7A6058", PRIMARY_FONT, 1100);
  return 138;
}

// ---- B0 builder ----------------------------------------------------
async function buildBackendB0Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // Non-negotiables (2-col grid)
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 100;
    for (let i = 0; i < spec.rules.length; i++) {
      const r = spec.rules[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[r.t] || ACCENT.orange);
      safeText(card, r.v, 24, 22, 13, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.rules.length / 2) * (cardH + 12) + 40;
  }

  // Foundational pieces (2-col)
  y = sectionHeader(page, "01", "Foundational pieces", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 130;
    for (let i = 0; i < spec.foundationals.length; i++) {
      const f = spec.foundationals[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[f.t] || ACCENT.orange);
      safeText(card, f.k, 24, 18, 12, ACCENT[f.t] || ACCENT.orange, PRIMARY_FONT_BOLD, colW - 48);
      safeText(card, f.v, 24, 44, 12, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.foundationals.length / 2) * (cardH + 12) + 40;
  }

  // Provider adapter interfaces (2-col)
  y = sectionHeader(page, "02", "Provider adapter interfaces", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 110;
    for (let i = 0; i < spec.adapters.length; i++) {
      const a = spec.adapters[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[a.t] || ACCENT.orange);
      safeText(card, a.k, 24, 18, 12, ACCENT[a.t] || ACCENT.orange, PRIMARY_FONT_BOLD, colW - 48);
      safeText(card, a.v, 24, 44, 12, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.adapters.length / 2) * (cardH + 12) + 40;
  }

  // docker-compose
  y = sectionHeader(page, "03", "docker-compose · local dev stack", 0, y);
  {
    const cardH = 64;
    for (let i = 0; i < spec.compose.length; i++) {
      const c = spec.compose[i];
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[c.t] || ACCENT.orange);
      safeText(card, c.k, 24, 22, 12, ACCENT[c.t] || ACCENT.orange, PRIMARY_FONT_BOLD, 200);
      safeText(card, c.v, 240, 22, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 264);
      y += cardH + 8;
    }
    y += 32;
  }

  // .env.example table
  y = sectionHeader(page, "04", ".env.example — every required var", 0, y);
  {
    const rowH = 44;
    // header
    const head = createFrame(page, "env-head", 0, y, PAGE_W, 32, "#F5F0ED", "#E8E0DB");
    head.cornerRadius = 8;
    safeText(head, "KEY",   24,  9, 11, "#7A6058", PRIMARY_FONT, 360);
    safeText(head, "PHASE", 540, 9, 11, "#7A6058", PRIMARY_FONT, 200);
    safeText(head, "NOTE",  760, 9, 11, "#7A6058", PRIMARY_FONT, 600);
    y += 36;
    for (let i = 0; i < spec.env.length; i++) {
      const e = spec.env[i];
      const card = backendCard(page, 0, y, PAGE_W, rowH, ACCENT[e.t] || ACCENT.orange);
      safeText(card, e.k, 24,  14, 12, "#1C0804", PRIMARY_FONT_BOLD, 480);
      safeText(card, e.p, 540, 14, 11, ACCENT[e.t] || ACCENT.orange, PRIMARY_FONT, 200);
      safeText(card, e.v, 760, 14, 11, "#7A6058", PRIMARY_FONT, PAGE_W - 800);
      y += rowH + 6;
    }
    y += 32;
  }

  // Smoke tests
  y = sectionHeader(page, "05", "Smoke tests — what proves B0 is real", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.tests.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      safeText(card, "✓",         24, 18, 14, ACCENT.teal, PRIMARY_FONT_BOLD, 24);
      safeText(card, spec.tests[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
    y += 32;
  }

  // Exit checklist
  y = sectionHeader(page, "Exit", "Phase B0 exit checklist", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.exit.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
      box.cornerRadius = 4;
      safeText(card, spec.exit[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
  }
}

// ---- B1 builder ----------------------------------------------------
async function buildBackendB1Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // Non-negotiables (2-col grid)
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 100;
    for (let i = 0; i < spec.rules.length; i++) {
      const r = spec.rules[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[r.t] || ACCENT.orange);
      safeText(card, r.v, 24, 22, 13, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.rules.length / 2) * (cardH + 12) + 40;
  }

  // Domains — 6 full-width domain cards each containing a list of tables
  y = sectionHeader(page, "01", "Domains · ER summary", 0, y);
  {
    const headerH = 56;
    const blurbH = 48;
    const tableRowH = 28;
    const enumH = 36;
    const padTop = 18;
    const padBottom = 18;
    for (let i = 0; i < spec.domains.length; i++) {
      const d = spec.domains[i];
      const cardH = padTop + headerH + blurbH + (d.tables.length * tableRowH) + (d.enums ? enumH : 0) + padBottom;
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[d.t] || ACCENT.orange);

      // Domain header row
      safeText(card, d.id, 24, padTop, 12, ACCENT[d.t] || ACCENT.orange, PRIMARY_FONT_BOLD, 60);
      safeText(card, d.title, 80, padTop - 4, 22, "#1C0804", PRIMARY_FONT_BOLD, PAGE_W - 120);

      // Blurb
      safeText(card, d.blurb, 24, padTop + headerH - 28, 12, "#7A6058", PRIMARY_FONT, PAGE_W - 48);

      // Tables list
      let ty = padTop + headerH + blurbH - 24;
      for (let j = 0; j < d.tables.length; j++) {
        // bullet
        const dot = createRect(card, 24, ty + 9, 6, 6, ACCENT[d.t] || ACCENT.orange);
        dot.cornerRadius = 3;
        safeText(card, d.tables[j], 40, ty, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 64);
        ty += tableRowH;
      }

      // Enums
      if (d.enums) {
        ty += 6;
        safeText(card, "ENUMS", 24, ty, 10, "#7A6058", PRIMARY_FONT_BOLD, 60);
        safeText(card, d.enums, 80, ty - 1, 11, ACCENT[d.t] || ACCENT.orange, PRIMARY_FONT, PAGE_W - 120);
      }

      y += cardH + 16;
    }
    y += 24;
  }

  // Seed targets
  y = sectionHeader(page, "02", "Seed data targets", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.seed.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      safeText(card, "•", 24, 18, 14, ACCENT.teal, PRIMARY_FONT_BOLD, 24);
      safeText(card, spec.seed[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
    y += 32;
  }

  // Pending decisions
  y = sectionHeader(page, "Pending", "Decisions deferred to product / legal", 0, y);
  {
    const cardH = 64;
    for (let i = 0; i < spec.pending.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.warning);
      safeText(card, spec.pending[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  // Exit checklist
  y = sectionHeader(page, "Exit", "Phase B1 exit checklist", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.exit.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
      box.cornerRadius = 4;
      safeText(card, spec.exit[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
  }
}

// ---- B2 builder ----------------------------------------------------
function endpointRow(card, ep, y, w) {
  const tone = METHOD_TONE[ep.m] || "#7A6058";
  // Method pill
  const pill = createFrame(card, "method", 0, y, 64, 22, tone);
  pill.cornerRadius = 4;
  safeText(pill, ep.m, 0, 4, 11, "#FFFFFF", PRIMARY_FONT_BOLD, 64);
  // Path
  safeText(card, ep.p, 76, y + 3, 12, "#1C0804", PRIMARY_FONT_BOLD, 540);
  // Auth
  safeText(card, ep.a, 624, y + 4, 11, "#7A6058", PRIMARY_FONT, 200);
  // Description
  safeText(card, ep.d, 836, y + 4, 12, "#1C0804", PRIMARY_FONT, w - 856);
}

async function buildBackendB2Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // Non-negotiables (2-col)
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 100;
    for (let i = 0; i < spec.rules.length; i++) {
      const r = spec.rules[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[r.t] || ACCENT.orange);
      safeText(card, r.v, 24, 22, 13, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.rules.length / 2) * (cardH + 12) + 40;
  }

  // Endpoint groups
  y = sectionHeader(page, "01", "Endpoint groups · /api/v1", 0, y);
  {
    const padTop = 18;
    const headerH = 44;
    const headerRowH = 28;
    const rowH = 30;
    const padBottom = 18;
    for (let i = 0; i < spec.groups.length; i++) {
      const g = spec.groups[i];
      const cardH = padTop + headerH + headerRowH + g.endpoints.length * rowH + padBottom;
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[g.t] || ACCENT.orange);

      // Group header
      safeText(card, g.id, 24, padTop, 12, ACCENT[g.t] || ACCENT.orange, PRIMARY_FONT_BOLD, 60);
      safeText(card, g.title, 80, padTop - 4, 22, "#1C0804", PRIMARY_FONT_BOLD, PAGE_W - 120);

      // Column headers
      const hy = padTop + headerH;
      safeText(card, "METHOD", 24,  hy, 10, "#7A6058", PRIMARY_FONT_BOLD, 64);
      safeText(card, "PATH",   100, hy, 10, "#7A6058", PRIMARY_FONT_BOLD, 540);
      safeText(card, "AUTH",   624, hy, 10, "#7A6058", PRIMARY_FONT_BOLD, 200);
      safeText(card, "PURPOSE",836, hy, 10, "#7A6058", PRIMARY_FONT_BOLD, 400);

      // Endpoint rows
      for (let j = 0; j < g.endpoints.length; j++) {
        endpointRow(card, g.endpoints[j], padTop + headerH + headerRowH + j * rowH, PAGE_W);
      }
      y += cardH + 16;
    }
    y += 16;
  }

  // Admin namespace
  y = sectionHeader(page, "02", "Admin namespace · /api/v1/admin", 0, y);
  {
    const padTop = 18;
    const headerRowH = 28;
    const rowH = 30;
    const padBottom = 18;
    const cardH = padTop + headerRowH + spec.admin.length * rowH + padBottom;
    const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.purple);
    safeText(card, "METHOD", 24,  padTop, 10, "#7A6058", PRIMARY_FONT_BOLD, 64);
    safeText(card, "PATH",   100, padTop, 10, "#7A6058", PRIMARY_FONT_BOLD, 540);
    safeText(card, "AUTH",   624, padTop, 10, "#7A6058", PRIMARY_FONT_BOLD, 200);
    safeText(card, "PURPOSE",836, padTop, 10, "#7A6058", PRIMARY_FONT_BOLD, 400);
    for (let j = 0; j < spec.admin.length; j++) {
      endpointRow(card, spec.admin[j], padTop + headerRowH + j * rowH, PAGE_W);
    }
    y += cardH + 32;
  }

  // Webhooks
  y = sectionHeader(page, "03", "Webhooks · signed · idempotent · NOT in public SDK", 0, y);
  {
    const cardH = 72;
    for (let i = 0; i < spec.webhooks.length; i++) {
      const w = spec.webhooks[i];
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[w.t] || ACCENT.orange);
      safeText(card, w.k, 24, 16, 13, ACCENT[w.t] || ACCENT.orange, PRIMARY_FONT_BOLD, 360);
      safeText(card, w.v, 400, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 424);
      y += cardH + 8;
    }
    y += 32;
  }

  // Error codes
  y = sectionHeader(page, "04", "Error envelope · canonical codes", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.errors.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.warning);
      safeText(card, spec.errors[i], 24, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  // Codegen
  y = sectionHeader(page, "05", "Codegen targets · spec is single source of truth", 0, y);
  {
    const cardH = 72;
    for (let i = 0; i < spec.codegen.length; i++) {
      const c = spec.codegen[i];
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[c.t] || ACCENT.orange);
      safeText(card, c.k, 24, 16, 13, ACCENT[c.t] || ACCENT.orange, PRIMARY_FONT_BOLD, 280);
      safeText(card, c.v, 320, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 344);
      y += cardH + 8;
    }
    y += 32;
  }

  // Exit
  y = sectionHeader(page, "Exit", "Phase B2 exit checklist", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.exit.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
      box.cornerRadius = 4;
      safeText(card, spec.exit[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
  }
}

async function buildBackendB3Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // Helper: 2-col rule grid
  function ruleGrid(items, cardH) {
    const colW = (PAGE_W - COL_GAP) / 2;
    for (let i = 0; i < items.length; i++) {
      const r = items[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const card = backendCard(page, cx, cy, colW, cardH, ACCENT[r.t] || ACCENT.orange);
      safeText(card, r.v, 24, 22, 13, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(items.length / 2) * (cardH + 12) + 40;
  }

  // Helper: 2-col labelled cards (k/v)
  function labelledGrid(items, cardH) {
    const colW = (PAGE_W - COL_GAP) / 2;
    for (let i = 0; i < items.length; i++) {
      const r = items[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const accent = ACCENT[r.t] || ACCENT.orange;
      const card = backendCard(page, cx, cy, colW, cardH, accent);
      safeText(card, r.k, 24, 18, 12, accent, PRIMARY_FONT_BOLD, colW - 48);
      safeText(card, r.v, 24, 40, 12, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(items.length / 2) * (cardH + 12) + 40;
  }

  // Helper: single-column wide row cards
  function rowList(items, cardH, accentKey) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
      box.cornerRadius = 4;
      safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  ruleGrid(spec.rules, 100);

  // 01 · Auth state machine
  y = sectionHeader(page, "01", "Auth state machine · the spine", 0, y);
  labelledGrid(spec.states, 110);

  // 02 · Flows
  y = sectionHeader(page, "02", "Flows · maps to Figma 09–15 + S-01/02/03 + S-06 + 62 + 66", 0, y);
  labelledGrid(spec.flows, 120);

  // 03 · Guards
  y = sectionHeader(page, "03", "Guards · decorators · cross-cutting", 0, y);
  labelledGrid(spec.guards, 110);

  // 04 · Tables
  y = sectionHeader(page, "04", "Tables touched · auth realm of B1", 0, y);
  labelledGrid(spec.tables, 100);

  // 05 · Tests
  y = sectionHeader(page, "05", "Test surface · unit + e2e", 0, y);
  rowList(spec.tests, 56, "purple");

  // 06 · Pending
  y = sectionHeader(page, "06", "Pending product / legal calls", 0, y);
  rowList(spec.pending, 56, "warning");

  // Exit
  y = sectionHeader(page, "Exit", "Phase B3 exit checklist", 0, y);
  rowList(spec.exit, 56, "teal");
}

async function buildAccessibilityPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Accessibility", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "WCAG 2.2 AA · 44pt touch targets · reduced-motion alternatives · screen-reader labels", 0, -72, 16, "#7A6058", PRIMARY_FONT, 1100);
  const items = ["Color contrast tokens", "Touch targets", "Focus rings", "Screen reader labels", "Reduced motion", "Dynamic type", "RTL handling", "Captions + transcripts"];
  for (let i = 0; i < items.length; i++) {
    const col = i % 4, row = Math.floor(i / 4);
    const card = createFrame(page, items[i], col * 360, row * 220, 340, 200, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 12;
    createText(card, items[i], 16, 16, 16, "#1C0804", PRIMARY_FONT_BOLD, 308);
    createText(card, "Annotation placeholder", 16, 48, 12, "#7A6058");
  }
}

async function buildHandoffNotesPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Roamlu Handoff Notes", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  const lines = [
    "Critical implementation notes",
    "",
    "1. Light app background must be #FFF8F4. Dark must be #181210. Never pure white or pure black.",
    "2. Every mobile screen needs light/ltr, dark/ltr, and Arabic RTL treatments.",
    "3. Arabic uses Cairo. Latin UI uses DM Sans. Display headlines use DM Serif Display Italic.",
    "4. Bottom nav fixed: Home · eSIM · Connect · Account. AI is never a bottom-nav tab.",
    "5. Compliance G-06 through G-12 required before App Store submission.",
    "6. Add accessibility annotations for every reusable component.",
    "7. Add reduced-motion alternatives for VPN ring, AI typing, sheets.",
    "8. eSIM provisioning requires Apple's CTCellularPlanProvisioning entitlement (~6 weeks).",
    "9. 3DS (S-07) must be a sandboxed webview — no JS bridge, no shared cookies.",
    "10. VPN G-07 disclaimer copy must be legally reviewed per jurisdiction.",
    "",
    GENERATION_NOTE
  ].join("\n");
  const note = figma.createText();
  note.fontName = PRIMARY_FONT;
  note.characters = lines;
  note.x = 0; note.y = 0; note.resize(1200, 560);
  note.fontSize = 16; note.fills = solidPaint("#1C0804");
  tag(note); page.appendChild(note);
}

async function assertSafeToRun() {
  await figma.loadAllPagesAsync();
  const isKnownRun = figma.root.getPluginData("generator") === ROOT_MARKER;
  if (isKnownRun) return true;
  const pages = figma.root.children;
  const nonEmpty = pages.filter((p) => p.children.length > 0);
  const safe = pages.length <= 1 &&
    (nonEmpty.length === 0 || (nonEmpty.length === 1 && pages[0].name === "Page 1"));
  if (!safe) { figma.closePlugin("Use this plugin on a new or disposable empty Figma Design file."); return false; }
  return true;
}

async function main() {
  if (!(await assertSafeToRun())) return;

  const fontOk = await pickPrimaryFont();
  if (!fontOk) { figma.closePlugin("No fonts available — install Inter, Roboto, or Helvetica and retry."); return; }

  await createStyles();

  for (let i = 0; i < PAGE_ORDER.length; i++) findOrCreatePage(i, PAGE_ORDER[i]);
  while (figma.root.children.length > PAGE_ORDER.length) {
    figma.root.children[figma.root.children.length - 1].remove();
  }

  const byName = Object.fromEntries(figma.root.children.map((p) => [p.name, p]));
  await buildDesignSystemPage(byName["■ Design System"]);
  await buildComponentsPage(byName["■ Components"]);
  for (const s of MOBILE_SECTIONS) await buildMobilePage(byName[s.page], s.screens);
  await buildAdminPage(byName["■ 12 — Admin Web"]);
  for (const b of BACKEND_PAGES) if (byName[b.name]) await buildBackendPage(byName[b.name], b);
  await buildPrototypePage(byName["■ Prototype"]);
  await buildHandoffNotesPage(byName["■ Handoff Notes"]);

  figma.root.setPluginData("generator", ROOT_MARKER);
  const warn = WARNINGS.length ? ` Warnings: ${[...new Set(WARNINGS)].join(" | ")}` : "";
  figma.notify(`Roamlu v2 structure created.${warn}`, { timeout: 8000 });
  figma.closePlugin();
}

main().catch((err) => {
  figma.closePlugin(`Roamlu setup failed: ${err && err.message ? err.message : String(err)}`);
});
