import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/components/atomics/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        // "@storybook/addon-links",
        "@storybook/addon-essentials",
        // "@storybook/addon-onboarding",
        // "@storybook/addon-interactions",
    ],
    webpackFinal: async (config: any) => {
      // Add path aliases
      config.resolve.alias["@"] = path.resolve(__dirname, "../src");

      return config;
    },
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
