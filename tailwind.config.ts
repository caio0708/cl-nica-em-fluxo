import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        'paper-dark': 'var(--paper-dark)',
        red: 'var(--red)',
        'red-dim': 'var(--red-dim)',
        muted: 'var(--muted)',
        line: 'var(--line)',
      },
    },
  },
  plugins: [],
} satisfies Config;
