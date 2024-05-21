import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Manifest Docs',
  tagline: 'Effortless backends',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manifest.build',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'manifest', // Usually your GitHub org/user name.
  projectName: 'manifest', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          path: 'content',

          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) => {
            const baseUrl = 'https://github.com/casejs/docs/blob/master/';
            // Enlève 'content/' du chemin pour correspondre à la structure du repo GitHub
            const newDocPath = docPath.replace(/^content\//, '');
            return baseUrl + newDocPath;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Manifest Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          href: 'https://github.com/casejs/case',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Developer Docs',
              to: '/'
            },
            {
              html: '<span>Contributor Docs <span class="badge badge--primary">Coming soon</span></span>',

            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FepAked3W7'
            },
            {
              label: 'Discussion',
              href: 'https://github.com/casejs/CASE/discussions'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/casejs/CASE/'
            },
            {
              label: 'manifest.build',
              href: 'https://manifest.build'
            }
          ]
        }
      ],      
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,

      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config

