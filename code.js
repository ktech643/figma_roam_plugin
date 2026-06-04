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
  "■ B4 — Provider Adapters",
  "■ B5 — Billing & 3DS",
  "■ FL — Finance & Legal",
  "■ B6 — Loyalty & Referrals",
  "■ B7 — AI Advisor",
  "■ B8 — Admin Backend",
  "■ W1 — Web Admin Frontend",
  "■ M1 — Flutter Foundation",
  "■ M2 — Onboarding & Auth",
  "■ M3 — Home & eSIM",
  "■ M4 — Connect (VoIP & VPN)",
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
  {
    name: "■ B4 — Provider Adapters",
    kind: "b4",
    kicker: "B4 · BACKEND · PROVIDER ADAPTERS · ESIM · VOIP · VPN · ASYNC · WEBHOOKS",
    title: "Provider Adapters · eSIM · VoIP · VPN · Async + Webhooks",
    subtitle: "Sandbox + live behind a single interface · BullMQ async provisioning · webhook is source of truth · region-gating checked before enqueue · provision_status ≠ install_status · cost stored separately from price.",
    rules: [
      { t: "warning", v: "Business logic depends on the adapter interface only · zero provider SDK imports in modules/services" },
      { t: "warning", v: "Two impls per provider · sandbox (deterministic · no network) + live · selected by env · tests run against sandbox" },
      { t: "orange",  v: "Provisioning is async via BullMQ · API enqueues · job calls provider · webhook/poll confirms · API never blocks on slow provider" },
      { t: "warning", v: "Every inbound webhook signature-verified · idempotent on (provider, event_id) · safe to receive twice" },
      { t: "warning", v: "Provider cost stored separately from user price · both BigInt minor + currency · margin is queryable" },
      { t: "warning", v: "Region gate (regional_flags) checked BEFORE enqueue · disabled market returns typed REGION_DISABLED 403 · never started-then-failed" },
      { t: "warning", v: "Secrets via provider_configs + env · never hardcoded · failed jobs use bounded retries with backoff · DLQ surfaced to admin" },
      { t: "orange",  v: "provision_status (we have it) ≠ install_status (user installed on device) · provisioning success does NOT set install_status" },
    ],
    adapters: [
      { t: "orange", id: "EsimProvider", title: "eSIM adapter",
        blurb: "Catalog sync · async provisioning · LPA + QR + Universal Link · usage sync · top-up. Provider-agnostic config-driven endpoints.",
        methods: [
          "syncPlans / listCatalog · pulls provider catalog into esim_plans",
          "createOrder(planRef, idempotencyKey) → providerOrderRef",
          "getOrderStatus(providerOrderRef) → status enum",
          "fetchActivation → { lpaActivationString · qrPayload · universalLink · iccid }",
          "getUsage(iccid) → { usedMb · period · recordedAt }",
          "createTopup(iccid, planRef, idempotencyKey)",
        ],
        stateMachine: "esim_orders · pending → paid → provisioning → provisioned → failed",
        webhook: "POST /webhooks/esim · provider provisioning callback · verify signature · advance order state idempotently · emit notification event",
        notes: [
          "On provisioned: populate esims row with LPA · QR · Universal Link · ICCID",
          "Scheduled usage sync writes esim_usage append-only · surfaces low-balance + expiry events",
          "App reports install separately · install_status never inferred from provision",
        ],
      },
      { t: "orange", id: "VoipProvider", title: "VoIP adapter",
        blurb: "DID search · reservation with TTL · purchase · CDR ingestion. Region-gated · KYC may be required per country.",
        methods: [
          "searchAvailableNumbers(country, area) · paginated · region-gated",
          "reserveNumber(numberRef) → reservation_id with TTL",
          "purchaseNumber(reservationId, idempotencyKey) → did",
          "releaseNumber(numberId)",
          "fetchCdrs(numberId, since) · webhook or pull",
        ],
        stateMachine: "voip_numbers · reserved → active → released · expired reservations auto-release",
        webhook: "POST /webhooks/voip · CDR + lifecycle events · idempotent on (provider, event_id) · writes calls separately with cost minor+currency",
        notes: [
          "Reservation TTL enforced server-side · cron sweeps expired",
          "CDRs append-only · cost stored separately from any user-facing price",
          "regional_flags.voip_enabled = false → REGION_DISABLED before reserve/purchase",
        ],
      },
      { t: "teal", id: "VpnProvider", title: "VPN adapter",
        blurb: "Managed infra (e.g. WireGuard peers) or resold capacity behind the interface · server credentials live only in the live adapter.",
        methods: [
          "syncServers / listServers · capacity + region + enabled",
          "issueConfig(userId, serverId) → connection config + one-shot credentials",
          "startSession(userId, serverId) · gated by G-07 consent",
          "endSession(sessionId) · also called on disconnect webhook",
          "getSessionStatus(sessionId)",
        ],
        stateMachine: "vpn_sessions · started → ended · capacity enforced from vpn_servers",
        webhook: "Provider session events · idempotent · update bytes_in/out + ended_at",
        notes: [
          "Live adapter is the only place that knows server keys · sandbox returns deterministic fake configs",
          "regional_flags.vpn_enabled = false → REGION_DISABLED before issueConfig",
          "G-07 VPN-legal consent (B3) must exist before issueConfig · else typed error · reject without enqueue",
        ],
      },
    ],
    crosscut: [
      { t: "orange",  k: "Provisioning orchestrator", v: "Order created → payment confirmed (B5 emits later · accept a paid signal now) → enqueue provisioning → handle success / failure / timeout · clean awaiting-payment vs provisioning distinction" },
      { t: "warning", k: "Retries + DLQ", v: "BullMQ exponential backoff with caps · final failure → dead-letter state · admin sees + can manual-retry · audit on retry" },
      { t: "purple",  k: "Admin surface", v: "provider_configs read/write (UI in B8) · DLQ visibility · manual re-provision action audited · sandbox/live flag flips per provider" },
      { t: "teal",    k: "Provider-agnostic config", v: "No commercial provider name in business code · config-driven endpoints + keys · swap provider by editing provider_configs + env" },
      { t: "warning", k: "Region gate placement", v: "Checked at API layer BEFORE enqueue · second check at adapter layer as defense-in-depth · never partially-provisioned then refunded" },
    ],
    tests: [
      "Successful provision · order pending → paid → provisioning → provisioned · esims row populated with LPA + QR + iccid",
      "Provider failure → retry chain → dead-letter · admin sees DLQ entry · audit trail intact",
      "Duplicate webhook idempotency · second delivery is no-op · state unchanged · no double-emit of notifications",
      "Region-gated refusal · disabled market returns REGION_DISABLED 403 · zero provisioning row created · zero job enqueued",
      "Reservation TTL · expired DID reservation auto-released · purchaseNumber on expired reservation rejected",
      "Provision-vs-install separation · provisioned eSIM does NOT set install_status · separate endpoint sets install confirmation",
      "VPN G-07 gate · issueConfig without consent record returns typed error · with consent succeeds",
      "Cost-vs-price · provider cost recorded separately from user price · margin query returns expected delta",
      "Sandbox determinism · same input twice → identical fixture output · safe for CI replay",
      "Webhook signature verification · invalid signature 401 · valid + replay handled idempotently",
    ],
    decisions: [
      "eSIM aggregator selection · catalog coverage Gulf + key destinations · margin · activation channels (LPA + QR + Universal Link) · webhook reliability",
      "VoIP / DID provider · per-country availability · KYC requirements (KSA / UAE may demand) · CDR delivery (push vs pull) · pricing model",
      "VPN infrastructure · self-hosted WireGuard peers vs resold capacity · server geographies · capacity per server · key-rotation cadence",
      "App Store channel call (FL D2) · VPN through external PSP requires App Review judgment before iOS submission",
      "KYC scope per market for DID purchase · which fields · how stored · retention",
    ],
    exit: [
      "Three adapters live · sandbox + live skeleton · selection by env · tests pass against sandbox",
      "BullMQ provisioning queue · success / failure / DLQ paths green",
      "Webhooks signed + idempotent · payment + esim + voip + push wired",
      "provision_status / install_status separation enforced + tested",
      "Region gate enforced at API layer + defense-in-depth at adapter layer",
      "Provider cost stored separately from price · margin queryable · admin reconciliation aware",
      "Admin can flip a provider sandbox/live + manual re-provision (audited)",
      "G-07 VPN consent gate enforced · issueConfig rejects without consent record",
      "OpenAPI updated · adapter-touching endpoints + webhook schemas referenced",
      "Live provider procurement / KYC decisions logged in Handoff · not blockers for sandbox build",
    ],
  },
  {
    name: "■ B5 — Billing & 3DS",
    kind: "b5",
    kicker: "B5 · BACKEND · BILLING & 3DS · PAYMENTINTENT · WEBHOOK SOURCE-OF-TRUTH · AUTO-REFUND",
    title: "Billing & 3DS · PaymentIntent · Webhook source-of-truth",
    subtitle: "Maps to 25–27 purchase + S-07 3DS + 48–53 billing + B-01 add card + B-02 cancel + G-08/G-12/G-14. Money is BigInt minor + ISO 4217 · totals server-side · webhook is final · 3DS-aware everywhere · paid-but-failed-provision → auto-refund.",
    rules: [
      { t: "warning", v: "All amounts BigInt minor units + ISO 4217 · totals computed server-side · client-sent prices ignored" },
      { t: "warning", v: "Payments via PaymentProvider adapter · Stripe is first concrete · zero PSP SDK in business logic · region-swappable" },
      { t: "warning", v: "3DS / SCA assumed required · every charge uses PaymentIntent flow · requires_action returned · S-07 resolves · then confirm" },
      { t: "warning", v: "Raw card data never reaches backend · only provider payment-method token references stored" },
      { t: "warning", v: "Idempotency-Key required on every charge + refund · same key never double-charges · 24h replay window" },
      { t: "warning", v: "Webhook = source of truth for final payment state · client confirmation never trusted · signed + idempotent on (provider, event_id)" },
      { t: "warning", v: "Paid-but-provisioning-failed → automatic refund OR flagged manual-review · never charged-but-undelivered silent failure" },
      { t: "purple",  v: "Audit on every payment · refund · subscription state change · reconcilable against provider events" },
    ],
    flows: [
      { t: "orange",  k: "F1 · One-time purchase (eSIM / VoIP / top-up)", v: "25 Review (server computes line items + tax + total + G-08 refund policy v_) → POST /payments/intents (idem) → S-07 3DS if requires_action → /payments/:id confirm → webhook payment_succeeded → emit paid → B4 provisioning → 27 success" },
      { t: "warning", k: "F2 · Payment timeout (G-12)", v: "Intent not confirmed within window → timed_out state · app surfaces retry · safe retry uses same Idempotency-Key · race-safe vs late webhook arriving after timeout" },
      { t: "warning", k: "F3 · Paid but provision failed", v: "B4 reports failed after payment succeeded → automatic refund via PaymentProvider · OR flag manual-review per refund policy · user notified · audit row · A19 reconciliation aware" },
      { t: "orange",  k: "F4 · Subscription create + trial", v: "POST /billing/subscription with plan + optional trial_days → trial_end + current_period_end set · webhook drives every renewal · G-14 trial-expiry event drives first-open modal" },
      { t: "purple",  k: "F5 · Change plan (proration) + cancel (B-02)", v: "Upgrade/downgrade · proration handled by provider · cancel-at-period-end vs immediate · confirmation modal · audit · screen 51 reflects new state" },
      { t: "orange",  k: "F6 · Add card (B-01)", v: "Setup intent · 3DS for verification if required · attach payment-method · default selection (52) · token-ref only" },
      { t: "warning", k: "F7 · Refund (customer / admin)", v: "Reason captured · routed per persisted refund policy version · provider refund (idempotent) · status webhook drives final state · reconciles against original payment" },
      { t: "teal",    k: "F8 · Reconciliation loop (A19)", v: "Scheduled job · internal payments/refunds vs provider events · mismatches (amount · status · missing webhook) → reconciliation_flags table · admin reviews" },
    ],
    methods: [
      "createPaymentIntent({ amount, currency, idempotencyKey, customerRef, metadata }) → { intentRef, clientSecret, status }",
      "confirmPaymentIntent(intentRef) · explicit confirm path for off-session retries",
      "cancelPaymentIntent(intentRef) · also called by timeout job",
      "createSetupIntent(customerRef) · for B-01 add card · 3DS verification",
      "attachPaymentMethod / detachPaymentMethod (block detach if only PM on active sub)",
      "createSubscription / updateSubscription / cancelSubscription · proration mode per provider",
      "createRefund({ paymentRef, amount, reason, idempotencyKey })",
      "listEvents(since) · pull-mode reconciliation backstop in case of dropped webhooks",
    ],
    tables: [
      { t: "warning", k: "payments", v: "Adds 3ds_status enum · timed_out / requires_action / succeeded / failed / refunded · idempotency_key unique" },
      { t: "warning", k: "subscriptions", v: "trial_end · current_period_end · canceled_at · cancel_at_period_end flag · status enum drives renewal job" },
      { t: "warning", k: "refunds", v: "reason · amount · currency · status · provider_refund_ref · policy_version · created_at" },
      { t: "purple",  k: "tax_lines", v: "Per invoice · region · rate · base · amount · currency (FL D3 drives values)" },
      { t: "warning", k: "dunning_attempts (new)", v: "subscription_id · attempt_no · last_error · next_attempt_at · gives admin a clear retry trail" },
      { t: "teal",    k: "reconciliation_flags (new)", v: "type · payment_id / refund_id · expected vs actual · resolved_at · admin notes" },
      { t: "orange",  k: "refund_policies (versioned)", v: "Versioned policy text · acknowledged at G-08 · stored on payment row for audit" },
      { t: "purple",  k: "webhook_events", v: "B1 already exists · enforced unique on (provider, event_id) · payload retained for replay/audit" },
    ],
    tests: [
      "Idempotent charge · same Idempotency-Key replayed → no double charge · second response mirrors first",
      "3DS requires_action path · intent returns requires_action · S-07 client confirms · webhook flips to succeeded",
      "Webhook-confirmed success · client confirmation alone does not flip state · webhook is the gate",
      "Payment timeout · intent ages out · timed_out state · safe retry with same idem-key · late webhook does not re-charge",
      "Paid-but-provisioning-failed · B4 fails after webhook succeeded → auto-refund issued · user notified · audit + reconciliation row",
      "Subscription renewal · invoice paid webhook extends period · entitlement event emitted",
      "Subscription failed renewal · dunning_attempts row created · backoff schedule set · final attempt → cancellation",
      "Refund reconciles · refund webhook lands · payment status updated · A19 sees zero drift",
      "Out-of-order webhooks · later event id processed before earlier one · final state still consistent · idempotent",
      "Currency on payment · stored currency reflects actual charge · multi-currency users see both labels",
    ],
    pending: [
      "Tax / VAT handling per Gulf market (FL D3) · UAE 5 · KSA 15 · Bahrain 10 · Oman 5 · Qatar 0 · Kuwait none yet · place-of-supply ruling outstanding",
      "Live PSP choice (FL D1) · Stripe (UAE limited) vs Tap / PayTabs / Telr / Checkout.com · MoR option (Paddle/Dodo) sidesteps tax registration · adapter stays the same",
      "Refund policy specifics (FL D4) · eSIM non-refundable once provisioned · proration mode · partial vs full · App Store IAP vs external PSP wording",
      "Proration rules · provider-native (Stripe) vs manual (regional PSPs) · downgrade-at-period-end vs immediate",
      "App Store channel for VPN (FL D2) · external PSP vs IAP decision before iOS submission · loyalty IAP if sold directly",
    ],
    exit: [
      "PaymentProvider adapter live · Stripe concrete + sandbox · region-swappable interface holds",
      "3DS green in sandbox · requires_action path round-trips through S-07 · webhook confirms",
      "Webhook is source of truth · signed + idempotent · out-of-order tolerated",
      "Idempotent charge + refund verified · same key never double-charges",
      "Auto-refund on paid-but-provision-failed · or flagged manual-review · never silent",
      "Subscription create / trial / renewal / dunning / cancel green · G-14 expiry event wired",
      "B-01 add card via setup intent · token-ref only · default selection works",
      "A19 reconciliation job runs · reconciliation_flags surfaces drift · finance-grade",
      "OpenAPI updated · payments + subscriptions + refunds + intents documented · 3DS state in spec",
      "Tax + PSP + refund-policy decisions logged in Handoff · NOT blockers for sandbox build",
    ],
  },
  {
    name: "■ FL — Finance & Legal",
    kind: "fl",
    kicker: "FL · FINANCE & LEGAL · DECISIONS · CONFIG · NOT CODE · FEEDS B5",
    title: "Finance & Legal Decisions · feeds B5",
    subtitle: "Resolves the items B5 flagged as finance / legal · output is configuration + decisions wired into provider_configs / regional_flags / refund_policies · NOT legal / tax / financial advice — every figure researched June 2026 from secondary sources · confirm with UAE/KSA-licensed counsel + tax advisor before launch.",
    rules: [
      { t: "warning", v: "Disclaimer · figures researched June 2026 from secondary sources · rates · registration rules · e-invoicing mandates · App Store policy all move · counsel sign-off required pre-launch" },
      { t: "warning", v: "Output of FL is config + decisions · NOT build instructions · wired into provider_configs · regional_flags · refund_policies · tax_rates" },
      { t: "warning", v: "Entity / domicile resolves first · drives Stripe eligibility · drives every VAT registration obligation · drives e-invoicing scope" },
      { t: "warning", v: "App Store channel mixing avoided · external PSP refund flow vs Apple-owned IAP refund · two paths is a support nightmare" },
      { t: "orange",  v: "B5 PaymentProvider adapter unchanged · processor swap is config · Stripe ref for dev · regional live (Tap or PayTabs likely first) selected via provider_configs" },
      { t: "teal",    v: "Tax data-driven · per-market rate + place-of-supply rule · KSA 15 vs UAE 5 must never be hardcoded" },
      { t: "purple",  v: "Refund policy versioned · text + version stored · acceptance persisted on G-08 acknowledgement · payment row carries policy_version for audit" },
      { t: "warning", v: "KSA gate stays disabled in regional_flags until written place-of-supply ruling lands · 15% exposure too large to guess" },
    ],
    decisions: [
      { t: "orange",  k: "D1 · Payment processor for the Gulf",
        v: "Stripe limited-support in UAE · regional gateways are the practical default for card + Mada/KNET/Apple Pay/STC Pay · 3DS2 mandated by UAE Central Bank · surcharging not permitted (cost out of margin) · onboarding 1–2+ weeks not guaranteed",
        opts: "Tap (GCC · KNET/Mada/Apple Pay · token recurring) · PayTabs (multi-currency · Mada/KNET/SADAD · ~2.85% + 1 AED) · Telr (Dubai · strong bank ties) · Checkout.com (enterprise · smoothest 3DS) · Network Intl. / Amazon Payment Services (bank-backed · longest onboarding) · Stripe (best dunning · UAE limited · needs supported-country entity) · MoR (Paddle/Dodo) absorbs Gulf VAT + e-invoicing at higher %",
        build: "Keep B0 PaymentProvider adapter · Stripe = reference dev adapter · regional live (Tap or PayTabs first) via provider_configs · re-confirm fees · recurring · onboarding directly with chosen provider before commit" },
      { t: "warning", k: "D2 · App Store payment channel (architecture-deciding)",
        v: "Apple guideline 3.1.5 / 3.1.3(e) · goods/services consumed outside the app must use non-IAP payment · App Review has treated eSIM/data plans as physical service → external PSP · in-app-consumed digital content has been rejected for not using IAP · review outcomes inconsistent + reviewer-dependent",
        opts: "eSIM data plans + VoIP numbers → external PSP (forum evidence supports) · VPN as recurring digital subscription consumed in-app = ambiguous · loyalty points as standalone digital currency would lean IAP if sold directly",
        build: "eSIM + VoIP + top-ups = external-PSP via B5 PaymentIntent/3DS · VPN decision deliberate + defended in App Review notes · do not show IAP and external pricing for the same item in same storefront without checking current entitlement rules" },
      { t: "purple",  k: "D3 · VAT / tax per market",
        v: "UAE 5% (FTA · EmaraTax · e-invoicing phasing through 2026) · KSA 15% (ZATCA · Fatoorah Phase 2 mandatory waves through 2026 · penalties) · Bahrain 10% (NBR) · Oman 5% (e-invoicing 2026–2028) · Qatar 0% (drafted not implemented) · Kuwait none yet (likely starts 5%)",
        opts: "Place-of-supply genuinely ambiguous for travel connectivity · UAE rules key on use-and-enjoyment · UAE-resident on Europe eSIM uses-and-enjoys abroad · written ruling required before KSA · non-resident B2C digital → register from first sale (no threshold) · B2B reverse charge",
        build: "Store rate + rule per-market in tax_rates / regional_flags · never hardcoded · compute + display tax on screen-25 quote per customer market + ruling · plan e-invoicing output (ZATCA Phase 2 + UAE) as real integration · MoR option in D1 absorbs e-invoicing burden" },
      { t: "warning", k: "D4 · Refund policy & proration",
        v: "Refund channel follows D2 · external PSP → our policy + UAE/KSA consumer-protection law · IAP → Apple owns refund · B5 already persists + versions G-08 acknowledgement · this phase supplies actual policy text · proration native (Stripe) vs manual (regional gateways often)",
        opts: "eSIM typically non-refundable once provisioned/activated · which is exactly why B4 provision-vs-install split matters · unactivated / failed-provision auto-refund per B5 · subscription cancellation cancel-at-period-end vs immediate per B-02",
        build: "Concrete refund policy text written + counsel-confirmed against UAE Consumer Protection + KSA equivalents · text + version in config · app renders current version + persists acceptance · regional gateway w/o native proration → implement in B5 · Stripe → inherit" },
    ],
    rates: [
      { t: "orange",  k: "UAE",          v: "5%   · FTA / EmaraTax · e-invoicing being mandated · phased through 2026" },
      { t: "warning", k: "Saudi Arabia", v: "15%  · ZATCA · Fatoorah Phase 2 mandatory in waves through 2026 · penalties for non-compliance" },
      { t: "purple",  k: "Bahrain",      v: "10%  · National Board of Revenue" },
      { t: "teal",    k: "Oman",         v: "5%   · Oman Tax Authority · e-invoicing phasing announced 2026–2028" },
      { t: "purple",  k: "Qatar",        v: "0%   · drafted · not implemented" },
      { t: "purple",  k: "Kuwait",       v: "none yet · not implemented · would likely start at 5%" },
    ],
    feeds: [
      { t: "orange",  k: "provider_configs", v: "Chosen PSP(s) + credentials · sandbox / live · recurring capability flag · region routing rule" },
      { t: "warning", k: "regional_flags · vat_rate", v: "Per-market rate · KSA 15 · UAE 5 · Bahrain 10 · Oman 5 · Qatar 0 · Kuwait none yet · data-driven" },
      { t: "warning", k: "regional_flags · place_of_supply", v: "Rule per service type (eSIM · VoIP · VPN) · resolved per professional ruling · drives where VAT applies" },
      { t: "purple",  k: "regional_flags · payment_channel", v: "Per product type · eSIM = external · VoIP = external · top-ups = external · VPN = decided value before iOS submission" },
      { t: "teal",    k: "regional_flags · einvoicing_required", v: "Per market · KSA · UAE flagged · drives integration backlog or MoR adoption" },
      { t: "orange",  k: "refund_policies", v: "Versioned text · acknowledged at G-08 · stored on payment row · counsel-reviewed wording" },
      { t: "purple",  k: "proration_mode", v: "native (Stripe inherits) vs manual (regional · implement in B5) · per provider config" },
    ],
    open: [
      "Entity / domicile · drives Stripe eligibility + every VAT registration obligation · resolve FIRST before processor or market rollout",
      "Written place-of-supply ruling for eSIM / VoIP / VPN · especially before enabling KSA at 15% · counsel + tax advisor",
      "E-invoicing approach · build (ZATCA Phase 2 + UAE) vs shift to Merchant of Record · MoR absorbs both at higher %",
      "Final App Store channel call for VPN · IAP vs external · before iOS submission · documented in App Review notes",
      "Refund policy wording · UAE Consumer Protection Law + KSA equivalents · counsel sign-off on text + version",
      "Confirm live PSP fees · recurring support · onboarding timeline directly with chosen provider · before commit",
    ],
    exit: [
      "PaymentProvider adapter wired in B0 · regional live skeleton selected · Stripe ref for dev",
      "regional_flags extended · vat_rate · place_of_supply · payment_channel · einvoicing_required",
      "tax_rates seeded per market · KSA 15 · UAE 5 · Bahrain 10 · Oman 5 · Qatar 0 · Kuwait null",
      "refund_policies seeded · versioned · text + version · counsel-reviewed wording",
      "KSA market gate stays DISABLED in regional_flags until written place-of-supply ruling lands",
      "App Store channel decision recorded · eSIM + VoIP + top-ups = external · VPN = decided value",
      "Proration mode set per provider · Stripe native vs regional manual",
      "All open items logged in Handoff · counsel + tax advisor + procurement owners assigned",
      "FL output is config + decisions · NOT code · sandbox build proceeds without these blocking",
    ],
  },
  {
    name: "■ B6 — Loyalty & Referrals",
    kind: "b6",
    kicker: "B6 · BACKEND · LOYALTY & REFERRALS · APPEND-ONLY LEDGER · EVENT-DRIVEN EARN · ANTI-ABUSE",
    title: "Loyalty & Referrals · append-only ledger",
    subtitle: "Maps to 54–57 (loyalty dashboard · how-to-earn · redeem · referral). Depends on B5 events for earning. Points are a financial liability · balance = SUM(points_ledger) · earn is server-side from events · redeem is concurrency-safe · referrals are server-attributed + abuse-checked.",
    rules: [
      { t: "warning", v: "Points are an APPEND-ONLY LEDGER · points_ledger never mutated · balance = SUM of signed entries · no balance column anywhere" },
      { t: "warning", v: "Earning is event-driven · payment_succeeded · subscription_renewed · referral_completed · client can NEVER assert 'give me points'" },
      { t: "warning", v: "Point value is config · points-per-currency-unit · multipliers · never hardcoded · economics change without redeploy" },
      { t: "warning", v: "Earn + redeem are idempotent against source event · replayed webhook MUST NOT double-award · unique on (event_id, kind)" },
      { t: "orange",  v: "Treat points as financial liability · every balance reconciles to the ledger · bulk / admin adjustments audited · reviewed alongside B5 reconciliation (A19)" },
      { t: "purple",  v: "No casino patterns · no artificial urgency · no dark patterns in API responses that the client would surface (per Figma design intent)" },
      { t: "teal",    v: "Earn rules versioned · ledger entry references the rule version in effect at time of earning · historical entries stay accurate after rule change" },
      { t: "warning", v: "Concurrent redemption never overspends · transaction + balance recheck inside the write · pessimistic lock or serializable isolation per Postgres setup" },
    ],
    flows: [
      { t: "orange",  k: "F1 · Earn from purchase (B5 event)", v: "B5 emits payment_succeeded → loyalty subscriber resolves rule version + multipliers from config → writes positive ledger entry · ref = order_id · idempotency on (event_id, kind=earn_purchase)" },
      { t: "orange",  k: "F2 · Earn from subscription renewal", v: "B5 emits subscription_renewed → ledger entry per renewal · ref = subscription_id + period · first-purchase / tier bonus rules apply per config" },
      { t: "purple",  k: "F3 · Earn from referral completion", v: "Referral completed event (F7) → ledger entries for BOTH referrer + referee per config · ref = referral_id · idempotent on referral_id" },
      { t: "warning", k: "F4 · Redeem (screen 56)", v: "POST /loyalty/redeem (idem) → tx: SUM(ledger) ≥ cost recheck → write negative ledger + redemption row → emit entitlement (B5 quote discount or account credit) · concurrent attempts → second fails not overspends" },
      { t: "teal",    k: "F5 · Quote-time application (B5 25)", v: "Applied reward reduces screen-25 total SERVER-SIDE · client-sent discount ignored · entitlement validated against redemption row · single-use enforced" },
      { t: "warning", k: "F6 · Expiry (scheduled, off by default)", v: "Job scans aged positive entries · writes NEGATIVE entry with reason=expiry · fully traceable · configurable per-rule · disabled until policy set" },
      { t: "purple",  k: "F7 · Referral attribution + anti-abuse", v: "Referee uses code → referral pending → on first paid purchase → qualified → checks (self · device · payment instrument · velocity) → completed OR flagged for B8 admin · never silent reward" },
      { t: "orange",  k: "F8 · Admin manual adjustment", v: "B8 admin writes audited ledger entry · reason required · adjustment_id ref · audit row · admin role gated · never UI-direct balance edit" },
    ],
    tables: [
      { t: "warning", k: "points_ledger (append-only)", v: "id · user_id · delta (signed BigInt) · reason enum · source_kind · source_id · rule_version · created_at · UNIQUE (source_kind, source_id) for idempotency · NEVER UPDATE" },
      { t: "orange",  k: "redemptions", v: "id · user_id · reward_id · point_cost · status · entitlement_ref · created_at · idempotency_key UNIQUE · drives ledger negative entry" },
      { t: "orange",  k: "rewards (config-backed)", v: "id · kind (discount_next_purchase | account_credit | free_topup) · point_cost · value (minor + currency) · active flag · region availability" },
      { t: "purple",  k: "referrals", v: "id · referrer_id · referee_id · code · status (pending | qualified | completed | flagged | rejected) · qualified_at · completed_at · flag_reasons[]" },
      { t: "purple",  k: "referral_codes", v: "code · user_id · created_at · UNIQUE · public-shareable · deterministic per user (or rotateable)" },
      { t: "teal",    k: "earn_rules (versioned)", v: "version · effective_from · points_per_currency · per-product multipliers · first-purchase bonus · tier bonuses · ledger entries reference version" },
      { t: "teal",    k: "tiers (computed, optional)", v: "Computed from trailing spend / points · NOT a frozen flag · stored as derivation rule · re-evaluated on read" },
      { t: "warning", k: "loyalty_audit", v: "Admin adjustments · reason · admin_id · before/after balance computed at write · queryable by user_id" },
    ],
    endpoints: [
      "GET    /loyalty/dashboard          · computed balance · recent ledger · current tier (if any) · how-to-earn rendered from live config",
      "GET    /loyalty/ledger?cursor=     · paginated ledger entries · cursor pagination per B2",
      "GET    /loyalty/rewards            · active rewards catalog · region-filtered · point cost + value (minor + currency)",
      "POST   /loyalty/redeem             · Idempotency-Key required · validates balance + writes negative entry in tx · returns entitlement",
      "GET    /referrals/me               · user's referral code · share payload (text + link · client owns share sheet)",
      "GET    /referrals                  · list of referrals · status · qualified_at · completed_at",
      "POST   /referrals/apply            · referee submits code · pending row created · single-use per referee enforced",
      "POST   /admin/loyalty/adjust       · audited manual adjustment · reason required · admin role · B8 UI",
      "GET    /admin/loyalty/users/:id    · user ledger + flagged referrals · admin role",
      "GET    /admin/loyalty/config       · read earn / redeem / referral config · PATCH updates produce new rule version",
    ],
    tests: [
      "Balance = SUM(points_ledger) · arbitrary entry sequence · computed balance matches expected total exactly",
      "Idempotent earn · payment_succeeded webhook replayed → second insert rejected on UNIQUE (source_kind, source_id) · single ledger entry",
      "Idempotent redeem · same Idempotency-Key replayed → no double-spend · second response mirrors first",
      "Concurrent redemption · two parallel redeems for last available points → exactly one succeeds · the other 409 INSUFFICIENT_BALANCE",
      "Quote-time discount · client-sent discount ignored · only redemption row entitlement reduces server-computed total",
      "Referral self-prevention · referee.id == referrer.id → 400 SELF_REFERRAL · no row created",
      "Referral duplicate prevention · referee already has a pending/completed referral → 409 ALREADY_REFERRED",
      "Flagged referral does NOT auto-pay · same-device / payment-instrument heuristic trips → status=flagged · zero ledger entry · admin review required",
      "Expiry job correctness · aged entries within window expire → negative entry written · balance reduces by exact expiring amount · idempotent re-run",
      "Rule version pinning · ledger entry written under v1 keeps v1 · rules upgraded to v2 mid-test · historical balance unchanged",
      "Admin adjustment audit · adjust writes ledger + audit row · audit references admin_id + reason · ledger entry source_kind=adjustment",
    ],
    pending: [
      "Point value / economics · points-per-AED · per-product multipliers · first-purchase bonus · CFO + product sign-off · liability sizing",
      "Expiry policy · whether to expire · window (12 / 18 / 24 mo) · grace notification cadence · OFF by default until decided",
      "Referral reward amounts + qualification rule · referrer + referee splits · qualifies on first paid purchase or first activated eSIM · KSA/UAE consumer-protection check on language",
      "Tier structure (if any) · trailing-spend windows · perks · shown on screen 54 · or skip tiers entirely for v1",
      "Anti-abuse heuristics signal weights · device fingerprint · payment instrument · velocity · false-positive rate vs reward leakage tradeoff",
      "Reward catalog · which redemptions launch · discount-on-next-purchase vs account credit vs free top-up · per-region availability",
    ],
    exit: [
      "points_ledger live · append-only · UNIQUE on (source_kind, source_id) · balance = SUM verified by tests",
      "Earn subscribers wired to B5 · payment_succeeded · subscription_renewed · referral_completed · all idempotent",
      "Redemption transaction safe · concurrent redeems never overspend · entitlement applies at B5 quote time",
      "Referral lifecycle green · pending → qualified → completed · self / duplicate / flagged paths covered",
      "Anti-abuse heuristics in place · flagged referrals route to B8 admin · never auto-pay",
      "Earn rules versioned · ledger references version · historical entries stay correct after config change",
      "Expiry job exists but DISABLED until policy decided · negative-entry mechanism tested in sandbox",
      "Admin endpoints · audited adjustment · ledger view · flagged referral review · config read/update",
      "OpenAPI updated · loyalty + referrals endpoints documented · ledger entry schema referenced",
      "Liability dashboard · total outstanding points × value visible to finance · feeds A19 reconciliation",
      "Business decisions logged in Handoff · NOT code blockers · sandbox build proceeds with placeholder economics",
    ],
  },
  {
    name: "■ B7 — AI Advisor",
    kind: "b7",
    kicker: "B7 · BACKEND · AI ADVISOR · GROUNDED RECOMMENDATIONS · MODELPROVIDER ADAPTER · ENTRY-POINT NOT TAB",
    title: "AI Advisor · grounded · explainable · routes to B5",
    subtitle: "Maps to 44–47 (chat welcome / active · recommendation card · advisor history). Entry-point feature · NOT a bottom-nav tab. Reasoning layer over live catalog · model never invents plans/prices · accept routes into the B5 quote → payment → B4 provisioning path.",
    rules: [
      { t: "warning", v: "Model NEVER invents catalog · prices · availability · plans/prices/coverage come from live esim_plans / voip_plans · model is reasoning + explanation only" },
      { t: "warning", v: "Recommendations are EXPLAINABLE · candidate set + rationale persisted · why this plan surfaced to user (per Figma intent)" },
      { t: "warning", v: "Model called via ModelProvider adapter · vendor/version swappable via config · never imported into business logic · API key server-side ONLY" },
      { t: "warning", v: "Region gating still applies · regional_flags respected · disabled markets never recommended · VoIP/VPN availability rules honored" },
      { t: "warning", v: "Recommendation = suggestion · NOT a charge · accept routes to normal B5 quote → payment → B4 provisioning · Advisor never provisions or charges directly" },
      { t: "orange",  v: "Cost + abuse control · per-user rate-limit · context size cap · token cap per request · usage logged (tokens · latency · cost) for B8 admin" },
      { t: "purple",  v: "Safety + privacy · PII redacted before model payload · only what's needed for recommendation sent · persistence limited to history + explainability" },
      { t: "teal",    v: "Structured-output validation · every plan id from model checked against live catalog · invalid → drop or repair · NEVER surface hallucinated plan" },
    ],
    flows: [
      { t: "orange",  k: "F1 · Grounded recommendation", v: "User intent (destination · trip length · expected data · calls/VPN need) → deterministic catalog retrieval → candidate set → ModelProvider ranks + explains → validate every plan_id against catalog → persist recommendation row · status=shown" },
      { t: "orange",  k: "F2 · Chat thread", v: "POST advisor/threads/:id/messages → assemble bounded context (recent messages + retrieved candidates) → ModelProvider → stream or respond → persist assistant message · token + latency logged" },
      { t: "warning", k: "F3 · Structured output validation", v: "Model returns { recommended_plan_ref · rationale · alternatives[] } → schema-parse → every plan_id verified against esim_plans/voip_plans + region gate → drop/repair invalid entries · never surface hallucinated plan" },
      { t: "teal",    k: "F4 · Accept → B5 handoff (screen 46)", v: "User accepts → recommendation.status=accepted → create B5 quote for that plan → hand off to screen 25 purchase-review → linkage recorded for loyalty + analytics + acceptance-rate metric" },
      { t: "purple",  k: "F5 · Dismiss", v: "User dismisses → recommendation.status=dismissed · reason optional · feeds future tuning + acceptance-rate metric" },
      { t: "purple",  k: "F6 · Advisor history (screen 47)", v: "List past threads + past recommendations with outcomes (shown / accepted → order_id / dismissed) · cursor pagination" },
      { t: "warning", k: "F7 · Region + entitlement gate", v: "Retrieval pre-filters by user.market_region via regional_flags · model never sees disabled-market plans · VPN/VoIP rules honored · G-07 VPN consent gate respected" },
      { t: "warning", k: "F8 · PII redaction", v: "Pre-send redactor strips identifiers not needed for the recommendation · email · phone · payment refs · iccid · stored payload audit-only · model payload minimal" },
    ],
    methods: [
      "createCompletion({ messages, tools?, maxTokens, temperature, requestId }) → { text | toolCalls, usage: { promptTokens, completionTokens, latencyMs, costMinor } }",
      "createStreamingCompletion(...) → AsyncIterable<chunk> · SSE-compatible · same usage on completion",
      "embed({ texts }) → vectors · used by retrieval grounding (optional v1 · keyword retrieval acceptable)",
      "validateStructuredOutput(schema, raw) → { ok, value, errors[] } · zod schema enforces { recommended_plan_ref · rationale · alternatives[] }",
      "redactPII(payload) → payload' · strips email · phone · payment_method_ref · iccid · did · session ids · user_id replaced with opaque hash",
    ],
    tables: [
      { t: "orange",  k: "advisor_threads", v: "id · user_id · title · created_at · last_message_at · status (active | archived) · soft-delete on user request" },
      { t: "orange",  k: "advisor_messages", v: "id · thread_id · role (user | assistant | system) · content · token_count · model_version · created_at · UNIQUE (thread_id, request_id)" },
      { t: "warning", k: "recommendations", v: "id · user_id · thread_id? · recommended_plan_ref · candidate_set (jsonb) · rationale · status (shown | accepted | dismissed) · order_id? · created_at" },
      { t: "purple",  k: "advisor_usage", v: "id · user_id · model_version · prompt_tokens · completion_tokens · latency_ms · cost_minor + currency · request_id · feeds B8 cost view" },
      { t: "teal",    k: "advisor_config (versioned)", v: "version · system_prompt · retrieval_params · model + version · max_tokens · temperature · rate-limit settings · effective_from" },
      { t: "warning", k: "advisor_rate_limits", v: "user_id · window_start · request_count · token_count · enforced before ModelProvider call · 429 ADVISOR_RATE_LIMIT" },
    ],
    endpoints: [
      "POST   /advisor/threads                     · create new thread · returns thread_id + initial system context",
      "GET    /advisor/threads                     · list user threads · cursor pagination · last_message_at desc",
      "GET    /advisor/threads/:id/messages        · paginated messages · cursor pagination",
      "POST   /advisor/threads/:id/messages        · post user message · streams or returns assistant reply · idempotent on request_id",
      "POST   /advisor/recommend                   · explicit recommendation request · intent payload · returns validated recommendation",
      "POST   /advisor/recommendations/:id/accept  · transitions to accepted · creates B5 quote · returns purchase-review handoff",
      "POST   /advisor/recommendations/:id/dismiss · transitions to dismissed · optional reason",
      "GET    /advisor/history                     · threads + recommendations with outcomes · screen 47",
      "GET    /admin/advisor/usage                 · token + cost rollup · per-user + global · B8 admin cost view",
      "GET    /admin/advisor/config                · read system_prompt + retrieval_params + model + version",
      "PATCH  /admin/advisor/config                · update produces NEW version · old recommendations keep their version pin",
      "GET    /admin/advisor/recommendations       · acceptance-rate metric · per-region · per-plan · per-model-version",
    ],
    tests: [
      "Hallucinated plan id rejected · model returns plan_ref not in catalog → validation fails · invalid entry dropped · never surfaced to user",
      "Region-disabled plan never recommended · regional_flags off for market → retrieval excludes · model can't see · output validation double-checks",
      "Accept creates correct B5 quote · POST accept → quote line items match recommended plan · price + currency from catalog not model",
      "Rate-limit enforced · over-window request → 429 ADVISOR_RATE_LIMIT · ModelProvider not called · no usage row written",
      "Token cap enforced · oversized context → trimmed to cap before send · or 400 CONTEXT_TOO_LARGE · never sends unbounded payload",
      "PII redaction · payload sent to ModelProvider contains zero email / phone / iccid / payment_method_ref · audit row preserves what was redacted",
      "Structured output validation · malformed JSON · missing rationale · extra fields → schema fail → repair or drop · never surface partial",
      "Catalog retrieval determinism · same intent → same candidate set ordering · grounded ranking testable independent of model",
      "Acceptance-rate metric · 10 shown / 3 accepted / 5 dismissed / 2 open → metric reads correctly per model_version",
      "VPN G-07 consent gate · advisor recommends VPN · user without consent → handoff routes through consent screen first · never bypasses",
      "Streaming response · SSE chunks arrive in order · final usage row written on stream-end · client reconnect resumes from request_id idempotency",
      "Soft-delete thread · GET history excludes archived · admin view still surfaces them",
    ],
    pending: [
      "Model + vendor + version · Anthropic / OpenAI / regional · cost per 1M tokens · latency tolerance · refusal-rate · evaluation harness",
      "System prompt + persona · tone · refusal posture · 'helpful travel-connectivity advisor' framing · multi-language (Arabic + English) handling",
      "Acceptance-rate target · what counts as a good recommendation · KPI gates for shipping · A/B framework for prompt iteration",
      "Data retention for advisor history · how long threads + messages persist · per-region privacy law · user-initiated delete vs scheduled purge",
      "Per-tier access to Advisor · free vs paid · token quota per tier · loyalty-tier perks · or universal access in v1",
      "Retrieval approach · keyword vs embeddings · embedding model choice if used · cost vs precision tradeoff",
      "Cost budget · monthly cap per user · global cap · alerting threshold · who owns the bill",
    ],
    exit: [
      "ModelProvider adapter live · sandbox stub deterministic · live skeleton ready · vendor swap is config",
      "Catalog retrieval grounded · deterministic · testable independent of model · candidate set persisted",
      "Structured-output validation enforced · zod schema · every plan_id verified · hallucinations dropped",
      "Recommendation lifecycle green · shown → accepted (creates B5 quote) → dismissed · history surfaces all three",
      "Region + entitlement gating · regional_flags respected · VPN G-07 consent honored · disabled markets invisible",
      "Rate-limit + token-cap enforced · 429 + CONTEXT_TOO_LARGE typed errors · usage row written every successful call",
      "PII redaction verified · model payload minimal · audit row preserves what was stripped",
      "Streaming or clean req/resp · contract honored · client typing-indicator contract documented",
      "Admin endpoints · usage rollup · config read/PATCH (versioned) · acceptance-rate metric · feeds B8",
      "OpenAPI updated · advisor + recommendations + admin documented · structured-output schema referenced",
      "Business decisions logged in Handoff · NOT code blockers · sandbox build proceeds with placeholder model",
    ],
  },
  {
    name: "■ B8 — Admin Backend",
    kind: "b8",
    kicker: "B8 · BACKEND · ADMIN BACKEND · A00–A19 · SEPARATE AUTH REALM · RBAC · APPEND-ONLY AUDIT · LAST BACKEND PHASE",
    title: "Admin Backend · A00–A19 · /api/v1/admin",
    subtitle: "Last backend phase · powers React admin portal (W1) · separate auth realm from mobile users · every endpoint declares a permission · every mutation is audited · audit log is append-only and immutable.",
    rules: [
      { t: "warning", v: "Admin auth is SEPARATE realm · admin_users table · different token audience · no cross-login with mobile users · reuses B3 primitives (Argon2id · refresh rotation · 2FA) independently" },
      { t: "warning", v: "RBAC on EVERY endpoint · explicit required permission · roles → permissions via role_permissions · no 'any logged-in admin' access · least privilege by default" },
      { t: "warning", v: "Append-only audit log on EVERY mutation · actor · action · entity · entity_id · before/after snapshot · timestamp · request_id · NEVER editable or deletable even by super-admin" },
      { t: "warning", v: "PII access is itself audited + permissioned · viewing user's full profile / payment data writes a pii_access_log row" },
      { t: "warning", v: "Sensitive infra (provider credentials · VPN server keys · pricing) gated to narrowest role · NEVER returned in full · mask secrets · last-4 / presence only" },
      { t: "orange",  v: "Money is integer minor units + currency · all financial views reconcile to underlying ledgers · NEVER recompute independently · cache for perf · source-of-truth stays the table" },
      { t: "warning", v: "Destructive / financial actions (refund · point adjustment · release number · force re-provision · pricing change) need permission AND detailed audit entry · high-risk → approval/confirmation step" },
      { t: "purple",  v: "Aggregates / analytics computed from source tables · cache layer allowed · never store divergent numbers as truth · always reconcilable to ledgers" },
    ],
    flows: [
      { t: "warning", k: "F1 · Admin login (A00)", v: "Separate /admin/auth/login · 2FA mandatory · Argon2id verify · short-access + refresh rotation · token audience=admin · refused on mobile-user creds" },
      { t: "warning", k: "F2 · Permission gate", v: "Every controller method declares @RequirePermission · guard checks admin_user role → role_permissions → permission set · 403 FORBIDDEN with permission name in details" },
      { t: "warning", k: "F3 · Audit interceptor", v: "Every mutating endpoint wrapped · captures before-snapshot · runs handler · captures after-snapshot · writes audit_log row · failure to write audit FAILS the request" },
      { t: "purple",  k: "F4 · PII access logged (A03)", v: "Viewing user full profile / payment / addresses → pii_access_log row · admin_id · target_user_id · fields_viewed[] · request_id · queryable by user for transparency" },
      { t: "warning", k: "F5 · Refund / adjustment / re-provision", v: "Permission gated · approval threshold for high-amount · audit row with reason required · routes through B5 (refund) / B6 (adjustment) / B4 (re-provision) · never side-channels" },
      { t: "teal",    k: "F6 · Pricing change versioning (A09)", v: "Price update → new pricing version row · effective_from · old version retained · existing quotes reference frozen version · audit captures admin + before/after" },
      { t: "purple",  k: "F7 · Maintenance mode toggle (A17)", v: "regional_flags.maintenance_mode flipped → client G-03 maintenance state surfaces · audited · scope (global vs region) · timed window optional" },
      { t: "teal",    k: "F8 · Reconciliation drill-down (A19)", v: "B5 reconciliation_flags surfaced · drill into payment / refund · resolve-with-audit · finance-grade · read + resolve · NEVER edit underlying ledger" },
    ],
    screens: [
      { t: "warning", k: "A00 · Admin Login",            v: "Separate realm · 2FA · ADMIN_AUTH · permission: public" },
      { t: "warning", k: "A18 · Admin Users",            v: "CRUD admins · assign roles · permission: admin.users.manage · audited · super-admin only for role create" },
      { t: "purple",  k: "A01 · Dashboard Overview",     v: "KPIs from real aggregates · active users · orders · revenue · sessions · cached · permission: admin.dashboard.view" },
      { t: "purple",  k: "A02 · Users List",             v: "Search · filter · pagination · permission: admin.users.list · base profile only · no PII" },
      { t: "warning", k: "A03 · User Detail",            v: "Orders · eSIMs · numbers · subscriptions · loyalty ledger · sessions · PII access audited · actions: suspend · revoke sessions · trigger pwd reset · permission: admin.users.read.pii" },
      { t: "teal",    k: "A04 · eSIM Orders",            v: "List/filter · provisioning state · manual re-provision · refund · permission: admin.esim.manage · routes through B4/B5 · audited" },
      { t: "teal",    k: "A05 · VoIP Numbers",           v: "Inventory · reserved → active → released · release with audit · permission: admin.voip.manage" },
      { t: "teal",    k: "A06 · VPN Sessions",           v: "Active + historical · server load · permission: admin.vpn.read" },
      { t: "warning", k: "A07 · Revenue Analytics",      v: "Aggregates over payments/subscriptions · by product · market · period · reconcile to ledger · permission: admin.finance.view" },
      { t: "orange",  k: "A08 · Subscription Plans",     v: "Plan CRUD · regional availability · permission: admin.catalog.manage · price-change versioned" },
      { t: "warning", k: "A09 · Pricing Management",     v: "Versioned price changes · audit before/after · effective_from · respects FL D3 tax + regional_flags · permission: admin.pricing.manage" },
      { t: "warning", k: "A10 · Provider Config",        v: "eSIM/VoIP/VPN/payment/model adapters · enable/disable · sandbox-vs-live · credentials WRITE-ONLY + masked · permission: admin.providers.manage · highly gated" },
      { t: "warning", k: "A11 · VPN Server Management",  v: "Add/enable/disable servers · capacity · credentials masked · routes through B4 VpnProvider · permission: admin.vpn.manage" },
      { t: "purple",  k: "A12 · Loyalty & Points",       v: "View ledgers · manual adjustment with reason + audit · edit earn/redeem config from B6 · permission: admin.loyalty.manage" },
      { t: "purple",  k: "A13 · Referral Program",       v: "Review flagged referrals · approve/reject (writes ledger entries) · config · permission: admin.referrals.manage" },
      { t: "purple",  k: "A14 · Marketing Campaigns",    v: "Compose · target by segment · schedule · permission: admin.marketing.manage · calls notifications module" },
      { t: "orange",  k: "A15 · Support Tickets",        v: "List · assign · respond · status lifecycle · permission: admin.support.handle" },
      { t: "orange",  k: "A16 · Notifications Center",   v: "Compose · target segment · schedule · push + sms + email via B4 adapters · permission: admin.notifications.send" },
      { t: "warning", k: "A17 · App Settings",           v: "Feature flags · regional_flags · maintenance_mode toggle · permission: admin.settings.manage · audited" },
      { t: "warning", k: "A19 · Revenue Reconciliation", v: "B5 reconciliation_flags surface · drill-down · resolve-with-audit · finance-grade · permission: admin.finance.reconcile" },
    ],
    tables: [
      { t: "warning", k: "admin_users", v: "id · email · password_hash (Argon2id) · totp_secret · status · last_login_at · created_at · SEPARATE from users table" },
      { t: "warning", k: "admin_sessions", v: "Refresh-token rotation · audience=admin · device + ip · revocable · reuse-detection from B3" },
      { t: "warning", k: "roles + role_permissions", v: "B1 already declares · roles like super_admin · finance · support · ops · marketing · permissions like admin.refund.issue" },
      { t: "warning", k: "audit_log (append-only)", v: "id · admin_id · action · entity · entity_id · before (jsonb) · after (jsonb) · request_id · created_at · NO update / delete grants in DB role" },
      { t: "purple",  k: "pii_access_log", v: "admin_id · target_user_id · fields_viewed[] · request_id · created_at · user-facing transparency report queryable" },
      { t: "warning", k: "pricing_versions", v: "plan_ref · version · price (minor + currency) · effective_from · created_by · audited on insert · old versions retained forever" },
      { t: "teal",    k: "support_tickets", v: "id · user_id · subject · status · assignee_admin_id · last_message_at · timeline" },
      { t: "purple",  k: "campaigns", v: "id · segment_query · channel · scheduled_at · status · created_by · audited · routes through notifications module" },
    ],
    endpoints: [
      "POST   /admin/auth/login            · admin.public · 2FA mandatory · token audience=admin",
      "POST   /admin/auth/refresh          · admin.public · refresh rotation · reuse-detection",
      "GET    /admin/dashboard             · admin.dashboard.view · KPIs from aggregates · cached",
      "GET    /admin/users                 · admin.users.list · pagination + filter · base profile",
      "GET    /admin/users/:id             · admin.users.read.pii · writes pii_access_log · full detail",
      "POST   /admin/users/:id/suspend     · admin.users.manage · audited · revokes sessions",
      "GET    /admin/orders/esim           · admin.esim.manage · list + filter · provisioning state",
      "POST   /admin/orders/:id/reprovision · admin.esim.manage · audited · routes through B4 · approval gate",
      "POST   /admin/orders/:id/refund     · admin.refund.issue · audited · routes through B5 · approval threshold",
      "GET    /admin/voip/numbers          · admin.voip.manage · inventory · lifecycle state",
      "POST   /admin/voip/numbers/:id/release · admin.voip.manage · audited",
      "GET    /admin/vpn/sessions          · admin.vpn.read · active + historical",
      "POST   /admin/vpn/servers           · admin.vpn.manage · audited · credentials masked on read",
      "GET    /admin/finance/revenue       · admin.finance.view · aggregates · reconcile to ledger",
      "GET    /admin/finance/reconcile     · admin.finance.reconcile · reconciliation_flags from B5",
      "POST   /admin/finance/reconcile/:id/resolve · admin.finance.reconcile · audited",
      "GET    /admin/catalog/plans         · admin.catalog.manage",
      "PATCH  /admin/catalog/plans/:id     · admin.catalog.manage · audited",
      "POST   /admin/pricing               · admin.pricing.manage · creates new version · audited · effective_from",
      "GET    /admin/providers             · admin.providers.manage · credentials masked",
      "PATCH  /admin/providers/:id         · admin.providers.manage · write-only credentials · audited",
      "GET    /admin/loyalty/users/:id     · admin.loyalty.manage · ledger view",
      "POST   /admin/loyalty/adjust        · admin.loyalty.manage · audited · reason required · routes through B6",
      "GET    /admin/referrals/flagged     · admin.referrals.manage · review queue",
      "POST   /admin/referrals/:id/approve · admin.referrals.manage · audited · writes ledger via B6",
      "POST   /admin/marketing/campaigns   · admin.marketing.manage · audited",
      "GET    /admin/support/tickets       · admin.support.handle",
      "POST   /admin/support/tickets/:id/respond · admin.support.handle · audited",
      "POST   /admin/notifications/send    · admin.notifications.send · audited · routes through B4 push/sms",
      "PATCH  /admin/settings              · admin.settings.manage · audited · drives client G-03",
      "GET    /admin/admins                · admin.users.manage · list admins",
      "POST   /admin/admins                · admin.users.manage · audited · super-admin for role create",
      "GET    /admin/audit                 · admin.audit.read · paginated · filter by entity / actor / range · NEVER returns mutations",
    ],
    tests: [
      "Permission enforcement · admin without admin.refund.issue → 403 FORBIDDEN · permission name in details · audit row NOT written for failed auth",
      "Audit entry on every mutation · refund / adjustment / pricing / suspend / re-provision all write audit_log with before+after snapshots",
      "Audit immutability · attempt to UPDATE audit_log → DB-level grant denies · attempt to DELETE → denied · super-admin no exception",
      "PII access logged · GET /admin/users/:id → pii_access_log row written · admin_id + target_user_id + fields_viewed[] · transparency report visible",
      "Secret masking · GET /admin/providers returns provider config with credentials masked · last-4 only · raw never serialized · write-only path verified",
      "Pricing change versioned · PATCH price → new pricing_versions row · old version retained · in-flight quote still references old version (not retroactive)",
      "Analytics reconciles · /admin/finance/revenue total for period equals SUM(payments) for same period · cache invalidation tested",
      "Reconciliation drill-down · reconciliation_flag resolved → audit row written · underlying payment row UNCHANGED · resolution metadata only",
      "Cross-realm refusal · mobile-user JWT presented to /admin/* → 401 · admin JWT presented to /api/v1/users/me → 401 · audience separation enforced",
      "2FA mandatory · admin login without TOTP → 401 · password-only path doesn't exist",
      "Maintenance mode · PATCH /admin/settings flips regional_flags · audited · client G-03 surfaces on next read",
      "Loyalty manual adjustment · routes through B6 ledger · negative entry not allowed without reason · audit + loyalty_audit both written",
      "Approval-threshold gate · refund > threshold without approver → 409 APPROVAL_REQUIRED · with approver_id → succeeds + audited as two-party",
      "List endpoint pagination · all admin lists honor cursor pagination from B2 · server-side filter/sort · export endpoints write audit row",
    ],
    pending: [
      "Exact role / permission matrix · who can refund · adjust loyalty · change pricing · view PII · ops + finance + legal sign-off · per-region variation possible",
      "Approval thresholds for high-risk actions · refund amount · loyalty adjustment magnitude · pricing change scope · two-party requirement",
      "Data-export governance · who can export user lists / payment lists · row caps · purpose-of-use logged · GDPR / KSA / UAE law alignment",
      "Audit-log retention · 7 years for finance · indefinite for compliance-sensitive actions · partition + archive strategy",
      "PII transparency report cadence · whether end-users can request their pii_access_log · per regional consumer-protection law",
      "Maintenance-mode coordination · who can flip · scope (global vs region) · pre-announce SLA · paging implications",
      "Super-admin distribution · how many · break-glass procedure · audit on super-admin self-grant",
    ],
    exit: [
      "Admin auth realm separate · 2FA enforced · token audience verified · cross-realm refusals tested",
      "Every endpoint declares a permission · least-privilege denials covered · 403 includes permission name",
      "Audit interceptor live · writes audit_log on every mutation · failure to write FAILS the request",
      "Audit log immutable at DB grant level · super-admin no exception · partition / archive plan documented",
      "PII access log live · A03 view writes a row · transparency endpoint exists",
      "Secret masking verified · provider credentials never serialized in full · write-only paths green",
      "Pricing versioning live · old quotes pinned · audit captures before/after",
      "Reconciliation drill-down + resolve-with-audit · ledgers untouched by resolution",
      "All A00–A19 endpoints implemented · OpenAPI admin namespace published · React admin (W1) generates against it",
      "Approval-threshold gate behind config · high-risk actions covered · two-party path tested",
      "Policy decisions logged in Handoff · NOT code blockers · sandbox build proceeds",
    ],
  },
  {
    name: "■ W1 — Web Admin Frontend",
    kind: "w1",
    kicker: "W1 · WEB ADMIN FRONTEND · REACT + TS + VITE · A00–A19 · FIRST CLIENT PHASE · STABLE NOT FLASHY",
    title: "Web Admin Frontend · React + TS + Vite · against B8",
    subtitle: "First client phase. Operations / finance console — must feel stable + trustworthy · NOT flashy. Generated client from B8 OpenAPI · RBAC-aware UI (server still enforces) · BrandGuide v2 tokens · 240px sidebar · 64px header · 24px content padding · white cards · 12px radius.",
    rules: [
      { t: "warning", v: "API client GENERATED from B8 OpenAPI · zero hand-written request/response models · regenerate on every contract change · no drift" },
      { t: "warning", v: "UI is RBAC-aware · reads admin permissions · hides / disables actions the role can't perform · server still enforces every permission · NEVER show a control that would 403" },
      { t: "warning", v: "Admin auth is SEPARATE realm · separate login + 2FA · idle-timeout + re-auth · tokens httpOnly where possible · refresh rotation respected" },
      { t: "orange",  v: "Design tokens from BrandGuide v2 · same values used in Figma · do NOT re-pick colors · warm Gulf-first not generic SaaS blue · operations-tool clarity > decoration" },
      { t: "orange",  v: "Money displayed from API integer-minor-units + currency · format per currency · NEVER reconstruct / recompute amounts client-side" },
      { t: "warning", v: "Tables operational · server-side pagination + filter + sort wired to API · sortable columns · empty / loading / error state for EVERY list" },
      { t: "warning", v: "Sensitive fields render MASKED exactly as API returns · last-4 / presence only · client never has · never requests · never logs full secrets" },
      { t: "warning", v: "Destructive / financial actions use explicit confirmation step · surface audit trail · high-risk reflect server approval gate · 2-party where required" },
    ],
    architecture: [
      { t: "orange",  k: "Vite + React + TS",        v: "Vite dev/build · React 18 · strict TS · path aliases · Tailwind v4 tokens map to BrandGuide v2 CSS variables" },
      { t: "orange",  k: "Generated client",         v: "openapi-typescript or orval against B8 OpenAPI · types + fetcher generated · pnpm script 'gen:api' on contract change · zero hand-written DTOs" },
      { t: "warning", k: "Auth + RBAC store",        v: "Zustand or Redux Toolkit slice · admin identity + permissions[] + token state · permission helper hook usePermission(name) drives UI gating" },
      { t: "teal",    k: "Routing",                  v: "React Router v6 · permission-gated routes · 401 redirects to A00 · 403 friendly screen (control should not have been shown)" },
      { t: "purple",  k: "Data fetching",            v: "TanStack Query · server-state cache · pagination + filter + sort encoded in query keys · auto-refetch on focus optional · errors surface to error boundary" },
      { t: "warning", k: "Error envelope handling",  v: "Centralized interceptor maps B0 { error: { code, message, details } } → typed UI · 401 re-auth · 403 friendly · 422 inline form errors · 5xx toast + error boundary" },
      { t: "purple",  k: "Forms",                    v: "react-hook-form 7.55.0 + zod schemas mirroring API DTOs · server validation merged into form errors via details[]" },
      { t: "teal",    k: "Tokens / theme",           v: "BrandGuide v2 CSS vars · roam-orange · roam-teal · roam-purple · warning · semantic colors · no inline hex anywhere in components" },
    ],
    shell: [
      { t: "warning", k: "App layout",        v: "240px left sidebar · 64px top header · 24px content padding · white cards · 12px radius · subtle shadow · grouped nav: Operations / Product / Commerce / Finance / System" },
      { t: "warning", k: "Top header",        v: "Admin identity (avatar + name + role) · environment indicator (dev / staging / live) · prominent in non-prod · global search · logout" },
      { t: "warning", k: "Auth flow",         v: "A00 login → 2FA challenge → token store · protected route wrapper · idle-lock 15 min default · refresh rotation handled by client · re-auth modal preserves route" },
      { t: "purple",  k: "Permission-gated nav", v: "Each nav item declares required permission · usePermission hides item if missing · same gate on the route · belt-and-braces" },
      { t: "orange",  k: "Environment banner", v: "Non-prod environments show top banner · sandbox / staging colored · prevents 'wait was that prod' moments" },
    ],
    primitives: [
      { t: "orange",  k: "DataTable",             v: "Server-side pagination / filter / sort · column definitions · sortable headers · empty / loading / error states · row actions gated by permission · cursor pagination per B2" },
      { t: "orange",  k: "ConfirmModal",          v: "Destructive actions · summary of consequences · type-to-confirm for high-risk · attached audit message field where required" },
      { t: "warning", k: "AuditTrailViewer",      v: "Inline component · shows audit_log entries for entity · before/after diff · admin identity · timestamp in admin locale (UTC stored)" },
      { t: "purple",  k: "MaskedField",           v: "Renders last-4 / presence dot · copy disabled · NEVER tries to fetch full · companion edit modal POSTs write-only" },
      { t: "teal",    k: "MoneyDisplay",          v: "Formats integer minor + currency per Intl.NumberFormat · respects locale · never recomputes · 'AED 12.50' style" },
      { t: "teal",    k: "DateTimeDisplay",       v: "UTC stored · rendered in admin locale · tooltip shows UTC + relative · timezone consistent across screens" },
      { t: "purple",  k: "FormField + ErrorList", v: "react-hook-form integration · server details[] flow back into per-field errors · zod schema is the source of truth" },
      { t: "warning", k: "ErrorBoundary + Toast", v: "Top-level boundary · per-route boundary · toast for transient · banner for blocking · all errors surface error envelope code" },
    ],
    screensOps: [
      { t: "purple",  k: "A01 · Dashboard",          v: "KPI cards + charts (recharts) from real aggregates · cached · read-only · permission: admin.dashboard.view · responsive grid" },
      { t: "purple",  k: "A02 · Users List",         v: "DataTable · filter (status · region · joined-after) · server pagination · row → A03 · permission: admin.users.list" },
      { t: "warning", k: "A03 · User Detail",        v: "Tabs: profile · orders · eSIMs · numbers · subscriptions · loyalty ledger · sessions · PII view is an AUDITED call · actions: suspend · revoke session · trigger pwd reset · permission: admin.users.read.pii" },
      { t: "orange",  k: "A15 · Support Tickets",    v: "List · assign · respond · status lifecycle · timeline view · permission: admin.support.handle" },
      { t: "orange",  k: "A16 · Notifications Ctr.", v: "Compose · target by segment · schedule · preview · permission: admin.notifications.send · routes through B4 push/sms" },
    ],
    screensProduct: [
      { t: "teal",    k: "A04 · eSIM Orders",        v: "Provisioning state · filter · re-provision (audited) · refund (audited · approval gate) · drill into order detail · permission: admin.esim.manage" },
      { t: "teal",    k: "A05 · VoIP Numbers",       v: "Inventory · lifecycle reserved → active → released · release with audit · permission: admin.voip.manage" },
      { t: "teal",    k: "A06 · VPN Sessions",       v: "Active + historical · server load chart · permission: admin.vpn.read" },
      { t: "warning", k: "A11 · VPN Server Mgmt",    v: "Add / enable / disable servers · capacity · credentials MASKED · write-only edit · permission: admin.vpn.manage" },
      { t: "warning", k: "A10 · Provider Config",    v: "MOST-GATED screen · adapters enable/disable · sandbox/live toggle · credentials WRITE-ONLY + masked · permission: admin.providers.manage · super-admin in practice" },
    ],
    screensCommerce: [
      { t: "orange",  k: "A08 · Subscription Plans", v: "Plan CRUD · regional availability · permission: admin.catalog.manage · price-change goes through A09" },
      { t: "warning", k: "A09 · Pricing Management", v: "Versioned changes · before/after diff in confirm modal · per-market tax + regional_flags from FL D3 · effective_from picker · permission: admin.pricing.manage" },
      { t: "purple",  k: "A12 · Loyalty & Points",   v: "Ledger view (table) · manual adjustment with reason (audited) · earn/redeem config (versioned PATCH) · permission: admin.loyalty.manage" },
      { t: "purple",  k: "A13 · Referral Program",   v: "Flagged referrals review queue · approve/reject (writes ledger via B6) · config · permission: admin.referrals.manage" },
      { t: "purple",  k: "A14 · Marketing Campaigns", v: "Compose · target · schedule · status · permission: admin.marketing.manage" },
    ],
    screensFinance: [
      { t: "orange",  k: "A07 · Revenue Analytics",      v: "Aggregates by product · market · period · charts (recharts) · reconcile to ledger · permission: admin.finance.view" },
      { t: "warning", k: "A19 · Revenue Reconciliation", v: "Finance-GRADE · NOT marketing dashboard · B5 reconciliation_flags table · drill-down to payment / refund · resolve-with-audit · ledger UNCHANGED · permission: admin.finance.reconcile" },
      { t: "warning", k: "A17 · App Settings",           v: "Feature flags · regional_flags toggles · maintenance_mode (drives client G-03) · audited · permission: admin.settings.manage" },
      { t: "warning", k: "A18 · Admin Users",            v: "CRUD admins · assign roles · role/permission matrix view · permission: admin.users.manage · super-admin gates role create" },
    ],
    crossCutting: [
      "Centralized API error handling · maps B0 envelope to UI · 401 → re-auth modal · 403 → friendly 'not permitted' · 409 APPROVAL_REQUIRED → two-party prompt · 422 → inline form errors · 5xx → error boundary",
      "Accessibility · keyboard-navigable tables + forms · focus management in modals · WCAG AA contrast · daily-use tool · usability > decoration",
      "Responsiveness · desktop-first 1440px · tablet 768px adaptations from Figma · tables degrade gracefully · sidebar collapses on tablet",
      "Locale + timezone · admin locale for dates / numbers · UTC stored · 24h time · multi-currency labels honored on money columns",
      "Telemetry · request_id from B0 forwarded · correlation in error toasts (Reference: req_xxx) · helps support diagnose without server access",
    ],
    tests: [
      "Generated client compiles · regenerating against B8 OpenAPI produces zero diff against committed types when contract unchanged",
      "RBAC nav · admin without admin.refund.issue does NOT see refund button · same admin still 403s if URL hand-typed (server enforces)",
      "Permission-gated route · navigating to A09 without admin.pricing.manage → friendly forbidden screen · NOT raw 403",
      "Auth flow · A00 → 2FA challenge → admin shell · idle 15 min → lock screen · re-auth preserves route",
      "Error envelope · 422 with details[] flows into per-field form errors via zod schema mapping",
      "Money formatting · API returns { amount: 1250n, currency: 'AED' } → 'AED 12.50' · never reconstructed · multi-currency users see correct symbol",
      "Masked field · MaskedField renders presence dot for empty · last-4 for present · no API call exists to fetch full",
      "Confirm modal · refund > threshold surfaces APPROVAL_REQUIRED → second-approver picker · two-party path completes",
      "Pricing change · diff before/after in confirm modal · effective_from picker · audit row visible in AuditTrailViewer immediately",
      "Reconciliation drill-down · flagged item → linked payment + provider event · resolve-with-audit writes audit · underlying ledger UNTOUCHED in UI state",
      "DataTable · server pagination + filter + sort encoded in URL query · refresh preserves state · empty state shown when zero rows",
      "Environment banner · staging / sandbox banners visible · prod has none · prevents accidental destructive action in wrong env",
      "Accessibility · keyboard tab order across DataTable · focus trap in ConfirmModal · screen reader announces toast",
    ],
    pending: [
      "Default landing per role · finance → A07 · ops → A04 · support → A15 · super-admin → A01 · ops sign-off",
      "Which columns / filters matter most operationally · per-screen review with the team that lives in it daily",
      "Export governance · which exports allowed · row caps · purpose-of-use prompt · audit row written · per regional law",
      "Idle-lock window · 15 min default vs 5 min for finance roles · re-auth UX · 2FA on re-auth or password only",
      "Locale defaults · Arabic + English support · RTL pass on tables + sidebar · timezone default per admin",
      "Performance / caching pass · A07 + A19 aggregates may need server-side cache + cache-busting on data change",
      "Endpoints whose final shape is still settling · revenue analytics group-by · reconciliation drill-down payload · marketing segment query DSL",
    ],
    exit: [
      "Generated client wired · pnpm gen:api regenerates from B8 OpenAPI · zero hand-written DTOs",
      "App shell live · sidebar + header + auth flow + RBAC routing + idle-lock + env banner",
      "Shared primitives · DataTable · ConfirmModal · AuditTrailViewer · MaskedField · MoneyDisplay · DateTimeDisplay · FormField · all reused across screens",
      "All A00–A19 screens implemented · loading + empty + error state on every list · permission-gated · audit visible where mutating",
      "Money formatting from API integer-minor + currency · zero client-side recomputation",
      "Sensitive fields masked · write-only edit paths · client never holds full secrets",
      "Destructive actions confirmed · approval-threshold prompt for high-risk · two-party path tested",
      "Pricing changes versioned in UI · before/after diff in confirm modal · effective_from picker",
      "Reconciliation finance-GRADE · drill + resolve-with-audit · ledger view-only",
      "Accessibility AA · keyboard navigable · focus management in modals · contrast verified",
      "Responsive · 1440px desktop + 768px tablet adaptations green",
      "Ops decisions logged in Handoff · NOT code blockers · default landings + column priorities + export governance pending sign-off",
    ],
  },
  {
    name: "■ M1 — Flutter Foundation",
    kind: "m1",
    kicker: "M1 · MOBILE · FLUTTER FOUNDATION · THEME · API CLIENT · ROUTING · AUTH/SESSION · NO FEATURE SCREENS",
    title: "Flutter Foundation · theme · API · auth · shell",
    subtitle: "First mobile phase. Project structure · BrandGuide v2 theme (light + dark + RTL day-1) · generated Dart client · auth/session state machine · 4-tab shell (Home / eSIM / Connect / Account · AI is entry-point NOT a tab). M2–M6 feature packs build on this · NO product feature screens here.",
    rules: [
      { t: "warning", v: "Dart API client GENERATED from B2/backend OpenAPI · zero hand-written models · regenerate on contract change · no drift" },
      { t: "warning", v: "Theme tokens are SAME values as BrandGuide v2 / Figma · do NOT re-pick colors · widgets reference tokens · NEVER raw hex" },
      { t: "warning", v: "Light AND dark first-class day-1 · light bg #FFF8F4 · dark bg #181210 · every themed surface supports both" },
      { t: "warning", v: "RTL + Arabic first-class · NOT afterthought · full RTL mirroring via Directionality · Cairo font for Arabic (DM Sans no Arabic) · numbers/prices stay LTR inside Arabic" },
      { t: "warning", v: "Bottom nav EXACTLY Home / eSIM / Connect / Account · 4 tabs · AI is entry-point feature NOT a tab · Connect contains BOTH VoIP + VPN" },
      { t: "orange",  v: "Money is integer-minor + currency from API · format per currency/locale · NEVER reconstruct amounts client-side" },
      { t: "warning", v: "No secrets in app · model/provider keys server-side ONLY · auth tokens in secure storage (Keychain/Keystore) · NEVER plain prefs" },
      { t: "purple",  v: "Reduced-motion respected · haptics: VPN connected=heavy · payment/eSIM success=success · wrong OTP=error · primary tap=light · sheet snap=medium" },
    ],
    architecture: [
      { t: "orange",  k: "Flutter project layout",  v: "Feature-first folders · core/ · theme/ · api/ · routing/ · features/<area>/ · domain models in core · feature packs M2–M6 each own a folder" },
      { t: "orange",  k: "State management",        v: "Riverpod (preferred) used CONSISTENTLY · state testable · UI declarative · providers per feature · async notifiers for API state" },
      { t: "warning", k: "Localization l10n",       v: "Flutter intl · en + ar ARB files · runtime locale switch · persisted preference · default Arabic for Gulf locale per onboarding rules" },
      { t: "purple",  k: "Environment config",      v: "dev / staging / prod · base URL + feature flags · NO secrets committed · loaded at app boot · environment banner in non-prod" },
      { t: "teal",    k: "Generated Dart client",   v: "openapi-generator dart-dio against B2 OpenAPI · types + endpoints regen via melos/script · pinned version" },
      { t: "warning", k: "Secure storage",          v: "flutter_secure_storage · Keychain (iOS) · Keystore (Android) · access + refresh tokens · biometric keypair · NEVER SharedPreferences for secrets" },
    ],
    theme: [
      { t: "orange",  k: "Color tokens · light + dark", v: "brand orange/teal/purple · bg app/surface/surface-2 · border · text primary/secondary/disabled · semantic success/warning/error · exact BrandGuide v2 values" },
      { t: "orange",  k: "Brand role separation",       v: "orange = CTAs · teal = VPN / security · purple = AI · enforced in component variants · widgets pick role not color" },
      { t: "warning", k: "Typography · LTR",             v: "DM Serif Display (display italic 36/43.2) · DM Sans (h1 28/36.4 · h2 22/30.8 · h3 17/23.8 · body 15/22.5 · label 13/19.5) · JetBrains Mono (mono price/code)" },
      { t: "warning", k: "Typography · RTL",             v: "Cairo for ALL Arabic text (DM Sans does not support Arabic) · same scale · numbers + prices stay LTR via Directionality.embed" },
      { t: "purple",  k: "Spacing scale",                v: "4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 · token file · widgets reference Spacing.md not literals" },
      { t: "purple",  k: "Radius + icon scale",          v: "Radius xs/sm/md/lg/xl/pill/circle · Icon 16/20/24 · token file drives ThemeData" },
      { t: "teal",    k: "ThemeData light + dark",       v: "Two ThemeData built from same tokens · MaterialApp.themeMode follows system + user override · seamless switch" },
      { t: "teal",    k: "RTL mirroring",                v: "Directionality.of context-aware · padding/margin use start/end NOT left/right · icons mirror where directional · bottom-nav reversed in RTL" },
    ],
    apiLayer: [
      { t: "orange",  k: "Generated client + repos",     v: "Dart client wrapped by feature repositories · widgets never call client directly · repos return Result<T, ApiError>" },
      { t: "warning", k: "Auth interceptor",             v: "Attaches Bearer access token · forwards request_id · forwards Idempotency-Key when set · refuses unauthenticated calls to protected paths" },
      { t: "warning", k: "Refresh interceptor",          v: "401 → silent refresh via rotation token · single-flight to avoid stampede · success retries original · failure forces re-auth + clears storage" },
      { t: "warning", k: "Error envelope mapping",       v: "B0 { error: { code, message, details } } → typed ApiError class · widgets switch on code · raw exceptions never reach UI" },
      { t: "purple",  k: "Idempotency-Key generation",   v: "UUID v4 generated for every payment / provisioning POST · stored on the in-flight request · same key reused on retry · 24h TTL aware" },
      { t: "teal",    k: "Result + ApiError surface",    v: "Result.success(T) | Result.failure(ApiError) · UI maps codes to messages · 422 details flow into form fields · 5xx triggers retry banner" },
    ],
    auth: [
      { t: "warning", k: "Session state machine",        v: "loggedOut → pendingVerification → twoFactorChallenge → active → locked · transitions auditable · persisted minimal · drives router redirects" },
      { t: "warning", k: "Token storage + rotation",     v: "Access + refresh in flutter_secure_storage · refresh rotation respected · reuse-detection from B3 · device-bound where supported" },
      { t: "purple",  k: "Biometric unlock hook",        v: "Device keypair signs server challenge · convenience OVER existing session · NOT standalone identity · falls back to pwd if not enrolled" },
      { t: "purple",  k: "Step-up trigger",              v: "Sensitive actions (refund · payment · plan change) require fresh auth · biometric or password challenge · token age checked" },
      { t: "warning", k: "Idle-timeout · session lock S-06", v: "Configurable window · 5 / 15 min · last-activity tracked at shell · timer locks UI · re-auth preserves route" },
    ],
    shell: [
      { t: "warning", k: "Router · auth-aware guards",   v: "go_router · routes guarded by session state · loggedOut → onboarding/auth · active → main shell · deep-link landing respects auth state (G-04 deferred until authed)" },
      { t: "warning", k: "Bottom nav · 4 tabs",          v: "Home / eSIM / Connect / Account · EXACTLY four · AI is entry-point NOT a tab · order REVERSED in RTL · active state colored per token" },
      { t: "purple",  k: "Connect tab",                  v: "Contains BOTH VoIP + VPN · sub-segmented control inside the tab · AI advisor entry-point lives on Home + contextual entries" },
      { t: "teal",    k: "Connectivity + system states", v: "Shell-level overlays · no-internet (G-02) · maintenance mode (G-03 from admin A17) · captive portal banner (G-10) · VPN reconnecting (G-11) · over live screens not blocking" },
      { t: "orange",  k: "Environment banner",           v: "Non-prod environments show top banner · sandbox / staging colored · 'wait was that prod' prevention" },
    ],
    primitives: [
      { t: "orange",  k: "Buttons",            v: "Primary (orange) · Secondary (outlined) · Ghost (text only) · loading + disabled states · 44pt min target · haptic light on tap" },
      { t: "orange",  k: "Inputs",             v: "Text · password (with show/hide) · phone (Gulf-first country picker · default UAE/KSA) · OTP (6-digit · auto-advance · paste-aware) · validation surfaces from API details[]" },
      { t: "purple",  k: "Cards · Badges",     v: "Card 12px radius · token shadows · Badges semantic colored · regional badge for market · all light/dark/RTL ready" },
      { t: "teal",    k: "Bottom sheet",       v: "Snap points (peek/half/full) · drag handle · haptic medium on snap · dismissable · respects safe area + keyboard" },
      { t: "purple",  k: "Toggles · Progress", v: "Switch · Checkbox · Radio · Progress ring (data usage · provisioning) · Shimmer skeleton · all token-driven" },
      { t: "warning", k: "Banner / Alert",     v: "Inline banner (warning / error / info) · sticky at top of screen · dismissable where appropriate · used by G-02 / G-10 / G-11" },
      { t: "warning", k: "Biometric prompt",   v: "Platform-native prompt · falls back to password · respects enrollment state · used by step-up + login" },
      { t: "teal",    k: "Error / Empty state", v: "Illustrated empty (no orders · no eSIMs) · error with retry · loading skeleton · token-driven · reduced-motion variant" },
    ],
    verification: [
      "Tokens match BrandGuide v2 exactly · roam-orange E05820 · roam-teal 10A890 · roam-purple 8040D0 · light bg FFF8F4 · dark bg 181210 · all 13 paint tokens verified",
      "Dark mode renders on every primitive · contrast AA verified · no hardcoded white/black anywhere",
      "RTL mirrors correctly · bottom nav reverses · padding start/end not left/right · numbers stay LTR inside Arabic strings",
      "Cairo font loads for ar locale · DM Sans for en · runtime locale switch works without restart",
      "Generated client compiles · regen against B2 OpenAPI produces zero diff against committed client when contract unchanged",
      "Auth interceptor attaches Bearer · refresh interceptor single-flights 401 · failure forces re-auth · tested with mocked 401",
      "Idempotency-Key generated on payment POST · same key on retry · server idempotency confirmed in B5 sandbox",
      "Session lock S-06 · 15 min idle → lock screen · re-auth preserves route · biometric step-up works on enrolled devices",
      "Bottom nav has EXACTLY 4 items · AI is NOT a tab · Connect contains both VoIP + VPN · order reverses in RTL",
      "Connectivity overlays · airplane mode → G-02 banner · maintenance toggle → G-03 · simulated captive portal → G-10",
      "Reduced-motion respected · animations replaced with cross-fades · haptics fire per accessibility map",
      "Secure storage verified · tokens NOT in SharedPreferences · uninstall clears via Keychain wipe (iOS) · keystore wipe (Android)",
    ],
    handoff: [
      "M2 Onboarding + Auth · uses session state machine + auth interceptor + OTP input + biometric prompt + RTL onboarding",
      "M3 eSIM · uses generated client esim endpoints + Idempotency-Key + provisioning state UI + Connect tab content",
      "M4 VoIP + VPN (Connect tab) · uses Connect sub-segmented control + biometric step-up for activation + G-07 VPN consent flow",
      "M5 Billing + Loyalty + AI Advisor · uses payment Idempotency-Key + 3DS modal + AI entry-point widgets + recommendation card primitive",
      "M6 Account + Notifications + System states · uses Account tab + push registration + G-02/G-03 overlays + locale + theme settings",
      "Contract gaps to resolve before feature work · streaming SSE for AI advisor (B7) · push token registration shape · session lock TTL config",
    ],
    pending: [
      "State management final pick · Riverpod (preferred) vs Bloc · whichever is consistent across team · decided before M2",
      "Localization default · Arabic-default for Gulf locale per onboarding rule · confirm market-detection fallback when locale ambiguous",
      "Idle-timeout window · 5 vs 15 min · per-feature variation (finance step-up tighter) · UX team sign-off",
      "Biometric scope · login-only vs step-up-only vs both · device keypair rotation cadence",
      "Deep-link landing rules · which links survive logged-out state (G-04) · auth-required vs public deep links",
      "Theme switching UX · system-follow vs explicit override default · onboarding theme picker or auto",
      "Font licensing for Cairo + DM Serif Display + DM Sans confirmed for app distribution",
    ],
    exit: [
      "Flutter project scaffolded · feature-first layout · core/theme/api/routing/features folders",
      "Riverpod (or chosen) wired consistently · state testable · widgets declarative",
      "Theme layer live · light + dark + RTL · all 13 paint tokens + type scale + spacing + radius + icon scale",
      "Cairo + DM Sans + DM Serif Display + JetBrains Mono fonts loaded · Arabic renders correctly",
      "Generated Dart client wired · pnpm/melos gen:api regenerates against B2 OpenAPI · pinned version",
      "Auth + refresh interceptors live · 401 silent-refresh single-flight · refresh failure forces re-auth",
      "Error envelope mapped to typed ApiError · 422 details flow to form fields · 5xx retry banner",
      "Session state machine green · loggedOut → pendingVerification → 2FA → active → locked transitions tested",
      "Secure storage verified · tokens never in plain prefs · biometric keypair stored device-bound",
      "Router with auth guards · 4-tab bottom nav · Connect contains VoIP + VPN · AI is NOT a tab · RTL reverses",
      "Connectivity + system overlays wired · G-02 / G-03 / G-10 / G-11 ready for feature packs",
      "Foundation widget set complete · buttons / inputs / cards / sheet / toggles / progress / shimmer / banner / biometric / empty · all token-driven · light/dark/RTL/reduced-motion ready",
      "M2–M6 feature packs can build on this foundation · no foundation rework required",
      "Decisions logged in Handoff · NOT code blockers · feature work proceeds",
    ],
  },
  {
    name: "■ M2 — Onboarding & Auth",
    kind: "m2",
    kicker: "M2 · MOBILE · ONBOARDING & AUTH · 01–15 · S-01/02/03 · G-06 · FIRST FEATURE PACK",
    title: "Onboarding & Auth · Figma 01–15 + S-01/S-02/S-03 + G-06",
    subtitle: "First Flutter feature pack · builds on M1 foundation · consumes B3 auth endpoints. Light + dark + RTL day-1 · Cairo for Arabic · numbers/prices LTR · M1 session state machine drives routing · server is source of truth · generic non-enumerating error messages · GDPR consent persisted with version + timestamp.",
    rules: [
      { t: "warning", v: "Use M1 tokens / widgets · NEVER hardcode hex · NEVER re-pick fonts · every screen renders light + dark + RTL · Cairo for Arabic · numbers/prices LTR" },
      { t: "warning", v: "Server is source of truth for auth state · UI reflects M1 session machine · loggedOut → pendingVerification → 2FA → active → locked · UI never decides outcomes locally" },
      { t: "warning", v: "Generic non-enumerating error messages · NEVER reveal whether email/phone exists · mirror B3 behavior · 'invalid credentials' not 'user not found'" },
      { t: "warning", v: "Secure token handling per M1 · Keychain / Keystore · refresh rotation · NO tokens in logs · NO tokens in plain storage" },
      { t: "warning", v: "GDPR consent (G-06) persisted via API with version + timestamp BEFORE onboarding proceeds · real persisted decision · NOT a forgotten checkbox" },
      { t: "purple",  v: "Haptics + reduced-motion per accessibility pass · wrong OTP = error haptic · primary tap = light · onboarding hero respects reduced-motion · cross-fade fallback" },
      { t: "orange",  v: "Resend-with-cooldown on OTP / verification · lockout / rate-limit feedback graceful · NO crash · clear localized message" },
      { t: "teal",    v: "Permissions requested contextually · NEVER block whole app on denied optional permission · graceful degrade · re-prompt at the moment of need" },
    ],
    onboardingFlow: [
      { t: "warning", k: "G-06 · GDPR Consent",        v: "Precedes onboarding on first launch · POST /consents (version + timestamp · region) · refusal = blocks app per regional law · soft-decline UX where allowed" },
      { t: "orange",  k: "01 · Splash",                v: "Brand mark · DM Serif Display · token-driven · respects reduced-motion (no parallax) · auto-routes after readiness check" },
      { t: "orange",  k: "02 · Onboarding Hero",       v: "Premium aspirational · 'Stay connected anywhere in the Gulf' · token typography · Lottie/cross-fade per reduced-motion · skip available" },
      { t: "purple",  k: "03 · Services",              v: "eSIM · VoIP · VPN · AI Advisor entry-point preview · brand-role colors (orange/teal/purple) · 3 cards" },
      { t: "purple",  k: "04 · Coverage",              v: "Map / list of supported countries · Gulf prominence · live data from /catalog/coverage · empty/loading/error states from M1" },
      { t: "warning", k: "05 · Language Select",       v: "ar / en · default Arabic for Gulf locale per device · persists via M1 locale storage · runtime switch (no restart)" },
      { t: "warning", k: "06 · Region Select",         v: "Gulf-first · UAE / KSA / Bahrain / Oman / Qatar / Kuwait first · then global · sets market_region · drives regional_flags later" },
      { t: "teal",    k: "07 · Permissions",           v: "Notifications request · contextual at right moment · NOT all-at-once · graceful denial · re-prompt later from Account if needed" },
      { t: "orange",  k: "08 · Welcome / Login Gate",  v: "Login or Register routes · SSO buttons (Apple / Google) · skippable on return (re-onboarding G-15 lives in M6)" },
    ],
    authFlow: [
      { t: "orange",  k: "09 · Login",                 v: "Email/phone + password · POST /auth/login · 2FA challenge if enabled → S-02 · pending verification → 11 / 14 · active → Home · generic errors only" },
      { t: "orange",  k: "10 · Register",              v: "Gulf-first phone picker · email · password (strength meter) · captures G-06 consent inline · POST /auth/register · routes to 11 phone verification" },
      { t: "warning", k: "11 · Phone Verification",    v: "M1 OTP input (6-digit · auto-advance · paste-aware) · POST /auth/verify-phone · resend cooldown 60s · wrong OTP = error haptic · max attempts → graceful lockout" },
      { t: "purple",  k: "12 · Forgot Password",       v: "Email or phone input · POST /auth/forgot · ALWAYS returns generic 'if account exists, reset sent' · never enumerates" },
      { t: "warning", k: "13 · Reset Password",        v: "Token from email/SMS link · new password + confirm · strength meter · POST /auth/reset · invalidates ALL sessions per B3 · routes to 09 login" },
      { t: "purple",  k: "14 · Email Verification",    v: "Magic-link or 6-digit code · POST /auth/verify-email · resend cooldown · token expiry handled with retry" },
      { t: "teal",    k: "15 · SSO Loading",           v: "Apple / Google via B3 SSO shape · OAuth handoff · loading state visible · first SSO login STILL captures G-06 consent · token storage same path" },
      { t: "warning", k: "S-01 · 2FA Setup Wizard",    v: "QR + secret from B3 · scan or type-in · confirm 6-digit · show one-time recovery codes (download / copy / mark-saved gate) · POST /auth/2fa/enable" },
      { t: "warning", k: "S-02 · 2FA Challenge",       v: "TOTP 6-digit OR recovery code path · paste-aware · wrong → error haptic + generic message · max attempts handled · stable across app backgrounding" },
      { t: "teal",    k: "S-03 · Biometric Enable",    v: "M1 biometric hook · device keypair generation · server challenge signed · enrolled flag stored · skippable · convenience over existing session NOT identity" },
    ],
    pathLogic: [
      { t: "orange",  k: "First-launch path", v: "G-06 → 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 · runs once · skippable on return · stored 'onboarded' flag" },
      { t: "orange",  k: "Registration path", v: "08 → 10 → 11 (phone OTP) → S-01 (2FA setup) → S-03 (biometric enable) → Home · 2FA + biometric SKIPPABLE but encouraged" },
      { t: "warning", k: "Login path · 2FA on", v: "08 → 09 → S-02 (2FA challenge) → Home · pending email verify → 14 first · pending phone verify → 11 first" },
      { t: "purple",  k: "Forgot path",        v: "09 → 12 → email/SMS link → 13 → 09 (re-login) · all sessions invalidated · forces fresh login on all devices" },
      { t: "teal",    k: "SSO path",           v: "08 → 15 → Apple/Google handoff → consent capture if first time → S-01/S-03 if first time → Home" },
      { t: "warning", k: "Deep-link auth-aware", v: "Unauthenticated deep link → auth flow → resumes destination after active session · ties to G-04 in M6 · pending state respects original intent" },
    ],
    integration: [
      { t: "orange",  k: "B3 endpoint mapping", v: "/auth/register · /auth/login · /auth/refresh · /auth/logout · /auth/verify-phone · /auth/verify-email · /auth/forgot · /auth/reset · /auth/2fa/* · /auth/sso/* · /consents" },
      { t: "warning", k: "Repository layer",     v: "AuthRepository + ConsentRepository · returns Result<T, ApiError> from M1 · widgets switch on ApiError code · NEVER raw exceptions in widgets" },
      { t: "warning", k: "State machine wiring", v: "Successful auth → Riverpod sessionProvider transitions to active → router redirects to Home · pending verify → routes to right verify screen · all transitions audited locally for debug" },
      { t: "purple",  k: "Error envelope mapping", v: "B0 envelope → typed ApiError · 422 details flow into per-field form errors · 401 'invalid credentials' generic · 429 RATE_LIMITED graceful with cooldown" },
      { t: "teal",    k: "Resend cooldown",       v: "Per-channel cooldown timer (60s default) · button disabled with countdown · backend 429 also surfaced as cooldown · stored locally to survive screen rebuild" },
      { t: "warning", k: "Lockout handling",      v: "B3 max-attempts lockout → friendly screen with retry-after time · NEVER crash · NEVER reveal exact threshold · supports recovery via 12 forgot path" },
    ],
    tests: [
      "G-06 consent captured BEFORE app proceeds · POST /consents written with version + timestamp + region · refusal blocks per regional law",
      "Generic auth errors · login with non-existent email returns same message as wrong password · zero enumeration",
      "Light + dark + RTL render every screen · Cairo loads for ar · DM Sans for en · numbers stay LTR inside Arabic strings",
      "OTP wrong → error haptic + generic message · max attempts → graceful lockout · resend cooldown timer counts down 60s",
      "Reset password invalidates all sessions · login on second device → forced re-auth after reset on first",
      "SSO first-time capture · Apple/Google login first time → consent screen surfaces · subsequent logins skip consent",
      "2FA setup S-01 · QR scans correctly · type-in path works · recovery codes shown ONCE · 'I saved them' gate before continue",
      "2FA challenge S-02 · TOTP path + recovery-code path both succeed · paste-aware · wrong → error haptic",
      "Biometric S-03 · enrolled device keypair signs server challenge · skippable · password fallback works on un-enrolled device",
      "Deep-link auth-aware · share-link tapped while logged-out → auth flow → resumes destination after active session",
      "Permissions denial graceful · denying notifications does NOT block app · Account screen offers re-prompt path",
      "Reduced-motion respected · onboarding hero replaced with cross-fade · animated transitions disabled",
      "Pending verification routing · register → 11 phone verify FIRST · email verify second · 2FA setup third · biometric last",
      "Token storage · access + refresh in flutter_secure_storage · NEVER in SharedPreferences · uninstall clears Keychain (iOS) / Keystore (Android)",
      "Localization runtime switch · 05 language change applies without restart · ar default for Gulf locale per device",
    ],
    edgeCases: [
      "SSO provider specifics · Apple Sign-In email-relay handling · Google nonce verification · Sign-in-with-Apple display-name capture (one-shot)",
      "Lockout thresholds · exact attempt count · lockout window · per-channel (login vs OTP vs 2FA) · UX team sign-off",
      "Recovery-code UX · how prominently surfaced · download as PDF vs copy vs print · 'I saved them' gate strength",
      "Email verification token expiry · how long valid · resend cadence · what happens if user clicks expired link · re-issue flow",
      "Phone-number portability · user changes number → re-verify path · old number retains until new verified · admin-side scenarios",
      "Returning-user re-onboarding (G-15) · what triggers it · whether to re-show language/region or skip · M6 owns this · M2 leaves hook",
      "Consent version bump · existing user opens app after policy update · forced re-consent screen · gate before app shell · ties to A17",
    ],
    handoff: [
      "M3 eSIM assumes · active session · verified user · sessionProvider in active state · phone verified · region set · entitled to make purchases",
      "M3+ assumes · auth interceptor handles 401 silently via M1 refresh · no feature pack re-implements auth",
      "M5 Billing assumes · 2FA enrolled state available · step-up trigger from M1 fires fresh-auth challenge for sensitive actions",
      "M6 Account assumes · G-15 re-onboarding hook in place · permissions re-prompt path exists · consent version mismatch handled here",
      "Web admin (W1) DOES NOT consume M2 · separate auth realm · independent state machine",
    ],
    pending: [
      "SSO provider final terms · Apple developer agreement · Google OAuth consent screen approval for Gulf markets",
      "Lockout policy numbers · attempt count + window confirmed with security team · per-channel variation",
      "Recovery-code UX strength · 'I saved them' gate vs forced download · UX team sign-off",
      "Onboarding skip rules · skippable on return after how many sessions · re-onboarding G-15 trigger conditions",
      "Default locale fallback · device locale unclear → Arabic vs English · Gulf-resident vs global-resident heuristic",
      "Permission timing · notifications at 07 vs deferred to first relevant moment · A/B test plan",
      "Consent version handling · forced re-consent on bump vs soft-prompt · per regional law (UAE PDPL · KSA PDPL)",
    ],
    exit: [
      "All 8 onboarding screens (G-06 + 01–08) live · light + dark + RTL · M1 tokens + widgets only",
      "All 7 auth screens (09–15) + S-01/02/03 live · light + dark + RTL · Cairo + DM Sans correct",
      "G-06 GDPR consent persisted via API with version + timestamp BEFORE onboarding proceeds",
      "Generic non-enumerating error messages on all auth failures · zero account enumeration",
      "Session state machine wired · loggedOut → pendingVerification → 2FA → active → locked transitions tested",
      "B3 endpoints mapped via repository layer · Result<T,ApiError> propagates · B0 envelope mapped to typed errors",
      "OTP resend cooldown live · 60s default · backend 429 surfaced as cooldown · graceful lockout",
      "2FA setup + challenge + recovery-code path all green · biometric enroll signs server challenge",
      "SSO Apple + Google flows live · first-time consent captured · token storage same path",
      "Deep-link auth-aware routing · unauthenticated deep link resumes destination after active session",
      "Haptics + reduced-motion respected · wrong OTP error haptic · onboarding hero cross-fade fallback",
      "Localization runtime switch · ar default for Gulf locale · numbers stay LTR in Arabic strings",
      "Permissions contextual · graceful denial · re-prompt path stub for M6",
      "Edge cases logged in Handoff · NOT code blockers · M3 begins on active verified session",
    ],
  },
  {
    name: "■ M3 — Home & eSIM",
    kind: "m3",
    kicker: "M3 · MOBILE · HOME & ESIM · 16–30 + E-01/02/03 + G-08 + G-12 + S-07 · REVENUE CORE",
    title: "Home & eSIM · Figma 16–30 + E-01/E-02/E-03",
    subtitle: "Revenue core · ties M1 plumbing to B4 provisioning + B5 billing. External PSP path (FL D2: eSIM = service consumed outside app · NOT Apple IAP). Server-computed quote · G-08 refund inline on 25 · Idempotency-Key on purchase/top-up · provision_status SEPARATE from install_status · auto-refund on paid-but-failed-provision · NEVER silent charged-but-undelivered.",
    rules: [
      { t: "warning", v: "M1 tokens / widgets only · light + dark + RTL everywhere · numbers/prices LTR in Arabic strings · zero hardcoded hex" },
      { t: "warning", v: "Prices · plans · availability from B4 catalog API · NEVER hardcoded · NEVER recomputed client-side · money is integer minor + currency from API · formatted per locale" },
      { t: "warning", v: "Payment is EXTERNAL PSP path per FL D2 · eSIM = service consumed outside app · NOT Apple IAP · B5 PaymentIntent + 3DS flow · server computes quote · client-set price/discount IGNORED" },
      { t: "warning", v: "Region gating respected · regional_flags filters catalog · disabled markets NEVER show purchasable plans · defense-in-depth at API layer also" },
      { t: "warning", v: "provision_status SEPARATE from install_status per B4 · purchase success ≠ installed · install guide reports back · NEVER assume install happened" },
      { t: "warning", v: "G-08 refund notice INLINE on screen 25 · NOT separate page · acknowledgement persisted with policy_version via API · attached to payment row" },
      { t: "warning", v: "Idempotency-Key from M1 on purchase / top-up POSTs · same key on retry → no double-charge · 24h TTL respected" },
      { t: "purple",  v: "Haptics · payment / eSIM success = success notification haptic · primary tap = light · per accessibility pass" },
    ],
    homeScreens: [
      { t: "orange",  k: "16 · Home · No Plan",        v: "Empty conversion-oriented · entry to browse 21 · optional AI advisor entry point (B7) · 'Browse plans' primary CTA · regional badge for user market" },
      { t: "purple",  k: "17 · Home · Active Plan",    v: "Progress ring from M1 (data remaining + days remaining) · plan card · top-up CTA · usage from B4 esim_usage · HIGH-CONTRAST variant per accessibility pass" },
      { t: "orange",  k: "18 · Home · Multiple Plans", v: "Stacked plan cards · per-plan progress · swipe between · primary CTA per active plan · sort by expiry" },
      { t: "warning", k: "19 · Home · Expiring Soon",  v: "Clear renew / top-up CTA · expiry badge (red < 24h · amber < 7d) · routes to top-up E-02 or new browse 21 · push-prompt eligible" },
      { t: "purple",  k: "20 · Notifications Panel",   v: "List from B4/B6/B7 events · usage low · plan expiring · payment success · referral completed · advisor recommendation · cleared individually or all" },
    ],
    browseFlow: [
      { t: "orange",  k: "21 · Plans Browser",       v: "Filter by country / region (regional bundle) · from B4 catalog · cursor pagination · empty/loading/error from M1 · brand-orange CTAs" },
      { t: "orange",  k: "22 · Plan Detail",         v: "Coverage list · data + days · price (server-formatted) · provider note · 'Buy' primary CTA · routes to 25 (or E-01 first if compatibility unknown)" },
      { t: "purple",  k: "23 · Country Search",      v: "Search input · country list with flag · filters drive 21 · recent searches stored locally" },
      { t: "purple",  k: "24 · Regional Bundle",     v: "Multi-country bundle (e.g. GCC · Europe · Asia) · price + coverage · same purchase flow as single-country" },
      { t: "warning", k: "E-01 · Compatibility",     v: "Device eSIM capability check · platform_eSIM API where available · honest report (supported / not / unknown · iOS 12.1+ + dual-SIM specifics) · can appear pre-browse for first-time" },
    ],
    purchaseFlow: [
      { t: "warning", k: "25 · Purchase Review",     v: "Server-computed quote · line items · tax per FL D3 per-market rule · TOTAL from server · G-08 refund notice INLINE · acknowledgement checkbox required · POST /payments/intents on Pay" },
      { t: "warning", k: "26 · Payment Select",      v: "PSP methods (Tap/PayTabs/Stripe per FL D1) · saved cards · Apple Pay where supported · add-card via B5 SetupIntent · default selection · default-card token-ref only" },
      { t: "warning", k: "S-07 · 3DS Challenge",     v: "PSP 3DS WebView OR SDK (decision per chosen PSP) · success/fail/cancel handled · client confirmation NOT trusted (B5 webhook is source of truth) · returns to 27 on webhook" },
      { t: "purple",  k: "27 · Purchase Success",    v: "Animated success · success haptic · routes to 30 install guide · linked to provisioning poll · receipt + invoice download via B5" },
      { t: "warning", k: "G-12 · Payment Timeout",   v: "Intent not confirmed in window → recoverable timed-out state · safe retry uses SAME Idempotency-Key · late webhook does not re-charge · clear localized message" },
      { t: "warning", k: "Paid-but-provision-failed", v: "B4 fails after payment succeeded → reflect B5 auto-refund OR flagged-review outcome · NEVER silent · user notified · audit + reconciliation row · routes to support if flagged" },
    ],
    postPurchase: [
      { t: "teal",    k: "Provisioning poll",        v: "After 27 success · GET /esim/orders/:id status (or push) · pending → provisioning → provisioned/failed · live UI state · on provisioned → 30 install guide" },
      { t: "warning", k: "30 · Installation Guide",  v: "Clear iOS vs Android steps · LPA activation string + QR + Universal Link from B4 · Universal-Link install where supported · NEVER claim in-app iOS provisioning that isn't available · 'I installed' button reports install_status" },
      { t: "purple",  k: "28 · My eSIMs",            v: "List active + historical · status badges · expiry · usage summary · taps into 29 · provision_status + install_status both surfaced" },
      { t: "purple",  k: "29 · eSIM Detail / Usage", v: "Live usage from B4 · progress ring · expiry · low-balance prompts (B6 push) · re-show install guide if not installed · top-up entry to E-02" },
    ],
    topUp: [
      { t: "orange",  k: "E-02 · Top-Up Plan Select", v: "Available top-up SKUs for the eSIM from B4 · same regional gating · price from server · routes to E-03" },
      { t: "warning", k: "E-03 · Top-Up Review & Pay", v: "Same quote → PSP → 3DS path as 25/26/S-07 · same Idempotency-Key generator · same G-08 acknowledgement (latest version) · top-up provisioning resumes existing eSIM" },
    ],
    integration: [
      { t: "orange",  k: "B4 catalog endpoints",     v: "GET /catalog/countries · /catalog/plans · /catalog/regional-bundles · /esim/compatibility · /esim/orders · /esim/orders/:id · /esim/usage" },
      { t: "warning", k: "B5 billing endpoints",     v: "POST /payments/intents · /payments/:id/confirm · /setup-intents · GET /payments/:id · webhook drives final state · 3DS via PSP" },
      { t: "warning", k: "Idempotency-Key plumbing", v: "M1 generator · stored on in-flight purchase · reused on retry across screen rebuilds · 24h TTL aware · clears on success or hard failure" },
      { t: "purple",  k: "Repository layer",         v: "CatalogRepository · EsimRepository · PaymentRepository · all return Result<T,ApiError> · widgets switch on code · loading/empty/error states from M1" },
      { t: "teal",    k: "AI advisor entry path",    v: "From B7/M5 · advisor recommendation can pre-select plan · route directly into 25 Purchase Review · recommendation_id linked to order for analytics" },
      { t: "warning", k: "Provisioning state UI",    v: "Polling interval (default 3s · capped 60s) OR FCM/APNs push · live UI state · timeout → graceful 'taking longer than expected' state with support entry" },
    ],
    tests: [
      "Server-computed quote · client-side discount/price ignored · screen 25 total = server response total · tax line per market FL D3",
      "G-08 acknowledgement INLINE on 25 · checkbox required to enable Pay · POST stores policy_version on payment row · per-version retention",
      "Idempotent purchase · same Idempotency-Key on retry → no double-charge · second response mirrors first · UI reflects original outcome",
      "3DS happy path · S-07 challenge succeeds → webhook flips → 27 success · client confirmation alone does NOT flip state",
      "3DS cancel · user cancels → 25 returnable state · same Idempotency-Key reusable · no duplicate intent",
      "G-12 payment timeout · intent ages → timed_out · safe retry · late webhook does not re-charge · clear localized message",
      "Paid-but-provision-failed · provisioning fails after payment → auto-refund OR flagged-review surfaced · NEVER charged-but-undelivered silent",
      "Provisioning state UI · pending → provisioning → provisioned · install guide surfaces only on provisioned · failure routes to support",
      "provision_status vs install_status separate · purchase 27 ≠ installed · 'I installed' button on 30 reports install · 28 reflects both",
      "Region gating · disabled-market plan never shown · API returns empty list · UI shows market-aware empty state",
      "Compatibility E-01 · iOS unsupported device → honest 'not supported' · Android with eSIM API → supported · unknown → falls back manual",
      "Installation guide iOS vs Android · iOS shows Universal Link primary · Android shows LPA string + QR · NEVER claims in-app iOS provisioning",
      "Top-up E-02/E-03 · same idempotent quote → PSP → 3DS path · resumes existing eSIM · usage updates on next poll",
      "Light + dark + RTL render every screen · screen-17 high-contrast variant verified · numbers stay LTR in Arabic",
      "Loading + empty + error states for every list · network down → retry banner · 5xx → error boundary · 422 → form errors",
      "Money formatting · API { amount, currency } → 'AED 12.50' style · multi-currency users see correct symbol · NEVER recomputed",
      "AI advisor entry path · advisor recommendation → 25 with pre-selected plan · recommendation_id linked to resulting order",
      "Haptics · payment success = success notification haptic · primary tap = light · respects reduced-motion (haptic still fires)",
    ],
    edgeCases: [
      "3DS SDK vs WebView per chosen PSP · Tap / PayTabs / Stripe each have different integration · adapter wraps · UI agnostic",
      "Usage polling vs push for live balance · 3s poll on detail screen · push for low-balance · battery vs freshness tradeoff",
      "Universal Link install reliability · iOS captures install confirmation only sometimes · fallback 'I installed' button always available",
      "Apple Pay availability per market · UAE supported · KSA limited · Apple Pay button conditional · token still goes through PSP not direct",
      "Quote freshness · screen 25 quote TTL (5 min default) · stale → re-fetch on Pay tap · price-change rare but handled gracefully",
      "Multi-eSIM device limits · iOS supports up to 8 eSIMs but only 2 active · UI surfaces this limit on install guide for power users",
      "Captive-portal during purchase (G-10) · checkout suspended → resume on connectivity · idempotency protects against double-submit",
    ],
    handoff: [
      "M4 Connect (VoIP + VPN) reuses · 25 quote → 26 PSP → S-07 3DS → 27 success purchase flow · same Idempotency-Key path · same provisioning poll pattern",
      "M5 Billing screens (48–53) reuse · payment-method picker (26) · receipt detail · invoice list · saved cards already in B5 token store",
      "M5 Loyalty (B6) earns from 27 success event · M5 Advisor (B7) routes into 25 with recommendation_id · both paths covered here",
      "M6 System states · G-02 / G-10 / G-11 banner overlays already wired in M1 shell · purchase flow respects without rebuild",
      "G-12 payment timeout state shape stable · M5 billing history surfaces same timeout outcome · same recovery path",
    ],
    pending: [
      "3DS integration · WebView vs native SDK per chosen PSP from FL D1 · UX continuity tradeoff · in-app browser vs full screen",
      "Usage refresh cadence · 3s poll vs FCM push · per-screen tradeoff · battery cost on low-end Android",
      "Apple Pay availability matrix · per-market enablement · regional_flags drives visibility · live PSP support confirmed",
      "Compatibility check honesty · how strict on 'unknown' · default-allow vs default-block · false-negative cost",
      "Installation success rate measurement · client-reported vs B4 webhook · which is source of truth for analytics",
      "AI advisor entry surface · banner on 16 vs floating button vs inline card · A/B test plan",
      "Quote TTL · 5 min vs 15 min · refresh-on-Pay vs refresh-on-screen-show · PSP behavior on stale intent",
    ],
    exit: [
      "All 5 home screens (16–20) live · light + dark + RTL · screen-17 high-contrast variant · M1 widgets only",
      "All 4 browse screens (21–24) + E-01 compatibility live · regional gating respected · cursor pagination · empty/loading/error states",
      "Purchase flow (25–27 + S-07 + G-08 + G-12) green · server-computed quote · refund inline · 3DS happy + cancel + timeout paths tested",
      "Idempotency-Key on every purchase + top-up POST · retry safe · 24h TTL respected",
      "Paid-but-provision-failed surfaces auto-refund or flagged-review · NEVER silent charged-but-undelivered",
      "Provisioning poll/push live · pending → provisioning → provisioned/failed · install guide on provisioned only",
      "Installation guide iOS vs Android distinct · Universal Link primary on iOS · LPA string + QR on Android · 'I installed' reports install",
      "My eSIMs (28) + detail (29) live · provision_status + install_status both surfaced · live usage · low-balance prompts",
      "Top-up E-02/E-03 reuses same quote→PSP→3DS path · idempotent · resumes existing eSIM",
      "AI advisor entry path · recommendation pre-selects plan into 25 · recommendation_id linked to order",
      "B0 envelope mapped to localized messages · 422 details flow into form · 5xx retry banner · 401 silent refresh from M1",
      "Money formatting from API integer-minor + currency · zero client recomputation · multi-currency labels respected",
      "Light + dark + RTL verified on every screen · numbers LTR in Arabic · Cairo font correct",
      "Haptics + reduced-motion respected per accessibility map",
      "Edge cases logged in Handoff · NOT blockers · M4 Connect inherits stable purchase flow",
    ],
  },
  {
    name: "■ M4 — Connect (VoIP & VPN)",
    kind: "m4",
    kicker: "M4 · MOBILE · CONNECT · VOIP + VPN · 31–43 + V-01/V-02 + G-07 + G-10 + G-11 + G-13 · ONE TAB TWO SERVICES",
    title: "Connect · VoIP + VPN · Figma 31–43 + V-01/V-02",
    subtitle: "Connect is ONE bottom-nav tab merging VoIP + VPN · shared IA · NOT two unrelated apps. Reuses M3 purchase flow (quote → PSP → 3DS → success). Teal = VPN/security per brand role. G-07 legal disclaimer gates VPN first activation · G-10 captive portal · G-11 reconnecting · G-13 call-quality inline · region gating strict per FL.",
    rules: [
      { t: "warning", v: "M1 tokens / widgets only · light + dark + RTL everywhere · numbers/prices LTR in Arabic · TEAL is VPN/security color per brand role separation" },
      { t: "warning", v: "Connect is ONE area · shared IA + navigation across VoIP + VPN even though distinct services · do NOT make them feel like two unrelated apps" },
      { t: "warning", v: "Region gating STRICT · regional_flags.voip_enabled / vpn_enabled · disabled markets get typed refusal from API · NEVER start-then-fail · graceful 'not available here'" },
      { t: "warning", v: "VPN first activation requires G-07 legal disclaimer acceptance · persisted via API (versioned) BEFORE config issued per B4 · no acceptance → no connect · enforcement is server-side too" },
      { t: "warning", v: "Number purchase reuses M3 external-PSP flow · quote → PSP → 3DS → success · idempotent · KYC requirement surfaced from API not hardcoded · varies per country" },
      { t: "warning", v: "VPN/VoIP credentials + server keys NEVER in logs · NEVER in insecure storage · app holds only what API issues for the session · session-bound · rotated on reconnect" },
      { t: "purple",  v: "Haptics · VPN connected = HEAVY impact · primary tap = light · reduced-motion alternative for VPN connecting ring + any pulse animation" },
      { t: "teal",    v: "Platform VPN APIs (iOS Network Extension / Android VpnService) behind clean Dart interface · platform calling stack (CallKit / ConnectionService) for VoIP · entitlements flagged in Handoff" },
    ],
    voipScreens: [
      { t: "orange",  k: "31 · VoIP Empty",         v: "No number · conversion-oriented · 'Get a virtual number' primary CTA → 33 browse · explains use cases (travel · business · privacy)" },
      { t: "orange",  k: "32 · VoIP Filled",        v: "Active number card · quick actions (dial · history · settings) · status badge · usage summary · routes to 38 dialer / 37 history" },
      { t: "purple",  k: "33 · Browse Numbers",     v: "From VoIP catalog (B4) · filter by country / area-code · regional gating respected · price (server-formatted) · cursor pagination" },
      { t: "purple",  k: "34 · Number Detail",      v: "Capabilities (SMS · voice · fax) · monthly cost · KYC requirement surfaced if any · 'Buy' routes to 35 (or KYC step first)" },
      { t: "warning", k: "35 · Purchase Review",    v: "Reuses M3 purchase flow (25 → 26 → S-07 → 27 path) · KYC fields appended where required · same Idempotency-Key · G-08 inline" },
      { t: "purple",  k: "36 · Purchase Success",   v: "Success haptic · routes to 32 filled · number provisioned via B4 reservation→active · usable immediately · receipt available" },
      { t: "teal",    k: "37 · Call History",       v: "CDRs from B4 · inbound + outbound · duration · cost (minor + currency) · cursor pagination · empty/loading/error states" },
      { t: "orange",  k: "38 · In-App Dialer",      v: "Number pad · contact picker · paste-aware · recent · routes to V-01 active call · platform CallKit / ConnectionService integration" },
    ],
    voipCalls: [
      { t: "warning", k: "V-01 · Active Call",      v: "Mute · keypad · speaker · hold · end · timer · G-13 call-quality warning INLINE banner when quality degrades · NOT separate page · CallKit/ConnectionService UI integration" },
      { t: "warning", k: "V-02 · Incoming Call",    v: "Overlay-like full-screen experience · accept / decline · CallKit on iOS surfaces system UI · ConnectionService on Android · respects DND · push-driven (B4 push)" },
    ],
    vpnScreens: [
      { t: "teal",    k: "39 · VPN Disconnected",   v: "Clear protection status · 'Not protected' · large CTA 'Connect' · shows last server / region · token-driven teal accent" },
      { t: "teal",    k: "40 · VPN Connecting",     v: "Ring animation (teal) · reduced-motion alternative (cross-fade) · cancel option · platform handshake state surfaced · timeout → graceful retry" },
      { t: "warning", k: "41 · VPN Connected",      v: "HEAVY haptic on connect · clear 'Protected' state · server name + flag · throughput live · IP shown · disconnect CTA · time-connected counter" },
      { t: "teal",    k: "42 · Server List",        v: "From B4 · region grouped · load indicator (low/med/high) · ping (optional) · favorites · recently used · search · routes back to 39 with selection" },
      { t: "purple",  k: "43 · VPN Settings",       v: "Auto-connect toggle · Trusted networks · Kill switch · Protocol selector (WireGuard default) · Split tunnel (if supported) · usage stats" },
    ],
    activationFlow: [
      { t: "warning", k: "G-07 · VPN Legal Disclaimer", v: "First activation only · persisted via /consents (version + timestamp) BEFORE B4 issues config · refusal blocks VPN entirely · per-market language (UAE / KSA legality)" },
      { t: "warning", k: "Config issuance",              v: "POST /vpn/configs · B4 returns WireGuard config or credentials · session-bound · NEVER stored in plain prefs · feeds platform VPN API · session_id tracked" },
      { t: "warning", k: "Tunnel lifecycle",             v: "Platform VPN API · iOS NEPacketTunnelProvider · Android VpnService · Dart interface wraps · connect → established → disconnect · errors surface to UI" },
      { t: "purple",  k: "Reconnect on network change",  v: "WiFi → cellular → reconnect via G-11 banner · session_id resumes where possible · new config if expired · NEVER silently drops protection" },
    ],
    contextualBanners: [
      { t: "warning", k: "G-10 · Captive Portal",        v: "Detected (hotel wifi etc.) · banner overlay on active screen · NOT separate page · clear action 'Open portal' · WebView fallback · auto-dismisses on connectivity restored" },
      { t: "warning", k: "G-11 · VPN Reconnecting",      v: "Live banner during reconnection · NOT separate page · spinner + 'Reconnecting...' + manual retry · auto-clears on connected · attaches at shell over feature screens" },
      { t: "warning", k: "G-13 · Call-Quality Warning",  v: "Inline banner on V-01 active call · ONLY when quality degrades (jitter / packet loss / low bitrate threshold) · NOT separate page · suggests switching to VPN/data network · auto-clears on recovery" },
      { t: "purple",  k: "Banner mirroring · RTL",       v: "All banners mirror correctly in RTL · icon + text order reversed · slide-in direction matches · attached at shell + feature levels per spec" },
    ],
    integration: [
      { t: "orange",  k: "B4 VoIP endpoints",        v: "GET /voip/numbers (catalog) · GET /voip/my-numbers · POST /voip/numbers/:id/purchase · GET /voip/cdrs · POST /voip/calls · webhook drives provisioning state" },
      { t: "orange",  k: "B4 VPN endpoints",         v: "GET /vpn/servers · POST /vpn/configs (G-07 consent gated) · POST /vpn/sessions/:id/start · POST /vpn/sessions/:id/end · GET /vpn/sessions/:id/status" },
      { t: "warning", k: "B5 billing reuse",         v: "Number purchase via /payments/intents (M3 path) · Idempotency-Key generator reused · 3DS S-07 same flow · webhook drives final state" },
      { t: "purple",  k: "Repository layer",         v: "VoipRepository · VpnRepository · ConsentRepository (G-07) · all return Result<T,ApiError> · widgets switch on code · empty/loading/error from M1" },
      { t: "warning", k: "Platform plugins",         v: "flutter_callkit_incoming or platform_call_kit (iOS CallKit + Android ConnectionService) · platform_vpn (NEPacketTunnelProvider + VpnService) · clean Dart interface · entitlements doc'd" },
      { t: "teal",    k: "Push integration",         v: "Incoming call push (V-02) · VoIP push (PushKit on iOS · high-priority FCM on Android) · separate channel from notification push · respects DND" },
    ],
    tests: [
      "Region gating · disabled-market user → typed refusal surfaced gracefully · NEVER start-then-fail · VoIP browse + VPN connect both honor regional_flags",
      "G-07 disclaimer · first VPN activation requires acceptance · persisted via API with version + timestamp · refusal blocks config issuance · re-prompt on policy version bump",
      "Number purchase reuses M3 flow · same quote → PSP → 3DS → success · same Idempotency-Key · KYC fields surface from API when required",
      "VPN connect happy path · 39 → G-07 (first time) → 40 connecting → 41 connected · HEAVY haptic on connect · IP shown · throughput live",
      "VPN disconnect · 41 → 39 disconnected · session ended via B4 · platform VPN tunnel torn down · credentials cleared from session memory",
      "VPN reconnect on network change · WiFi → cellular → G-11 banner · auto-reconnect · session_id resumes · NEVER silently drops protection",
      "Captive portal G-10 · simulated hotel wifi → banner over active screen · 'Open portal' WebView · auto-dismiss on connectivity restored",
      "Active call quality warning G-13 · induced jitter/loss → inline banner on V-01 · suggests network switch · auto-clear on recovery · NEVER separate page",
      "Incoming call V-02 · push delivers → CallKit (iOS) / ConnectionService (Android) UI surfaces · accept / decline / DND respected",
      "Light + dark + RTL render every screen · banners mirror correctly · numbers stay LTR in Arabic · Cairo font correct",
      "Reduced-motion respected · VPN connecting ring replaced with cross-fade · pulse animations disabled · haptics still fire",
      "Credentials never in logs · log scrubbing verified · session credentials in secure storage only · cleared on disconnect",
      "Server list 42 · live load indicator · favorites persist · regional grouping correct · search works in ar + en",
      "VPN settings 43 · auto-connect on trusted/untrusted networks · kill switch enforced · protocol selector default WireGuard · split tunnel where supported",
      "CDRs 37 · cursor pagination · cost in minor units + currency from API · NEVER recomputed · empty state when no calls",
      "Dialer 38 · paste-aware · contact picker · routes to V-01 · CallKit/ConnectionService integration · respects DND",
    ],
    edgeCases: [
      "iOS Network Extension entitlement · com.apple.developer.networking.networkextension · Apple approval required pre-submission · Handoff item",
      "iOS PushKit for VoIP push · com.apple.developer.pushkit.unrestricted-voip · separate from notification APNs · Handoff item",
      "Android ConnectionService permissions · BIND_TELECOM_CONNECTION_SERVICE · MANAGE_OWN_CALLS · Handoff item",
      "Android VpnService prepare() flow · user must approve VPN once · UI handles approval-denied gracefully",
      "VoIP KYC variation · KSA / UAE may require ID verification for number purchase · API surfaces fields · which provider supports digital KYC",
      "VPN legality per market · UAE permits licensed VPN only · KSA permits with restrictions · regional_flags + G-07 wording must match",
      "Call quality threshold for G-13 · jitter ms · packet loss % · MOS score · which metric drives banner · vendor-specific",
      "Captive portal detection · iOS captiveNetworkInfo deprecated · Android getNetworkCapabilities · cross-platform heuristic agreed",
      "VPN protocol fallback · WireGuard primary · OpenVPN fallback if blocked · auto-detect or manual setting",
      "VPN server load metric · provider-specific scale · UI shows low/med/high not raw number · normalization layer",
    ],
    handoff: [
      "M5 Billing reuses · number purchase already through B5 · receipts in billing history without rebuild · subscription path for VoIP monthly via B5 subscriptions",
      "M5 AI Advisor (B7) can recommend VPN/VoIP plan · routes into M4 browse + purchase flow with recommendation_id · acceptance-rate tracked",
      "M6 Account · trusted networks list · auto-connect rules · VPN protocol preference · all editable from Account > Connect settings · M4 surfaces shape",
      "M6 System states · G-02 / G-03 already in M1 shell · M4 adds G-07 / G-10 / G-11 / G-13 banners at appropriate level",
      "Web admin (W1) A05 / A06 / A11 manage VoIP numbers + VPN sessions + servers · M4 client respects what admin disables in real time",
      "iOS Network Extension entitlement · CallKit + PushKit entitlements · Android VpnService + ConnectionService · all flagged for Handoff before submission",
    ],
    pending: [
      "iOS Network Extension entitlement approval · Apple developer agreement · timeline 2–4 weeks · pre-submission requirement",
      "iOS PushKit unrestricted VoIP entitlement · same approval cycle · without it incoming call push degrades to standard notification",
      "VPN provider final pick (B4) · self-hosted WireGuard vs resold · server geography · capacity per server · key rotation cadence",
      "VoIP / DID provider final pick · per-country availability · KYC requirements per market · CDR delivery (push vs pull) · pricing model",
      "VPN legality wording per market (UAE PDPL · KSA · Bahrain · Oman) · counsel-reviewed G-07 text · per-language version",
      "Call-quality threshold tuning · jitter / loss / MOS scoring · false-positive rate vs missed-degradation · post-launch tuning",
      "Captive portal heuristic · cross-platform reliability · false-positive rate on tethered hotspots",
      "Trusted-network UX · auto-connect on untrusted · whitelist UX · battery cost vs protection-always",
    ],
    exit: [
      "Connect tab is ONE area · VoIP + VPN sub-segmented control · shared IA · feels like one product not two",
      "All 8 VoIP screens (31–38) live · light + dark + RTL · M1 widgets only",
      "V-01 active call + V-02 incoming call live · CallKit (iOS) + ConnectionService (Android) integrated · DND respected",
      "All 5 VPN screens (39–43) live · teal accent · token-driven · light/dark/RTL · reduced-motion alternative",
      "G-07 disclaimer gates first VPN activation · persisted via API · refusal blocks config issuance",
      "Region gating strict · disabled markets surfaced gracefully · NEVER start-then-fail",
      "Number purchase reuses M3 quote → PSP → 3DS → success · idempotent · KYC fields surface when required",
      "VPN connect / disconnect / reconnect lifecycle green · platform tunnel · session-bound credentials · cleared on disconnect",
      "G-10 captive portal banner · G-11 VPN reconnecting banner · G-13 call-quality inline · all attached at correct level · RTL mirror correct",
      "VPN heavy haptic on connect · primary tap light · reduced-motion respected · ring + pulse animations have alternatives",
      "Credentials never in logs · session-only secure storage · log scrubbing verified",
      "B4 VoIP + VPN endpoints wired · webhooks drive provisioning · CDRs paginated · server list live load indicator",
      "Platform entitlements flagged in Handoff · iOS Network Extension · PushKit VoIP · Android VpnService + ConnectionService",
      "Edge cases logged in Handoff · NOT code blockers · M5 Billing/Loyalty/AI inherits stable purchase + connection flows",
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
  if (spec.kind === "b4") return buildBackendB4Page(page, spec);
  if (spec.kind === "b5") return buildBackendB5Page(page, spec);
  if (spec.kind === "fl") return buildBackendFLPage(page, spec);
  if (spec.kind === "b6") return buildBackendB6Page(page, spec);
  if (spec.kind === "b7") return buildBackendB7Page(page, spec);
  if (spec.kind === "b8") return buildBackendB8Page(page, spec);
  if (spec.kind === "w1") return buildBackendW1Page(page, spec);
  if (spec.kind === "m1") return buildBackendM1Page(page, spec);
  if (spec.kind === "m2") return buildBackendM2Page(page, spec);
  if (spec.kind === "m3") return buildBackendM3Page(page, spec);
  if (spec.kind === "m4") return buildBackendM4Page(page, spec);
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

async function buildBackendB4Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // 00 · Non-negotiables (2-col)
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 110;
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

  // 01 · Adapter cards (full-width, rich)
  y = sectionHeader(page, "01", "Adapters · interface · state machine · webhook · notes", 0, y);
  {
    const padTop = 18;
    const headerH = 56;
    const blurbH = 46;
    const methodsHdrH = 24;
    const methodRowH = 24;
    const stateRowH = 30;
    const webhookRowH = 50;
    const noteRowH = 22;
    const padBottom = 22;
    for (let i = 0; i < spec.adapters.length; i++) {
      const a = spec.adapters[i];
      const accent = ACCENT[a.t] || ACCENT.orange;
      const cardH =
        padTop + headerH + blurbH +
        methodsHdrH + a.methods.length * methodRowH +
        stateRowH +
        webhookRowH +
        24 + a.notes.length * noteRowH +
        padBottom;
      const card = backendCard(page, 0, y, PAGE_W, cardH, accent);

      // Header row
      safeText(card, a.id, 24, padTop, 12, accent, PRIMARY_FONT_BOLD, 200);
      safeText(card, a.title, 220, padTop - 4, 22, "#1C0804", PRIMARY_FONT_BOLD, PAGE_W - 260);

      // Blurb
      safeText(card, a.blurb, 24, padTop + headerH - 28, 12, "#7A6058", PRIMARY_FONT, PAGE_W - 48);

      // Methods
      let by = padTop + headerH + blurbH - 12;
      safeText(card, "METHODS", 24, by, 10, "#7A6058", PRIMARY_FONT_BOLD, 100);
      by += methodsHdrH - 4;
      for (let j = 0; j < a.methods.length; j++) {
        const dot = createRect(card, 24, by + 8, 6, 6, accent);
        dot.cornerRadius = 3;
        safeText(card, a.methods[j], 40, by, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 64);
        by += methodRowH;
      }

      // State machine
      by += 6;
      safeText(card, "STATE", 24, by, 10, "#7A6058", PRIMARY_FONT_BOLD, 60);
      safeText(card, a.stateMachine, 80, by - 1, 12, accent, PRIMARY_FONT_BOLD, PAGE_W - 120);
      by += stateRowH;

      // Webhook
      safeText(card, "WEBHOOK", 24, by, 10, "#7A6058", PRIMARY_FONT_BOLD, 80);
      safeText(card, a.webhook, 110, by - 1, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 140);
      by += webhookRowH;

      // Notes
      safeText(card, "NOTES", 24, by, 10, "#7A6058", PRIMARY_FONT_BOLD, 60);
      by += 18;
      for (let j = 0; j < a.notes.length; j++) {
        const dot = createRect(card, 24, by + 7, 5, 5, "#7A6058");
        dot.cornerRadius = 2.5;
        safeText(card, a.notes[j], 40, by, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 64);
        by += noteRowH;
      }

      y += cardH + 16;
    }
    y += 24;
  }

  // 02 · Cross-cutting (2-col k/v)
  y = sectionHeader(page, "02", "Cross-cutting · orchestrator · retries · admin", 0, y);
  {
    const colW = (PAGE_W - COL_GAP) / 2;
    const cardH = 130;
    for (let i = 0; i < spec.crosscut.length; i++) {
      const r = spec.crosscut[i];
      const col = i % 2, row = Math.floor(i / 2);
      const cx = col * (colW + COL_GAP);
      const cy = y + row * (cardH + 12);
      const accent = ACCENT[r.t] || ACCENT.orange;
      const card = backendCard(page, cx, cy, colW, cardH, accent);
      safeText(card, r.k, 24, 18, 12, accent, PRIMARY_FONT_BOLD, colW - 48);
      safeText(card, r.v, 24, 40, 12, "#1C0804", PRIMARY_FONT, colW - 48);
    }
    y += Math.ceil(spec.crosscut.length / 2) * (cardH + 12) + 40;
  }

  // 03 · Tests
  y = sectionHeader(page, "03", "Test surface · sandbox", 0, y);
  {
    const cardH = 56;
    for (let i = 0; i < spec.tests.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.purple);
      const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
      box.cornerRadius = 4;
      safeText(card, spec.tests[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      y += cardH + 8;
    }
    y += 32;
  }

  // 04 · Live-provider procurement decisions
  y = sectionHeader(page, "04", "Live-provider decisions · procurement · legal · NOT code blockers", 0, y);
  {
    const cardH = 64;
    for (let i = 0; i < spec.decisions.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.warning);
      safeText(card, spec.decisions[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  // Exit
  y = sectionHeader(page, "Exit", "Phase B4 exit checklist", 0, y);
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

async function buildBackendB5Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  // Helpers reused locally
  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Money flow + lifecycle
  y = sectionHeader(page, "01", "Flows · money flow + subscription lifecycle + reconciliation", 0, y);
  kv2col(spec.flows, 130);

  // 02 · PaymentProvider methods
  y = sectionHeader(page, "02", "PaymentProvider · interface surface", 0, y);
  fullRows(spec.methods, 56, "orange", false);

  // 03 · Tables touched / new
  y = sectionHeader(page, "03", "Tables touched + new", 0, y);
  kv2col(spec.tables, 110);

  // 04 · Tests
  y = sectionHeader(page, "04", "Test surface · sandbox", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 05 · Pending finance / legal
  y = sectionHeader(page, "05", "Pending · finance / legal · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase B5 exit checklist", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendFLPage(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function decisionCard(d, cardH) {
    const accent = ACCENT[d.t] || ACCENT.orange;
    const card = backendCard(page, 0, y, PAGE_W, cardH, accent);
    safeText(card, d.k, 24, 18, 14, accent, PRIMARY_FONT_BOLD, PAGE_W - 48);
    safeText(card, "FINDING", 24, 50, 10, "#7A6058", PRIMARY_FONT_BOLD, 200);
    safeText(card, d.v, 24, 66, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
    safeText(card, "OPTIONS / CONTEXT", 24, 152, 10, "#7A6058", PRIMARY_FONT_BOLD, 300);
    safeText(card, d.opts, 24, 168, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
    safeText(card, "BUILD DIRECTION", 24, 254, 10, "#7A6058", PRIMARY_FONT_BOLD, 300);
    safeText(card, d.build, 24, 270, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
    y += cardH + 12;
  }
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables / disclaimer
  y = sectionHeader(page, "00", "Non-negotiables · disclaimer · scope", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Decisions D1–D4
  y = sectionHeader(page, "01", "Four decisions · finding · options · build direction", 0, y);
  for (let i = 0; i < spec.decisions.length; i++) decisionCard(spec.decisions[i], 340);
  y += 16;

  // 02 · VAT rate table
  y = sectionHeader(page, "02", "VAT per market · June 2026 · data-driven · confirm with counsel", 0, y);
  kv2col(spec.rates, 70);

  // 03 · Feeds back into B5
  y = sectionHeader(page, "03", "Feeds back into B5 / data model", 0, y);
  kv2col(spec.feeds, 90);

  // 04 · Open items
  y = sectionHeader(page, "04", "Open items · need professional confirmation before launch", 0, y);
  fullRows(spec.open, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase FL exit checklist", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendB6Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }
  function endpointsBlock(items, cardH) {
    for (let i = 0; i < items.length; i++) {
      const line = items[i];
      const m = line.match(/^(GET|POST|PATCH|PUT|DELETE)\s+(\S+)\s+·\s+(.*)$/);
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      if (m) {
        const tone = METHOD_TONE[m[1]] || ACCENT.teal;
        safeText(card, m[1], 24, 18, 12, tone, PRIMARY_FONT_BOLD, 80);
        safeText(card, m[2], 110, 18, 12, "#1C0804", PRIMARY_FONT_BOLD, 380);
        safeText(card, m[3], 500, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 524);
      } else {
        safeText(card, line, 24, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · ledger model · event-driven · liability mindset", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Flows
  y = sectionHeader(page, "01", "Flows · earn · redeem · referral · expiry · admin", 0, y);
  kv2col(spec.flows, 130);

  // 02 · Tables
  y = sectionHeader(page, "02", "Tables · append-only ledger + redemptions + referrals + versioned rules", 0, y);
  kv2col(spec.tables, 110);

  // 03 · Endpoints
  y = sectionHeader(page, "03", "Endpoints · loyalty + referrals + admin", 0, y);
  endpointsBlock(spec.endpoints, 56);

  // 04 · Tests
  y = sectionHeader(page, "04", "Test surface · ledger correctness · idempotency · concurrency · anti-abuse", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 05 · Pending business decisions
  y = sectionHeader(page, "05", "Pending · business / finance decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase B6 exit checklist", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendB7Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }
  function endpointsBlock(items, cardH) {
    for (let i = 0; i < items.length; i++) {
      const line = items[i];
      const m = line.match(/^(GET|POST|PATCH|PUT|DELETE)\s+(\S+)\s+·\s+(.*)$/);
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      if (m) {
        const tone = METHOD_TONE[m[1]] || ACCENT.teal;
        safeText(card, m[1], 24, 18, 12, tone, PRIMARY_FONT_BOLD, 80);
        safeText(card, m[2], 110, 18, 12, "#1C0804", PRIMARY_FONT_BOLD, 380);
        safeText(card, m[3], 500, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 524);
      } else {
        safeText(card, line, 24, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · grounding · explainability · safety", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Flows
  y = sectionHeader(page, "01", "Flows · grounded recommendation · chat · accept / dismiss · privacy gates", 0, y);
  kv2col(spec.flows, 130);

  // 02 · ModelProvider methods
  y = sectionHeader(page, "02", "ModelProvider · interface surface", 0, y);
  fullRows(spec.methods, 56, "orange", false);

  // 03 · Tables
  y = sectionHeader(page, "03", "Tables · threads · messages · recommendations · usage · versioned config", 0, y);
  kv2col(spec.tables, 110);

  // 04 · Endpoints
  y = sectionHeader(page, "04", "Endpoints · advisor + recommendations + admin", 0, y);
  endpointsBlock(spec.endpoints, 56);

  // 05 · Tests
  y = sectionHeader(page, "05", "Test surface · grounding · validation · safety · routing", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 06 · Pending
  y = sectionHeader(page, "06", "Pending · product / policy decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase B7 exit checklist", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendB8Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }
  function endpointsBlock(items, cardH) {
    for (let i = 0; i < items.length; i++) {
      const line = items[i];
      const m = line.match(/^(GET|POST|PATCH|PUT|DELETE)\s+(\S+)\s+·\s+(.*)$/);
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT.teal);
      if (m) {
        const tone = METHOD_TONE[m[1]] || ACCENT.teal;
        safeText(card, m[1], 24, 18, 12, tone, PRIMARY_FONT_BOLD, 80);
        safeText(card, m[2], 110, 18, 12, "#1C0804", PRIMARY_FONT_BOLD, 460);
        safeText(card, m[3], 580, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 604);
      } else {
        safeText(card, line, 24, 18, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · separate realm · RBAC · append-only audit · masking", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Flows
  y = sectionHeader(page, "01", "Flows · login · permission gate · audit · PII · approvals · maintenance · reconciliation", 0, y);
  kv2col(spec.flows, 130);

  // 02 · Screens A00–A19
  y = sectionHeader(page, "02", "Screens A00–A19 · permission per screen · audit on every mutation", 0, y);
  kv2col(spec.screens, 100);

  // 03 · Tables
  y = sectionHeader(page, "03", "Tables · admin realm · audit · PII log · pricing versions", 0, y);
  kv2col(spec.tables, 110);

  // 04 · Endpoints
  y = sectionHeader(page, "04", "Endpoints · /api/v1/admin namespace · permission name in column 3", 0, y);
  endpointsBlock(spec.endpoints, 56);

  // 05 · Tests
  y = sectionHeader(page, "05", "Test surface · permissions · audit · masking · reconciliation", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 06 · Pending
  y = sectionHeader(page, "06", "Pending · ops / business / legal decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase B8 exit checklist · last backend phase", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendW1Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · generated client · RBAC-aware · separate auth · masking", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Architecture
  y = sectionHeader(page, "01", "Architecture · stack · client gen · auth · routing · data fetching", 0, y);
  kv2col(spec.architecture, 110);

  // 02 · Shell
  y = sectionHeader(page, "02", "App shell · layout · header · auth flow · permission-gated nav · env banner", 0, y);
  kv2col(spec.shell, 130);

  // 03 · Primitives
  y = sectionHeader(page, "03", "Shared primitives · reused across all A00–A19", 0, y);
  kv2col(spec.primitives, 110);

  // 04 · Screens · Operations
  y = sectionHeader(page, "04", "Screens · Operations · A01 / A02 / A03 / A15 / A16", 0, y);
  kv2col(spec.screensOps, 110);

  // 05 · Screens · Product
  y = sectionHeader(page, "05", "Screens · Product · A04 / A05 / A06 / A11 / A10", 0, y);
  kv2col(spec.screensProduct, 110);

  // 06 · Screens · Commerce
  y = sectionHeader(page, "06", "Screens · Commerce · A08 / A09 / A12 / A13 / A14", 0, y);
  kv2col(spec.screensCommerce, 110);

  // 07 · Screens · Finance + System
  y = sectionHeader(page, "07", "Screens · Finance + System · A07 / A19 / A17 / A18", 0, y);
  kv2col(spec.screensFinance, 110);

  // 08 · Cross-cutting
  y = sectionHeader(page, "08", "Cross-cutting · errors · accessibility · responsive · locale · telemetry", 0, y);
  fullRows(spec.crossCutting, 64, "orange", false);

  // 09 · Tests
  y = sectionHeader(page, "09", "Test surface · client gen · RBAC · auth · errors · money · masking · reconciliation", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 10 · Pending
  y = sectionHeader(page, "10", "Pending · ops sign-off · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase W1 exit checklist · first client phase", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendM1Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · generated client · tokens · light/dark/RTL · 4-tab nav · secure storage", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Architecture
  y = sectionHeader(page, "01", "Architecture · stack · state mgmt · l10n · env · client gen · secure storage", 0, y);
  kv2col(spec.architecture, 110);

  // 02 · Theme layer
  y = sectionHeader(page, "02", "Theme layer · BrandGuide v2 tokens · light + dark + RTL · Cairo for Arabic", 0, y);
  kv2col(spec.theme, 110);

  // 03 · API + data layer
  y = sectionHeader(page, "03", "API + data layer · interceptors · refresh rotation · idempotency · typed errors", 0, y);
  kv2col(spec.apiLayer, 110);

  // 04 · Auth + session
  y = sectionHeader(page, "04", "Auth + session plumbing · state machine · biometric · step-up · idle lock S-06", 0, y);
  kv2col(spec.auth, 110);

  // 05 · App shell + routing
  y = sectionHeader(page, "05", "App shell + routing · 4-tab bottom nav · Connect = VoIP + VPN · AI is NOT a tab", 0, y);
  kv2col(spec.shell, 110);

  // 06 · Foundation widgets
  y = sectionHeader(page, "06", "Foundation widgets · token-driven · light/dark/RTL/reduced-motion ready", 0, y);
  kv2col(spec.primitives, 110);

  // 07 · Verification
  y = sectionHeader(page, "07", "Verification · tokens match · dark + RTL render · primitives exist · interceptors green", 0, y);
  fullRows(spec.verification, 56, "purple", true);

  // 08 · Handoff to M2–M6
  y = sectionHeader(page, "08", "Handoff to M2–M6 · what each feature pack inherits from this foundation", 0, y);
  fullRows(spec.handoff, 64, "orange", false);

  // 09 · Pending
  y = sectionHeader(page, "09", "Pending · product / UX decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase M1 exit checklist · first mobile phase", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendM2Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · M1 tokens · server source-of-truth · GDPR persisted · generic errors", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Onboarding flow (G-06 + 01–08)
  y = sectionHeader(page, "01", "Onboarding flow · G-06 + 01–08 · first launch · skippable on return", 0, y);
  kv2col(spec.onboardingFlow, 110);

  // 02 · Auth flow (09–15 + S-01/02/03)
  y = sectionHeader(page, "02", "Auth flow · 09–15 + S-01 / S-02 / S-03 · 2FA + biometric", 0, y);
  kv2col(spec.authFlow, 110);

  // 03 · Path logic
  y = sectionHeader(page, "03", "Path logic · first-launch · register · login · forgot · SSO · deep-link auth-aware", 0, y);
  kv2col(spec.pathLogic, 110);

  // 04 · Integration
  y = sectionHeader(page, "04", "Integration · B3 endpoints · repos · state machine · error envelope · cooldown · lockout", 0, y);
  kv2col(spec.integration, 110);

  // 05 · Tests
  y = sectionHeader(page, "05", "Test surface · enumeration-free · OTP · 2FA · biometric · SSO · deep-link · localization", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 06 · Edge cases
  y = sectionHeader(page, "06", "Edge cases · contract gaps to confirm before/during build", 0, y);
  fullRows(spec.edgeCases, 64, "orange", false);

  // 07 · Handoff
  y = sectionHeader(page, "07", "Handoff to M3+ · what later feature packs assume post-auth", 0, y);
  fullRows(spec.handoff, 56, "teal", false);

  // 08 · Pending
  y = sectionHeader(page, "08", "Pending · security / UX / legal decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase M2 exit checklist · first feature pack", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendM3Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · server-computed quote · external PSP · provision vs install · idempotency", 0, y);
  rules2col(spec.rules, 110);

  // 01 · Home (16–20)
  y = sectionHeader(page, "01", "Home · 16–20 · No Plan / Active / Multiple / Expiring / Notifications", 0, y);
  kv2col(spec.homeScreens, 110);

  // 02 · Browse + compatibility
  y = sectionHeader(page, "02", "Browse · 21 / 22 / 23 / 24 + E-01 compatibility · regional gating", 0, y);
  kv2col(spec.browseFlow, 110);

  // 03 · Purchase flow
  y = sectionHeader(page, "03", "Purchase · 25 + 26 + S-07 + 27 · G-08 inline · G-12 timeout · paid-but-failed-provision", 0, y);
  kv2col(spec.purchaseFlow, 130);

  // 04 · Post-purchase + install
  y = sectionHeader(page, "04", "Post-purchase · provisioning poll · 30 install guide · 28 / 29 my eSIMs / detail", 0, y);
  kv2col(spec.postPurchase, 110);

  // 05 · Top-up
  y = sectionHeader(page, "05", "Top-up · E-02 / E-03 · same quote → PSP → 3DS path · idempotent", 0, y);
  kv2col(spec.topUp, 110);

  // 06 · Integration
  y = sectionHeader(page, "06", "Integration · B4 catalog + B5 billing + idempotency + advisor entry + provisioning state", 0, y);
  kv2col(spec.integration, 110);

  // 07 · Tests
  y = sectionHeader(page, "07", "Test surface · quote · idempotency · 3DS paths · timeout · provision vs install · region · advisor", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 08 · Edge cases
  y = sectionHeader(page, "08", "Edge cases · contract gaps to confirm before/during build", 0, y);
  fullRows(spec.edgeCases, 64, "orange", false);

  // 09 · Handoff
  y = sectionHeader(page, "09", "Handoff to M4 / M5 / M6 · what later feature packs reuse from this purchase flow", 0, y);
  fullRows(spec.handoff, 56, "teal", false);

  // 10 · Pending
  y = sectionHeader(page, "10", "Pending · PSP / UX / analytics decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase M3 exit checklist · revenue core complete", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildBackendM4Page(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  const COL_GAP = 32;
  let y = backendHeader(page, spec, PAGE_W);

  function rules2col(items, cardH) {
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
  function kv2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey, withCheckbox) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      if (withCheckbox) {
        const box = createFrame(card, "checkbox", 24, 18, 18, 18, "#FFF8F4", "#E8E0DB");
        box.cornerRadius = 4;
        safeText(card, items[i], 60, 18, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 80);
      } else {
        safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      }
      y += cardH + 8;
    }
    y += 32;
  }

  // 00 · Non-negotiables
  y = sectionHeader(page, "00", "Non-negotiables · one tab two services · region gating · G-07 gate · platform entitlements", 0, y);
  rules2col(spec.rules, 110);

  // 01 · VoIP screens
  y = sectionHeader(page, "01", "VoIP · 31–38 · empty / filled / browse / detail / purchase / history / dialer", 0, y);
  kv2col(spec.voipScreens, 110);

  // 02 · Calls
  y = sectionHeader(page, "02", "Calls · V-01 active (G-13 inline) · V-02 incoming (CallKit / ConnectionService overlay)", 0, y);
  kv2col(spec.voipCalls, 110);

  // 03 · VPN screens
  y = sectionHeader(page, "03", "VPN · 39–43 · disconnected / connecting / connected / server list / settings", 0, y);
  kv2col(spec.vpnScreens, 110);

  // 04 · Activation flow
  y = sectionHeader(page, "04", "Activation · G-07 disclaimer → config issuance → tunnel lifecycle → reconnect", 0, y);
  kv2col(spec.activationFlow, 110);

  // 05 · Contextual banners
  y = sectionHeader(page, "05", "Contextual banners · G-10 captive · G-11 reconnecting · G-13 call quality · RTL mirror", 0, y);
  kv2col(spec.contextualBanners, 110);

  // 06 · Integration
  y = sectionHeader(page, "06", "Integration · B4 VoIP + VPN · B5 reuse · platform plugins · push", 0, y);
  kv2col(spec.integration, 110);

  // 07 · Tests
  y = sectionHeader(page, "07", "Test surface · region · G-07 gate · tunnel lifecycle · banners · push · credentials safety", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  // 08 · Edge cases
  y = sectionHeader(page, "08", "Edge cases · platform entitlements · KYC · legality · protocol fallback", 0, y);
  fullRows(spec.edgeCases, 64, "orange", false);

  // 09 · Handoff
  y = sectionHeader(page, "09", "Handoff to M5 / M6 / W1 · what reuses + what M4 flags for entitlements", 0, y);
  fullRows(spec.handoff, 64, "teal", false);

  // 10 · Pending
  y = sectionHeader(page, "10", "Pending · platform / provider / legal decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  // Exit
  y = sectionHeader(page, "Exit", "Phase M4 exit checklist · Connect (VoIP + VPN)", 0, y);
  fullRows(spec.exit, 56, "teal", true);
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
