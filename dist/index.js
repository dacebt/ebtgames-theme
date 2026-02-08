// src/index.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

// src/tokens/colors.ts
import { defineTokens } from "@chakra-ui/react";
var colors = defineTokens.colors({
  // Surface Colors (deep purple monochrome)
  surface: {
    0: { value: "#1B0F26" },
    // Base background - darkest
    1: { value: "#24122F" },
    // Elevated surfaces
    2: { value: "#2B173A" },
    // Cards/panels
    3: { value: "#342046" }
    // Raised/hover states
  },
  // Text Colors (WCAG AA verified)
  text: {
    primary: { value: "#F5F1FA" },
    // 16.49:1 contrast
    secondary: { value: "#D8D0E3" },
    // 12.29:1 contrast
    muted: { value: "#B9AEC9" },
    // 8.72:1 contrast
    disabled: { value: "#9E92B4" }
    // 6.32:1 contrast
  },
  // Primary (Purple - interactive)
  primary: {
    DEFAULT: { value: "#7C5BD6" },
    hover: { value: "#6F4FCB" }
  },
  // Utility (Teal - complementary)
  utility: {
    DEFAULT: { value: "#2AB9B0" },
    hover: { value: "#52D6CC" }
  },
  // Emphasis (Rose - sparingly)
  emphasis: {
    DEFAULT: { value: "#D86B9A" }
  },
  // Border Colors (neutral gray)
  border: {
    subtle: { value: "#3A3341" },
    strong: { value: "#4A4354" }
  },
  // Status Colors
  status: {
    success: { value: "#2AB9B0" },
    // Use teal
    warning: { value: "#D9A24F" },
    // Amber
    error: { value: "#D8524D" }
    // Red
  },
  // Overlays (purple-based transparency)
  overlay: {
    subtle: { value: "rgba(124, 91, 214, 0.05)" },
    // Purple hover tint
    light: { value: "rgba(124, 91, 214, 0.1)" },
    // Purple selected
    medium: { value: "rgba(124, 91, 214, 0.15)" },
    // Purple active
    heavy: { value: "rgba(124, 91, 214, 0.25)" },
    // Purple emphasis
    error: { value: "rgba(216, 82, 77, 0.12)" },
    // Error tint
    backdrop: {
      light: { value: "rgba(27, 15, 38, 0.8)" },
      heavy: { value: "rgba(27, 15, 38, 0.95)" }
    }
  }
});

// src/tokens/typography.ts
import { defineTokens as defineTokens2 } from "@chakra-ui/react";
var fonts = defineTokens2.fonts({
  display: { value: "'Courier New', 'Courier', monospace" },
  heading: { value: "'Courier New', 'Courier', monospace" },
  body: { value: "'Courier New', 'Courier', monospace" }
});
var fontSizes = defineTokens2.fontSizes({
  xs: { value: "0.75rem" },
  // 12px - helper text
  sm: { value: "0.875rem" },
  // 14px - secondary labels
  base: { value: "1rem" },
  // 16px - body text
  md: { value: "1.125rem" },
  // 18px - emphasized body
  lg: { value: "1.25rem" },
  // 20px - section headings
  xl: { value: "1.5rem" },
  // 24px - modal titles
  "2xl": { value: "2rem" },
  // 32px - page titles
  "3xl": { value: "3rem" },
  // 48px - hero text
  "4xl": { value: "4rem" },
  // 64px - display text
  // Responsive sizes
  cell: { value: "clamp(1rem, 3vw, 1.5rem)" },
  hero: { value: "clamp(2.5rem, 8vw, 4rem)" },
  subtitle: { value: "clamp(1rem, 3vw, 1.25rem)" }
});
var fontWeights = defineTokens2.fontWeights({
  normal: { value: 400 },
  medium: { value: 600 },
  bold: { value: 700 }
});
var letterSpacings = defineTokens2.letterSpacings({
  tight: { value: "0.05em" },
  normal: { value: "0.1em" },
  wide: { value: "0.2em" }
});

// src/tokens/spacing.ts
import { defineTokens as defineTokens3 } from "@chakra-ui/react";
var spacing = defineTokens3.spacing({
  "2xs": { value: "0.125rem" },
  // 2px - micro gaps
  xs: { value: "0.25rem" },
  // 4px
  sm: { value: "0.5rem" },
  // 8px
  md: { value: "1rem" },
  // 16px
  lg: { value: "1.5rem" },
  // 24px
  xl: { value: "2rem" },
  // 32px
  "2xl": { value: "3rem" }
  // 48px
});

// src/tokens/borders.ts
import { defineTokens as defineTokens4 } from "@chakra-ui/react";
var borderWidths = defineTokens4.borderWidths({
  thin: { value: "1px" },
  base: { value: "2px" },
  thick: { value: "3px" }
});
var radii = defineTokens4.radii({
  sm: { value: "2px" },
  md: { value: "4px" },
  lg: { value: "6px" }
});

// src/tokens/shadows.ts
import { defineTokens as defineTokens5 } from "@chakra-ui/react";
var shadows = defineTokens5.shadows({
  // Depth shadows (layered)
  xs: { value: "0 1px 2px rgba(0, 0, 0, 0.4)" },
  sm: { value: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)" },
  md: { value: "0 4px 16px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)" },
  lg: { value: "0 8px 24px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)" },
  xl: { value: "0 16px 48px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6)" },
  // Glow shadows (primary - purple)
  glow: {
    primary: { value: "0 0 10px rgba(124, 91, 214, 0.4)" },
    "primary-lg": { value: "0 0 20px rgba(124, 91, 214, 0.5), 0 0 40px rgba(124, 91, 214, 0.3)" },
    "primary-xl": { value: "0 0 30px rgba(124, 91, 214, 0.6), 0 0 60px rgba(124, 91, 214, 0.4)" },
    // Utility (teal)
    utility: { value: "0 0 10px rgba(42, 185, 176, 0.3)" },
    "utility-lg": { value: "0 0 20px rgba(42, 185, 176, 0.4), 0 0 40px rgba(42, 185, 176, 0.2)" },
    // Emphasis (rose)
    emphasis: { value: "0 0 10px rgba(216, 107, 154, 0.3)" },
    "emphasis-lg": { value: "0 0 20px rgba(216, 107, 154, 0.4), 0 0 40px rgba(216, 107, 154, 0.2)" },
    // Error (red)
    error: { value: "0 0 10px rgba(216, 82, 77, 0.4)" }
  },
  // Inset shadows
  inset: {
    primary: { value: "inset 0 0 10px rgba(124, 91, 214, 0.3)" },
    subtle: { value: "inset 0 1px 3px rgba(0, 0, 0, 0.3)" },
    deep: { value: "inset 0 2px 8px rgba(0, 0, 0, 0.5)" }
  }
});

// src/tokens/zIndex.ts
import { defineTokens as defineTokens6 } from "@chakra-ui/react";
var zIndex = defineTokens6.zIndex({
  base: { value: 1 },
  dropdown: { value: 100 },
  overlay: { value: 500 },
  modal: { value: 1e3 },
  toast: { value: 1500 },
  fullscreen: { value: 2e3 }
});

// src/semanticTokens/colors.ts
import { defineSemanticTokens } from "@chakra-ui/react";
var semanticColors = defineSemanticTokens.colors({
  // Background mappings
  bg: {
    base: { value: "{colors.surface.0}" },
    elevated: { value: "{colors.surface.1}" },
    card: { value: "{colors.surface.2}" },
    raised: { value: "{colors.surface.3}" }
  },
  // Interactive states
  interactive: {
    base: { value: "{colors.primary.DEFAULT}" },
    hover: { value: "{colors.primary.hover}" }
  },
  // Border (for buttons, inputs, cards)
  border: {
    subtle: { value: "{colors.border.subtle}" },
    strong: { value: "{colors.border.strong}" }
  }
});

// src/semanticTokens/shadows.ts
import { defineSemanticTokens as defineSemanticTokens2 } from "@chakra-ui/react";
var semanticShadows = defineSemanticTokens2.shadows({
  // Button shadows
  button: {
    base: { value: "{shadows.sm}, {shadows.inset.subtle}" },
    hover: { value: "{shadows.md}, {shadows.glow.primary-lg}" }
  },
  // Cell shadows (most complex - 4-layer stack for selected state)
  cell: {
    selected: {
      value: "{shadows.inset.primary}, 0 0 0 {borderWidths.base} rgba(124, 91, 214, 0.55), {shadows.glow.primary}, 0 4px 12px rgba(124, 91, 214, 0.2)"
    },
    conflict: {
      value: "{shadows.glow.error}, 0 2px 6px rgba(216, 82, 77, 0.3)"
    }
  }
});

// src/semanticTokens/index.ts
var semanticTokens = {
  colors: semanticColors,
  shadows: semanticShadows
};

// src/keyframes/animations.ts
import { defineKeyframes } from "@chakra-ui/react";
var keyframes = defineKeyframes({
  fadeIn: {
    from: { opacity: "0" },
    to: { opacity: "1" }
  },
  fadeOut: {
    from: { opacity: "1" },
    to: { opacity: "0" }
  },
  pulse: {
    "0%, 100%": {
      transform: "scale(1)",
      opacity: "1"
    },
    "50%": {
      transform: "scale(1.03)",
      opacity: "0.95"
    }
  },
  glow: {
    "0%, 100%": {
      boxShadow: "0 0 10px rgba(124, 91, 214, 0.4)"
    },
    "50%": {
      boxShadow: "0 0 20px rgba(124, 91, 214, 0.5), 0 0 40px rgba(124, 91, 214, 0.3)"
    }
  },
  glowHighlight: {
    "0%, 100%": {
      boxShadow: "0 0 10px rgba(216, 107, 154, 0.3)"
    },
    "50%": {
      boxShadow: "0 0 20px rgba(216, 107, 154, 0.4), 0 0 40px rgba(216, 107, 154, 0.2)"
    }
  },
  blink: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.3" }
  },
  bounce: {
    "0%, 80%, 100%": {
      transform: "scale(0)",
      opacity: "0.5"
    },
    "40%": {
      transform: "scale(1)",
      opacity: "1"
    }
  },
  scaleIn: {
    from: {
      transform: "scale(0.8)",
      opacity: "0"
    },
    to: {
      transform: "scale(1)",
      opacity: "1"
    }
  }
});

// src/globalStyles.ts
import { defineGlobalStyles } from "@chakra-ui/react";
var globalCss = defineGlobalStyles({
  // Universal reset
  "*, *::before, *::after": {
    boxSizing: "border-box"
  },
  // Body pseudo-elements for background effects
  "body::before": {
    content: '""',
    position: "fixed",
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(124, 91, 214, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(42, 185, 176, 0.02) 0%, transparent 50%)
    `,
    pointerEvents: "none",
    zIndex: 0
  },
  "body::after": {
    content: '""',
    position: "fixed",
    inset: 0,
    backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E')`,
    opacity: 0.03,
    pointerEvents: "none",
    zIndex: 0
  },
  // Custom scrollbar (webkit)
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px"
  },
  "::-webkit-scrollbar-track": {
    background: "{colors.surface.1}"
  },
  "::-webkit-scrollbar-thumb": {
    background: "{colors.utility.DEFAULT}",
    borderRadius: "{radii.sm}"
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "{colors.utility.hover}"
  },
  // Firefox scrollbar
  "*": {
    scrollbarWidth: "thin",
    scrollbarColor: "{colors.utility.DEFAULT} {colors.surface.1}"
  },
  // Selection styling
  "::selection": {
    background: "{colors.primary.DEFAULT}",
    color: "{colors.text.primary}"
  },
  // Focus visible outline
  ":focus-visible": {
    outline: "2px solid {colors.primary.DEFAULT}",
    outlineOffset: "2px"
  }
});

// src/breakpoints.ts
var breakpoints = {
  mobile: "767px",
  tablet: "768px",
  desktop: "1024px"
};

// src/recipes/button.ts
import { defineRecipe } from "@chakra-ui/react";
var buttonRecipe = defineRecipe({
  className: "button",
  base: {
    fontFamily: "body",
    fontSize: "base",
    px: "lg",
    py: "sm",
    borderWidth: "base",
    borderStyle: "solid",
    borderColor: "border.strong",
    background: "linear-gradient(145deg, var(--chakra-colors-surface-1), var(--chakra-colors-surface-0))",
    color: "text.primary",
    cursor: "pointer",
    pointerEvents: "auto",
    userSelect: "none",
    transition: "all 200ms ease",
    textTransform: "uppercase",
    letterSpacing: "tight",
    fontWeight: "medium",
    borderRadius: "md",
    boxShadow: "var(--chakra-shadows-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed"
    },
    _focusVisible: {
      outline: "var(--chakra-border-widths-base) solid var(--chakra-colors-primary)",
      outlineOffset: "var(--chakra-border-widths-base)"
    }
  },
  variants: {
    variant: {
      primary: {
        borderColor: "primary",
        color: "primary",
        _hover: {
          background: "linear-gradient(145deg, var(--chakra-colors-primary-hover), var(--chakra-colors-primary))",
          color: "surface.0",
          boxShadow: "var(--chakra-shadows-md), var(--chakra-shadows-glow-primary-lg)",
          transform: "translateY(-2px)"
        },
        _active: {
          transform: "translateY(0)",
          boxShadow: "var(--chakra-shadows-xs), var(--chakra-shadows-glow-primary)"
        }
      },
      secondary: {
        borderColor: "utility",
        color: "utility",
        _hover: {
          background: "linear-gradient(145deg, var(--chakra-colors-utility), var(--chakra-colors-utility-hover))",
          color: "surface.0",
          boxShadow: "var(--chakra-shadows-md), var(--chakra-shadows-glow-utility-lg)",
          transform: "translateY(-2px)"
        },
        _active: {
          transform: "translateY(0)",
          boxShadow: "var(--chakra-shadows-xs), var(--chakra-shadows-glow-utility)"
        }
      },
      danger: {
        borderColor: "status.error",
        color: "status.error",
        _hover: {
          background: "linear-gradient(145deg, var(--chakra-colors-status-error), var(--chakra-colors-status-error))",
          color: "surface.0",
          boxShadow: "var(--chakra-shadows-md), var(--chakra-shadows-glow-error)",
          transform: "translateY(-2px)"
        },
        _active: {
          transform: "translateY(0)",
          boxShadow: "var(--chakra-shadows-xs), var(--chakra-shadows-glow-error)"
        }
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

// src/recipes/cell.ts
import { defineRecipe as defineRecipe2 } from "@chakra-ui/react";
var cellRecipe = defineRecipe2({
  className: "ninefold-cell",
  base: {
    aspectRatio: "1",
    background: "linear-gradient(145deg, {colors.surface.1}, {colors.surface.0})",
    borderWidth: "thin",
    borderColor: "border.subtle",
    borderStyle: "solid",
    color: "text.primary",
    fontFamily: "body",
    fontSize: "cell",
    cursor: "pointer",
    transition: "all var(--transition-fast) var(--ease-default)",
    p: 0,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "{shadows.inset.subtle}, 0 1px 2px rgba(0, 0, 0, 0.2)",
    _focusVisible: {
      outline: "{borderWidths.base} solid {colors.primary.DEFAULT}",
      outlineOffset: "-2px",
      zIndex: "base"
    }
  },
  variants: {
    state: {
      normal: {
        _hover: {
          background: "linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})",
          borderColor: "primary.hover",
          boxShadow: "{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3), {shadows.glow.primary}",
          transform: "translateY(-1px)"
        }
      },
      given: {
        fontWeight: "bold",
        background: "linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})",
        borderColor: "border.strong",
        cursor: "default",
        boxShadow: "{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3)",
        _hover: {
          background: "linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})",
          borderColor: "border.strong",
          boxShadow: "{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3)",
          transform: "none"
        }
      },
      selected: {
        background: "linear-gradient(145deg, rgba(124, 91, 214, 0.2), rgba(124, 91, 214, 0.1))",
        borderColor: "primary.DEFAULT",
        boxShadow: "cell.selected",
        transform: "translateY(-2px)"
      },
      conflict: {
        background: "linear-gradient(145deg, rgba(216, 82, 77, 0.2), rgba(216, 82, 77, 0.1))",
        borderColor: "status.error",
        color: "status.error",
        boxShadow: "cell.conflict"
      },
      selectedConflict: {
        background: "linear-gradient(145deg, rgba(216, 82, 77, 0.2), rgba(216, 82, 77, 0.1))",
        borderColor: "status.error",
        color: "status.error",
        boxShadow: "cell.conflict",
        transform: "translateY(-2px)"
      }
    }
  },
  defaultVariants: {
    state: "normal"
  }
});

// src/recipes/timer.ts
import { defineRecipe as defineRecipe3 } from "@chakra-ui/react";
var timerRecipe = defineRecipe3({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "sm",
    fontFamily: "body",
    fontSize: "lg",
    color: "primary",
    paddingY: "sm",
    paddingX: "md",
    borderWidth: "base",
    borderStyle: "solid",
    borderColor: "border.strong",
    background: "surface.1",
    borderRadius: "md",
    boxShadow: "var(--chakra-shadows-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    justifyContent: "center"
  }
});

// src/recipes/index.ts
var recipes = {
  button: buttonRecipe,
  cell: cellRecipe,
  timer: timerRecipe
};

// src/slotRecipes/modal.ts
import { defineSlotRecipe } from "@chakra-ui/react";
var modalSlotRecipe = defineSlotRecipe({
  className: "modal",
  slots: ["backdrop", "modal", "header", "title", "content"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      background: "{colors.overlay.backdrop.heavy}",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "modal",
      padding: "md"
    },
    modal: {
      background: "linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})",
      borderWidth: "base",
      borderStyle: "solid",
      borderColor: "primary.DEFAULT",
      maxWidth: "500px",
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "{shadows.xl}, {shadows.glow.primary-xl}, inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      borderRadius: "md"
    },
    header: {
      padding: "lg",
      borderBottomWidth: "thin",
      borderBottomStyle: "solid",
      borderBottomColor: "border.subtle",
      background: "linear-gradient(180deg, {colors.overlay.light}, transparent)"
    },
    title: {
      margin: 0,
      fontFamily: "display",
      fontSize: "xl",
      color: "text.primary",
      textTransform: "uppercase",
      letterSpacing: "tight",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
    },
    content: {
      padding: "lg"
    }
  }
});

// src/slotRecipes/switch.ts
import { defineSlotRecipe as defineSlotRecipe2 } from "@chakra-ui/react";
var switchSlotRecipe = defineSlotRecipe2({
  className: "switch",
  slots: ["root", "label", "control", "thumb", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "sm",
      position: "relative",
      "--switch-width": "sizes.10",
      "--switch-height": "sizes.5",
      "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
      "--switch-x": {
        base: "var(--switch-diff)",
        _rtl: "calc(var(--switch-diff) * -1)"
      }
    },
    label: {
      fontFamily: "body",
      fontSize: "xs",
      color: "text.primary",
      textTransform: "uppercase",
      letterSpacing: "wide",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
      userSelect: "none"
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      borderRadius: "full",
      borderWidth: "base",
      borderStyle: "solid",
      borderColor: "border.strong",
      background: "linear-gradient(140deg, {colors.surface.2}, {colors.surface.1} 50%, {colors.surface.0})",
      boxShadow: "{shadows.sm}, inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      transition: "all 200ms ease",
      _checked: {
        borderColor: "primary.DEFAULT",
        background: "linear-gradient(140deg, {colors.primary.hover}, {colors.primary.DEFAULT})",
        boxShadow: "{shadows.md}, {shadows.glow.primary}, inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      }
    },
    thumb: {
      width: "var(--switch-height)",
      height: "var(--switch-height)",
      borderRadius: "full",
      background: "surface.0",
      boxShadow: "{shadows.sm}",
      transitionProperty: "translate",
      transitionDuration: "fast",
      _checked: {
        translate: "var(--switch-x) 0",
        background: "surface.0"
      }
    }
  }
});

// src/slotRecipes/victoryScreen.ts
import { defineSlotRecipe as defineSlotRecipe3 } from "@chakra-ui/react";
var victoryScreenSlotRecipe = defineSlotRecipe3({
  slots: ["overlay", "content", "title", "stats", "badge", "actions"],
  base: {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "overlay.backdrop.heavy",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "overlay",
      padding: "md"
    },
    content: {
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "xl",
      padding: "xl",
      borderWidth: "thick",
      borderStyle: "solid",
      borderColor: "border.strong",
      background: "surface.2",
      boxShadow: "glow.primary-xl"
    },
    title: {
      fontFamily: "display",
      fontSize: "3xl",
      color: "text.primary",
      letterSpacing: "wide",
      textShadow: "glow.emphasis-lg",
      animation: "pulse 2s ease-in-out infinite"
    },
    stats: {
      display: "flex",
      flexDirection: "column",
      gap: "md"
    },
    badge: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "sm",
      padding: "md",
      borderWidth: "base",
      borderStyle: "solid",
      borderColor: "emphasis",
      background: "overlay.subtle",
      animation: "glowHighlight 2s ease-in-out infinite"
    },
    actions: {
      display: "flex",
      flexDirection: "column",
      gap: "md"
    }
  }
});

// src/slotRecipes/index.ts
var slotRecipes = {
  modal: modalSlotRecipe,
  switch: switchSlotRecipe,
  victoryScreen: victoryScreenSlotRecipe
};

// src/index.ts
var system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      letterSpacings,
      spacing,
      borderWidths,
      radii,
      shadows,
      zIndex
    },
    semanticTokens,
    keyframes,
    breakpoints,
    recipes,
    slotRecipes
  },
  globalCss
});
export {
  system
};
//# sourceMappingURL=index.js.map