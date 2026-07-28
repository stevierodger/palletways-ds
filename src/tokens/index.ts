export const colorRamps = {
  slate: {
    "000": "#f3f4f6",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  brandBlue: {
    50: "#f1f7ff",
    300: "#9ac5ff",
    500: "#225595",
    700: "#225595",
    800: "#003774",
    900: "#001e45",
  },
  brandGreen: {
    50: "#e8ffdd",
    300: "#8edb5f",
    400: "#75c144",
    500: "#59a420",
    700: "#306400",
    800: "#1f4400",
  },
} as const;

export type ColorRampFamily = keyof typeof colorRamps;
export type ColorRampStep<F extends ColorRampFamily> = keyof (typeof colorRamps)[F];

export const colors = {
  primary: "#0f172a",
  secondary: "#475569",
  brandPrimary: "#225595",
  brandGreen: "#8cc63f",
  brandGreen50: "#e8ffdd",
  brandGreenSubtle: "#f0f9e6",
  textBodySecondary: "#44536a",
  textInverse: "#ffffff",
  surfaceDefault: "#ffffff",
  surfaceSubtle: "#f3f4f6",
  surfaceMuted: "#f1f5f9",
  borderSubtle: "#e2e8f0",
  borderNatural: "#cbd5e1",
  borderBold: "#64748b",
  borderNeutral: "#e5e7eb",
  buttonPrimaryBg: "#225595",
  buttonSecondaryBg: "#f3f4f6",
  buttonSecondaryBorder: "#334155",
  tagAdventure: { bg: "#dcfce7", fg: "#166534" },
  tagNature: { bg: "#dbeafe", fg: "#1e3a5f" },
  tagHiking: { bg: "#fef3c7", fg: "#92400e" },
} as const;

export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
} as const;

/** Figma Semantics collection — spacing/section-* aliases to Primitives spacing/8, /16, /30 */
export const sectionSpacing = {
  sm: { value: "32px", rem: "2rem", primitive: "spacing/8", cssVar: "--spacing-section-sm" },
  md: { value: "64px", rem: "4rem", primitive: "spacing/16", cssVar: "--spacing-section-md" },
  lg: { value: "120px", rem: "7.5rem", primitive: "spacing/30", cssVar: "--spacing-section-lg" },
} as const;

export const radius = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  card: "12px",
  tag: "6px",
  pill: "999px",
  buttonSm: "4px",
} as const;

export const shadows = {
  elevation0: "none",
  elevation1: "0 1px 2px rgba(15, 23, 42, 0.05)",
  elevation2: "0 2px 4px rgba(15, 23, 42, 0.08)",
  elevation3: "0 4px 12px rgba(15, 23, 42, 0.1)",
  elevation4: "0 8px 24px rgba(15, 23, 42, 0.12)",
  elevation5: "0 16px 48px rgba(15, 23, 42, 0.16)",
} as const;

export const typography = {
  displayHeading1: { desktop: 69, tablet: 50, mobile: 33, weight: 700, line: 1.05 },
  h1: { desktop: 55, tablet: 40, mobile: 26, weight: 700 },
  h2: { desktop: 44, tablet: 33, mobile: 23, weight: 700 },
  h3: { desktop: 35, tablet: 28, mobile: 20, weight: 600 },
  h4: { desktop: 28, tablet: 23, mobile: 18, weight: 600 },
  h5: { desktop: 22, tablet: 20, mobile: 16, weight: 600 },
  h6: { desktop: 18, tablet: 17, mobile: 14, weight: 600 },
  bodyLarge: { desktop: 18, tablet: 17, mobile: 16, line: 28, weight: 400 },
  bodyBase: { desktop: 16, tablet: 16, mobile: 16, line: 24, weight: 400 },
  bodySmall: { desktop: 14, tablet: 14, mobile: 14, line: 21, weight: 400 },
  caption: { desktop: 12, tablet: 12, mobile: 12, line: 18, weight: 600 },
} as const;

/** PolySans Trial cuts mapped to CSS font-weight (Figma type scale 291:1008 + component usage) */
export const fontWeights = [
  {
    weight: 300,
    cut: "Slim",
    cssVar: "--font-weight-slim",
    sample: "Get a quote",
    roles: ["Tags", "Captions", "Input labels"],
    inFigma: true,
    note: undefined,
  },
  {
    weight: 400,
    cut: "Neutral",
    cssVar: "--font-weight-neutral",
    sample: "Get a quote for your pallet delivery across Europe.",
    roles: ["Body Large", "Body Base", "Body Small"],
    inFigma: true,
    note: undefined,
  },
  {
    weight: 500,
    cut: null,
    cssVar: "--font-weight-medium",
    sample: "Choose collection date",
    roles: [] as string[],
    inFigma: false,
    note:
      "No PolySans Trial cut. The browser resolves to Neutral (400) or synthesizes. Not used in Figma type styles.",
  },
  {
    weight: 700,
    cut: "Median",
    cssVar: "--font-weight-bold",
    sample: "Send with Europe's most trusted pallet specialists",
    roles: ["Display H1", "H1", "H2"],
    inFigma: true,
    note: "H3–H6, buttons, and tracker labels use 600 (same Median @font-face range).",
  },
] as const;

export const breakpoints = {
  tablet: 768,
  desktop: 1024,
} as const;
