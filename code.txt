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
  "■ M5 — AI, Billing & Loyalty",
  "■ M6 — Account, Notifications & System",
  "■ R1 — Testing, Observability & Handoff",
  "■ Review Checklists",
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

const SCREEN_CONTENT = {
  "01":  { acc:"orange", kick:"WELCOME", h:"Stay connected, anywhere in the Gulf.", b:"eSIM • VoIP • VPN — one app, one bill, real local coverage.", cta:"Get Started", rows:[] },
  "02":  { acc:"orange", kick:"ESIM",    h:"Land. Tap. Connected.", b:"Pre-load a Gulf eSIM before you fly. Activates the moment you land.", cta:"Continue", rows:[["Instant activation","No SIM swap"],["Coverage in 6 markets","UAE · KSA · QA · KW · BH · OM"],["Top-up in app","Same plan, more data"]] },
  "03":  { acc:"teal",   kick:"VOIP & VPN", h:"Your number. Your privacy.", b:"Local Gulf numbers for calls, plus a region-aware VPN that respects local rules.", cta:"Continue", rows:[["VoIP","Local +971 / +966 numbers"],["VPN","Region-aware servers"],["Private","Zero-log policy"]] },
  "04":  { acc:"orange", kick:"COVERAGE", h:"Where Roamlu works.", b:"Live network status across the GCC. Tap a market to preview plans.", cta:"See Plans", rows:[["United Arab Emirates","All emirates · 5G"],["Saudi Arabia","Nationwide · 5G"],["Qatar · Bahrain · Kuwait · Oman","4G/5G partner networks"]] },
  "05":  { acc:"teal",   kick:"LANGUAGE", h:"Choose your language.", b:"You can change this anytime in Settings.", cta:"Continue", rows:[["English","Default"],["العربية","Arabic · RTL"],["Français","Beta"]] },
  "06":  { acc:"teal",   kick:"REGION",   h:"Where are you based?", b:"We use this for tax and compliance — never for marketing.", cta:"Continue", rows:[["United Arab Emirates","VAT 5%"],["Saudi Arabia","VAT 15%"],["Other GCC","Region-specific"]] },
  "07":  { acc:"warning",kick:"PERMISSIONS", h:"A few permissions to get going.", b:"You're in control. Decline any and the app still works — fewer features.", cta:"Allow All", rows:[["Notifications","Plan expiry, payment alerts"],["Location","Coverage detection only"],["Network","eSIM install handoff"]] },
  "08":  { acc:"orange", kick:"WELCOME",  h:"Sign in to continue.", b:"Roamlu uses 2FA on every login. You're protected by default.", cta:"Sign In", rows:[["Create account","Takes about a minute"],["Continue with Apple","Single sign-on"],["Continue with Google","Single sign-on"]] },
  "09":  { acc:"orange", kick:"LOGIN",    h:"Welcome back.", b:"Use the email you signed up with.", cta:"Sign In", rows:[["Email","you@roamlu.com"],["Password","••••••••"],["Forgot password?","Reset by email"]] },
  "10":  { acc:"orange", kick:"REGISTER", h:"Create your account.", b:"By continuing you agree to the Terms and Privacy Policy.", cta:"Create Account", rows:[["Full name","As on your passport"],["Email","Verified by code"],["Password","12+ chars, mixed case"]] },
  "11":  { acc:"orange", kick:"VERIFY",   h:"Enter the 6-digit code.", b:"We sent it to +971 50 ••• 12 34. Code expires in 5 minutes.", cta:"Verify", rows:[["Resend code","Available in 0:42"],["Wrong number?","Edit and resend"]] },
  "12":  { acc:"teal",   kick:"FORGOT",   h:"Reset your password.", b:"We'll email a one-time link. It expires in 15 minutes.", cta:"Send Reset Link", rows:[["Email","you@roamlu.com"]] },
  "13":  { acc:"teal",   kick:"RESET",    h:"Choose a new password.", b:"All active sessions will be signed out for safety.", cta:"Update Password", rows:[["New password","12+ chars"],["Confirm password","Must match"]] },
  "14":  { acc:"teal",   kick:"VERIFY",   h:"Confirm your email.", b:"Tap the link we sent to you@roamlu.com. This page updates automatically.", cta:"Resend Email", rows:[] },
  "15":  { acc:"orange", kick:"SSO",      h:"Signing you in…", b:"Verifying your provider session. This usually takes a few seconds.", cta:"", rows:[] },
  "S-01":{ acc:"warning",kick:"2FA SETUP",h:"Add a second factor.", b:"Authenticator app or SMS — we recommend the app.", cta:"Use Authenticator App", rows:[["Authenticator app","Recommended · offline"],["SMS","Fallback · network-dependent"],["Recovery codes","Save somewhere safe"]] },
  "S-02":{ acc:"warning",kick:"2FA",      h:"Enter your 6-digit code.", b:"From your authenticator app. Code refreshes every 30s.", cta:"Verify", rows:[["Use SMS instead","Send code to •• 34"],["Lost device?","Use a recovery code"]] },
  "S-03":{ acc:"warning",kick:"BIOMETRIC",h:"Enable Face ID?", b:"Skip the password on this device. You can disable it anytime.", cta:"Enable Face ID", rows:[["Faster sign-in","One look, you're in"],["Locally stored","Never leaves the device"]] },
  "16":  { acc:"orange", kick:"HOME",     h:"Hi Layla — ready to roam?", b:"You don't have an active plan yet. Pick one for your trip.", cta:"Browse eSIM Plans", rows:[["Quick start · UAE","From AED 29"],["Regional · GCC 6 markets","From AED 89"],["AI Advisor","Help me pick"]] },
  "17":  { acc:"teal",   kick:"ACTIVE PLAN", h:"GCC Regional · 8.4 GB left", b:"Expires in 11 days · auto-top-up off", cta:"Top Up", rows:[["VoIP +971 50 222 1188","Active"],["VPN","Connected · Dubai"],["Loyalty","2,140 pts"]] },
  "18":  { acc:"teal",   kick:"PLANS",    h:"3 active plans", b:"Tap any plan for usage and controls.", cta:"Add Another", rows:[["UAE 10 GB","6.2 GB left · 4 days"],["KSA 5 GB","Pending install"],["GCC Roaming","Expired yesterday"]] },
  "19":  { acc:"warning",kick:"EXPIRING", h:"Your UAE plan ends in 36h.", b:"Top up now to keep the same number and avoid reconnection.", cta:"Top Up Now", rows:[["Auto top-up","Off · turn on"],["Switch plan","See alternatives"]] },
  "20":  { acc:"orange", kick:"NOTIFICATIONS", h:"3 new updates", b:"Tap any item to open the related screen.", cta:"Mark all read", rows:[["Plan ends in 36h","UAE eSIM · just now"],["Payment received","AED 89 · 2h ago"],["VPN region update","KW server added"]] },
  "21":  { acc:"orange", kick:"BROWSE",   h:"Pick your destination.", b:"Pre-tax, in your local currency. Real coverage, real speeds.", cta:"", rows:[["UAE · 10 GB · 30 days","AED 89"],["KSA · 5 GB · 15 days","SAR 79"],["GCC 6 · 20 GB · 30 days","AED 199"]] },
  "22":  { acc:"orange", kick:"ESIM PLAN",h:"UAE · 10 GB · 30 days", b:"Etisalat / du partner network · 5G · hotspot allowed", cta:"Continue · AED 89", rows:[["Coverage","All emirates"],["Activation","Within 60 sec"],["Refund window","Pre-install only"]] },
  "23":  { acc:"orange", kick:"SEARCH",   h:"Search by country.", b:"45 destinations · sorted by Gulf-first.", cta:"", rows:[["United Arab Emirates","12 plans"],["Saudi Arabia","8 plans"],["Qatar","5 plans"]] },
  "24":  { acc:"orange", kick:"REGIONAL", h:"GCC 6 · One eSIM, six markets.", b:"Auto-switches between local networks · no extra charges.", cta:"Continue · AED 199", rows:[["20 GB pooled","Across all six"],["30 days","From first activation"],["Works with VoIP","Same number"]] },
  "25":  { acc:"warning",kick:"REVIEW",   h:"Review your purchase.", b:"By paying you accept the inline refund policy below (G-08).", cta:"Pay AED 89", rows:[["UAE · 10 GB · 30 days","AED 84.76"],["VAT 5%","AED 4.24"],["Total","AED 89.00"]] },
  "26":  { acc:"warning",kick:"PAYMENT",  h:"Secure payment", b:"3-D Secure may prompt for confirmation. Don't close the app.", cta:"Pay AED 89", rows:[["Visa •• 4242","Default"],["Apple Pay","Available"],["Add new card","+ "]] },
  "27":  { acc:"teal",   kick:"SUCCESS",  h:"You're paid. Now let's install.", b:"Receipt sent to you@roamlu.com · order #RM-A4F-0192", cta:"Install eSIM", rows:[["Plan","UAE · 10 GB"],["Activated","Auto when installed"],["Help","Step-by-step guide"]] },
  "28":  { acc:"orange", kick:"MY ESIMS", h:"3 eSIMs", b:"Active and recent. Pull to refresh.", cta:"+ Add eSIM", rows:[["UAE · 10 GB","6.2 GB left · 4d"],["KSA · 5 GB","Not installed"],["GCC 6","Expired"]] },
  "29":  { acc:"teal",   kick:"USAGE",    h:"6.2 GB of 10 GB", b:"Resets when the plan ends · auto top-up off", cta:"Top Up", rows:[["Today","412 MB"],["This week","2.8 GB"],["Hotspot","Allowed"]] },
  "30":  { acc:"orange", kick:"INSTALL",  h:"Install your eSIM.", b:"Three steps. Stay on Wi-Fi until it's done.", cta:"Open Settings", rows:[["1. Open Settings","Cellular › Add eSIM"],["2. Use QR or Universal Link","Tap the button below"],["3. Label and activate","Roamlu UAE"]] },
  "E-01":{ acc:"warning",kick:"COMPATIBILITY", h:"Is this device eSIM-ready?", b:"Roamlu checks model + carrier lock. No data leaves your device.", cta:"Run Check", rows:[["Model","iPhone 15 Pro"],["Carrier lock","Unlocked"],["iOS","17.4 — supported"]] },
  "E-02":{ acc:"orange", kick:"TOP UP",   h:"Add data to UAE eSIM.", b:"Same number, same plan — just more data.", cta:"Continue", rows:[["+ 5 GB · 15 days","AED 49"],["+ 10 GB · 30 days","AED 89"],["+ 20 GB · 30 days","AED 149"]] },
  "E-03":{ acc:"warning",kick:"TOP UP REVIEW", h:"+ 10 GB on UAE eSIM", b:"Idempotent retry · we'll never charge you twice.", cta:"Pay AED 89", rows:[["Top up","AED 84.76"],["VAT 5%","AED 4.24"],["Total","AED 89.00"]] },
  "31":  { acc:"teal",   kick:"VOIP",     h:"Get a local Gulf number.", b:"Calls, SMS, and CallKit integration on iOS.", cta:"Browse Numbers", rows:[["Why VoIP?","Local presence, global reach"],["Works abroad","Wi-Fi or mobile data"]] },
  "32":  { acc:"teal",   kick:"VOIP",     h:"+971 50 222 1188", b:"Active · 412 minutes used this month", cta:"Open Dialer", rows:[["Recent calls","12 today"],["Voicemail","2 unread"],["Settings","Forwarding off"]] },
  "33":  { acc:"teal",   kick:"NUMBERS",  h:"Pick your prefix.", b:"Stock refreshes daily. Numbers are reserved 10 minutes during checkout.", cta:"", rows:[["+971 50 ••• ••••","UAE Mobile · AED 39/mo"],["+966 55 ••• ••••","KSA Mobile · SAR 35/mo"],["+974 33 ••• ••••","Qatar Mobile · QAR 35/mo"]] },
  "34":  { acc:"teal",   kick:"NUMBER",   h:"+971 50 222 1188", b:"Premium pattern · monthly subscription", cta:"Continue · AED 39", rows:[["Calls","Unlimited inbound"],["SMS","500/month outbound"],["Cancellation","End of cycle"]] },
  "35":  { acc:"warning",kick:"REVIEW",   h:"Review your number.", b:"Subscription renews monthly · cancel anytime.", cta:"Pay AED 39", rows:[["Number","AED 37.14"],["VAT 5%","AED 1.86"],["Total","AED 39.00"]] },
  "36":  { acc:"teal",   kick:"SUCCESS",  h:"Your number is live.", b:"Saved to your device · CallKit ready", cta:"Make First Call", rows:[["Number","+971 50 222 1188"],["Renews","6 Jul 2026"]] },
  "37":  { acc:"teal",   kick:"HISTORY",  h:"Recent calls", b:"Last 30 days · tap a row for detail", cta:"", rows:[["Salim Al-Maktoum","Outgoing · 4:12"],["+971 4 555 0199","Missed · 9:02"],["Voicemail · Mom","1:08"]] },
  "38":  { acc:"teal",   kick:"DIALER",   h:"In-app dialer", b:"Uses your VoIP number when active", cta:"Call", rows:[["Dial","+971 50 222 1188"],["Recent","Salim 4:12"],["Quality","HD voice"]] },
  "V-01":{ acc:"teal",   kick:"ACTIVE CALL", h:"Salim Al-Maktoum", b:"Connected · 04:12 · HD voice", cta:"End", rows:[["Mute","Off"],["Speaker","Off"],["Add call","Conference"]] },
  "V-02":{ acc:"teal",   kick:"INCOMING", h:"Salim Al-Maktoum", b:"Roamlu VoIP · +971 50 222 1188", cta:"Accept", rows:[["Decline","Send to voicemail"],["Reply with text","Quick reply"]] },
  "39":  { acc:"purple", kick:"VPN",      h:"Disconnected", b:"Tap connect for region-aware Gulf-friendly servers.", cta:"Connect", rows:[["Last server","Dubai · 12 ms"],["Protocol","WireGuard"],["Region rules","Compliant by default"]] },
  "40":  { acc:"purple", kick:"CONNECTING", h:"Connecting…", b:"Verifying region eligibility · issuing config", cta:"Cancel", rows:[["Server","Dubai 03"],["Protocol","WireGuard"],["Status","Handshake"]] },
  "41":  { acc:"teal",   kick:"CONNECTED",h:"Connected · 00:14:22", b:"Server: Dubai 03 · 12 ms · 84 Mbps", cta:"Disconnect", rows:[["Data sent","42 MB"],["Data received","318 MB"],["IP","203.0.113.42"]] },
  "42":  { acc:"purple", kick:"SERVERS",  h:"Choose a server.", b:"Servers your market allows. Restricted ones are hidden by policy.", cta:"", rows:[["Dubai 03","12 ms · Recommended"],["Riyadh 02","18 ms"],["Doha 01","21 ms"]] },
  "43":  { acc:"purple", kick:"SETTINGS", h:"VPN Settings", b:"Defaults are tuned for the Gulf. Change with care.", cta:"Save", rows:[["Auto-connect on Wi-Fi","Off"],["Kill switch","On"],["Protocol","WireGuard"]] },
  "44":  { acc:"purple", kick:"AI ADVISOR", h:"Hi! Tell me about your trip.", b:"I'll suggest a plan — I never charge you, you confirm in checkout.", cta:"Start", rows:[["I'm visiting UAE for 10 days","Try this"],["Family of 4 to KSA","Try this"],["GCC business trip","Try this"]] },
  "45":  { acc:"purple", kick:"CHAT",     h:"AI Advisor", b:"How much data do you usually use per day?", cta:"Send", rows:[["You","10 days in UAE, light use"],["Advisor","I'd suggest UAE 10 GB"],["You","Hotspot too?"]] },
  "46":  { acc:"purple", kick:"RECOMMENDED", h:"UAE 10 GB · 30 days", b:"Why: 10-day trip, light browsing, hotspot allowed.", cta:"Review & Buy · AED 89", rows:[["Confidence","High"],["Recommendation ID","rec_a4f0192"],["Edit","Adjust trip"]] },
  "47":  { acc:"purple", kick:"HISTORY",  h:"Past advice", b:"Tap any conversation to revisit.", cta:"", rows:[["UAE business · 5 May","AED 89 · purchased"],["KSA family · 22 Apr","SAR 79 · purchased"],["Oman trip · 14 Mar","Not purchased"]] },
  "48":  { acc:"orange", kick:"PAYG",     h:"Pay as you go.", b:"No commitment. Top up anytime.", cta:"Buy 10 GB", rows:[["1 GB · 7d","AED 19"],["10 GB · 30d","AED 89"],["20 GB · 30d","AED 149"]] },
  "49":  { acc:"orange", kick:"MONTHLY",  h:"Monthly plans", b:"Auto-renew · cancel anytime · 7-day trial on first sub.", cta:"Start Trial", rows:[["Lite · 5 GB","AED 49/mo"],["Plus · 20 GB","AED 99/mo"],["Pro · Unlimited*","AED 199/mo"]] },
  "50":  { acc:"orange", kick:"YEARLY",   h:"Yearly · save 20%", b:"Pay once, roam all year. Cancel for prorated refund.", cta:"Subscribe", rows:[["Lite · 60 GB/yr","AED 470/yr"],["Plus · 240 GB/yr","AED 950/yr"],["Pro · Unlimited*","AED 1,910/yr"]] },
  "51":  { acc:"teal",   kick:"SUBSCRIPTION", h:"Plus · 20 GB/mo", b:"Renews 6 Jul 2026 · AED 99", cta:"Manage", rows:[["Switch plan","Upgrade or downgrade"],["Cancel","End of period"],["Receipts","Email + in-app"]] },
  "52":  { acc:"orange", kick:"PAYMENT METHODS", h:"Cards & wallets", b:"Default used for renewals.", cta:"+ Add Card", rows:[["Visa •• 4242","Default"],["Apple Pay","On"],["Mada •• 1144","Backup"]] },
  "53":  { acc:"teal",   kick:"BILLING",  h:"Receipts", b:"All amounts include applicable VAT.", cta:"Download", rows:[["6 Jun 2026","AED 89.00 · UAE 10 GB"],["1 Jun 2026","AED 99.00 · Plus monthly"],["18 May 2026","AED 39.00 · VoIP"]] },
  "B-01":{ acc:"orange", kick:"NEW CARD", h:"Add a card.", b:"Tokenized via your PSP — Roamlu never stores card details.", cta:"Save", rows:[["Card number","•••• •••• •••• ••••"],["Expiry · CVV","MM/YY · •••"],["Default","Use for renewals"]] },
  "B-02":{ acc:"warning",kick:"CANCEL",   h:"Cancel Plus?", b:"You'll keep access until 6 Jul 2026, then you'll move to PAYG.", cta:"Cancel at period end", rows:[["Cancel immediately","Prorated refund"],["Keep subscription","Stay on Plus"]] },
  "54":  { acc:"orange", kick:"LOYALTY",  h:"2,140 points", b:"~ AED 21.40 of value · expires rolling 12 months", cta:"Redeem", rows:[["Earned this month","+ 320"],["Redeemed","- 100"],["Tier","Silver"]] },
  "55":  { acc:"teal",   kick:"EARN",     h:"Ways to earn.", b:"Earnings post on webhook-confirmed events only.", cta:"", rows:[["Buy eSIM","10 pts / AED"],["Refer a friend","500 pts on first purchase"],["Renew subscription","20 pts / AED"]] },
  "56":  { acc:"teal",   kick:"REDEEM",   h:"Redeem points.", b:"Applied at checkout · max 50% of total.", cta:"Apply", rows:[["500 pts","AED 5 off"],["1,000 pts","AED 10 off"],["2,000 pts","AED 22 off"]] },
  "57":  { acc:"orange", kick:"REFER",    h:"Earn 500 pts per friend.", b:"They get AED 10 off their first plan. You get points on their first purchase.", cta:"Share Code", rows:[["Your code","LAYLA-RM92"],["Pending","2 friends"],["Confirmed","5 friends"]] },
  "58":  { acc:"orange", kick:"PROFILE",  h:"Layla Khan", b:"layla@roamlu.com · Silver tier", cta:"Edit", rows:[["Phone","+971 50 222 1188"],["Region","UAE"],["Member since","Jan 2026"]] },
  "59":  { acc:"orange", kick:"EDIT",     h:"Edit profile", b:"Some fields require re-verification.", cta:"Save", rows:[["Full name","Layla Khan"],["Email","Verified"],["Phone","Re-verify on change"]] },
  "60":  { acc:"teal",   kick:"SETTINGS", h:"App settings", b:"Defaults tuned for the Gulf.", cta:"", rows:[["Language","English"],["Theme","System"],["Currency","AED"]] },
  "61":  { acc:"teal",   kick:"NOTIFICATIONS", h:"Notifications", b:"Off-by-default for marketing per regional rules.", cta:"Save", rows:[["Plan expiry","On"],["Payment alerts","On"],["Marketing","Off"]] },
  "62":  { acc:"warning",kick:"SECURITY", h:"Security", b:"Active sessions and authentication factors.", cta:"", rows:[["2FA","Authenticator app"],["Face ID","On (this device)"],["Active sessions","2 devices"]] },
  "63":  { acc:"teal",   kick:"SUPPORT",  h:"Hi — how can we help?", b:"Avg reply 14 min · Arabic & English · 24/7", cta:"Start a chat", rows:[["Browse FAQ","Most common answers"],["Email","support@roamlu.com"],["Call us","+971 4 555 0100"]] },
  "64":  { acc:"teal",   kick:"FAQ",      h:"FAQ", b:"Search or browse. Still stuck? Start a chat.", cta:"", rows:[["Install eSIM","3 steps · video"],["Refund policy","Pre-install only"],["VPN regions","Why some are hidden"]] },
  "65":  { acc:"orange", kick:"ABOUT",    h:"About Roamlu", b:"Built in the Gulf, for the Gulf · v2.4.1 (build 1810)", cta:"", rows:[["Terms","Updated 2 May 2026"],["Privacy","Updated 2 May 2026"],["Open source","Acknowledgements"]] },
  "66":  { acc:"warning",kick:"DELETE",   h:"Delete account?", b:"Finance/audit records are retained per law. Marketing identifiers removed.", cta:"Continue", rows:[["You'll lose","Plans, points, numbers"],["You'll keep","Receipts, invoices"],["This is permanent","30-day grace period"]] },
  "S-06":{ acc:"warning",kick:"LOCKED",   h:"Session timed out.", b:"Re-authenticate to continue. Your work is saved.", cta:"Sign In Again", rows:[["Use Face ID","Recommended"],["Use password","Fallback"]] },
  "S-07":{ acc:"warning",kick:"3DS",      h:"Secure payment challenge", b:"Your bank needs to confirm this transaction. Don't close the app.", cta:"", rows:[["Amount","AED 89.00"],["Merchant","Roamlu FZ-LLC"],["Reference","RM-A4F-0192"]] },
  "G-01":{ acc:"warning",kick:"ERROR",    h:"Network error.", b:"We couldn't reach Roamlu. Check your connection and try again.", cta:"Retry", rows:[["Code","NET_TIMEOUT"],["When","Just now"],["Help","Open status page"]] },
  "G-02":{ acc:"warning",kick:"OFFLINE",  h:"You're offline.", b:"Cached data shown read-only · auto-resumes on reconnect.", cta:"Retry", rows:[["Last sync","2 min ago"],["Cached","Plans, profile"]] },
  "G-03":{ acc:"warning",kick:"MAINTENANCE", h:"Quick maintenance.", b:"We're back at 14:00 GST · billing & VPN unaffected.", cta:"", rows:[["ETA","14:00 GST"],["What's affected","Browsing & purchase"],["Status","status.roamlu.com"]] },
  "G-04":{ acc:"orange", kick:"DEEP LINK",h:"Opening your plan…", b:"Resuming where you left off · sign in if needed", cta:"", rows:[["Destination","UAE 10 GB"],["Source","Push notification"]] },
  "G-05":{ acc:"orange", kick:"WHAT'S NEW", h:"What's new in 2.4", b:"AI Advisor v2 · Region-aware VPN improvements · faster install", cta:"Got it", rows:[["AI Advisor","Better recommendations"],["VPN","Lower latency"],["Install","30% faster"]] },
  "G-06":{ acc:"warning",kick:"GDPR",     h:"Your privacy.", b:"You can change these anytime in Settings. Withdrawing consent is one tap.", cta:"Accept All", rows:[["Required","Account, billing, security"],["Analytics","Off-by-default"],["Marketing","Off-by-default"]] },
  "G-07":{ acc:"warning",kick:"VPN LEGAL",h:"Use VPN responsibly.", b:"Some markets restrict VPN use. By continuing you accept local laws apply.", cta:"I Understand · Continue", rows:[["UAE","Permitted with restrictions"],["KSA","Permitted with restrictions"],["See full text","Open policy"]] },
  "G-08":{ acc:"warning",kick:"REFUND",   h:"Refund policy.", b:"Refunds available pre-install only · 7-day window for technical failure.", cta:"Got it", rows:[["Pre-install","Full refund"],["Post-install","Not eligible"],["Tech failure","Auto-refund flagged"]] },
  "G-09":{ acc:"warning",kick:"TRANSFER ERROR", h:"eSIM transfer failed.", b:"We can't move this eSIM to a new device while it's still installed on the old one.", cta:"Open Guide", rows:[["Step 1","Remove from old device"],["Step 2","Re-install here"],["Help","Contact support"]] },
  "G-10":{ acc:"warning",kick:"CAPTIVE",  h:"Open this network's portal", b:"Your Wi-Fi needs you to sign in before Roamlu can connect.", cta:"Open Portal", rows:[["Why","Captive portal detected"],["Auto-dismiss","On reconnect"]] },
  "G-11":{ acc:"warning",kick:"VPN RECONNECT", h:"VPN reconnecting…", b:"Network changed · re-establishing tunnel · your traffic is paused.", cta:"Cancel", rows:[["Last server","Dubai 03"],["Reason","Network change"]] },
  "G-12":{ acc:"warning",kick:"PAYMENT TIMEOUT", h:"Payment is taking longer than usual.", b:"Don't close the app · we're confirming with your bank · safe to retry.", cta:"Check Status", rows:[["Reference","RM-A4F-0192"],["Idempotency-Key","Locked"],["Webhook","Source of truth"]] },
  "G-13":{ acc:"warning",kick:"CALL QUALITY", h:"Poor call quality detected.", b:"Switching to Wi-Fi may help. Quality auto-reports for engineering.", cta:"Switch to Wi-Fi", rows:[["Latency","182 ms"],["Jitter","High"],["Codec","Opus"]] },
  "G-14":{ acc:"warning",kick:"TRIAL ENDED", h:"Your trial ended.", b:"Convert to a paid plan or downgrade to PAYG · keep your number either way.", cta:"Convert", rows:[["Plus monthly","AED 99/mo"],["PAYG","Pay as you go"]] },
  "G-15":{ acc:"orange", kick:"WELCOME BACK", h:"Welcome back, Layla.", b:"A few small changes since you last visited · take 30s to scan.", cta:"Got it", rows:[["AI Advisor v2","Better picks"],["VPN","Lower latency"],["Loyalty","Tier upgrades"]] }
};

function accentHex(name) {
  if (name === "orange") return ACCENT.orange;
  if (name === "teal") return ACCENT.teal;
  if (name === "purple") return ACCENT.purple;
  if (name === "warning") return ACCENT.warning;
  return ACCENT.orange;
}

function drawScreenBody(frame, id, title, mode, dir, platform) {
  const isDark = mode === "dark", isRtl = dir === "rtl";
  const isAndroid = platform === "android";
  const cx = isAndroid ? 16 : 24;
  const cy = isAndroid ? 112 : 148;
  const cw = isAndroid ? 328 : 342;
  const ch = isAndroid ? 600 : 540;
  const surface = isDark ? "#221A16" : "#FFFFFF";
  const surfAlt = isDark ? "#2A1E18" : "#FFE8DC";
  const text    = isDark ? "#F8EAD8" : "#1C0804";
  const sub     = isDark ? "#B8A098" : "#7A6058";
  const border  = isDark ? "#2A1E18" : "#E8E0DB";
  const c = SCREEN_CONTENT[id] || { acc:"orange", kick: title.toUpperCase().slice(0,16), h: title, b: "Production-ready screen with realistic copy, real states, and accessible focus order.", cta: "Continue", rows: [["Empty state","Illustration + CTA"],["Loading","Shimmer skeleton"],["Error","Actionable retry"]] };
  const acc = accentHex(c.acc);
  const headFont = c.h && c.h.length > 0 ? PRIMARY_FONT_BOLD : PRIMARY_FONT;

  function tx(label, x) { return isRtl ? (cw - x - (label.length * 0)) : x; }

  // Hero card
  const heroH = c.b ? 138 : 96;
  const hero = createFrame(frame, "hero", cx, cy, cw, heroH, surface, border);
  hero.cornerRadius = 12;
  createRect(hero, isRtl ? cw - 40 - 16 : 16, 16, 40, 4, acc, 2);
  createText(hero, c.kick, isRtl ? cw - 220 - 16 : 16, 26, 10, acc, PRIMARY_FONT_BOLD, 220);
  createText(hero, c.h, 16, 46, 18, text, PRIMARY_FONT_BOLD, cw - 32);
  if (c.b) createText(hero, c.b, 16, 92, 12, sub, PRIMARY_FONT, cw - 32);

  // Rows
  let ry = cy + heroH + 12;
  const rowH = 56;
  const maxRows = Math.min(c.rows.length, 4);
  for (let i = 0; i < maxRows; i++) {
    const r = c.rows[i];
    const row = createFrame(frame, `row-${i}`, cx, ry, cw, rowH, surface, border);
    row.cornerRadius = 10;
    createRect(row, isRtl ? cw - 4 : 0, 0, 4, rowH, acc);
    createText(row, r[0], isRtl ? 16 : 16, 12, 13, text, PRIMARY_FONT_BOLD, cw - 32);
    createText(row, r[1] || "", isRtl ? 16 : 16, 32, 11, sub, PRIMARY_FONT, cw - 32);
    ry += rowH + 8;
  }

  // Status indicators row
  const indY = cy + ch - 96;
  const indW = (cw - 16) / 3;
  const indSpecs = [["Empty","illus + CTA"], ["Loading","shimmer"], ["Error","retry"]];
  for (let i = 0; i < 3; i++) {
    const ix = cx + i * (indW + 8);
    const ind = createFrame(frame, `state-${i}`, ix, indY, indW, 36, surfAlt);
    ind.cornerRadius = 8;
    createText(ind, indSpecs[i][0], 8, 4, 10, text, PRIMARY_FONT_BOLD, indW - 16);
    createText(ind, indSpecs[i][1], 8, 18, 9, sub, PRIMARY_FONT, indW - 16);
  }

  // Primary CTA
  if (c.cta) {
    const ctaY = cy + ch - 52;
    const cta = createFrame(frame, "cta", cx, ctaY, cw, 48, acc);
    cta.cornerRadius = 24;
    createText(cta, c.cta, 16, 16, 14, "#FFFFFF", PRIMARY_FONT_BOLD, cw - 32);
  }
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

  drawScreenBody(frame, id, title, mode, dir, "ios");

  createRect(frame, 0, 746, 390, 64, surface);
  createRect(frame, 0, 746, 390, 1, border);
  const labels = isRtl ? ["حسابي", "الاتصال", "الشريحة", "الرئيسية"] : ["Home", "eSIM", "Connect", "Account"];
  const icons  = isRtl ? ["👤", "🛡", "📱", "⌂"] : ["⌂", "📱", "🛡", "👤"];
  const active = activeTabFor(id);
  const accent = "#E05820";
  for (let i = 0; i < 4; i++) {
    const x = 24 + i * 86;
    const isActive = i === active;
    const fg = isActive ? accent : sub;
    if (isActive) {
      const pill = createFrame(frame, `tab-${i}-active`, x, 754, 86, 44, isDark ? "#2A1E18" : "#FFE4D6");
      pill.cornerRadius = 12;
    }
    createText(frame, icons[i], x + 32, 758, 18, fg, PRIMARY_FONT, 24);
    createText(frame, labels[i], x + 8, 790, 10, fg, isActive ? PRIMARY_FONT_BOLD : PRIMARY_FONT, 70);
  }
  createRect(frame, 121, 822, 148, 5, sub, 3);
}

function activeTabFor(id) {
  // Map screen id to active bottom-tab index: 0 Home · 1 eSIM · 2 Connect · 3 Account
  if (id === "16" || id === "17" || id === "18" || id === "19" || id === "20") return 0;
  if ((id >= "21" && id <= "30") || (id && id.indexOf("E-") === 0)) return 1;
  if ((id >= "31" && id <= "43") || (id && id.indexOf("V-") === 0)) return 2;
  if ((id >= "44" && id <= "66") || (id && id.indexOf("B-") === 0)) return 3;
  return 0;
}

function drawAndroidChrome(frame, id, title) {
  frame.fills = solidPaint("#FFF8F4");
  createRect(frame, 0, 0, 360, 24, "#FFE8DC");
  createText(frame, "Android", 12, 6, 11, "#7A6058");
  createText(frame, title, 16, 44, 22, "#1C0804", PRIMARY_FONT_BOLD, 328);
  createText(frame, id, 16, 76, 11, "#7A6058");
  drawScreenBody(frame, id, title, "light", "ltr", "android");
  createRect(frame, 0, 736, 360, 64, "#FFE8DC");
  const aLabels = ["Home", "eSIM", "Connect", "Account"];
  const aIcons = ["⌂", "📱", "🛡", "👤"];
  const aActive = activeTabFor(id);
  for (let i = 0; i < 4; i++) {
    const x = 8 + i * 86;
    const isActive = i === aActive;
    const fg = isActive ? "#E05820" : "#7A6058";
    if (isActive) {
      const pill = createFrame(frame, `tab-${i}-active`, x, 744, 86, 44, "#FFE4D6");
      pill.cornerRadius = 12;
    }
    createText(frame, aIcons[i], x + 32, 750, 18, fg, PRIMARY_FONT, 24);
    createText(frame, aLabels[i], x + 8, 782, 10, fg, isActive ? PRIMARY_FONT_BOLD : PRIMARY_FONT, 70);
  }
}

const ADMIN_NAV_GROUPS = [
  { name: "Operations", items: [
    ["A01","Dashboard","▣"],["A02","Users","👥"],["A04","eSIM Orders","▤"],
    ["A05","VoIP Numbers","📞"],["A06","VPN Sessions","🛡"],["A15","Support","💬"]
  ]},
  { name: "Commerce", items: [
    ["A07","Revenue","📈"],["A08","Plans","✦"],["A09","Pricing","$"],
    ["A12","Loyalty","★"],["A13","Referrals","↗"],["A14","Campaigns","✉"],["A19","Reconciliation","Σ"]
  ]},
  { name: "Configuration", items: [
    ["A10","Providers","⚙"],["A11","VPN Servers","▥"],["A16","Notifications","🔔"],
    ["A17","App Settings","🛠"],["A18","Admin Users","🔐"]
  ]}
];

function envForScreen(id) {
  if (id === "A09") return { label: "stage", color: "#D97706" };
  if (id === "A10" || id === "A19") return { label: "prod", color: "#B42318" };
  return { label: "dev", color: "#10A890" };
}

function drawAdminChrome(frame, id, title, isTablet, sidebarOpen) {
  const w = isTablet ? 768 : 1440;
  const sidebarW = sidebarOpen ? 240 : 64;
  frame.fills = solidPaint("#F5F0ED");
  // sidebar
  createRect(frame, 0, 0, sidebarW, frame.height, "#FFFFFF");
  createRect(frame, sidebarW, 0, 1, frame.height, "#E8E0DB");

  // logo block
  createRect(frame, 16, 20, 32, 32, "#E05820", 8);
  createRect(frame, 24, 28, 16, 16, "#8040D0", 4);
  if (sidebarOpen) {
    createText(frame, "Roamlu", 56, 22, 14, "#1C0804", PRIMARY_FONT_BOLD);
    createText(frame, "admin · v1", 56, 38, 10, "#7A6058");
  }

  // nav groups
  let ny = 80;
  for (const g of ADMIN_NAV_GROUPS) {
    if (sidebarOpen) {
      createText(frame, g.name.toUpperCase(), 20, ny, 9, "#A89A92", PRIMARY_FONT_BOLD, sidebarW - 40);
      ny += 18;
    } else {
      createRect(frame, 16, ny + 6, 32, 1, "#E8E0DB"); ny += 16;
    }
    for (const it of g.items) {
      const active = it[0] === id;
      if (active) createRect(frame, 8, ny - 4, sidebarW - 16, 32, "#FFE4D6", 8);
      createText(frame, it[2], sidebarOpen ? 20 : 26, ny + 4, 14, active ? "#E05820" : "#7A6058", PRIMARY_FONT_BOLD);
      if (sidebarOpen) {
        createText(frame, it[1], 44, ny + 6, 12, active ? "#1C0804" : "#7A6058", active ? PRIMARY_FONT_BOLD : PRIMARY_FONT, sidebarW - 60);
      }
      ny += 32;
    }
    ny += 8;
  }

  // status footer
  if (sidebarOpen) {
    const fy = frame.height - 56;
    createRect(frame, 16, fy, sidebarW - 32, 40, "#F5F0ED", 8);
    createRect(frame, 28, fy + 16, 8, 8, "#10A890", 4);
    createText(frame, "All systems normal", 44, fy + 12, 11, "#1C0804", PRIMARY_FONT_BOLD);
    createText(frame, "v2.4.1 · build 1810", 44, fy + 26, 9, "#7A6058");
  } else {
    createRect(frame, 24, frame.height - 32, 16, 16, "#10A890", 8);
  }

  // top header
  createRect(frame, sidebarW, 0, w - sidebarW, 64, "#FFFFFF");
  createRect(frame, sidebarW, 64, w - sidebarW, 1, "#E8E0DB");
  createText(frame, title, sidebarW + 24, 22, 18, "#1C0804", PRIMARY_FONT_BOLD);

  // env badge — right next to title
  const env = envForScreen(id);
  const titleApprox = title.length * 10 + 32;
  const badgeX = sidebarW + 24 + titleApprox;
  const badge = createFrame(frame, "env-badge", badgeX, 24, 60, 20, "#FFF8F4", env.color);
  badge.cornerRadius = 10;
  createText(badge, env.label.toUpperCase(), 10, 4, 10, env.color, PRIMARY_FONT_BOLD, 44);

  // search (desktop only)
  let cursorX = w - 48 - 12;
  if (!isTablet) {
    const sx = badgeX + 80;
    const sw = Math.max(200, w - sx - 280);
    const search = createFrame(frame, "search", sx, 14, sw, 36, "#F5F0ED", "#E8E0DB");
    search.cornerRadius = 8;
    createText(search, "⚲", 12, 9, 14, "#7A6058");
    createText(search, "Search users, orders, tickets…", 36, 10, 12, "#A89A92", PRIMARY_FONT, sw - 48);
  }

  // avatar (rightmost)
  const av = createFrame(frame, "avatar", w - 48, 14, 36, 36, "#E05820");
  av.cornerRadius = 18;
  createText(av, "AK", 9, 10, 12, "#FFFFFF", PRIMARY_FONT_BOLD, 24);
  cursorX = w - 48 - 12;

  // action buttons (per-screen)
  const ACTIONS = {
    "A02": [["+ Add user", "primary"]],
    "A04": [["Export CSV", "secondary"], ["+ New order", "primary"]],
    "A08": [["+ New plan", "primary"]],
    "A09": [["Save changes", "primary"]],
    "A10": [["Audit log", "secondary"]],
    "A11": [["Drain mode", "secondary"], ["+ Add server", "primary"]],
    "A14": [["+ New campaign", "primary"]],
    "A16": [["+ Compose", "primary"]],
    "A18": [["+ Invite admin", "primary"]],
    "A19": [["Export ledger", "secondary"], ["Mark reconciled", "primary"]]
  };
  const acts = ACTIONS[id] || [];
  for (let i = acts.length - 1; i >= 0; i--) {
    const [label, kind] = acts[i];
    const bw = label.length * 7 + 28;
    cursorX -= bw + 8;
    const isPrimary = kind === "primary";
    const btn = createFrame(frame, `action-${label}`, cursorX, 14, bw, 36, isPrimary ? "#E05820" : "#FFFFFF", isPrimary ? null : "#E8E0DB");
    btn.cornerRadius = 8;
    createText(btn, label, 14, 11, 12, isPrimary ? "#FFFFFF" : "#1C0804", PRIMARY_FONT_BOLD, bw - 28);
  }
  // KPI strip
  const kpiY = 88, kpiW = isTablet ? 160 : 240;
  const kpis = [
    ["MRR", "AED 142,840"],
    ["Active eSIMs", "8,421"],
    ["VoIP minutes", "412k"],
    ["VPN sessions", "1,204"]
  ];
  for (let i = 0; i < (isTablet ? 3 : kpis.length); i++) {
    const kx = sidebarW + 24 + i * (kpiW + 16);
    const card = createFrame(frame, `kpi-${kpis[i][0]}`, kx, kpiY, kpiW, 96, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 12;
    createText(card, kpis[i][0], 16, 12, 11, "#7A6058");
    createText(card, kpis[i][1], 16, 36, 22, "#1C0804", PRIMARY_FONT_BOLD, kpiW - 32);
  }

  // Data table
  const tableY = kpiY + 96 + 24;
  const tableW = w - sidebarW - 48;
  const tableH = frame.height - tableY - 24;
  const table = createFrame(frame, `${id}-table`, sidebarW + 24, tableY, tableW, tableH, "#FFFFFF", "#E8E0DB");
  table.cornerRadius = 12;
  createText(table, title + " · last 50", 20, 16, 13, "#1C0804", PRIMARY_FONT_BOLD, tableW - 40);
  // header row
  const cols = isTablet ? ["ID", "User", "Status"] : ["ID", "User", "Market", "Amount", "Status", "Updated"];
  const colW = (tableW - 40) / cols.length;
  createRect(table, 20, 56, tableW - 40, 1, "#E8E0DB");
  for (let i = 0; i < cols.length; i++) {
    createText(table, cols[i], 20 + i * colW, 36, 11, "#7A6058", PRIMARY_FONT_BOLD, colW - 8);
  }
  // rows
  const rows = [
    ["#10421", "fatima.a@…", "AE", "AED 89.00", "paid", "2m"],
    ["#10420", "omar.s@…",   "SA", "SAR 220.00","provisioned", "5m"],
    ["#10419", "lara.m@…",   "AE", "AED 45.00", "refunded", "12m"],
    ["#10418", "yousef.h@…", "QA", "QAR 60.00", "paid", "18m"],
    ["#10417", "noura.k@…",  "BH", "BHD 8.000", "failed", "31m"],
    ["#10416", "kareem.r@…", "OM", "OMR 4.500", "paid", "44m"],
    ["#10415", "amal.t@…",   "AE", "AED 120.00","paid", "1h"],
    ["#10414", "saif.q@…",   "SA", "SAR 180.00","past_due", "2h"]
  ];
  const rowH = 36;
  const maxRows = Math.min(rows.length, Math.floor((tableH - 80) / rowH));
  for (let r = 0; r < maxRows; r++) {
    const ry = 64 + r * rowH;
    const row = rows[r];
    for (let c = 0; c < cols.length; c++) {
      const v = isTablet ? (c === 0 ? row[0] : c === 1 ? row[1] : row[4]) : row[c];
      const fg = (cols[c] === "Status") ? (v === "paid" ? "#10A890" : v === "failed" || v === "past_due" ? "#B42318" : "#7A6058") : "#1C0804";
      createText(table, v, 20 + c * colW, ry, 12, fg, PRIMARY_FONT, colW - 8);
    }
    createRect(table, 20, ry + rowH - 4, tableW - 40, 1, "#F2EDE9");
  }
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
  createText(page, GENERATION_NOTE, 0, -72, 16, "#7A6058", PRIMARY_FONT, 1200);
  createSection(page, "Section A — Color Tokens", 0, 0, 1700, 1100);
  createSection(page, "Section B — Typography", 0, 1160, 1700, 1280);
  createSection(page, "Section C — Spacing · Radius · Layout", 0, 2480, 1700, 760);
  createSection(page, "Section D — Icons & Illustrations", 0, 3280, 1700, 540);

  // Section A — Color Tokens — grouped by semantic role
  const colorGroups = [
    { label: "BRAND", names: ["color/brand/orange","color/brand/teal","color/brand/purple"] },
    { label: "SURFACE", names: ["color/bg/app","color/bg/surface","color/bg/surface-2","color/border/default"] },
    { label: "TEXT", names: ["color/text/primary","color/text/secondary","color/text/disabled"] },
    { label: "SEMANTIC", names: ["color/semantic/success","color/semantic/warning","color/semantic/error"] }
  ];
  let sy = 80;
  for (const g of colorGroups) {
    createText(page, g.label, 40, sy, 11, "#7A6058", PRIMARY_FONT_BOLD, 200);
    let sx = 40; sy += 24;
    for (const tn of g.names) {
      const t = PAINT_TOKENS.find(p => p.name === tn);
      if (!t) continue;
      const card = createFrame(page, t.name, sx, sy, 220, 160, "#FFFFFF", "#E8E0DB");
      card.cornerRadius = 12;
      createText(card, t.name, 12, 10, 10, "#1C0804", PRIMARY_FONT_BOLD, 200);
      createRect(card, 12, 32, 92, 92, t.light, 8);
      createRect(card, 116, 32, 92, 92, t.dark, 8);
      createText(card, "L · " + t.light, 12, 130, 9, "#7A6058", PRIMARY_FONT, 90);
      createText(card, "D · " + t.dark, 116, 130, 9, "#7A6058", PRIMARY_FONT, 90);
      sx += 240;
    }
    sy += 180;
  }

  // mini surface preview (light + dark)
  for (let i = 0; i < 2; i++) {
    const dark = i === 1;
    const px = 40 + i * 540;
    const py = sy;
    const prev = createFrame(page, dark ? "preview-dark" : "preview-light", px, py, 520, 220, dark ? "#181210" : "#FFF8F4", dark ? "#2A1E18" : "#E8E0DB");
    prev.cornerRadius = 12;
    createText(prev, dark ? "DARK · BG/APP" : "LIGHT · BG/APP", 16, 14, 9, dark ? "#A8978E" : "#7A6058", PRIMARY_FONT_BOLD);
    const card = createFrame(prev, "card", 16, 40, 488, 110, dark ? "#221A16" : "#FFE8DC", dark ? "#2A1E18" : "#E8E0DB");
    card.cornerRadius = 10;
    createText(card, "Active eSIM", 16, 12, 16, dark ? "#F8EAD8" : "#1C0804", PRIMARY_FONT_BOLD);
    createText(card, "UAE · 5 GB · 18 days left", 16, 36, 12, dark ? "#B8A098" : "#7A6058", PRIMARY_FONT);
    const cta = createFrame(prev, "cta", 16, 162, 488, 44, "#E05820");
    cta.cornerRadius = 10;
    createText(cta, "Top up data", 16, 14, 14, "#FFFFFF", PRIMARY_FONT_BOLD, 200);
  }
  sy += 240;

  // Section B — Typography
  let ty = 1060;
  for (const t of TEXT_TOKENS) {
    const row = createFrame(page, t.name, 40, ty, 1620, 64, "#FFFFFF", "#E8E0DB");
    row.cornerRadius = 8;
    createText(row, t.name, 16, 12, 11, "#7A6058", PRIMARY_FONT, 220);
    createText(row, `${t.family} · ${t.style} · ${t.size}/${t.lineHeight}`, 240, 12, 11, "#7A6058", PRIMARY_FONT, 280);
    createText(row, t.description, 16, 36, 11, "#A89A92", PRIMARY_FONT, 220);
    createText(row, "The quick brown fox jumps", 540, 18, t.size, "#1C0804", PRIMARY_FONT, 1000);
    ty += 76;
    if (ty > 1880) break;
  }

  // Section C — Spacing & Radius
  const SPACING = [4, 8, 12, 16, 24, 32, 48, 64];
  let cx = 40, cy = 2040;
  for (const s of SPACING) {
    const card = createFrame(page, `space-${s}`, cx, cy, 180, 140, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 8;
    createText(card, `space-${s}`, 12, 8, 11, "#7A6058");
    createRect(card, 12, 36, s, 12, "#E05820", 2);
    createRect(card, 12, 60, s, 12, "#10A890", 2);
    createText(card, `${s}px`, 12, 96, 13, "#1C0804", PRIMARY_FONT_BOLD);
    cx += 200; if (cx > 1500) { cx = 40; cy += 160; }
  }
  const RADII = [4, 8, 12, 16, 24];
  cy += 160; cx = 40;
  for (const r of RADII) {
    const card = createFrame(page, `radius-${r}`, cx, cy, 180, 140, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 8;
    createText(card, `radius-${r}`, 12, 8, 11, "#7A6058");
    createRect(card, 12, 32, 96, 64, "#E05820", r);
    createText(card, `${r}px`, 12, 108, 13, "#1C0804", PRIMARY_FONT_BOLD);
    cx += 200;
  }

  // Section D — Icons & Illustrations
  const ICONS = ["esim","voip","vpn","ai","loyalty","wallet","trip","support","push","biometric","fingerprint","face-id","alert","success","empty"];
  let ix = 40, iy = 2840;
  for (const n of ICONS) {
    const card = createFrame(page, `icon-${n}`, ix, iy, 120, 120, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 8;
    createRect(card, 36, 24, 48, 48, "#FFE4D6", 12);
    createText(card, n, 12, 88, 11, "#7A6058");
    ix += 140; if (ix > 1540) { ix = 40; iy += 140; }
  }
}

function drawComponentSpec(parent, x, y, w, h, name, variant, render) {
  const card = createFrame(parent, `${name}/${variant}`, x, y, w, h, "#FFFFFF", "#E8E0DB");
  card.cornerRadius = 12;
  // header strip
  createRect(card, 0, 0, w, 36, "#FFF8F4");
  createRect(card, 0, 36, w, 1, "#E8E0DB");
  createText(card, `${name} / ${variant}`, 14, 11, 11, "#1C0804", PRIMARY_FONT_BOLD, w - 28);
  // light + dark side-by-side
  const padX = 16, padY = 52;
  const halfW = (w - padX * 2 - 12) / 2;
  const innerH = h - padY - 16;
  const light = createFrame(card, `light`, padX, padY, halfW, innerH, "#FFFFFF", "#E8E0DB");
  light.cornerRadius = 8;
  const dark  = createFrame(card, `dark`,  padX + halfW + 12, padY, halfW, innerH, "#181210", "#2A1E18");
  dark.cornerRadius = 8;
  if (render) { render(light, halfW, innerH, false); render(dark, halfW, innerH, true); }
  return card;
}

const COMPONENT_GROUPS = [
  { name: "Buttons & inputs", items: [
    { name: "button", variant: "primary",       h: 120, render: (p,w,h,d) => { const b=createFrame(p,"btn",16,(h-44)/2,w-32,44,"#E05820"); b.cornerRadius=22; createText(b,"Continue",16,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,w-64); } },
    { name: "button", variant: "primary/loading", h: 120, render: (p,w,h,d) => { const b=createFrame(p,"btn",16,(h-44)/2,w-32,44,"#E05820"); b.cornerRadius=22; createRect(b,(w-32)/2-10,14,16,16,"#FFFFFF",8); createText(b,"Loading…",(w-32)/2+12,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,80); } },
    { name: "button", variant: "secondary",     h: 120, render: (p,w,h,d) => { const b=createFrame(p,"btn",16,(h-44)/2,w-32,44,d?"#221A16":"#FFFFFF",d?"#3A2D26":"#E05820"); b.cornerRadius=22; createText(b,"Edit profile",16,14,13,"#E05820",PRIMARY_FONT_BOLD,w-64); } },
    { name: "button", variant: "ghost",         h: 120, render: (p,w,h,d) => { createText(p,"Skip for now ›",16,(h-20)/2,13,"#7A6058",PRIMARY_FONT_BOLD,w-32); } },
    { name: "input",  variant: "text",          h: 140, render: (p,w,h,d) => { const b=createFrame(p,"in",16,16,w-32,56,d?"#221A16":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=10; createText(b,"Full name",12,8,10,d?"#A8978E":"#7A6058"); createText(b,"Sara Al-Mansoori",12,28,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT,w-56); } },
    { name: "input",  variant: "text/error",    h: 140, render: (p,w,h,d) => { const b=createFrame(p,"in",16,16,w-32,56,d?"#221A16":"#FFFFFF","#DC2626"); b.cornerRadius=10; createText(b,"Email",12,8,10,"#DC2626"); createText(b,"sara@",12,28,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT,w-56); createText(p,"Enter a valid email address",16,80,11,"#DC2626",PRIMARY_FONT,w-32); } },
    { name: "input",  variant: "password",      h: 140, render: (p,w,h,d) => { const b=createFrame(p,"in",16,16,w-32,56,d?"#221A16":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=10; createText(b,"Password",12,8,10,d?"#A8978E":"#7A6058"); createText(b,"••••••••",12,28,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT); createText(b,"👁",w-56,24,16,d?"#A8978E":"#7A6058"); } },
    { name: "input",  variant: "phone/gulf",    h: 140, render: (p,w,h,d) => { const b=createFrame(p,"in",16,16,w-32,56,d?"#221A16":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=10; createText(b,"🇸🇦 +966",12,18,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createRect(b,82,16,1,40,d?"#3A2D26":"#E8E0DB"); createText(b,"5 1 234 5678",94,18,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT,w-128); } },
    { name: "input",  variant: "otp/2fa",       h: 140, render: (p,w,h,d) => { const cells=6; const cw=(w-32-(cells-1)*8)/cells; for(let i=0;i<cells;i++){ const b=createFrame(p,`d${i}`,16+i*(cw+8),(h-56)/2,cw,56,d?"#221A16":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=10; if(i<3) createText(b,String(i+1),(cw-10)/2,16,18,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); } } }
  ]},
  { name: "Cards & navigation", items: [
    { name: "card",   variant: "plan",          h: 220, render: (p,w,h,d) => { const b=createFrame(p,"plan",16,16,w-32,h-32,d?"#241B18":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=12; createText(b,"UAE · 5 GB · 7 days",16,14,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"Etisalat · 5G · hotspot",16,36,11,d?"#A8978E":"#7A6058"); createText(b,"AED 89",16,72,28,"#E05820",PRIMARY_FONT_BOLD); createText(b,"~ 24 USD",16,108,11,d?"#A8978E":"#7A6058"); } },
    { name: "card",   variant: "plan/recommended", h: 220, render: (p,w,h,d) => { const b=createFrame(p,"plan",16,16,w-32,h-32,d?"#241B18":"#FFFFFF","#8040D0"); b.cornerRadius=12; const rib=createFrame(b,"rib",0,0,80,20,"#8040D0"); rib.cornerRadius=4; createText(rib,"AI PICK",10,4,9,"#FFFFFF",PRIMARY_FONT_BOLD); createText(b,"UAE · 5 GB · 7 days",16,28,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"AED 89",16,80,28,"#8040D0",PRIMARY_FONT_BOLD); } },
    { name: "card",   variant: "feature",       h: 180, render: (p,w,h,d) => { const b=createFrame(p,"f",16,16,w-32,h-32,d?"#241B18":"#FFE8DC"); b.cornerRadius=12; createRect(b,16,16,40,40,"#E05820",10); createText(b,"AI Advisor",68,20,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"Get plan picks for your trip",68,42,11,d?"#A8978E":"#7A6058"); } },
    { name: "card",   variant: "active-plan",   h: 200, render: (p,w,h,d) => { const b=createFrame(p,"ap",16,16,w-32,h-32,d?"#241B18":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=12; createText(b,"UAE 10 GB",16,14,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"6.2 GB left · 4 days",16,36,11,d?"#A8978E":"#7A6058"); createRect(b,16,72,w-64,8,d?"#3A2D26":"#F5F0ED",4); createRect(b,16,72,(w-64)*0.62,8,"#10A890",4); createText(b,"Top up",16,h-64,12,"#E05820",PRIMARY_FONT_BOLD); } },
    { name: "card",   variant: "transaction",   h: 140, render: (p,w,h,d) => { const b=createFrame(p,"tx",16,16,w-32,h-32,d?"#241B18":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=10; createText(b,"UAE 10 GB · 6 Jun",14,12,12,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"Visa •• 4242",14,32,11,d?"#A8978E":"#7A6058"); createText(b,"AED 89.00",w-100,18,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); } },
    { name: "badge",  variant: "status",        h: 120, render: (p,w,h,d) => { const tones=[["Active","#16A34A"],["Expiring","#D97706"],["Failed","#DC2626"],["Connecting","#2563EB"]]; let bx=12; for(const [l,c] of tones){ const bw=l.length*7+24; const b=createFrame(p,`s-${l}`,bx,(h-22)/2,bw,22,c+"22",c); b.cornerRadius=11; createText(b,l,10,3,11,c,PRIMARY_FONT_BOLD,bw-20); bx+=bw+6;} } },
    { name: "badge",  variant: "tag",           h: 120, render: (p,w,h,d) => { const tags=[["5G","#E05820"],["VPN","#10A890"],["AI pick","#8040D0"]]; let bx=12; for(const [l,c] of tags){ const bw=l.length*7+20; const b=createFrame(p,`t-${l}`,bx,(h-20)/2,bw,20,c); b.cornerRadius=4; createText(b,l,8,3,10,"#FFFFFF",PRIMARY_FONT_BOLD,bw-16); bx+=bw+6;} } },
    { name: "nav",    variant: "bottom",        h: 140, render: (p,w,h,d) => { const labels=["Home","eSIM","Connect","Account"]; const tw=(w-32)/4; for(let i=0;i<4;i++){ createRect(p,16+i*tw+(tw-24)/2,(h-44)/2,24,24,i===0?"#E05820":(d?"#A8978E":"#7A6058"),6); createText(p,labels[i],16+i*tw,(h-44)/2+30,10,i===0?"#E05820":(d?"#A8978E":"#7A6058"),PRIMARY_FONT_BOLD,tw); } } },
    { name: "nav",    variant: "bottom/esim-active", h: 140, render: (p,w,h,d) => { const labels=["Home","eSIM","Connect","Account"]; const tw=(w-32)/4; for(let i=0;i<4;i++){ createRect(p,16+i*tw+(tw-24)/2,(h-44)/2,24,24,i===1?"#E05820":(d?"#A8978E":"#7A6058"),6); createText(p,labels[i],16+i*tw,(h-44)/2+30,10,i===1?"#E05820":(d?"#A8978E":"#7A6058"),PRIMARY_FONT_BOLD,tw); } } },
    { name: "nav",    variant: "top-app-bar",   h: 120, render: (p,w,h,d) => { createText(p,"‹",16,(h-44)/2+10,22,d?"#FFF8F4":"#1C0804"); createText(p,"My eSIMs",48,(h-44)/2+14,16,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-96); } },
    { name: "sheet",  variant: "bottom",        h: 220, render: (p,w,h,d) => { createRect(p,(w-40)/2,12,40,4,d?"#3A2D26":"#E8E0DB",2); createText(p,"Confirm purchase",16,32,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"AED 89.00 · UAE 10 GB",16,56,12,d?"#A8978E":"#7A6058"); const b=createFrame(p,"cta",16,h-60,w-32,44,"#E05820"); b.cornerRadius=22; createText(b,"Pay with Apple Pay",16,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,w-64); } },
    { name: "toggle", variant: "switch",        h: 100, render: (p,w,h,d) => { const t=createFrame(p,"sw",16,(h-32)/2,60,32,"#10A890"); t.cornerRadius=16; createRect(t,32,4,24,24,"#FFFFFF",12); const o=createFrame(p,"swo",96,(h-32)/2,60,32,d?"#3A2D26":"#E8E0DB"); o.cornerRadius=16; createRect(o,4,4,24,24,"#FFFFFF",12); } },
    { name: "toggle", variant: "plan-type",     h: 100, render: (p,w,h,d) => { const b=createFrame(p,"seg",16,(h-40)/2,w-32,40,d?"#221A16":"#F5F0ED"); b.cornerRadius=20; const seg=createFrame(b,"on",4,4,(w-40)/2,32,"#E05820"); seg.cornerRadius=16; createText(seg,"PAYG",16,8,12,"#FFFFFF",PRIMARY_FONT_BOLD,80); createText(b,"Monthly",4+(w-40)/2+16,12,12,d?"#A8978E":"#7A6058",PRIMARY_FONT_BOLD); } },
    { name: "chip",   variant: "filter",        h: 100, render: (p,w,h,d) => { const tags=[["All",true],["Gulf",false],["Europe",false],["Asia",false]]; let bx=12; for(const [l,a] of tags){ const bw=l.length*7+24; const b=createFrame(p,`c-${l}`,bx,(h-28)/2,bw,28,a?"#E05820":(d?"#221A16":"#FFFFFF"),a?null:(d?"#3A2D26":"#E8E0DB")); b.cornerRadius=14; createText(b,l,12,7,11,a?"#FFFFFF":(d?"#FFF8F4":"#1C0804"),PRIMARY_FONT_BOLD,bw-24); bx+=bw+6;} } },
    { name: "avatar", variant: "default",       h: 120, render: (p,w,h,d) => { const sizes=[[32,"SA","#E05820"],[40,"RA","#8040D0"],[56,"MA","#10A890"]]; let bx=16,by=h/2; for(const [s,t,c] of sizes){ const a=createFrame(p,`av-${t}`,bx,by-s/2,s,s,c); a.cornerRadius=s/2; createText(a,t,(s-18)/2,(s-16)/2,s/3,"#FFFFFF",PRIMARY_FONT_BOLD,s); bx+=s+12;} } }
  ]},
  { name: "Core product", items: [
    { name: "vpn",    variant: "power/disconnected", h: 240, render: (p,w,h,d) => { const cx=w/2,cy=h/2; const ring=createFrame(p,"ring",cx-60,cy-60,120,120,d?"#221A16":"#F5F0ED",d?"#3A2D26":"#E8E0DB"); ring.cornerRadius=60; createText(ring,"⏻",46,38,40,d?"#A8978E":"#7A6058"); createText(p,"Tap to connect",cx-60,cy+76,12,d?"#A8978E":"#7A6058",PRIMARY_FONT_BOLD,120); } },
    { name: "vpn",    variant: "power/connected",    h: 240, render: (p,w,h,d) => { const cx=w/2,cy=h/2; const ring=createFrame(p,"ring",cx-60,cy-60,120,120,"#10A890"); ring.cornerRadius=60; createText(ring,"⏻",46,38,40,"#FFFFFF"); createText(p,"Protected · 12 ms",cx-70,cy+76,12,"#10A890",PRIMARY_FONT_BOLD,140); } },
    { name: "data",   variant: "progress-ring",      h: 240, render: (p,w,h,d) => { const cx=w/2,cy=h/2; const r=createFrame(p,"r",cx-50,cy-50,100,100,"#E05820"); r.cornerRadius=50; const inner=createFrame(r,"i",10,10,80,80,d?"#181210":"#FFFFFF"); inner.cornerRadius=40; createText(inner,"6.2",18,18,22,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,60); createText(inner,"of 10 GB",16,46,10,d?"#A8978E":"#7A6058",PRIMARY_FONT,60); } },
    { name: "row",    variant: "country",            h: 200, render: (p,w,h,d) => { const rows=[["🇸🇦","Saudi Arabia","$7.90",true],["🇦🇪","UAE","$8.50",false],["🇶🇦","Qatar","$9.20",false]]; for(let i=0;i<rows.length;i++){ const ry=12+i*54; const b=createFrame(p,`r${i}`,12,ry,w-24,46,d?"#241B18":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=8; createText(b,rows[i][0],12,12,18,d?"#FFF8F4":"#1C0804"); createText(b,rows[i][1],44,10,12,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-160); createText(b,"from "+rows[i][2],44,28,10,d?"#A8978E":"#7A6058"); if(rows[i][3]){ const tag=createFrame(b,"pop",w-72,12,52,20,"#E05820"); tag.cornerRadius=10; createText(tag,"Popular",6,4,9,"#FFFFFF",PRIMARY_FONT_BOLD,46);} } } },
    { name: "row",    variant: "server",             h: 200, render: (p,w,h,d) => { const rows=[["🇦🇪","Dubai",28,32,true],["🇸🇦","Riyadh",42,58,false],["🇬🇧","London",86,84,false]]; for(let i=0;i<rows.length;i++){ const ry=12+i*54; const b=createFrame(p,`s${i}`,12,ry,w-24,46,rows[i][4]?(d?"#3A2D26":"#FFE8DC"):(d?"#241B18":"#FFFFFF"),d?"#3A2D26":"#E8E0DB"); b.cornerRadius=8; createText(b,rows[i][0],12,12,18,d?"#FFF8F4":"#1C0804"); createText(b,rows[i][1],44,14,12,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-180); createText(b,rows[i][2]+" ms",w-110,16,11,d?"#A8978E":"#7A6058"); createText(b,rows[i][3]+"%",w-50,16,11,d?"#A8978E":"#7A6058"); } } },
    { name: "ai",     variant: "chat-bubble",        h: 220, render: (p,w,h,d) => { const msgs=[[true,"Going to Dubai for 6 days? I'd grab the UAE 5GB pack."],[false,"Will it work in Abu Dhabi too?"],[true,"Yes, full UAE coverage."]]; let by=12; for(const [a,t] of msgs){ const tw=Math.min(w-40,t.length*5.5+24); const bx=a?12:w-tw-12; const b=createFrame(p,"m",bx,by,tw,38,a?(d?"#3A2D26":"#FFE8DC"):"#E05820"); b.cornerRadius=14; createText(b,t,12,8,11,a?(d?"#FFF8F4":"#1C0804"):"#FFFFFF",PRIMARY_FONT,tw-24); by+=46;} } },
    { name: "card",   variant: "loyalty",            h: 200, render: (p,w,h,d) => { const b=createFrame(p,"l",16,16,w-32,h-32,"#8040D0"); b.cornerRadius=12; createText(b,"Roamlu Silver",16,14,11,"#FFFFFF80",PRIMARY_FONT_BOLD); createText(b,"2,140 pts",16,32,28,"#FFFFFF",PRIMARY_FONT_BOLD); createText(b,"~ AED 21.40",16,72,12,"#FFFFFFAA"); } },
    { name: "card",   variant: "referral",           h: 200, render: (p,w,h,d) => { const b=createFrame(p,"r",16,16,w-32,h-32,d?"#241B18":"#FFFFFF",d?"#3A2D26":"#E8E0DB"); b.cornerRadius=12; createText(b,"Earn 500 pts",16,14,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(b,"per friend who joins",16,36,11,d?"#A8978E":"#7A6058"); const code=createFrame(b,"code",16,72,w-64,40,d?"#181210":"#FFE8DC"); code.cornerRadius=8; createText(code,"LAYLA-RM92",12,12,14,"#E05820",PRIMARY_FONT_BOLD); } },
    { name: "loading",variant: "shimmer",            h: 160, render: (p,w,h,d) => { for(let i=0;i<3;i++){ createRect(p,16,16+i*36,w-32,16,d?"#3A2D26":"#F5F0ED",4); createRect(p,16,36+i*36,(w-32)*0.6,8,d?"#3A2D26":"#F5F0ED",4); } } }
  ]},
  { name: "System & compliance", items: [
    { name: "prompt", variant: "biometric",          h: 220, render: (p,w,h,d) => { const cx=w/2,cy=h/2; createRect(p,cx-32,cy-44,64,64,d?"#3A2D26":"#FFE8DC",16); createText(p,"😊",cx-18,cy-32,32); createText(p,"Use Face ID?",cx-50,cy+32,14,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,100); } },
    { name: "overlay",variant: "session-timeout",    h: 200, render: (p,w,h,d) => { createText(p,"Session timed out",16,18,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"Re-authenticate to continue.",16,42,11,d?"#A8978E":"#7A6058"); const b=createFrame(p,"a",16,h-60,w-32,44,"#E05820"); b.cornerRadius=22; createText(b,"Sign in again",16,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,w-64); } },
    { name: "webview",variant: "3ds",                h: 200, render: (p,w,h,d) => { createRect(p,16,16,w-32,28,d?"#3A2D26":"#F5F0ED",6); createText(p,"🔒 secure-bank.com",24,22,11,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"Confirm AED 89.00",16,60,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"Reference RM-A4F-0192",16,84,11,d?"#A8978E":"#7A6058"); } },
    { name: "state",  variant: "empty",              h: 200, render: (p,w,h,d) => { createRect(p,(w-64)/2,28,64,64,d?"#3A2D26":"#FFE8DC",32); createText(p,"No eSIMs yet",16,108,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-32); createText(p,"Browse plans to get started",16,132,11,d?"#A8978E":"#7A6058",PRIMARY_FONT,w-32); } },
    { name: "state",  variant: "error",              h: 200, render: (p,w,h,d) => { createRect(p,(w-64)/2,28,64,64,"#DC262622",32); createText(p,"⚠",(w-20)/2,40,32,"#DC2626"); createText(p,"Something went wrong",16,108,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-32); createText(p,"Try again or contact support",16,132,11,d?"#A8978E":"#7A6058",PRIMARY_FONT,w-32); } },
    { name: "state",  variant: "maintenance",        h: 200, render: (p,w,h,d) => { createText(p,"🛠",(w-20)/2,28,40); createText(p,"We'll be back at 14:00 GST",16,84,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,w-32); createText(p,"Billing & VPN unaffected",16,108,11,d?"#A8978E":"#7A6058",PRIMARY_FONT,w-32); } },
    { name: "banner", variant: "info",               h: 140, render: (p,w,h,d) => { const b=createFrame(p,"bn",12,12,w-24,h-24,"#2563EB22","#2563EB"); b.cornerRadius=10; createText(b,"Captive portal detected",12,10,12,"#2563EB",PRIMARY_FONT_BOLD); createText(b,"Open hotel.wifi to sign in.",12,30,11,d?"#A8978E":"#1C0804",PRIMARY_FONT,w-48); } },
    { name: "banner", variant: "warning",            h: 140, render: (p,w,h,d) => { const b=createFrame(p,"bn",12,12,w-24,h-24,"#D9770622","#D97706"); b.cornerRadius=10; createText(b,"VPN reconnecting",12,10,12,"#D97706",PRIMARY_FONT_BOLD); createText(b,"Switching to Dubai.",12,30,11,d?"#A8978E":"#1C0804",PRIMARY_FONT,w-48); } },
    { name: "banner", variant: "error",              h: 140, render: (p,w,h,d) => { const b=createFrame(p,"bn",12,12,w-24,h-24,"#DC262622","#DC2626"); b.cornerRadius=10; createText(b,"Payment timed out",12,10,12,"#DC2626",PRIMARY_FONT_BOLD); createText(b,"No charge was made.",12,30,11,d?"#A8978E":"#1C0804",PRIMARY_FONT,w-48); } },
    { name: "sheet",  variant: "consent",            h: 220, render: (p,w,h,d) => { createRect(p,(w-40)/2,12,40,4,d?"#3A2D26":"#E8E0DB",2); createText(p,"Your privacy",16,32,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"Required · Analytics · Marketing",16,56,11,d?"#A8978E":"#7A6058",PRIMARY_FONT,w-32); const b=createFrame(p,"a",16,h-60,w-32,44,"#E05820"); b.cornerRadius=22; createText(b,"Accept all",16,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,w-64); } },
    { name: "notice", variant: "refund",             h: 160, render: (p,w,h,d) => { const b=createFrame(p,"n",12,12,w-24,h-24,d?"#3A2D26":"#FFE8DC"); b.cornerRadius=10; createText(b,"Refund policy",12,10,12,"#D97706",PRIMARY_FONT_BOLD); createText(b,"Refunds available pre-install only · 7-day window for technical failure.",12,30,11,d?"#FFF8F4":"#1C0804",PRIMARY_FONT,w-48); } },
    { name: "card",   variant: "plan-expired",       h: 160, render: (p,w,h,d) => { const b=createFrame(p,"x",16,16,w-32,h-32,d?"#241B18":"#FFFFFF","#DC2626"); b.cornerRadius=12; createText(b,"UAE 10 GB · Expired",14,12,14,"#DC2626",PRIMARY_FONT_BOLD); createText(b,"Top up to keep your number",14,34,11,d?"#A8978E":"#7A6058"); } }
  ]},
  { name: "Voice & call", items: [
    { name: "call",   variant: "active-controls",    h: 220, render: (p,w,h,d) => { createText(p,"Salim",16,18,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"04:12 · HD voice",16,40,11,d?"#A8978E":"#7A6058"); const labels=["Mute","Speaker","Add"]; for(let i=0;i<3;i++){ const cx=16+i*((w-32)/3); const c=createFrame(p,labels[i],cx+10,h-72,((w-32)/3)-20,40,d?"#3A2D26":"#F5F0ED"); c.cornerRadius=20; createText(c,labels[i],10,12,11,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD,((w-32)/3)-40); } const e=createFrame(p,"end",(w-80)/2,h-32,80,28,"#DC2626"); e.cornerRadius=14; createText(e,"End",26,6,12,"#FFFFFF",PRIMARY_FONT_BOLD,40); } },
    { name: "call",   variant: "incoming",           h: 220, render: (p,w,h,d) => { createText(p,"Salim Al-Maktoum",16,18,15,d?"#FFF8F4":"#1C0804",PRIMARY_FONT_BOLD); createText(p,"+971 50 222 1188 · Roamlu",16,40,11,d?"#A8978E":"#7A6058"); const a=createFrame(p,"acc",16,h-60,(w-40)/2,44,"#10A890"); a.cornerRadius=22; createText(a,"Accept",((w-40)/2-44)/2,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,80); const dec=createFrame(p,"dec",24+(w-40)/2,h-60,(w-40)/2,44,"#DC2626"); dec.cornerRadius=22; createText(dec,"Decline",((w-40)/2-50)/2,14,13,"#FFFFFF",PRIMARY_FONT_BOLD,80); } }
  ]}
];

async function buildComponentsPage(page) {
  clearGeneratedChildren(page);
  createText(page, "Roamlu Components", 0, -120, 32, "#1C0804", PRIMARY_FONT_BOLD);
  createText(page, "Each spec renders light + dark side-by-side · named [category]/[name]/[variant]", 0, -72, 14, "#7A6058", PRIMARY_FONT, 1200);
  const PAGE_W = 1620, GAP = 24;
  const COL_W = (PAGE_W - GAP * 2) / 2;
  let y = 0;
  for (const g of COMPONENT_GROUPS) {
    createText(page, `${g.name.toUpperCase()} · ${g.items.length}`, 0, y, 13, "#7A6058", PRIMARY_FONT_BOLD, PAGE_W);
    y += 36;
    let col = 0, rowMaxH = 0, rowY = y;
    for (const it of g.items) {
      const cardH = (it.h || 200) + 60;
      const x = col * (COL_W + GAP);
      drawComponentSpec(page, x, rowY, COL_W, cardH, it.name, it.variant, it.render);
      rowMaxH = Math.max(rowMaxH, cardH);
      col++;
      if (col >= 2) { col = 0; rowY += rowMaxH + GAP; rowMaxH = 0; }
    }
    if (col > 0) rowY += rowMaxH + GAP;
    y = rowY + 20;
  }

  // Skip the legacy `sections` block
  const sections = [
    {
      name: "Buttons & Inputs", y: 0,
      items: [
        { kind: "btn", label: "Primary", bg: "#E05820", fg: "#FFFFFF" },
        { kind: "btn", label: "Secondary", bg: "#FFFFFF", fg: "#E05820", border: "#E05820" },
        { kind: "btn", label: "Tertiary", bg: "transparent", fg: "#1C0804" },
        { kind: "btn", label: "Destructive", bg: "#B42318", fg: "#FFFFFF" },
        { kind: "btn", label: "Disabled", bg: "#F2EDE9", fg: "#A89A92" },
        { kind: "input", label: "Text input", placeholder: "Email" },
        { kind: "input", label: "Password", placeholder: "••••••••" },
        { kind: "input", label: "OTP", placeholder: "1 2 3 4 5 6" },
        { kind: "chip", label: "Filter chip" },
        { kind: "toggle", label: "Toggle on", on: true },
        { kind: "toggle", label: "Toggle off", on: false }
      ]
    },
    {
      name: "Cards & Navigation", y: 800,
      items: [
        { kind: "card", title: "Active eSIM · UAE", body: "8.4 GB / 10 GB · 12 days left", cta: "Top up" },
        { kind: "card", title: "VoIP · +971 50 ...", body: "428 / 1000 mins this cycle", cta: "Manage" },
        { kind: "card", title: "VPN · Frankfurt", body: "Connected · 1h 24m", cta: "Disconnect" },
        { kind: "tab", labels: ["Home","eSIM","Connect","Account"] },
        { kind: "list", rows: ["Account · Profile","Account · Security","Account · Privacy","Account · Help"] }
      ]
    },
    {
      name: "Security & System", y: 1600,
      items: [
        { kind: "card", title: "G-01 Maintenance", body: "Roamlu is briefly offline for an upgrade.", cta: "Status page" },
        { kind: "card", title: "G-02 No internet", body: "We'll resume once you're back online.", cta: "Retry" },
        { kind: "card", title: "G-05 Update required", body: "A newer version is required to continue.", cta: "Open store" },
        { kind: "card", title: "G-13 Consent", body: "Review and accept the privacy policy.", cta: "Review" },
        { kind: "card", title: "G-15 Permission", body: "Allow Notifications to receive trip alerts.", cta: "Open settings" }
      ]
    },
    {
      name: "AI · VPN · Voice", y: 2400,
      items: [
        { kind: "card", title: "AI Advisor · Plan suggestion", body: "Airalo · UAE · 10 GB / 30 days · AED 89", cta: "Add to cart" },
        { kind: "card", title: "VPN region picker", body: "Frankfurt · 24 ms · WireGuard", cta: "Connect" },
        { kind: "card", title: "Incoming call", body: "+44 20 7946 0958 · CallKit", cta: "Answer" },
        { kind: "card", title: "Voicemail", body: "0:42 · transcribed", cta: "Play" }
      ]
    }
  ];

  return;
  for (const s of sections) {
    createSection(page, s.name, 0, s.y, 1620, 720);
    let x = 40, y = s.y + 80;
    for (const it of s.items) {
      if (it.kind === "btn") {
        const w = 160, h = 44;
        const b = createFrame(page, `btn-${it.label}`, x, y, w, h, it.bg === "transparent" ? "#FFFFFF" : it.bg, it.border || (it.bg === "transparent" ? "#E8E0DB" : null));
        b.cornerRadius = 8;
        createText(b, it.label, 16, 12, 13, it.fg, PRIMARY_FONT_BOLD, w - 32);
        x += w + 16;
      } else if (it.kind === "input") {
        const w = 220, h = 56;
        const b = createFrame(page, `input-${it.label}`, x, y, w, h, "#FFFFFF", "#E8E0DB");
        b.cornerRadius = 8;
        createText(b, it.label, 12, 8, 10, "#7A6058");
        createText(b, it.placeholder, 12, 28, 13, "#A89A92", PRIMARY_FONT, w - 24);
        x += w + 16;
      } else if (it.kind === "chip") {
        const w = 120, h = 32;
        const b = createFrame(page, `chip-${it.label}`, x, y + 6, w, h, "#FFE4D6");
        b.cornerRadius = 16;
        createText(b, it.label, 16, 8, 11, "#E05820", PRIMARY_FONT_BOLD, w - 32);
        x += w + 16;
      } else if (it.kind === "toggle") {
        const b = createFrame(page, `toggle-${it.label}`, x, y + 6, 60, 32, it.on ? "#10A890" : "#E8E0DB");
        b.cornerRadius = 16;
        createRect(b, it.on ? 32 : 4, 4, 24, 24, "#FFFFFF", 12);
        createText(page, it.label, x, y + 44, 11, "#7A6058");
        x += 96;
      } else if (it.kind === "card") {
        const w = 320, h = 160;
        if (x + w > 1580) { x = 40; y += h + 24; }
        const b = createFrame(page, `card-${it.title}`, x, y, w, h, "#FFFFFF", "#E8E0DB");
        b.cornerRadius = 12;
        createText(b, it.title, 16, 16, 14, "#1C0804", PRIMARY_FONT_BOLD, w - 32);
        createText(b, it.body, 16, 44, 12, "#7A6058", PRIMARY_FONT, w - 32);
        const cta = createFrame(b, `cta`, 16, h - 48, 120, 32, "#E05820");
        cta.cornerRadius = 8;
        createText(cta, it.cta, 12, 8, 12, "#FFFFFF", PRIMARY_FONT_BOLD, 96);
        x += w + 24;
      } else if (it.kind === "tab") {
        const w = 480, h = 64;
        if (x + w > 1580) { x = 40; y += h + 24; }
        const b = createFrame(page, `tab-bar`, x, y, w, h, "#FFFFFF", "#E8E0DB");
        b.cornerRadius = 12;
        for (let i = 0; i < it.labels.length; i++) {
          const tw = w / it.labels.length;
          createText(b, it.labels[i], i * tw + 16, 22, 12, i === 0 ? "#E05820" : "#7A6058", PRIMARY_FONT_BOLD, tw - 32);
        }
        x += w + 24;
      } else if (it.kind === "list") {
        const w = 320, h = 220;
        if (x + w > 1580) { x = 40; y += h + 24; }
        const b = createFrame(page, `list`, x, y, w, h, "#FFFFFF", "#E8E0DB");
        b.cornerRadius = 12;
        for (let i = 0; i < it.rows.length; i++) {
          createText(b, it.rows[i], 16, 16 + i * 48, 13, "#1C0804", PRIMARY_FONT, w - 32);
          createRect(b, 16, 48 + i * 48, w - 32, 1, "#F2EDE9");
        }
        x += w + 24;
      }
    }
  }
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
  createText(page, "20 screens × desktop (1440) + tablet (768) × sidebar open + closed = 80 frames", 0, -72, 16, "#7A6058", PRIMARY_FONT, 1400);
  const rowHeight = 1080;
  const variants = [
    { suffix: "desktop/open",   x: 0,    w: 1440, h: 900,  isTablet: false, open: true  },
    { suffix: "desktop/closed", x: 1500, w: 1440, h: 900,  isTablet: false, open: false },
    { suffix: "tablet/open",    x: 3000, w: 768,  h: 1024, isTablet: true,  open: true  },
    { suffix: "tablet/closed",  x: 3820, w: 768,  h: 1024, isTablet: true,  open: false }
  ];
  for (let i = 0; i < ADMIN_SCREENS.length; i++) {
    const [id, title, priority] = ADMIN_SCREENS[i];
    const y = 40 + i * rowHeight;
    createText(page, `${id} — ${title} — ${priority}`, 0, y, 18, "#1C0804", PRIMARY_FONT_BOLD, 1200);
    const slug = slugify(title);
    for (const v of variants) {
      const f = createFrame(page, `${id}/${slug}/${v.suffix}`, v.x, y + 40, v.w, v.h, "#F5F0ED");
      drawAdminChrome(f, id, title, v.isTablet, v.open);
    }
  }
}

async function buildPrototypePage(page) {
  clearGeneratedChildren(page);
  const PAGE_W = 1472, COL_GAP = 32;
  const spec = {
    kicker: "PROTOTYPE · 10 CLIENT-REVIEW JOURNEYS · WIRED THROUGH AUTH/SESSION/PURCHASE/CONNECT/AI/LOYALTY/SYSTEM",
    title: "Prototype Flow Map",
    subtitle: "Wire connections between matching frame IDs · light + dark + RTL variants traversed in dedicated review files · every interactive node maps to its source screen.",
  };
  let y = backendHeader(page, spec, PAGE_W);

  const journeys = [
    { t: "orange",  k: "P-01 · First-time onboarding",     v: "01 → G-06 GDPR → 02 → 03 → 04 → 06 → 07 → 08 → 10 verify → 11 2FA → S-01 → S-03 biometric → 16 Home · consent persisted before progress" },
    { t: "orange",  k: "P-02 · Returning login + 2FA",     v: "09 login → S-02 2FA challenge → 17 Home · refresh-token rotation · reuse-detection forces full re-auth" },
    { t: "warning", k: "P-03 · First eSIM purchase",       v: "21 browse → 22 detail → 25 review (G-08 inline refund ack) → 26 PSP → S-07 3DS → 27 success → 30 install · provision ≠ install verified" },
    { t: "purple",  k: "P-04 · eSIM top-up",               v: "29 my eSIM → E-02 top-up review → E-03 PSP → S-07 3DS → 27 success · idempotent retry · same Idempotency-Key" },
    { t: "warning", k: "P-05 · VPN first activation",      v: "39 disconnected → G-07 legal disclaimer (persisted) → config issue → 40 connecting → 41 connected · region-disabled refused cleanly" },
    { t: "purple",  k: "P-06 · AI → purchase",             v: "44 welcome → 45 active chat → 46 recommendation → 25 purchase review (plan + recommendation_id pre-attached) · NEVER charges directly" },
    { t: "purple",  k: "P-07 · Subscription cancel",       v: "51 my subscription → B-02 cancellation flow (cancel-at-period-end vs immediate) → 51 reflects B5 outcome · audit-logged" },
    { t: "warning", k: "P-08 · GDPR consent trigger",      v: "G-06 first-launch OR policy-version bump → modal → accept persists versioned → resumes original route · decline = restricted mode per policy class" },
    { t: "warning", k: "P-09 · Captive portal",            v: "17 home with active session → G-10 captive banner overlay → 'Open portal' WebView → auto-dismiss on connectivity restored" },
    { t: "teal",    k: "P-10 · Support / recovery",        v: "63 support → 64 FAQ OR 09 login → 12 forgot-password → 13 reset → S-03 biometric re-enroll → 17 home · all sessions invalidated on reset" },
  ];
  const integration = [
    { t: "warning", k: "G-12 payment timeout",  v: "Re-enters S-07 with same Idempotency-Key · webhook source-of-truth · NEVER assume failed on timeout" },
    { t: "warning", k: "G-14 trial expiry",     v: "First app open after trial expiry · modal route to convert (49/50) or downgrade (48) · NOT settings screen" },
    { t: "warning", k: "G-04 deep-link",        v: "Authenticated → resumes destination · unauthenticated → routes through M2 then resumes · NEVER drops intent" },
    { t: "purple",  k: "Reduced-motion alts",   v: "AI typing indicator · VPN connecting ring · sheet snap · all have cross-fade alternatives · haptics still fire" },
    { t: "teal",    k: "RTL traversal",         v: "Every journey reviewed in Arabic · banners mirror correctly · numbers stay LTR · Cairo font · slide-in direction matches" },
    { t: "teal",    k: "Dark traversal",        v: "Every journey reviewed in dark · contrast verified · brand role separation preserved (orange/teal/purple)" },
  ];
  const states = [
    "Loading state on every list/detail (shimmer + skeleton from M1) · NEVER spinner-on-blank",
    "Empty state on every list (illustration + CTA where one exists) · NEVER apologetic-only",
    "Error state with actionable retry · maps B0 envelope · localized · NEVER raw provider message",
    "Success state with appropriate haptic · receipt/confirmation surfaced · routes to next logical surface",
    "Edge: G-02 no-internet banner overlays any screen · cached read-only where possible · auto-clears on reconnect",
    "Edge: G-03 maintenance blocks app on cold open · partial banner if read-only · ETA copy when known (A17)",
    "Edge: G-05 force-update full-screen · NEVER bypassable · per-platform store URL",
    "Edge: G-15 returning-user welcome-back modal · DISTINCT from M2 first-run · light re-engagement only",
  ];

  function rules2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  y = sectionHeader(page, "01", "10 client-review journeys · auth → purchase → connect → AI → subscription → support", 0, y);
  rules2col(journeys, 110);

  y = sectionHeader(page, "02", "Cross-cutting · G-12 · G-14 · G-04 · reduced-motion · RTL · dark", 0, y);
  rules2col(integration, 110);

  y = sectionHeader(page, "03", "Universal states across journeys · loading · empty · error · success · edge", 0, y);
  fullRows(states, 56, "purple");
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
  {
    name: "■ M5 — AI, Billing & Loyalty",
    kind: "m5",
    kicker: "M5 · MOBILE · AI ADVISOR + BILLING + LOYALTY · 44–57 + B-01/B-02 + G-12 + G-14 · ENTRY-POINT AI · LEDGER-BACKED LOYALTY",
    title: "AI Advisor + Billing + Loyalty · Figma 44–57 + B-01/B-02",
    subtitle: "Three sub-features: features/ai · features/billing · features/loyalty. AI is an entry-point feature reachable from Home — NOT a bottom-nav tab. Reuses M3 purchase flow (quote → PSP → 3DS → success) for plan/reward checkout. Purple = AI · orange = CTA · transparent billing · ledger-backed loyalty (never client-cached balance) · no casino patterns · share via platform sheet · G-14 trial expiry modal · G-12 payment timeout shared with M3.",
    rules: [
      { t: "warning", v: "M1 tokens / widgets only · light + dark + RTL everywhere · numbers/prices LTR in Arabic · PURPLE is the AI color · ORANGE for CTAs per brand role separation" },
      { t: "warning", v: "AI is an ENTRY-POINT feature · NOT a bottom-nav tab · reachable from Home + relevant contexts · not from the 4-tab nav (Home/eSIM/Connect/Account)" },
      { t: "warning", v: "AI NEVER invents plans or prices · surfaces validated recommendations from B7 (grounded on live catalog) · app renders what API returns · accepting routes into M3 screen 25 · NEVER charges directly" },
      { t: "warning", v: "Money is integer-minor-units + currency from API · subscriptions/prices/tax from B5 per Phase FL per-market rules · NEVER recompute or trust client-set amounts" },
      { t: "warning", v: "Payment uses external PSP path (Phase FL) · reuse M3 PaymentIntent + 3DS + Idempotency-Key · G-12 payment-timeout handled identically to M3" },
      { t: "warning", v: "Loyalty balance is API computed value from B6 ledger · NEVER compute or cache divergent balance client-side · redemption server-validated · app reflects result" },
      { t: "purple",  v: "Loyalty MUST NOT feel casino-like or manipulative · no fake urgency · no dark patterns · referral sharing via platform share sheet only" },
      { t: "purple",  v: "Haptics · payment/redeem success = success haptic · primary tap = light · reduced-motion alternative for AI typing indicator + any confetti/success animation" },
    ],
    aiScreens: [
      { t: "purple",  k: "44 · AI Chat Welcome",       v: "Entry-point landing · suggested prompts (3–5 from B7 config) · 'How can I help?' · purple accent · routes to 45 on tap · history link → 47" },
      { t: "purple",  k: "45 · AI Chat Active",        v: "Message thread using M1 AI chat bubble · typing indicator with reduced-motion alt (cross-fade) · stream OR request/response per B7 contract · scroll-restore · safe-area aware" },
      { t: "warning", k: "46 · AI Recommendation Card", v: "Explainable · shows WHY this plan + alternatives from B7 · grounded on live B5 catalog · CTA 'Continue' routes into M3 screen 25 with plan + recommendation_id pre-attached · NEVER charges directly" },
      { t: "purple",  k: "47 · AI Advisor History",    v: "Past threads + past recommendations with outcomes (accepted/declined/purchased) · cursor pagination · empty/loading/error · routes back into 45 to resume" },
    ],
    billingScreens: [
      { t: "orange",  k: "48 · PAYG Plans",            v: "Pay-as-you-go catalog from B5 · grouped by region/use-case · price minor+currency · tax per market per FL · CTA → M3 quote → 25" },
      { t: "orange",  k: "49 · Monthly Plans",         v: "Subscription catalog (monthly) from B5 · trial offer surfaced if eligible · proration shown when changing · CTA → M3 quote → 25" },
      { t: "orange",  k: "50 · Yearly Plans",          v: "Subscription catalog (yearly) from B5 · savings vs monthly displayed (server-computed) · trial offer if eligible · CTA → M3 quote → 25" },
      { t: "purple",  k: "51 · My Subscription",       v: "Status · current period end · trial end if any · 'Change plan' (proration reflected from B5) · 'Cancel' → B-02 · receipts link → 53" },
      { t: "teal",    k: "52 · Payment Methods",       v: "List (last-4 + brand from API) · default badge · 'Add new' → B-01 · safe-remove rules (cannot remove default with active sub) · server-enforced" },
      { t: "purple",  k: "53 · Billing History",       v: "Invoices/payments from B5 · status · amount minor+currency · receipt download (B5 PDF) · cursor pagination · empty state" },
      { t: "warning", k: "B-01 · Add New Card",        v: "B5 setup intent path · PSP-hosted card collection · NEVER card data through app · returns payment_method_id · sets default option" },
      { t: "warning", k: "B-02 · Cancellation Flow",   v: "Cancel-at-period-end vs immediate · confirmation + reason capture · reflects B5 outcome (period_end vs immediate refund per FL) · audit-logged" },
    ],
    loyaltyScreens: [
      { t: "purple",  k: "54 · Loyalty Dashboard",     v: "Computed balance from B6 (NEVER local) · recent ledger entries (earn/redeem) · tier if any · routes to 55 / 56 / 57 · no manipulative patterns" },
      { t: "purple",  k: "55 · How To Earn",           v: "Rules rendered from B6 config · matches live rules exactly · NEVER hardcoded · clear language · no fake urgency" },
      { t: "warning", k: "56 · Redeem Points",         v: "Rewards catalog · 'Redeem' → server-validates → applied reward reduces M3 quote SERVER-SIDE · client never applies discount · success haptic on confirm" },
      { t: "teal",    k: "57 · Referral Program",      v: "Share code/link via PLATFORM SHARE SHEET · status of pending/approved/rejected referrals · counter from B6 · no manipulative streaks" },
    ],
    gates: [
      { t: "warning", k: "G-14 · Free Trial Expiry",   v: "Modal on FIRST APP OPEN after trial expiry · driven by B5 trial-expiry event · NOT a settings screen · routes to convert (49/50) or downgrade (PAYG 48) · dismiss persists" },
      { t: "warning", k: "G-12 · Payment Timeout",     v: "Shared with M3 · reuse identical handling · idempotent retry via same Idempotency-Key · webhook source-of-truth · NEVER assume failed on timeout alone" },
      { t: "purple",  k: "Recommendation linkage",     v: "AI rec → M3 purchase preserves recommendation_id end-to-end · B6 attribution · acceptance-rate analytics · survives 3DS bounce" },
      { t: "purple",  k: "Reactive state updates",     v: "After cancel / redeem / refer / subscribe · subscription/loyalty/referral states refresh reactively (Riverpod invalidation or Bloc emit) · no stale UI" },
    ],
    integration: [
      { t: "orange",  k: "B7 AI Advisor endpoints",    v: "POST /ai/threads · POST /ai/threads/:id/messages (stream or req/resp) · GET /ai/recommendations/:id · POST /ai/recommendations/:id/accept (returns plan_id + idempotency_hint)" },
      { t: "orange",  k: "B5 Billing endpoints",       v: "GET /billing/plans · GET /billing/subscription · POST /billing/subscription/change · POST /billing/subscription/cancel · GET /billing/payment-methods · POST /billing/setup-intent · GET /billing/invoices" },
      { t: "warning", k: "B5 Quote / PaymentIntent",   v: "Reuses M3 path · POST /quotes · POST /payments/intents · 3DS S-07 · webhook → success · same Idempotency-Key generator · trial expiry pushes G-14 event" },
      { t: "purple",  k: "B6 Loyalty endpoints",       v: "GET /loyalty/balance (server-computed from append-only ledger) · GET /loyalty/ledger · GET /loyalty/rewards · POST /loyalty/redeem (server-validated) · GET /loyalty/referrals · POST /loyalty/referrals" },
      { t: "warning", k: "Discount at quote",          v: "Redeemed reward applied SERVER-SIDE at quote step · client passes redemption_id · server validates + reduces · client renders new total · NEVER client math" },
      { t: "teal",    k: "Repository layer",           v: "AdvisorRepository · BillingRepository · SubscriptionRepository · PaymentMethodRepository · LoyaltyRepository · ReferralRepository · all return Result<T,ApiError>" },
    ],
    tests: [
      "AI welcome 44 · suggested prompts from B7 config · tap routes to 45 with prompt seeded · purple accent · entry from Home + contextual surfaces only (NOT bottom nav)",
      "AI active 45 · stream or req/resp per contract · typing indicator with reduced-motion cross-fade alternative · scroll restore · message persistence",
      "AI recommendation 46 · explainable rationale + alternatives · CTA routes into M3 screen 25 with plan_id + recommendation_id · NEVER charges directly · linkage preserved through 3DS",
      "AI history 47 · past threads + recommendation outcomes · cursor pagination · resume thread → 45 with context",
      "Billing catalogs 48/49/50 · tax per market per FL · prices minor+currency from API · trial offer surfaced when eligible · CTA → M3 quote",
      "My Subscription 51 · status + period_end + trial_end accurate · change-plan shows proration from B5 · cancel routes to B-02",
      "Payment Methods 52 · last-4 + brand from API · default badge · add-new B-01 setup intent · safe-remove rules enforced server-side (UI reflects)",
      "Billing History 53 · invoices from B5 · receipt PDF download · cursor pagination · empty/loading/error",
      "B-01 Add Card · PSP-hosted collection · NEVER card data through app · returns payment_method_id · sets default if first",
      "B-02 Cancellation · cancel-at-period-end vs immediate per FL · reason capture · reflects B5 outcome · audit-logged",
      "G-14 trial expiry · first app open after expiry shows modal · driven by B5 event · routes to convert (49/50) or downgrade (48) · dismiss persists",
      "G-12 payment timeout · reuse M3 handling · idempotent retry · webhook source-of-truth · NEVER assume failed on timeout alone",
      "Loyalty Dashboard 54 · balance from B6 (NEVER local cache) · ledger entries · tier · refreshes after earn/redeem",
      "How To Earn 55 · rules rendered from B6 config · matches live rules · NEVER hardcoded",
      "Redeem 56 · server-validates · applied at M3 quote step server-side · success haptic · client never applies discount",
      "Referral 57 · platform share sheet on iOS/Android · status counts from B6 · no fake urgency / streak manipulation",
      "Light + dark + RTL render every screen · numbers stay LTR in Arabic · Cairo font · purple AI consistent",
      "Reduced-motion · AI typing indicator cross-fade · confetti/success animation alternative · haptics still fire",
      "Recommendation linkage · recommendation_id survives quote → 3DS → success → B6 attribution · analytics intact",
      "Reactive refresh · cancel sub / redeem reward / send referral · UI updates without manual reload",
    ],
    edgeCases: [
      "AI streaming vs request/response · final B7 contract decision · UI handles both behind same chat bubble · backpressure for long responses",
      "AI rate limits · B7 throttle policy · UI shows graceful 'thinking...' with timeout fallback · NEVER infinite spinner",
      "AI safety · B7 returns refusal envelope for off-topic / unsafe requests · UI renders typed refusal · NEVER bare error",
      "Proration display · how to show 'you'll be charged X today, then Y/month' · server provides breakdown · client renders verbatim",
      "Trial-to-paid transition · grace period vs immediate · per-market rules · B5 emits canonical event",
      "Loyalty economics still pending business sign-off · earn rates · redeem ratios · expiry policy · per-market caps from B6/FL",
      "Reward applied to quote · what happens if quote expires · re-validate redemption · idempotent",
      "Referral attribution · self-referral block · fraud detection · admin approval queue (W1 A13)",
      "Multi-currency subscription · subscription locked to original currency at sign-up · displayed in user locale · no mid-cycle conversion",
      "Failed payment on subscription renewal · grace period · dunning emails · UI surfaces 'payment issue' state · routes to 52 to update",
    ],
    handoff: [
      "M6 Account · subscription summary card · loyalty balance card · referral code link · all from M5 surfaces · M5 exposes shape",
      "M6 System · G-14 modal lives at app shell level (first-open detection) · M5 provides component · shell wires the trigger",
      "M6 Notifications · trial-expiry · payment-failed · referral-approved · reward-redeemed · push templates from M5 events",
      "W1 admin · A08 plans · A09 pricing · A12 loyalty ledger + adjustment · A13 referral approval · M5 client respects what admin configures live",
      "B7 contract · streaming vs req/resp final · safety refusal envelope shape · recommendation explainability schema",
      "B6 economics · earn/redeem rates per market · expiry · caps · all configurable in admin (A12) · M5 renders from config never hardcoded",
    ],
    pending: [
      "AI streaming vs request/response · final B7 contract decision · vendor capability · UX trade-offs",
      "Proration display detail · breakdown fields surfaced · localization of 'effective today' wording",
      "Loyalty economics · earn rates · redeem ratios · expiry policy · per-market caps · business sign-off (B6/FL)",
      "Trial mechanics · length per plan · grace period · auto-convert vs require-confirm · per-market legality",
      "Referral payout · points vs credit vs cash · approval threshold · fraud heuristics",
      "AI suggested-prompts curation · who owns content · refresh cadence · per-segment personalization",
      "Cancellation reason taxonomy · structured options vs free text · feeds retention analytics",
      "G-14 modal copy · convert vs downgrade vs dismiss · per-market language · counsel-reviewed if applicable",
    ],
    exit: [
      "AI Advisor 44–47 live · purple accent · entry-point only (NOT bottom nav) · reachable from Home + contextual surfaces",
      "AI never invents plans/prices · always surfaces B7 validated recommendations · accept routes into M3 screen 25 with linkage",
      "Billing 48–53 + B-01 + B-02 live · transparent pricing · tax per FL · M3 purchase flow reused · NEVER client math",
      "G-14 trial expiry modal · first-open detection · routes to convert/downgrade · NOT a settings screen",
      "G-12 payment timeout · identical to M3 · idempotent · webhook source-of-truth",
      "Loyalty 54–57 live · balance from B6 ledger NEVER client-cached · rules from B6 config NEVER hardcoded",
      "Redemption server-validated · applied at M3 quote step server-side · client renders result",
      "Referral via platform share sheet · no casino patterns · no fake urgency · transparent status",
      "Light + dark + RTL all screens · purple AI consistent · orange CTAs · numbers LTR in Arabic",
      "Reduced-motion alternatives · typing indicator · success animation · haptics still fire",
      "Reactive state updates after cancel/redeem/refer · no stale UI · Riverpod/Bloc invalidation correct",
      "Recommendation linkage preserved end-to-end · B6 attribution intact · acceptance-rate analytics live",
      "Repository layer wraps B5/B6/B7 · all return Result<T,ApiError> · empty/loading/error from M1",
      "Edge cases logged in Handoff · pending economics NOT a code blocker · M6 Account/System/Notifications inherits stable surfaces",
    ],
  },
  {
    name: "■ M6 — Account, Notifications & System",
    kind: "m6",
    kicker: "M6 · MOBILE · ACCOUNT + SYSTEM · 58–66 + S-06 + S-07 + G-01 + G-02 + G-03 + G-04 + G-05 + G-15 · LAST FLUTTER FEATURE PACK",
    title: "Account & System · Figma 58–66 + S-06/S-07 + G-01–G-05 + G-15",
    subtitle: "Final Flutter feature pack — features/account + features/system. Wires Account tab (4th bottom-nav: Home/eSIM/Connect/Account) and the cross-cutting system states. Server is source-of-truth for sessions/security/feature-flags. S-06 session lock is a real re-auth interruption (NOT a dismissible modal). S-07 3DS surface is shared with M3/M5 purchase flows. G-03 maintenance driven by admin A17 toggle. G-15 is a returning-user welcome-back modal — NOT first-run re-onboarding. Account deletion (66) follows B3: hard-delete/anonymize per retention, preserve finance/audit, revoke all sessions, irreversible.",
    rules: [
      { t: "warning", v: "M1 tokens / widgets only · light + dark + RTL everywhere · numbers/prices LTR in Arabic · NO new product features — composes M2–M5 surfaces" },
      { t: "warning", v: "Server is source-of-truth for sessions · security state · feature flags · maintenance mode · what's-new · ALL come from API · NEVER hardcoded" },
      { t: "warning", v: "Account deletion (66) follows B3 · hard-delete/anonymize per retention · preserve finance/audit · revoke ALL sessions · deliberate · confirmed · IRREVERSIBLE · clear warning · NEVER one-tap" },
      { t: "warning", v: "S-06 Session Lock is a REAL re-auth interruption (biometric/password step-up) · NOT a dismissible modal · attaches at app shell" },
      { t: "warning", v: "S-07 3DS Challenge is the PSP challenge surface · SHARED with M3/M5 purchase flows · NEVER reimplemented" },
      { t: "purple",  v: "Errors are ACTIONABLE not merely apologetic · every system/error screen offers a recoverable next step where one exists" },
      { t: "warning", v: "Deep-link landing (G-04) reflects destination + auth state · authenticated link resumes destination · unauthenticated routes through M2 auth then resumes · NEVER drops intent" },
      { t: "purple",  v: "Haptics · primary tap = light · destructive confirmation = warning · reduced-motion on animated system transitions/toasts · M1 baseline respected" },
    ],
    accountScreens: [
      { t: "orange",  k: "58 · Account Profile",       v: "Tab landing · profile card (avatar · name · email/phone masked from B3) · subscription summary (from M5/51) · loyalty balance (M5/54) · sections nav: Profile · Settings · Notifications · Security · Support · About · Delete" },
      { t: "purple",  k: "59 · Edit Profile",          v: "Validation · optimistic updates with handled errors · email/phone change → OTP re-verify (B3) · save success haptic · per-locale field validation · routes back to 58 on save" },
      { t: "purple",  k: "60 · App Settings",          v: "Language/locale switch en ↔ ar — re-applies RTL + Cairo LIVE without restart · theme light/dark/system · defaults · region · timezone · persisted server-side" },
      { t: "purple",  k: "61 · Notification Settings", v: "Per-category toggles synced to API · push registration from M1 · platform permission state respected · iOS provisional vs explicit · Android 13+ POST_NOTIFICATIONS · graceful when denied · NEVER nag" },
      { t: "warning", k: "62 · Security Settings",     v: "Change password · 2FA manage · biometric toggle · ACTIVE SESSIONS list (last-seen · device · region) from B3 · revoke-by-id · revoke-all · revoking current session = sign-out · revoking other = list updates immediately" },
      { t: "purple",  k: "63 · Support & Help",        v: "Contact form → ticket (A15) · email/WhatsApp fallback · device + app diagnostics attached (REDACTED — NEVER tokens / PII / card data) · routes to 64 FAQ" },
      { t: "purple",  k: "64 · FAQ",                   v: "Content from API/admin (A15/A16) · search · category-grouped · NEVER hardcoded · per-language · cursor pagination · empty/loading/error" },
      { t: "teal",    k: "65 · About Roamlu",          v: "Version + build · legal links (Terms · Privacy · Refund · VPN disclaimer · all versioned) · open-source licenses · acknowledgements · counsel-reviewed copy" },
      { t: "warning", k: "66 · Delete Account",        v: "Clear consequences warning · multi-step confirm · step-up auth (password + 2FA) · per B3 hard-delete/anonymize per retention · preserve finance/audit · revoke ALL sessions · IRREVERSIBLE · audit entry" },
    ],
    sessionScreens: [
      { t: "warning", k: "S-06 · Session Timeout Lock", v: "Idle-timeout detection at app shell · BLOCKING re-auth interruption · biometric or password step-up · NOT dismissible · resumes context on success · NEVER shows protected content behind the lock" },
      { t: "warning", k: "S-07 · 3DS Payment Challenge", v: "PSP challenge surface · SHARED with M3 purchase + M5 billing/redeem flows · webview-hosted PSP UI · idempotent re-entry · NEVER reimplemented per feature · returns to caller flow on result" },
    ],
    systemStateScreens: [
      { t: "warning", k: "G-01 · Network Error",       v: "Generic network error surface · ACTIONABLE 'Retry' CTA · clear localized message · maps B0 error envelope · NEVER apologetic-only · routes back to source on recovery" },
      { t: "warning", k: "G-02 · No Internet",         v: "Offline detected at M1 shell · banner overlay on active screen · cached read-only where possible · 'Retry' CTA · auto-clears on connectivity restored" },
      { t: "warning", k: "G-03 · Maintenance Mode",    v: "Driven by admin A17 toggle via app-config · BLOCKS app with status + ETA where available · poll/check at launch · NEVER hardcoded · clear localized copy" },
      { t: "warning", k: "G-04 · Push Notification Landing", v: "Deep-link landing reflects destination + auth state · authenticated → resumes destination · unauthenticated → routes through M2 auth then resumes · NEVER drops intent" },
      { t: "purple",  k: "G-05 · What's New",          v: "Release highlights from API/config · shown ONCE per version · skippable · NEVER blocking · acknowledgement persisted · respects locale" },
      { t: "purple",  k: "G-15 · Re-Onboarding (Returning User)", v: "Welcome-back modal for users returning after long absence · returning-user case · NOT part of first-run onboarding · do NOT re-run M2 onboarding · light re-engagement · skippable" },
    ],
    integration: [
      { t: "orange",  k: "B3 Account endpoints",       v: "GET /me · PATCH /me · POST /me/email-change · POST /me/phone-change · POST /me/password · POST /me/2fa · GET /me/sessions · DELETE /me/sessions/:id · DELETE /me/sessions (revoke-all) · POST /me/delete" },
      { t: "purple",  k: "Notification endpoints",     v: "GET /notifications/preferences · PATCH /notifications/preferences · POST /devices (FCM/APNs token register) · DELETE /devices/:id (logout cleanup)" },
      { t: "warning", k: "App-config endpoints",       v: "GET /system/config drives min-version · maintenance (A17) · regional_flags · what's-new (G-05) · feature flags · policy versions · polled at launch + interval · push-bumped on critical change" },
      { t: "warning", k: "Content endpoints",          v: "GET /support/faq (A15/A16 content) · GET /legal/:doc/:version · POST /support/tickets · per-language · cursor pagination" },
      { t: "teal",    k: "Repository layer",           v: "AccountRepository · SessionRepository · NotificationRepository · SystemConfigRepository · ContentRepository · DeviceRepository · all Result<T,ApiError> · empty/loading/error from M1" },
      { t: "purple",  k: "Deep-link handler",          v: "Universal Links (iOS) + App Links (Android) · routes to surface with auth gate · preserves intent through M2 auth · used by push payloads + email links · powers G-04" },
      { t: "warning", k: "Shell hosting",              v: "S-06 lock · G-01/G-02/G-03 banners + blocks · G-04 deep-link · G-05 what's-new gate · G-15 returning-user welcome-back · ALL attached at shell level not feature level" },
      { t: "warning", k: "S-07 3DS reuse",             v: "Single PSP challenge surface · M3 purchase · M5 billing + redeem · M4 number purchase ALL invoke same surface · webview-hosted · idempotent re-entry" },
    ],
    tests: [
      "Account Profile 58 · aggregates surface from M3/M4/M5 · masked PII · NEVER raw tokens shown · reactive on change",
      "Edit Profile 59 · validation per locale (Gulf phone formats) · email/phone change → OTP re-verify · optimistic updates with handled errors · save success haptic",
      "App Settings 60 · language switch en ↔ ar LIVE without restart · RTL re-layout immediate · Cairo loads for Arabic · numbers stay LTR · theme light/dark/system applies live · persisted",
      "Notification Settings 61 · per-category toggles synced to API · push registration from M1 · iOS provisional + Android 13+ POST_NOTIFICATIONS handled · NEVER nags when denied",
      "Security 62 · password change requires current-password + step-up · 2FA enroll/disable · biometric toggle · ACTIVE SESSIONS list with last-seen/device/region · revoke-by-id immediate · revoke-all logs out · revoking current = sign-out",
      "Support 63 · ticket creation routes to A15 · diagnostics REDACTED (NEVER tokens/PII/cards) · email/WhatsApp fallback opens correctly",
      "FAQ 64 · content from API (A15/A16) · search · category-grouped · per-language · cursor pagination · NEVER hardcoded",
      "About 65 · version + build · all 4 legal docs versioned · open-source licenses · counsel-reviewed copy",
      "Delete Account 66 · clear consequences warning · multi-step confirm · step-up auth required · per B3 hard-delete/anonymize · finance/audit preserved · ALL sessions revoked · IRREVERSIBLE · audit entry",
      "S-06 Session Lock · idle-timeout fires shell-level interruption · biometric/password step-up · NOT dismissible · resumes context on success · NEVER shows protected content behind lock",
      "S-07 3DS Challenge · single PSP surface shared by M3/M4/M5 · webview-hosted · idempotent re-entry · returns to caller flow",
      "G-01 Network Error · ACTIONABLE retry CTA · maps B0 error envelope · NEVER apologetic-only · recovers to source",
      "G-02 No Internet · M1 shell detection · banner overlay · cached read-only where possible · auto-clears on reconnect",
      "G-03 Maintenance · A17 toggle via app-config · BLOCKS app · ETA when known · NEVER hardcoded · respects locale",
      "G-04 Deep-link · authenticated → resumes destination · unauthenticated → M2 auth → resumes · NEVER drops intent",
      "G-05 What's New · release highlights from API/config · shown ONCE per version · skippable · NEVER blocking · acknowledgement persisted",
      "G-15 Re-Onboarding · welcome-back modal for long-absence users · DISTINCT from M2 first-run · light re-engagement · skippable · NEVER repeats full onboarding",
      "Light + dark + RTL render every screen · banners mirror correctly · numbers LTR in Arabic",
      "Reactive refresh · session revoke / settings change / language switch / consent persist · NO stale UI",
    ],
    edgeCases: [
      "Email/phone change race · OTP expiry · partial change rolled back atomically · UI reflects authoritative state",
      "Biometric device-key invalidation on OS reset · UI re-enroll flow · NEVER falls back to password silently",
      "Session revoke from another device · current device receives forced re-auth on next privileged action · graceful sign-out path",
      "Push token rotation on app reinstall · old token cleaned up server-side · NEVER duplicate-deliver",
      "S-06 idle-timeout vs in-flight payment · 3DS challenge in progress · lock waits for callback · NEVER kills payment mid-flight",
      "S-07 3DS bounce-back to backgrounded app · idempotent re-entry · same Idempotency-Key · NEVER double-charges",
      "Maintenance (G-03) during active session · graceful read-only · in-flight payment treated as G-12 timeout (M3/M5 path)",
      "Force-update via min-version · user mid-air scenario · GRACEFUL retry post-update · NEVER loses intent",
      "Locale switch mid-session · re-layout on screen but preserves form state · NEVER drops user input",
      "Account deletion grace period · reversal window · how surfaced · email reminder cadence",
      "Localization fallback · missing ar string → fall back to en (NEVER raw key) · mixed-script handling for names",
      "Diagnostic attachment scope · what's safe to attach · scrubber unit-tested · NEVER tokens/cards/full PII",
    ],
    handoff: [
      "R1 testing inherits stable Account + System surfaces · J10 (recovery + security) directly tests M6 · S-06 + revoke + deletion + biometric all in scope",
      "B3 endpoints depended on · email/phone/password change · 2FA · session revoke · account deletion · all pre-existing · contract stable",
      "B8 admin · A15 tickets · A16 FAQ/content · A17 drives G-03 · alignment required for content + maintenance",
      "FL legal/PDPL · marketing defaults per market · re-consent triggers · counsel-reviewed copy per language · M6 renders only",
      "Platform · iOS Universal Links + APNs · Android App Links + FCM · Settings deep-link API per OS version · entitlements doc'd",
      "G-15 returning-user is NOT first-run · M2 onboarding NOT re-run · light re-engagement only · clear distinction owned by M6",
      "S-07 3DS surface owned by M6 system layer · M3/M4/M5 invoke it · NEVER reimplemented per feature",
      "App's feature coverage now spans every Figma mobile screen · R1 testing/observability/handoff is the next + final pass",
    ],
    pending: [
      "Account deletion grace-period length · per-market legal · reversal mechanics · email reminder cadence",
      "Marketing opt-in defaults per market · UAE PDPL · KSA · Bahrain · Oman · counsel sign-off",
      "Force-update threshold cadence · how aggressive · grace days vs hard-cut",
      "S-06 idle-timeout duration · per-tier (high-value action shorter) · re-auth method preference",
      "What's-new (G-05) content cadence · who owns release notes · per-language",
      "Returning-user (G-15) absence threshold · 30/60/90 days · per-segment personalization",
      "Diagnostic attachment scope · PII boundary · scrubber test corpus",
      "Notification category taxonomy final · alignment with A16 admin composer · per-language strings",
    ],
    exit: [
      "Account 58–66 live · light/dark/RTL · M1 widgets only · NO new business logic — composes M2–M5 surfaces",
      "Edit Profile 59 · email/phone change requires OTP re-verify · save success haptic · per-locale validation",
      "App Settings 60 · language live-switch en ↔ ar without restart · RTL re-layout immediate · theme applies live · persisted",
      "Notification Settings 61 · per-category toggles synced to API · platform permission state respected · NEVER nags",
      "Security 62 · ACTIVE SESSIONS list with last-seen/device/region · revoke-by-id immediate · revoke-all logs out · password change with step-up · 2FA + biometric manage",
      "Support 63 + FAQ 64 · ticket → A15 · content from API (A15/A16) · diagnostics REDACTED",
      "About 65 · version · all 4 legal docs versioned · open-source licenses · counsel-reviewed copy",
      "Delete Account 66 · clear warning · multi-step confirm · step-up auth · per B3 · finance/audit preserved · ALL sessions revoked · IRREVERSIBLE · audit entry",
      "S-06 Session Lock · real re-auth interruption · NOT dismissible · attaches at app shell · biometric/password step-up",
      "S-07 3DS Challenge · single PSP surface shared with M3/M4/M5 · webview-hosted · idempotent re-entry",
      "G-01 / G-02 / G-03 / G-04 / G-05 / G-15 all hosted at shell · A17 drives G-03 · errors ACTIONABLE · deep-link preserves intent · what's-new once per version · returning-user welcome-back distinct from first-run",
      "All endpoints wired through repository layer · empty/loading/error from M1 · reactive refresh after relevant actions",
      "Light + dark + RTL across all screens · banners mirror correctly · numbers LTR in Arabic",
      "M6 closes the Flutter feature pack · app's feature coverage spans every Figma mobile screen · R1 testing/observability/handoff is next + final",
    ],
  },
  {
    name: "■ R1 — Testing, Observability & Handoff",
    kind: "r1",
    kicker: "R1 · PRODUCTION READINESS · 10 E2E JOURNEYS · OBSERVABILITY · DEPLOY/OPS · HANDOFF · OPEN DECISIONS · GO/NO-GO",
    title: "Testing · Observability · Deploy/Ops · Handoff · Production Readiness",
    subtitle: "Final phase. Runs after B0–B8 + FL + W1 + M1–M6. Closes the pack: end-to-end coverage of critical journeys against sandbox adapters · structured observability with redaction · containerized deploy + runbook · single source-of-truth handoff carrying every open finance/legal/platform decision · production-readiness checklist · launch-blocking vs post-soft-launch decisions surfaced for go/no-go.",
    rules: [
      { t: "warning", v: "Tests run against SANDBOX provider/payment/model adapters (deterministic) · NEVER live providers · seed + fixtures reproducible" },
      { t: "warning", v: "Money · region-gating · provision-vs-install · idempotency · consent persistence are HIGHEST-RISK invariants · MUST be covered by tests · NEVER assumed" },
      { t: "warning", v: "Observability NEVER logs secrets · full PII · tokens · card data · provider credentials · redact at the logging layer · verified by log scrubbing tests" },
      { t: "warning", v: "Handoff documents truth INCLUDING unresolved decisions · NEVER paper over open finance/legal/platform items · each open decision has an owner" },
      { t: "purple",  v: "No new product features · harden · test · observe · document · refactor only when required to make a critical invariant testable" },
      { t: "purple",  v: "CI runs all layers on every change · backend unit/integration/e2e · web admin RBAC · Flutter widget + integration · cross-cutting reproducibility" },
      { t: "teal",    v: "Health/readiness from B0 wired to deployment health checks · alerting on payment/provisioning spikes · reconciliation mismatches · dead-letter growth · auth-abuse signals" },
      { t: "teal",    v: "Production-readiness checklist gates launch · tests green · observability live · secrets managed · backups verified · open decisions assigned to owners" },
    ],
    journeys: [
      { t: "warning", k: "J1 · First-time onboarding",      v: "GDPR consent persisted (G-06) → register → verify (email/SMS) → 2FA setup (S-04) → biometric (S-05) → active session · all states + idempotent retries" },
      { t: "warning", k: "J2 · Returning login + 2FA",      v: "Login → 2FA challenge → refresh-token rotation · reuse-detection forces full re-auth · idle-timeout (S-06) lock + re-auth path tested" },
      { t: "warning", k: "J3 · First eSIM purchase",        v: "Browse → quote (tax + G-08 refund ack) → external PSP → 3DS (S-07) → webhook-confirmed paid → provisioning → install · provision ≠ install verified · success haptic" },
      { t: "warning", k: "J4 · eSIM top-up",                v: "Idempotent · same Idempotency-Key on retry · NEVER double-charge · NEVER double-provision · webhook source-of-truth · receipt issued once" },
      { t: "warning", k: "J5 · VPN first activation",       v: "G-07 acceptance persisted (versioned) → region-gated config issue (B4) → connect · region-disabled market refused cleanly (typed refusal) · NEVER start-then-fail" },
      { t: "purple",  k: "J6 · AI recommendation → buy",    v: "B7 grounded recommendation → routes into M3 screen 25 with linkage · hallucinated/region-disabled plan NEVER surfaced · acceptance attribution end-to-end" },
      { t: "purple",  k: "J7 · Subscription change/cancel", v: "Change with proration from B5 · cancel-at-period-end vs immediate per FL · G-14 trial expiry modal on first-open after expiry · routes convert/downgrade" },
      { t: "warning", k: "J8 · Payment-failure paths",      v: "G-12 timeout safe retry (idempotent) · paid-but-provisioning-failed → auto-refund OR flagged-review · NEVER silent charged-but-undelivered" },
      { t: "purple",  k: "J9 · Loyalty earn + redeem",      v: "Event-driven earn (idempotent ledger entry) · redeem applied SERVER-SIDE at quote · concurrent redeem NEVER overspends balance · B6 ledger consistent" },
      { t: "warning", k: "J10 · Recovery + security",       v: "Password reset invalidates ALL sessions · session-revoke immediate · account deletion preserves finance/audit records (B5/B8) per retention policy" },
    ],
    backendTests: [
      { t: "purple",  k: "Unit",         v: "Services · money utils (minor units · currency formatting · NEVER float) · rules engines (FL tax · region gating · refund eligibility) · token rotation · OTP rate limit" },
      { t: "purple",  k: "Integration",  v: "DB + queue + webhook idempotency · provider signature verification · PaymentIntent state machine · provisioning state machine · ledger append-only invariant · consent versioning" },
      { t: "warning", k: "E2E (sandbox)", v: "10 journeys against sandbox PSP/eSIM/VoIP/VPN/model adapters · deterministic seed · webhook replay · 3DS challenge sandbox · reconciliation mismatch synthetic" },
      { t: "teal",    k: "Property",     v: "Idempotency-Key uniqueness · ledger balance = sum(entries) invariant · provisioning never charged-but-undelivered · region-gate honored across all entry points" },
    ],
    webAdminTests: [
      { t: "warning", k: "RBAC enforcement",       v: "Least-privilege denials · UI-hidden control attempted via API → 403 · role/permission matrix · approval-threshold gating for high-risk actions" },
      { t: "warning", k: "Audit on mutation",      v: "Every destructive/financial action writes audit entry · before/after state · actor · IP · timestamp · NEVER missing for refund/adjustment/disable" },
      { t: "purple",  k: "Secret masking",         v: "Provider credentials write-only · last-4 / presence only on read · admin UI never receives full secrets · log scrubbing verified" },
      { t: "purple",  k: "Reconciliation",         v: "A19 mismatch output reconciles to B5 ledger · synthetic mismatches (over/under) flagged · resolve-with-audit path tested" },
    ],
    flutterTests: [
      { t: "purple",  k: "Widget tests",           v: "Key components render light + dark + RTL · numbers stay LTR in Arabic · reduced-motion alternatives · haptic hooks fire · token-driven (NEVER raw hex)" },
      { t: "warning", k: "Integration · auth",     v: "J1 + J2 + J10 · onboarding + login + recovery · biometric + 2FA + idle-lock · refresh-token rotation + reuse-detection" },
      { t: "warning", k: "Integration · purchase", v: "J3 + J4 + J7 · eSIM purchase + top-up + subscription change · M3 quote → PSP → 3DS → success · idempotent retry · G-12 + G-14" },
      { t: "warning", k: "Integration · VPN",      v: "J5 · G-07 acceptance → config issue → connect · region-disabled refused cleanly · G-10 + G-11 banners surface · platform tunnel lifecycle stub-driven" },
    ],
    observability: [
      { t: "warning", k: "Structured logging",     v: "request_id + correlation_id across API → queue → webhook · JSON · log level per env · REDACTION at logging layer (secrets · PII · tokens · card data · provider credentials)" },
      { t: "purple",  k: "Metrics",                v: "Provisioning success/failure rates · payment success/3DS/timeout · refund/reconciliation mismatches · queue depth + dead-letter · model usage/cost · API latency + error rates" },
      { t: "purple",  k: "Error tracking",         v: "Sentry-style for backend + web + mobile · source-mapped · release-tagged · user_id hashed (never raw PII) · breadcrumbs scrubbed" },
      { t: "teal",    k: "Health + readiness",     v: "B0 endpoints wired to deployment probes · liveness vs readiness distinct · DB + queue + provider-adapter health surfaced · 503 cleanly during maintenance (A17 → G-03)" },
      { t: "warning", k: "Alerting",               v: "Payment/provisioning failure spikes · reconciliation mismatches · dead-letter queue growth · auth-abuse signals (OTP burst · login burst) · routing to ops channel" },
      { t: "purple",  k: "Tracing (optional)",     v: "OpenTelemetry traces across API → queue → adapter · spans for PSP/eSIM/VoIP/VPN/model calls · sampling per env · helps debug provision-vs-install delta" },
    ],
    deployOps: [
      { t: "warning", k: "Containerized deploy",   v: "B0 Docker · env-based config (dev/staging/prod) · NO secrets in image · provider credentials via secure config store · image scan in CI" },
      { t: "warning", k: "Migrations + seed",      v: "Prisma migrate deploy on release · seed only in non-prod · rollback steps documented · DB version-pinned · zero-downtime patterns for schema-additive" },
      { t: "purple",  k: "Backup + restore",       v: "PostgreSQL nightly + WAL archiving · restore drill quarterly · retention aligned to (TBD) policy · backups encrypted at rest · access audited" },
      { t: "purple",  k: "Secrets management",     v: "No secrets in code · images · client bundles · vault/SSM/secrets-manager · rotation cadence per credential type · access audit trail" },
      { t: "teal",    k: "Data retention jobs",    v: "Aligned to to-be-confirmed retention policy · finance/audit preserved beyond user-deletion per legal · scheduled jobs idempotent · dry-run mode for ops" },
    ],
    runbook: [
      "Replay a failed provisioning job · find by correlation_id · re-enqueue with same Idempotency-Key · verify webhook source-of-truth · audit entry on manual replay",
      "Handle a reconciliation mismatch (A19) · drill-down · classify (provider lag · webhook miss · refund-not-recorded) · resolve-with-audit · escalate to finance if material",
      "Rotate provider credentials (PSP · eSIM · VoIP · VPN · model · push · SMS) · update secure store · re-deploy adapter · verify sandbox first · audit + sign-off",
      "Toggle maintenance mode (A17) · drives client G-03 · communicate window · readiness probe returns 503 · post-mortem if unplanned",
      "Respond to a region-availability change · update regional_flags (FL) · client honors via typed refusal · NEVER start-then-fail · communicate to affected users",
      "Auth-abuse response · OTP/login burst alert · rate-limit tighten · suspect-account suspend (A03) · revoke sessions · postmortem",
      "Payment-failure spike response · check PSP status · check 3DS challenger · throttle if upstream · communicate · dunning paused if systemic",
      "Account-deletion request · soft-delete user · preserve finance/audit · revoke sessions · email confirmation · audit entry · per retention policy",
    ],
    handoffOpenDecisions: [
      { t: "warning", k: "Entity / domicile",            v: "Drives Stripe eligibility + every VAT obligation · RESOLVE FIRST · launch-blocking · owner: founders + legal · downstream of every commerce decision" },
      { t: "warning", k: "Place-of-supply ruling",       v: "Written ruling for eSIM/VoIP/VPN per market · ESPECIALLY before enabling KSA at 15% · launch-blocking for KSA · owner: tax counsel" },
      { t: "warning", k: "Live PSP selection",           v: "Confirmed fees + recurring + onboarding · e-invoicing approach (build ZATCA Phase 2 + UAE OR use Merchant of Record) · launch-blocking · owner: finance + eng" },
      { t: "warning", k: "Apple App Store channel · VPN", v: "IAP vs external for VPN before iOS submission · eSIM/VoIP confirmed external · launch-blocking for iOS · owner: mobile lead + Apple liaison" },
      { t: "warning", k: "Apple entitlements",           v: "eSIM CoreTelephony/CommCenter (likely unavailable → Universal-Link/manual install) · iOS Network Extension (VPN) · CallKit (VoIP) · START APPROVALS EARLY · owner: mobile lead" },
      { t: "warning", k: "Gulf VPN/VoIP legality",       v: "Per market · region-flag default = restricted-off until cleared · verify current UAE/TDRA + KSA + Bahrain + Oman · launch-blocking per-market · owner: legal" },
      { t: "purple",  k: "Refund policy wording",        v: "UAE/KSA consumer law alignment · G-08 inline copy · counsel-reviewed · per-language · owner: legal + product" },
      { t: "purple",  k: "Loyalty economics",            v: "Earn rates · redeem ratios · expiry · per-market caps · NOT launch-blocking (post-soft-launch tunable) · owner: business + finance" },
      { t: "purple",  k: "Admin RBAC matrix",            v: "Final role/permission matrix + approval thresholds for refund/adjustment/disable · owner: ops lead · NOT launch-blocking but pre-prod" },
      { t: "purple",  k: "Data retention windows",       v: "Per data class (auth · finance · audit · PII · ledger) · aligned to UAE PDPL + KSA + tax law · owner: legal · drives retention jobs" },
    ],
    productionChecklist: [
      "All 10 E2E journeys green in CI against sandbox adapters · deterministic · reproducible · seed pinned",
      "Backend unit + integration + property tests green · money / region-gate / provision-vs-install / idempotency / consent invariants covered",
      "Web admin RBAC + audit-on-mutation + secret-masking + reconciliation tests green",
      "Flutter widget tests light + dark + RTL · integration tests for auth + purchase + VPN-connect green",
      "Structured logging with redaction verified · log-scrubbing tests green · NEVER secrets/PII/tokens/cards/provider creds in logs",
      "Metrics + error tracking + alerting wired · alert routing tested · synthetic alert fires correctly",
      "Health + readiness probes wired to deployment · maintenance mode (A17) drives client G-03 cleanly",
      "Containerized deploy from B0 Docker · env config · NO secrets in image · image scanned · staging deployed",
      "Migrations + seed + rollback documented + drilled · zero-downtime additive patterns verified",
      "PostgreSQL backup + WAL archiving live · restore drill completed · backups encrypted · retention configured",
      "Secrets management · no secrets in code/images/bundles · rotation cadence documented · access audited",
      "Runbook published · ops channel routes alerts · on-call rotation defined · postmortem template ready",
      "Handoff document published · architecture · non-negotiables enforcement · open decisions assigned to owners",
      "Open decisions classified launch-blocking vs post-soft-launch · go/no-go view shared with founders",
      "Apple entitlement approvals in flight (Network Extension · CallKit · PushKit) · eSIM channel decision recorded",
      "Region-flags default = restricted-off for unverified markets · clearance owner per market assigned",
    ],
    launchBlocking: [
      "Entity/domicile resolved (drives Stripe + VAT obligations)",
      "Place-of-supply ruling for KSA before enabling 15% VAT path",
      "Live PSP selection + fees + recurring + onboarding confirmed · e-invoicing approach decided",
      "Apple VPN channel call (IAP vs external) before iOS submission",
      "Gulf VPN/VoIP legality per launch market verified · region-flag flipped on only after clearance",
      "Apple entitlements approved OR Universal-Link/manual-install fallback documented for eSIM",
      "Refund policy wording counsel-reviewed per market + language",
      "All 10 E2E journeys green · observability live · secrets managed · backups drilled",
    ],
    postSoftLaunch: [
      "Loyalty economics tuning · earn/redeem ratios · expiry · per-market caps (configurable in A12)",
      "AI streaming vs request/response final contract decision · post-launch tunable",
      "Call-quality threshold (G-13) tuning · jitter / loss / MOS · false-positive vs missed-degradation balance",
      "Captive portal heuristic (G-10) cross-platform reliability tuning",
      "VPN protocol fallback (WireGuard → OpenVPN) auto-detect tuning",
      "Trusted-network UX · auto-connect on untrusted · battery cost vs protection-always",
      "Admin RBAC matrix refinement · approval thresholds tuned to actual ops volume",
      "Data retention windows finalization once legal confirms per data class",
    ],
    exit: [
      "All 10 critical journeys green in CI against sandbox · NEVER live providers in tests",
      "Highest-risk invariants covered by tests · money · region-gate · provision-vs-install · idempotency · consent persistence",
      "Observability live · structured logging with redaction · metrics · error tracking · alerting · health probes",
      "Containerized deploy · env config · secrets vaulted · backups + restore drilled · runbook published",
      "Web admin RBAC + audit-on-mutation enforced server-side · UI gating convenience only · secret masking verified",
      "Flutter widget + integration tests green · light/dark/RTL · reduced-motion · haptics",
      "Handoff document is single source-of-truth · architecture · non-negotiables · open decisions with owners",
      "Production-readiness checklist completed with current pass/fail status",
      "Launch-blocking decisions surfaced to founders for go/no-go · post-soft-launch decisions parked with owners",
      "Apple entitlement approvals in flight · eSIM channel (Universal-Link/manual-install) decision recorded",
      "Region-flags default = restricted-off for unverified markets · per-market clearance owner assigned",
      "Secret/PII redaction verified by log-scrubbing tests · NEVER tokens / cards / provider creds in logs",
      "No new product features added in R1 · only harden + test + observe + document",
      "Roamlu is production-ready pending the explicit launch-blocking decisions list",
    ],
  },
  {
    name: "■ Review Checklists",
    kind: "checklist",
    kicker: "REVIEW · ONE CHECKLIST PER PHASE · ALL TICKED · DRIFT FLAGS · NON-NEGOTIABLES VERIFIED · MIRRORS OPERATOR PLAYBOOK",
    title: "Roamlu Build Pack — Review Checklists",
    subtitle: "One checklist per phase. After running a phase, scan to its section and verify before starting the next. A phase is not 'done' until its checklist passes. These mirror the non-negotiables in the operator playbook. All boxes ticked = full pack (B0–R1) implemented.",
    global: [
      "No secrets in code, images, or client bundles",
      "Money is integer minor units + ISO currency code (never float)",
      "Timestamps stored UTC (timestamptz)",
      "Output matches the phase's stated 'Output behavior' (summary → build → gaps list)",
    ],
    phases: [
      {
        code: "B0", title: "Setup & Scaffold",
        items: [
          "Stack is exactly NestJS + PostgreSQL + Prisma + Redis/BullMQ (not substituted)",
          "Module folders exist for every later phase; nothing implemented yet",
          "Typed config fails fast on a missing env var",
          "Money utility (minor units + currency) present; float-money convention forbidden",
          "Global error envelope { error: { code, message, details } } wired",
          "Request-ID + structured logging interceptor; /health + /ready; /docs (empty OpenAPI)",
          "All six provider adapter interfaces defined with sandbox stubs (esim, voip, vpn, payments, push, sms)",
          ".env.example lists every var, no real values",
        ],
        drift: "business logic added too early · provider SDK imported into a module",
      },
      {
        code: "B1", title: "Data Model (keystone)",
        items: [
          "All money fields BigInt minor units + currency column; no float/decimal-as-money",
          "UUID PKs; created_at / updated_at everywhere; soft-delete where retention matters",
          "FKs + indexes on FKs and common query columns; unique on email/phone/iccid/DID",
          "Enums for all lifecycle/status fields (no free strings)",
          "eSIM has SEPARATE provision_status and install_status",
          "Loyalty is a points_ledger (signed entries) — NO single mutable balance column",
          "consents (type + version + accepted_at), regional_flags, provider_configs, append-only audit_log present",
          "admin_users separate from users; roles/permissions tables exist",
          "Migration + seed run clean; seed defaults VPN/VoIP off in restricted markets",
        ],
        drift: "balance column on loyalty · provision==install · single hardcoded tax rate",
      },
      {
        code: "B2", title: "API Contract",
        items: [
          "OpenAPI 3.1 generated from controllers/DTOs (not hand-written)",
          "Consistent response + error envelope; cursor pagination on lists",
          "Versioned /api/v1; admin under separate /api/v1/admin",
          "Every money value in responses is { amount, currency }",
          "Idempotency-Key required on payment + provisioning POSTs",
          "Region-gated endpoints return a typed 403 (not generic error)",
          "A Dart client and a TS client can be generated from the spec",
          "Webhooks defined separately, signature-verified, not in the public client spec",
        ],
        drift: "hand-written client models · money as plain number",
      },
      {
        code: "B3", title: "Auth & Security",
        items: [
          "Argon2id hashing; no password material logged/returned",
          "Short access token; refresh rotation WITH reuse detection (family invalidation)",
          "Refresh tokens hashed at rest, device-bound; access token carries no PII",
          "Generic non-enumerating auth errors; rate-limit + lockout on auth/OTP/reset",
          "OTPs single-use, expiring, hashed, attempt-limited",
          "2FA setup confirms before enable; one-time recovery codes (hashed)",
          "Biometric = device keypair signing a server challenge (not standalone identity)",
          "Password reset invalidates all sessions; session list + revoke works",
          "Step-up enforcement for sensitive actions (S-06)",
          "Consent persisted with version + timestamp",
          "Tests: reuse-detection, OTP limits, 2FA + recovery, revoke, reset-invalidation, step-up",
        ],
        drift: "consent UI-only · admin sharing the user auth realm",
      },
      {
        code: "B4", title: "Provider Adapters",
        items: [
          "All provider access via interfaces; no SDK in business logic",
          "Sandbox + live impls per provider, env-selected; tests use sandbox",
          "Provisioning is async via queue; API never blocks on provider",
          "Webhooks signature-verified AND idempotent (safe on duplicate)",
          "Provider cost stored separately from user price",
          "Region gating enforced BEFORE enqueuing a provisioning job",
          "eSIM: provision success populates LPA/QR/Universal-Link + ICCID; install reported separately",
          "VoIP number lifecycle reserved → active → released; reservation TTL auto-release; CDRs separate",
          "VPN config issuance checks G-07 acceptance + regional flag first",
          "Failed jobs: bounded retry → dead-letter surfaced to admin",
          "Tests: provision success, failure+retry+DLQ, duplicate-webhook idempotency, region refusal, provision-vs-install",
        ],
        drift: "assuming in-app iOS provisioning · provisioning conflated with install",
      },
      {
        code: "B5", title: "Billing & 3DS",
        items: [
          "Totals computed server-side; client-sent prices never trusted",
          "Payments via PaymentProvider adapter (PSP swappable); no SDK in logic",
          "3DS/SCA requires-action path supported; raw card data never on backend (token ref only)",
          "Idempotency-Key on every charge + refund (no double-charge on retry)",
          "Webhook is source of truth for final payment state; signatures verified; out-of-order/duplicate safe",
          "G-08 refund acknowledgement persisted + versioned at quote",
          "Payment timeout (G-12) → recoverable state, safe retry",
          "Paid-but-provisioning-failed → auto-refund or flagged review (no silent charged-but-undelivered)",
          "Subscriptions: trial, renewal via webhook, dunning, change/cancel; G-14 trial-expiry event",
          "Reconciliation job flags internal-vs-provider mismatches (feeds A19)",
          "Tests: idempotent charge, 3DS path, webhook-confirmed paid, timeout retry, paid-but-failed refund, renewal+dunning, refund reconcile",
        ],
        drift: "client confirmation marking payment succeeded · float money",
      },
      {
        code: "FL", title: "Finance & Legal Decisions",
        items: [
          "PSP adapter kept generic; live provider chosen by config (not hardcoded)",
          "Per-market VAT rate is data-driven (KSA 15 / UAE 5 / Bahrain 10 / Oman 5; data, not literals)",
          "Payment channel decided per product: eSIM/VoIP = external PSP; VPN channel decided + recorded",
          "Refund policy text + version in config; proration mode (native vs manual) decided",
          "E-invoicing approach chosen (build ZATCA Phase 2 + UAE, or Merchant of Record)",
          "All six open items assigned to an owner (entity/domicile resolved first)",
        ],
        drift: "treating any number here as final without advisor confirmation",
      },
      {
        code: "B6", title: "Loyalty & Referrals",
        items: [
          "Balance = sum of append-only ledger; no mutable balance column",
          "Earning is event-driven (paid/renewed/referral) and idempotent on source event",
          "Point value + earn rates in config (not hardcoded); rules versioned",
          "Redemption: balance check in a transaction — no overspend on concurrent redeem",
          "Redeemed reward reduces a B5 quote server-side (never client-applied discount)",
          "Referral: server-side single-use attribution; self/duplicate blocked; fraud-suspect flagged (not auto-paid)",
          "Expiry (if enabled) is a traceable negative ledger entry via job",
          "Tests: balance=ledger, idempotent earn, concurrent no-overspend, referral self/dup, flagged-not-paid, expiry",
        ],
        drift: "client asserting points · loyalty treated as non-financial",
      },
      {
        code: "B7", title: "AI Advisor",
        items: [
          "Model never invents plans/prices; candidates come from live catalog (retrieval grounds)",
          "Every model-referenced plan id validated against catalog before surfacing (hallucination dropped)",
          "Model via ModelProvider adapter; key server-side only; swappable by config",
          "Region gating + entitlement respected (won't recommend disabled-market plans)",
          "Recommendation stores candidate set + rationale (explainable); accept routes to B5 quote (never charges)",
          "Rate-limit + token cap per user; usage/cost logged; PII redacted from model payload",
          "Tests: invalid-plan rejected, region-disabled never recommended, accept→correct quote, rate/token cap, redaction",
        ],
        drift: "AI as a bottom-nav tab · model output trusted without catalog validation",
      },
      {
        code: "B8", title: "Admin Backend",
        items: [
          "Admin auth is a separate realm (admin_users, distinct token audience); no cross-login",
          "Every endpoint declares a required permission (least privilege; nothing open to 'any admin')",
          "Append-only audit on every mutation (actor/action/entity/before-after/request-id); not editable/deletable",
          "PII access is itself audited + permissioned; secrets masked (last-4/presence)",
          "Pricing changes versioned + audited; respect per-market tax/regional flags",
          "A19 reconciliation = resolve-with-audit (finance-grade, not marketing dashboard)",
          "Analytics computed from source ledgers (reconciles); cache ok, divergent number never stored as truth",
          "Maintenance toggle (A17) drives client G-03",
          "Tests: least-privilege denials, audit-on-mutation, audit immutability, PII logging, secret masking, pricing versioning, analytics reconciles",
        ],
        drift: "shared auth realm · unaudited mutations · full secrets returned",
      },
      {
        code: "W1", title: "Web Admin (React)",
        items: [
          "API client generated from B8 OpenAPI (no hand-written models)",
          "RBAC-aware UI hides/disables forbidden actions; server still enforces (no control that would 403)",
          "Tokens from BrandGuide v2 values (not re-picked); layout 240/64/24, white cards 12 radius",
          "Money displayed from API minor units + currency (not recomputed); masked fields as API returns",
          "Tables: server-side paginate/filter/sort; loading/empty/error on every list",
          "Destructive/financial actions: confirmation + audit-trail surfaced",
          "Separate admin auth realm: login + 2FA + idle lock; tokens stored securely",
          "Error envelope mapped; 401→re-auth, 403→friendly",
          "Desktop 1440 + tablet 768 adaptations; accessible tables/forms/modals",
        ],
        drift: "generic-SaaS-blue look · client recomputing money · showing 403-bound controls",
      },
      {
        code: "M1", title: "Flutter Foundation",
        items: [
          "Dart client generated from OpenAPI (no hand-written models)",
          "Theme tokens = BrandGuide v2 values; widgets reference tokens, never raw hex",
          "Light + dark both first-class; RTL + Cairo first-class; numbers/prices LTR in Arabic",
          "Bottom nav exactly Home/eSIM/Connect/Account; AI NOT a tab; nav reverses in RTL",
          "Tokens secure storage (Keychain/Keystore); interceptors: attach token, error envelope, 401 auto-refresh+rotation, force re-auth",
          "Idempotency-Key generated for payment/provisioning POSTs",
          "Session state machine; biometric hook; S-06 idle lock at shell",
          "Foundation widgets exist (buttons/inputs/OTP/cards/sheet/progress ring/shimmer/banner/biometric/empty) — token-driven, light/dark/RTL, reduced-motion + haptic hooks",
          "System states wired at shell: G-02 no-internet, G-03 maintenance, G-10/G-11 banners",
        ],
        drift: "AI tab · re-picked colors · feature screens built here",
      },
      {
        code: "M2", title: "Onboarding & Auth",
        items: [
          "M1 tokens/widgets reused (no rebuilt primitives); light/dark/RTL on every screen",
          "First-launch logic: G-06 → 01→08; registration 08→10→11→S-01→S-03→Home",
          "GDPR (G-06) persisted via API (version+timestamp) before onboarding proceeds",
          "Generic non-enumerating auth errors; UI reflects M1 session state (never decides locally)",
          "OTP/2FA/biometric feel production-ready; resend cooldown; lockout handled gracefully",
          "Default Arabic for Gulf locale; Gulf-first phone/region pickers",
          "SSO captures consent on first login; deep-link routes through auth then resumes",
          "Wrong-OTP error haptic; reduced-motion on onboarding hero",
        ],
        drift: "consent as throwaway checkbox · placeholder 2FA/biometric",
      },
      {
        code: "M3", title: "Home & eSIM",
        items: [
          "M1 tokens/widgets; light/dark/RTL; screen-17 high-contrast variant",
          "Plans/prices/availability from API (B4); region-disabled plans not shown/purchasable",
          "Buy flow = external PSP (B5 PaymentIntent + 3DS); server-computed quote; Idempotency-Key",
          "G-08 refund notice INLINE on screen 25 + acknowledgement persisted",
          "After paid → track provisioning; provision ≠ install; install guide reports back",
          "Install guide clear iOS vs Android; Universal-Link where available; no fake in-app iOS provisioning",
          "G-12 timeout recoverable + safe retry; paid-but-failed reflects B5 refund/flag (no silent loss)",
          "Top-up is a full flow (E-02/E-03), idempotent",
          "AI-recommendation entry can pre-select a plan into screen 25",
        ],
        drift: "IAP for eSIM · claiming install on purchase success",
      },
      {
        code: "M4", title: "Connect (VoIP & VPN)",
        items: [
          "M1 tokens/widgets; light/dark/RTL; teal = VPN/security",
          "Connect feels like one area across both services",
          "Region gating strict: disabled market refused cleanly (no start-then-fail)",
          "VPN first activation: G-07 accepted + persisted BEFORE config issued",
          "Number purchase reuses M3 PSP flow (idempotent); KYC requirement surfaced from API",
          "VPN/VoIP credentials never logged/insecurely stored",
          "G-13 call-quality = inline banner on active call; V-02 incoming = overlay",
          "G-10 captive portal + G-11 reconnecting = banners over live screens, mirror in RTL",
          "Connecting-ring reduced-motion alt; VPN-connected heavy haptic",
          "Platform layers: iOS Network Extension / Android VpnService; CallKit/ConnectionService — flagged for handoff",
        ],
        drift: "VPN connect without G-07 · banners built as full pages",
      },
      {
        code: "M5", title: "AI, Billing & Loyalty",
        items: [
          "M1 tokens/widgets; light/dark/RTL; purple = AI, orange = CTA",
          "AI is an entry point, not a tab; renders only validated B7 recommendations",
          "Accept recommendation → routes into M3 screen 25 (never charges); linkage preserved",
          "Subscriptions/prices/tax from B5 per FL; external PSP reused; G-12 handled",
          "G-14 trial-expiry = first-open modal (B5 event), not a settings screen",
          "Loyalty balance = API/B6 ledger value (not client-computed); redeem applies at quote server-side",
          "No casino-like/manipulative loyalty patterns; referral via share sheet",
          "AI typing indicator + confetti have reduced-motion alts",
        ],
        drift: "client-applied discount · AI surfacing unvalidated plans",
      },
      {
        code: "M6", title: "Account & System",
        items: [
          "M1 tokens/widgets; light/dark/RTL; live locale switch re-applies RTL without restart",
          "Server is source of truth for sessions/security/flags",
          "Security settings: active sessions list + revoke-by-id + revoke-all (immediate effect)",
          "Account deletion follows B3 (anonymize/retain finance+audit), confirmed + step-up, irreversible",
          "S-06 lock is a real re-auth interruption (not dismissible); S-07 = PSP challenge surface",
          "G-03 maintenance blocks (from A17); G-05 what's-new shows once per version",
          "G-04 deep-link landing respects auth state; G-15 returning-user is DISTINCT from first-run onboarding",
          "Error/system screens offer a recoverable next step",
        ],
        drift: "re-running onboarding for returning users · one-tap account deletion",
      },
      {
        code: "R1", title: "Testing, Observability & Handoff",
        items: [
          "Tests run against sandbox adapters (never live providers)",
          "All 10 critical journeys covered e2e; high-risk invariants tested (money, region, provision≠install, idempotency, consent)",
          "Web admin tested: RBAC denials, audit-on-mutation, secret masking, analytics reconciles",
          "Flutter tested: key widgets (light/dark/RTL), auth/purchase/VPN integration",
          "CI runs all layers on every change; reproducible seed/fixtures",
          "Logging redacts secrets/PII/tokens/cards/credentials; correlation IDs across API→queue→webhook",
          "Metrics + alerting: provisioning/payment/timeout rates, reconciliation mismatches, dead-letter, model cost, latency/errors",
          "Deploy: containerized, env config, documented migrate/seed/rollback, backups, secrets store",
          "Runbook covers replay-provisioning, reconciliation mismatch, credential rotation, maintenance toggle, region change",
          "Handoff doc lists all open decisions with owners, split into launch-blocking vs post-soft-launch",
          "Production-readiness checklist produced with pass/fail status",
        ],
        drift: "tests against live providers · open decisions left unassigned",
      },
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
  if (spec.kind === "m5") return buildBackendM5Page(page, spec);
  if (spec.kind === "m6") return buildBackendM6Page(page, spec);
  if (spec.kind === "r1") return buildBackendR1Page(page, spec);
  if (spec.kind === "checklist") return buildChecklistPage(page, spec);
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

async function buildBackendM5Page(page, spec) {
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
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.purple);
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

  y = sectionHeader(page, "00", "Non-negotiables · entry-point AI · never invents prices · ledger-backed loyalty · no casino patterns", 0, y);
  rules2col(spec.rules, 110);

  y = sectionHeader(page, "01", "AI Advisor · 44–47 · welcome · active chat · explainable recommendation · history", 0, y);
  kv2col(spec.aiScreens, 110);

  y = sectionHeader(page, "02", "Billing · 48–53 + B-01 + B-02 · catalogs · subscription · payment methods · history · cancellation", 0, y);
  kv2col(spec.billingScreens, 110);

  y = sectionHeader(page, "03", "Loyalty · 54–57 · dashboard · how to earn · redeem · referral", 0, y);
  kv2col(spec.loyaltyScreens, 110);

  y = sectionHeader(page, "04", "Gates · G-14 trial expiry modal · G-12 shared with M3 · recommendation linkage · reactive refresh", 0, y);
  kv2col(spec.gates, 110);

  y = sectionHeader(page, "05", "Integration · B7 advisor · B5 billing · B6 loyalty · M3 quote reuse · server-side discount", 0, y);
  kv2col(spec.integration, 110);

  y = sectionHeader(page, "06", "Test surface · AI flows · billing flows · loyalty flows · gates · linkage · reactivity", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  y = sectionHeader(page, "07", "Edge cases · streaming · proration · loyalty economics · referral fraud · multi-currency", 0, y);
  fullRows(spec.edgeCases, 64, "orange", false);

  y = sectionHeader(page, "08", "Handoff to M6 / W1 · what reuses + what M5 flags pending", 0, y);
  fullRows(spec.handoff, 64, "teal", false);

  y = sectionHeader(page, "09", "Pending · contract / economics / business decisions · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  y = sectionHeader(page, "Exit", "Phase M5 exit checklist · AI + Billing + Loyalty", 0, y);
  fullRows(spec.exit, 56, "purple", true);
}

async function buildBackendM6Page(page, spec) {
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
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.purple);
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

  y = sectionHeader(page, "00", "Non-negotiables · server source-of-truth · S-06 real re-auth · S-07 shared 3DS · errors actionable · G-04 preserves intent", 0, y);
  rules2col(spec.rules, 110);

  y = sectionHeader(page, "01", "Account · 58–66 · profile · edit · settings · notifications · security · support · FAQ · about · delete", 0, y);
  kv2col(spec.accountScreens, 110);

  y = sectionHeader(page, "02", "Session · S-06 lock (real re-auth) · S-07 3DS (shared PSP surface)", 0, y);
  kv2col(spec.sessionScreens, 110);

  y = sectionHeader(page, "03", "System states · G-01 · G-02 · G-03 · G-04 · G-05 · G-15 · all hosted at shell", 0, y);
  kv2col(spec.systemStateScreens, 110);

  y = sectionHeader(page, "04", "Integration · B3 account · notifications · app-config · content · deep-link · shell hosting · 3DS reuse", 0, y);
  kv2col(spec.integration, 110);

  y = sectionHeader(page, "05", "Test surface · account · session lock · 3DS · system states · localization · reactivity", 0, y);
  fullRows(spec.tests, 56, "purple", true);

  y = sectionHeader(page, "06", "Edge cases · OTP race · biometric reset · S-06 vs in-flight payment · 3DS bounce-back · maintenance mid-session", 0, y);
  fullRows(spec.edgeCases, 64, "orange", false);

  y = sectionHeader(page, "07", "Handoff to R1 · what testing inherits · platform / counsel items · feature coverage complete", 0, y);
  fullRows(spec.handoff, 64, "teal", false);

  y = sectionHeader(page, "08", "Pending · counsel / market / cadence · NOT code blockers", 0, y);
  fullRows(spec.pending, 64, "warning", false);

  y = sectionHeader(page, "Exit", "Phase M6 exit checklist · Account & System · closes Flutter feature pack", 0, y);
  fullRows(spec.exit, 56, "purple", true);
}

async function buildBackendR1Page(page, spec) {
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
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.warning);
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

  y = sectionHeader(page, "00", "Non-negotiables · sandbox-only tests · invariants tested · redacted logs · honest handoff", 0, y);
  rules2col(spec.rules, 110);

  y = sectionHeader(page, "01", "10 Critical Journeys · onboarding → purchase → VPN → AI → subscription → loyalty → recovery", 0, y);
  kv2col(spec.journeys, 110);

  y = sectionHeader(page, "02", "Backend test layers · unit · integration · e2e (sandbox) · property", 0, y);
  kv2col(spec.backendTests, 110);

  y = sectionHeader(page, "03", "Web admin tests · RBAC · audit · masking · reconciliation", 0, y);
  kv2col(spec.webAdminTests, 110);

  y = sectionHeader(page, "04", "Flutter tests · widget (light/dark/RTL) · auth · purchase · VPN", 0, y);
  kv2col(spec.flutterTests, 110);

  y = sectionHeader(page, "05", "Observability · logging + redaction · metrics · error tracking · health · alerting · tracing", 0, y);
  kv2col(spec.observability, 110);

  y = sectionHeader(page, "06", "Deploy + Ops · containers · migrations · backups · secrets · retention", 0, y);
  kv2col(spec.deployOps, 110);

  y = sectionHeader(page, "07", "Runbook · replay · reconcile · rotate · maintenance · region · auth-abuse · payment-spike · deletion", 0, y);
  fullRows(spec.runbook, 64, "teal", false);

  y = sectionHeader(page, "08", "Handoff · OPEN DECISIONS · each carries an owner · NEVER paper over", 0, y);
  kv2col(spec.handoffOpenDecisions, 110);

  y = sectionHeader(page, "09", "Production-readiness checklist · current pass/fail status", 0, y);
  fullRows(spec.productionChecklist, 56, "purple", true);

  y = sectionHeader(page, "10", "Launch-blocking decisions · go/no-go view for founders", 0, y);
  fullRows(spec.launchBlocking, 64, "warning", false);

  y = sectionHeader(page, "11", "Post-soft-launch decisions · resolvable after go-live · parked with owners", 0, y);
  fullRows(spec.postSoftLaunch, 64, "purple", false);

  y = sectionHeader(page, "Exit", "Phase R1 exit checklist · production readiness · handoff complete", 0, y);
  fullRows(spec.exit, 56, "teal", true);
}

async function buildChecklistPage(page, spec) {
  clearGeneratedChildren(page);

  const PAGE_W = 1472;
  let y = backendHeader(page, spec, PAGE_W);

  function tickedRow(parent, x, yy, w, h, text, accentHex) {
    const card = createFrame(parent, "row", x, yy, w, h, "#FFFFFF", "#E8E0DB");
    card.cornerRadius = 10;
    createRect(card, 0, 0, 4, h, accentHex || ACCENT.teal);
    const box = createFrame(card, "tick-box", 24, (h - 20) / 2, 20, 20, ACCENT.teal, ACCENT.teal);
    box.cornerRadius = 4;
    safeText(box, "✓", 4, 0, 14, "#FFFFFF", PRIMARY_FONT_BOLD, 16);
    safeText(card, text, 60, (h - 16) / 2 - 1, 12, "#1C0804", PRIMARY_FONT, w - 80);
    return card;
  }

  function driftRow(parent, x, yy, w, h, text) {
    const card = createFrame(parent, "drift", x, yy, w, h, "#FFF6EE", "#E8C9A8");
    card.cornerRadius = 10;
    createRect(card, 0, 0, 4, h, ACCENT.warning);
    safeText(card, "DRIFT FLAGS", 24, 12, 10, ACCENT.warning, PRIMARY_FONT_BOLD, w - 48);
    safeText(card, text, 24, 30, 12, "#1C0804", PRIMARY_FONT, w - 48);
    return card;
  }

  // Global non-negotiables band
  y = sectionHeader(page, "GLOBAL", "Apply to every phase · all ticked = full pack verified", 0, y);
  for (let i = 0; i < spec.global.length; i++) {
    tickedRow(page, 0, y, PAGE_W, 44, spec.global[i], ACCENT.purple);
    y += 52;
  }
  y += 24;

  // Per-phase sections
  for (let p = 0; p < spec.phases.length; p++) {
    const ph = spec.phases[p];
    y = sectionHeader(page, ph.code, ph.title + " · all checks passed", 0, y);
    for (let i = 0; i < ph.items.length; i++) {
      tickedRow(page, 0, y, PAGE_W, 44, ph.items[i], ACCENT.teal);
      y += 52;
    }
    y += 8;
    driftRow(page, 0, y, PAGE_W, 56, ph.drift);
    y += 56 + 32;
  }
}

async function buildAccessibilityPage(page) {
  clearGeneratedChildren(page);
  const PAGE_W = 1472, COL_GAP = 32;
  const spec = {
    kicker: "ACCESSIBILITY · WCAG 2.2 AA · 44pt TARGETS · REDUCED-MOTION · SR LABELS · DYNAMIC TYPE · RTL · KEYBOARD",
    title: "Accessibility",
    subtitle: "Roamlu treats accessibility as a first-class invariant — not a polish pass. Every component in M1 ships with light + dark + RTL · reduced-motion alternative · haptic hook · screen-reader label · keyboard path. Admin (W1) is a daily-use internal tool — usability over decoration.",
  };
  let y = backendHeader(page, spec, PAGE_W);

  const tokens = [
    { t: "warning", k: "Color contrast tokens",  v: "Light bg #FFF8F4 + dark bg #181210 · text primary/secondary/disabled · semantic success/warning/error · ALL pairs verified ≥ 4.5:1 (body) · ≥ 3:1 (large/UI) · NEVER raw hex in widgets" },
    { t: "warning", k: "Touch targets",          v: "Minimum 44pt × 44pt on iOS · 48dp × 48dp on Android · primary CTAs 56pt · spacing scale 4/8/12/16/20/24/32/40 enforces · admin clickable rows 40pt min" },
    { t: "purple",  k: "Focus rings",            v: "2pt outline + 2pt offset · ring color uses brand orange in light · brand orange-tint in dark · tab order matches visual reading order · trapped in modals/sheets" },
    { t: "purple",  k: "Screen-reader labels",   v: "Every Touchable has accessibilityLabel · semantic role · live-region for toast/banner · grouping for cards · numeric values read with unit (currency · minutes · GB)" },
    { t: "purple",  k: "Reduced-motion",         v: "Respects platform setting · cross-fade alternatives for · VPN connecting ring · AI typing indicator · sheet snap · confetti/success · haptics still fire when motion suppressed" },
    { t: "teal",    k: "Dynamic type",           v: "Supports OS text-size up to AX-3 / 200% · layout reflows (no clipping) · numeric LTR preserved in Arabic when scaled · admin tables collapse columns gracefully" },
    { t: "warning", k: "RTL handling",           v: "Full mirroring via Directionality · Arabic uses Cairo (DM Sans does not support Arabic) · numbers/prices LTR inside Arabic layouts · banners mirror slide-in direction · bottom-nav reverses" },
    { t: "teal",    k: "Captions + transcripts", v: "Voicemail audio (M4 VoIP) gets transcript · onboarding video (if any) gets captions · AI streaming responses readable via SR · NEVER audio-only critical info" },
  ];
  const componentRules = [
    { t: "purple",  k: "Buttons",            v: "Primary/secondary/ghost · disabled state has 4.5:1 still · loading state announces 'busy' · destructive uses warning color + role" },
    { t: "purple",  k: "Inputs",             v: "Label associated · error message announced via live-region · OTP input announces digit position · phone picker keyboard-accessible · password visibility toggle has SR label" },
    { t: "purple",  k: "Cards",              v: "Heading hierarchy preserved · grouped for SR · pricing announced as '12 dirhams 50 fils' (currency unit + minor) · NEVER concatenated raw numbers" },
    { t: "teal",    k: "Bottom sheet",       v: "Focus trapped · ESC/back closes · backdrop labeled 'dismiss' · drag handle has accessibility action · respects reduced-motion (no spring)" },
    { t: "teal",    k: "Banners",            v: "live-region polite (info) or assertive (error) · dismiss has SR label · inline G-13 call-quality auto-announces · NEVER decorative-only" },
    { t: "warning", k: "Biometric prompt",   v: "OS-native prompt (no custom) · fallback to password announced · failure state recoverable · NEVER repeated nag" },
  ];
  const surfaceCoverage = [
    "Onboarding (M2) · GDPR consent SR-readable · OTP input announces position · biometric prompt OS-native · keyboard fully traversable",
    "Home + eSIM (M3) · plan cards heading hierarchy · prices announced with currency unit · install guide screen-reader-friendly · provision-vs-install distinct",
    "Connect (M4) · VPN connect button announces state change · server list filterable via SR · call quality G-13 auto-announces · incoming call CallKit native (accessible)",
    "AI + Billing + Loyalty (M5) · AI chat bubble pairs role + author · streaming respects SR pacing · invoice rows screen-readable · referral share via platform sheet (accessible)",
    "Account + System (M6) · session list per-row revoke labeled · deletion warning announced · S-06 lock OS-native step-up · G-03 maintenance announces ETA",
    "Admin Web (W1) · keyboard-navigable tables · focus management in modals · sufficient contrast · NEVER decorative-only icons · all actions have SR labels",
  ];
  const testing = [
    "Manual SR pass on iOS VoiceOver + Android TalkBack for the 10 critical journeys (R1) · localized in en + ar",
    "Keyboard-only pass on web admin · all destructive/financial actions reachable + confirmable · focus traps in modals verified",
    "Reduced-motion device setting toggle traversal · cross-fade alternatives confirmed · haptics still fire",
    "Dynamic-type AX-3 traversal · layout reflows without clipping · numeric still LTR in Arabic",
    "Color-contrast automated audit (axe-core / Figma a11y plugin) on every screen · CI gate on web admin",
    "Localization fallback · missing ar string falls back to en (NEVER raw key) · mixed-script handling for names",
  ];

  function rules2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  y = sectionHeader(page, "01", "Foundational tokens · contrast · targets · focus · SR · motion · type · RTL · captions", 0, y);
  rules2col(tokens, 130);

  y = sectionHeader(page, "02", "Component-level rules · buttons · inputs · cards · sheets · banners · biometric", 0, y);
  rules2col(componentRules, 110);

  y = sectionHeader(page, "03", "Surface coverage · M2–M6 + W1 · how a11y attaches per phase", 0, y);
  fullRows(surfaceCoverage, 64, "teal");

  y = sectionHeader(page, "04", "Verification · manual SR · keyboard-only · reduced-motion · dynamic-type · contrast audit · localization", 0, y);
  fullRows(testing, 56, "purple");
}

async function buildHandoffNotesPage(page) {
  clearGeneratedChildren(page);
  const PAGE_W = 1472, COL_GAP = 32;
  const spec = {
    kicker: "HANDOFF · IMPLEMENTATION PRIORITIES · COMPONENT INVENTORY · UNRESOLVED · RISKS · QA CHECKLIST",
    title: "Roamlu Handoff Notes",
    subtitle: "Single source-of-truth for the engineering pickup. Architecture · non-negotiables · component inventory · open decisions with owners · risks · QA + production readiness checklist. R1 phase consolidates testing/observability/deploy alongside this document.",
  };
  let y = backendHeader(page, spec, PAGE_W);

  const nonNegotiables = [
    { t: "warning", k: "Backgrounds",            v: "Light app bg = #FFF8F4 · dark app bg = #181210 · NEVER pure white / pure black · all surfaces token-driven (theme.css) · widgets reference tokens not raw hex" },
    { t: "warning", k: "Theme coverage",         v: "Every mobile screen ships in light/LTR · dark/LTR · Arabic/RTL · numbers + prices LTR inside Arabic · Cairo for Arabic (DM Sans does not support it) · DM Serif Display italic for display headlines" },
    { t: "warning", k: "Bottom nav",             v: "EXACTLY Home · eSIM · Connect · Account · AI is an entry-point feature NOT a tab · nav reverses in RTL · Connect is one tab merging VoIP + VPN" },
    { t: "warning", k: "Money",                  v: "Integer minor units + ISO 4217 currency from API · NEVER float · NEVER recompute client-side · admin renders masked money exactly as API returns" },
    { t: "warning", k: "Compliance gates",       v: "G-06 GDPR/PDPL · G-07 VPN disclaimer · G-08 inline refund ack · G-12 payment timeout · G-14 trial expiry · all REQUIRED before App Store submission · counsel-reviewed copy" },
    { t: "purple",  k: "Brand role colors",      v: "Orange = CTAs · teal = VPN/security · purple = AI · warning amber = destructive/timeout · NEVER mix roles (e.g. orange VPN button breaks the pattern)" },
    { t: "purple",  k: "Reduced-motion",         v: "VPN connecting ring · AI typing indicator · sheet snap · confetti/success · ALL have cross-fade alternatives · haptics still fire when motion is suppressed" },
    { t: "teal",    k: "Generated clients",      v: "Dart + TS clients GENERATED from B2/B8 OpenAPI · NEVER hand-written · regenerate on contract change · widgets switch on typed result/error" },
  ];
  const componentInventory = [
    { t: "purple",  k: "Buttons",            v: "Primary (orange) · secondary (outline) · ghost · destructive (warning) · loading state · disabled state · all token-driven · light/dark/RTL · haptic light on tap" },
    { t: "purple",  k: "Inputs",             v: "Text · password (visibility toggle) · phone (Gulf-first picker) · OTP (6-digit · auto-advance · paste-aware) · validation · error live-region · NEVER raw HTML inputs in admin" },
    { t: "purple",  k: "Cards",              v: "Surface card · plan card · receipt card · ledger row · session row · server row · referral status · all 12 radius · 1pt #E8E0DB border · subtle shadow" },
    { t: "teal",    k: "Sheets + modals",    v: "Bottom sheet (drag handle · backdrop · ESC/back) · confirmation modal (destructive variant) · biometric prompt (OS-native) · 3DS webview · all focus-trapped" },
    { t: "teal",    k: "Banners",            v: "G-02 no-internet · G-10 captive · G-11 VPN reconnecting · G-13 call quality · all overlay live screens · mirror in RTL · NEVER built as full pages" },
    { t: "warning", k: "Specialized",        v: "VPN connecting ring (reduced-motion alt) · AI chat bubble · progress ring · shimmer/loading · empty/error illustration · biometric prompt · payment success haptic" },
  ];
  const openDecisions = [
    { t: "warning", k: "Entity / domicile",                v: "Drives Stripe eligibility + every VAT obligation · RESOLVE FIRST · launch-blocking · owner: founders + legal" },
    { t: "warning", k: "Place-of-supply ruling",           v: "Written ruling for eSIM/VoIP/VPN per market · ESPECIALLY before enabling KSA at 15% · launch-blocking for KSA · owner: tax counsel" },
    { t: "warning", k: "Live PSP selection + e-invoicing", v: "Confirmed fees + recurring + onboarding · build ZATCA Phase 2 + UAE OR use Merchant of Record · launch-blocking · owner: finance + eng" },
    { t: "warning", k: "Apple App Store · VPN channel",    v: "IAP vs external for VPN · eSIM/VoIP confirmed external · launch-blocking for iOS · owner: mobile lead + Apple liaison" },
    { t: "warning", k: "Apple entitlements",               v: "eSIM CoreTelephony/CommCenter (likely unavailable → Universal-Link/manual install) · iOS Network Extension (VPN) · CallKit + PushKit (VoIP) · START EARLY · owner: mobile lead" },
    { t: "warning", k: "Gulf VPN/VoIP legality",           v: "Per market · region-flag default = restricted-off until cleared · UAE/TDRA + KSA + Bahrain + Oman · launch-blocking per-market · owner: legal" },
    { t: "purple",  k: "Refund policy wording",            v: "UAE/KSA consumer law alignment · G-08 inline copy · counsel-reviewed · per-language · owner: legal + product" },
    { t: "purple",  k: "Loyalty economics",                v: "Earn rates · redeem ratios · expiry · per-market caps · NOT launch-blocking (post-soft-launch tunable in A12) · owner: business + finance" },
    { t: "purple",  k: "Admin RBAC matrix",                v: "Final role/permission matrix + approval thresholds for refund/adjustment/disable · pre-prod · owner: ops lead" },
    { t: "purple",  k: "Data retention windows",           v: "Per data class (auth · finance · audit · PII · ledger) · UAE PDPL + KSA + tax law · owner: legal · drives retention jobs" },
  ];
  const risks = [
    "Apple eSIM entitlement likely unavailable to consumer apps · fallback Universal-Link/manual-install path documented + designed · NEVER promise in-app iOS provisioning",
    "iOS Network Extension entitlement approval timeline 2–4 weeks · gates VPN submission · start the request before final QA",
    "iOS PushKit unrestricted VoIP entitlement · without it incoming-call push degrades to standard notification · UX still works but degraded",
    "PSP onboarding timeline (Stripe / Tap / Checkout / etc.) · KYB documents · expect 1–4 weeks per region · gates live commerce",
    "Gulf VPN legality varies by market · region-flag default = restricted-off until per-market clearance · launch country list may shrink",
    "Loyalty economics not finalized · launch with conservative ratios · A12 admin lets ops tune post-launch · NEVER lock in expiry policy without counsel review",
    "Provider DLQ growth · webhook signature changes · provider API breaking changes · runbook covers replay + rotate · alerting on dead-letter growth",
    "Reconciliation mismatches between internal ledger and PSP · finance reviews A19 daily during soft-launch · resolve-with-audit only · NEVER silent edits",
  ];
  const qaChecklist = [
    "All 10 R1 critical journeys green in CI against sandbox adapters · deterministic seed · reproducible",
    "Light + dark + RTL render every mobile screen · banners mirror correctly · numbers LTR in Arabic · Cairo loaded",
    "Reduced-motion alternatives confirmed · VPN connecting ring · AI typing · sheet snap · haptics still fire",
    "Money displayed from API minor units + currency · NEVER recomputed · masked fields exactly as API returns",
    "Region gating strict · disabled markets refused cleanly · NEVER start-then-fail · regional_flags honored at every entry",
    "Provision ≠ install verified for eSIM · install reported separately · NEVER claim install on purchase success",
    "G-07 VPN disclaimer persisted before config issued · refusal blocks VPN entirely · per-market language",
    "Idempotency-Key on every payment + provisioning POST · webhook source-of-truth · NEVER assume failed on timeout alone",
    "Loyalty balance = sum(ledger) · NEVER client-cached · redemption applied at quote server-side",
    "Admin RBAC enforced server-side · UI gating convenience only · audit-on-mutation · secret masking · NEVER 403-bound controls shown",
    "Logging redacts secrets/PII/tokens/cards/provider creds · log-scrubbing tests green · correlation IDs across API → queue → webhook",
    "Containerized deploy · env config · secrets vaulted · backups + restore drilled · runbook published · alerting routed",
    "Open decisions classified launch-blocking vs post-soft-launch · go/no-go view shared with founders",
    "Apple entitlement approvals in flight · eSIM channel (Universal-Link/manual-install) decision recorded",
  ];
  const fileGuide = [
    "Foundations 1–14 · design system · components · accessibility · onboarding · auth · home · eSIM · VoIP · VPN · AI · billing · loyalty · account · system",
    "Admin 15 · A00–A19 admin web screens · sidebar nav grouped Operations/Product/Commerce/Finance/System",
    "Backend 16–23 · Build Pack roadmap · B0 setup · B1 data model · B2 API contract · B3 auth · B4 providers · B5 billing · FL finance/legal",
    "Backend cont. · B6 loyalty · B7 AI advisor · B8 admin backend · W1 web admin · M1–M6 Flutter feature packs · R1 testing/observability/handoff",
    "Review · per-phase ticked checklists + drift flags · global non-negotiables · all boxes ticked = full pack verified",
    "Delivery · Prototype (10 client-review journeys + cross-cutting + universal states) · Handoff Notes (this page)",
  ];

  function rules2col(items, cardH) {
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
  function fullRows(items, cardH, accentKey) {
    for (let i = 0; i < items.length; i++) {
      const card = backendCard(page, 0, y, PAGE_W, cardH, ACCENT[accentKey] || ACCENT.teal);
      safeText(card, items[i], 24, 22, 13, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
      y += cardH + 8;
    }
    y += 32;
  }

  y = sectionHeader(page, "01", "Non-negotiables · backgrounds · themes · nav · money · compliance · brand colors · motion · clients", 0, y);
  rules2col(nonNegotiables, 130);

  y = sectionHeader(page, "02", "Component inventory · what M1 ships and what every feature pack reuses", 0, y);
  rules2col(componentInventory, 110);

  y = sectionHeader(page, "03", "Open decisions · each carries an owner · launch-blocking vs post-soft-launch", 0, y);
  rules2col(openDecisions, 110);

  y = sectionHeader(page, "04", "Risks · platform · entitlements · PSP · legality · economics · ops", 0, y);
  fullRows(risks, 64, "warning");

  y = sectionHeader(page, "05", "QA checklist · pre-launch verification across journeys · themes · invariants · admin · ops", 0, y);
  fullRows(qaChecklist, 56, "purple");

  y = sectionHeader(page, "06", "File guide · how this Figma file is organized for engineering pickup", 0, y);
  fullRows(fileGuide, 64, "teal");

  const footerCard = backendCard(page, 0, y, PAGE_W, 80, ACCENT.purple);
  safeText(footerCard, "GENERATED BY", 24, 16, 10, ACCENT.purple, PRIMARY_FONT_BOLD, PAGE_W - 48);
  safeText(footerCard, GENERATION_NOTE, 24, 36, 12, "#1C0804", PRIMARY_FONT, PAGE_W - 48);
}

async function assertSafeToRun() {
  await figma.loadAllPagesAsync();
  const isKnownRun = figma.root.getPluginData("generator") === ROOT_MARKER;
  if (isKnownRun) return true;
  const pages = figma.root.children;
  // Treat any file already containing one of our PAGE_ORDER names as ours.
  const ours = new Set(PAGE_ORDER);
  if (pages.some((p) => ours.has(p.name))) {
    figma.root.setPluginData("generator", ROOT_MARKER);
    return true;
  }
  const nonEmpty = pages.filter((p) => p.children.length > 0);
  const safe = pages.length <= 1 &&
    (nonEmpty.length === 0 || (nonEmpty.length === 1 && pages[0].name === "Page 1"));
  if (!safe) { figma.closePlugin("Use this plugin on a new or disposable empty Figma Design file."); return false; }
  // Mark immediately so re-runs always pass.
  figma.root.setPluginData("generator", ROOT_MARKER);
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
  const cmd = figma.command || "all";

  // Map per-page commands to a single page name, then run only that builder.
  const PAGE_CMD = {
    "page:ds": "■ Design System",
    "page:cmp": "■ Components",
    "page:a11y": "■ Accessibility & Testing",
    "page:01": "■ 01 — Onboarding",
    "page:02": "■ 02 — Auth",
    "page:03": "■ 03 — Home",
    "page:04": "■ 04 — eSIM",
    "page:05": "■ 05 — VoIP",
    "page:06": "■ 06 — VPN",
    "page:07": "■ 07 — AI",
    "page:08": "■ 08 — Billing",
    "page:09": "■ 09 — Loyalty",
    "page:10": "■ 10 — Account",
    "page:11": "■ 11 — System",
    "page:12": "■ 12 — Admin Web",
    "page:bp": "■ Review Checklists",
    "page:b0": "■ B0 — Backend Setup",
    "page:b1": "■ B1 — Data Model",
    "page:b2": "■ B2 — API Contract",
    "page:b3": "■ B3 — Auth & Security",
    "page:b4": "■ B4 — Provider Adapters",
    "page:b5": "■ B5 — Billing & 3DS",
    "page:b6": "■ B6 — Loyalty & Referrals",
    "page:b7": "■ B7 — AI Advisor",
    "page:b8": "■ B8 — Admin Backend",
    "page:fl": "■ FL — Finance & Legal",
    "page:w1": "■ W1 — Web Admin Frontend",
    "page:m1": "■ M1 — Flutter Foundation",
    "page:m2": "■ M2 — Onboarding & Auth",
    "page:m3": "■ M3 — Home & eSIM",
    "page:m4": "■ M4 — Connect (VoIP & VPN)",
    "page:m5": "■ M5 — AI, Billing & Loyalty",
    "page:m6": "■ M6 — Account, Notifications & System",
    "page:r1": "■ R1 — Testing, Observability & Handoff",
    "page:pr": "■ Prototype",
    "page:ho": "■ Handoff Notes"
  };

  async function buildOne(pageName) {
    const p = byName[pageName];
    if (!p) { figma.notify(`Page not found: ${pageName}`); return; }
    if (pageName === "■ Design System") return buildDesignSystemPage(p);
    if (pageName === "■ Components") return buildComponentsPage(p);
    if (pageName === "■ Accessibility & Testing") return buildAccessibilityPage(p);
    if (pageName === "■ 12 — Admin Web") return buildAdminPage(p);
    if (pageName === "■ Prototype") return buildPrototypePage(p);
    if (pageName === "■ Handoff Notes") return buildHandoffNotesPage(p);
    const ms = MOBILE_SECTIONS.find(s => s.page === pageName);
    if (ms) return buildMobilePage(p, ms.screens);
    const bk = BACKEND_PAGES.find(b => b.name === pageName);
    if (bk) return buildBackendPage(p, bk);
  }

  if (cmd === "all") {
    await buildDesignSystemPage(byName["■ Design System"]);
    await buildComponentsPage(byName["■ Components"]);
    for (const s of MOBILE_SECTIONS) await buildMobilePage(byName[s.page], s.screens);
    await buildAdminPage(byName["■ 12 — Admin Web"]);
    for (const b of BACKEND_PAGES) if (byName[b.name]) await buildBackendPage(byName[b.name], b);
    await buildPrototypePage(byName["■ Prototype"]);
    await buildHandoffNotesPage(byName["■ Handoff Notes"]);
  } else if (PAGE_CMD[cmd]) {
    await buildOne(PAGE_CMD[cmd]);
  } else if (cmd.indexOf("admin:") === 0) {
    const adminId = cmd.slice(6);
    const adminPage = byName["■ 12 — Admin Web"];
    if (adminPage) {
      await buildAdminPage(adminPage);
      await figma.setCurrentPageAsync(adminPage);
      const target = adminPage.children.find((c) => c.name && c.name.indexOf(adminId + "/") === 0 && c.name.indexOf("/desktop/open") !== -1);
      if (target) {
        figma.currentPage.selection = [target];
        figma.viewport.scrollAndZoomIntoView([target]);
      }
    }
  } else {
    figma.notify(`Unknown command: ${cmd}`);
  }

  figma.root.setPluginData("generator", ROOT_MARKER);
  const warn = WARNINGS.length ? ` Warnings: ${[...new Set(WARNINGS)].join(" | ")}` : "";
  figma.notify(`Roamlu v2 — ${cmd} build complete.${warn}`, { timeout: 8000 });
  figma.closePlugin();
}

main().catch((err) => {
  figma.closePlugin(`Roamlu setup failed: ${err && err.message ? err.message : String(err)}`);
});
