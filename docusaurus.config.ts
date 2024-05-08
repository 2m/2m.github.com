import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '2m.lt',
  tagline: 'Labas, pasauli!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://2m.lt',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        pages: {
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/2m/2m.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '2m',
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/2m/2m.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Code',
              href: 'https://github.com/2m',
            },
            {
              label: 'Discuss',
              href: 'https://mastodon.social/@dvim',
            },
            {
              label: 'Look',
              href: 'https://www.instagram.com/dvi.em/',
            },
            {
              label: 'Watch',
              href: 'https://www.youtube.com/c/MartynasMickevi%C4%8Dius'
            }
          ],
        },
        {
          items: [
            {
              label: 'Explore',
              href: 'https://www.wikiloc.com/wikiloc/user.do?id=3569115'
            },
            {
              label: 'Flick',
              href: 'https://trakt.tv/users/2m/lists/recommendations'
            },
            {
              label: 'Work',
              href: 'https://www.linkedin.com/in/martynas-mickevi%C4%8Dius-11381510/'
            },
            {
              label: 'Relate',
              href: 'https://www.geni.com/family-tree/share/6000000008299477512'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 2m. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
