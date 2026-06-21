import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "var(--font-frank-ruhl)", "serif"],
        assistant: ["var(--font-assistant)", "sans-serif"],
        hebrew: ["var(--font-frank-ruhl)", "serif"],
      },
      colors: {
        /* ── Light palette ── */
        pearl: {
          DEFAULT: "#F8F7F4",
          warm:    "#F1EFEB",
          muted:   "#EAE7E1",
        },
        ink: {
          DEFAULT: "#0C0B09",
          mid:     "#3A3733",
          soft:    "#76716A",
          subtle:  "#9E9B96",
        },
        wire: {
          DEFAULT: "#E3DFD9",
          strong:  "#C9C5BF",
        },
        iron: {
          DEFAULT: "#9A9590",
          light:   "#B6B2AC",
          dark:    "#78746F",
        },

        /* ── Legacy aliases (existing utility classes still compile) ── */
        onyx: {
          DEFAULT: "#F8F7F4",   // was dark, now = pearl bg
          light:   "#F1EFEB",
          dark:    "#EAE7E1",
        },
        steel: {
          DEFAULT: "#9A9590",   // same — neutral accent
          light:   "#B6B2AC",
          dark:    "#78746F",
        },
        concrete: {
          DEFAULT: "#0C0B09",   // was light, now = ink text
          light:   "#F8F7F4",
        },
        offwhite: "#0C0B09",    // used in hero text — now means dark ink

        /* ── shadcn (kept for component lib) ── */
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card:        { DEFAULT: "hsl(var(--card))",       foreground: "hsl(var(--card-foreground))"       },
        popover:     { DEFAULT: "hsl(var(--popover))",    foreground: "hsl(var(--popover-foreground))"    },
        primary:     { DEFAULT: "hsl(var(--primary))",    foreground: "hsl(var(--primary-foreground))"    },
        secondary:   { DEFAULT: "hsl(var(--secondary))",  foreground: "hsl(var(--secondary-foreground))"  },
        muted:       { DEFAULT: "hsl(var(--muted))",      foreground: "hsl(var(--muted-foreground))"      },
        accent:      { DEFAULT: "hsl(var(--accent))",     foreground: "hsl(var(--accent-foreground))"     },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))"},
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra:  "0.35em",
      },
      transitionDuration: {
        "700": "700ms",
        "900": "900ms",
      },
      fontSize: {
        display:    ["clamp(3rem, 7vw, 6.5rem)",   { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "4/5": "4 / 5",
        "5/3": "5 / 3",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
