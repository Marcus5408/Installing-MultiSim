import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Installing MultiSim for PLTW Digital Electronics",
  tagline: "Making it easy to install MultiSim",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://multisim.matchatea.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Camuise", // Usually your GitHub org/user name.
  projectName: "MultiSim-Guide", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Camuise/MultiSim-Guide/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/guide-social-card.jpg",
    navbar: {
      title: "MultiSim Install Guide",
      logo: {
        alt: "Matcha Software Logo",
        src: "img/ios-teacup.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/Camuise/MultiSim-Guide",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Need Help?",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/Camuise/MultiSim-Guide/discussions",
            },
            {
              label: "Instagram DMs",
              href: "https://instagram.com/49dividedby51",
            },
            {
              label: "Email Me",
              href: "mailto:issac@matchatea.dev",
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matcha Software. Built with Docusaurus. Not affiliated, sponsored, or endorsed by National Instruments.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "powershell"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
