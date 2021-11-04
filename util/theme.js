import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { css } from "styled-components";

const textGradient2 = css`
  background-image: linear-gradient(270deg, #4f56ff, #31ddab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const theme = deepMerge(grommet, {
  name: "manylogs-landing-page",
  defaultMode: "dark",
  global: {
    colors: {
      background: {
        dark: "dark-0",
        light: "light-1",
      },
      brand: {
        dark: "#7700cc",
        light: "#6600cc",
      },
      "accent-1": "#31ddab",
      "accent-2": "#621e95",
      "dark-0": "#0f0f11",
    },
    font: {
      family: "Thicccboi Medium",
    },
  },
  button: {
    default: {},
    primary: {
      color: "white",
      text: {
        size: "large",
      },
      background: "accent-1",
      border: {
        radius: "8px",
      },
      padding: {
        vertical: "25px",
        horizontal: "24px",
      },
    },
  },
});

// heading

export const styleHeading1 = {
  heading: {
    font: {
      family: "Thicccboi Bold, sans-serif",
    },
  },
};

export const styleHeading2 = {
  heading: {
    font: {
      family: "Thicccboi Bold, sans-serif",
    },
    extend: textGradient2,
  },
};
