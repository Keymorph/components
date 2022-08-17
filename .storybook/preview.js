import resolveConfig from "tailwindcss/resolveConfig";
import ThemeProvider from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import tailwindConfig from "../tailwind.config.js";

const fullTailwindConfig = resolveConfig(tailwindConfig);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={fullTailwindConfig.theme}>
      <Story />
    </ThemeProvider>
  ),
];
