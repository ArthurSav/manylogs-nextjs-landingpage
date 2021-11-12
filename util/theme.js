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
    size: {
      large: {
        pad: {
          vertical: "25px",
          horizontal: "24px",
        },
      },
      medium: {
        pad: {
          vertical: "15px",
          horizontal: "24px",
        },
      },
    },
    primary: {
      color: "dark-0",
      text: {
        size: "large",
      },
      background: "accent-1",
      border: {
        radius: "8px",
      },
      extend: `letter-spacing: 1px;`,
    },
    secondary: {
      color: "accent-1",
      border: {
        color: "accent-1",
        width: "1px",
        radius: "8px",
      },
      extend: `letter-spacing: 1px;`,
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

export const themeContexAccessForm = {
  formField: {
    border: {
      side: "all",
    },
    round: "4px",
    label: {
      size: "small",
      margin: { bottom: "8px", left: "2px" },
    },
    error: {
      margin: { top: "8px", left: "2px" },
      size: "small",
    },
  },
  button: {
    border: {
      radius: "4px",
    },
    padding: {
      vertical: "10px",
      horizontal: "24px",
    },
  },
  textInput: {
    extend: () => `
      font-weight: 400;
    `,
  },
};
