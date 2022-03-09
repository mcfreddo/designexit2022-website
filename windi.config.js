// @ts-check - enable TS check for js file
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: {
    prefix: "w:",
  },
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1200px",
      xl: "1500px",
    },
    fontSize: {
      "2xs": "var(--step--2)",
      xs: "var(--step--1)",
      s: "var(--step-1)",
      l: "var(--step-2)",
      "2xl": "var(--step-3)",
    },
    spacing: {
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      l: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
    },
  },
});
