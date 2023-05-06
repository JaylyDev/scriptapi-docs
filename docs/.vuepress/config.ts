import { defaultTheme } from "@vuepress/theme-default";

export default {
  title: "Script API References",
  description: "Script API Documentation.",
  base: "/scriptapi-docs/",
  theme: defaultTheme({
    logo: "/images/icon.png",
    logoDark: "/images/icon.png",
    repo: "https://github.com/jaylydev/scriptapi-docs",
    docsDir: "docs",
    lastUpdatedText: "Last Updated",

    navbar: [
      {
        text: "Discord",
        link: "https://discord.gg/8xzSHD84xv",
      },
    ],
  }),
};
