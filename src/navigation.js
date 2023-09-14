import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: 'About',
      href: '#',
    },
    {
      text: 'Submit',
      href: '#',
    },
    {
      text: 'Journal',
      href: '#',
    },
    {
      text: 'Podcast',
      href: '#',
    },
    {
      text: 'Community',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Mission', href: '#' },
        { text: 'Our Team', href: '#' },
      ],
    },
    {
      title: 'Journal',
      links: [
        { text: 'Submit', href: '#' },
        { text: 'Journal', href: '#' },
      ],
    },
    {
      title: 'Other',
      links: [
        { text: 'Podcast', href: '#' },
        { text: 'Discord', href: '#' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@dialexicon' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/dialexiconorg/' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/dialexiconorg' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: 'https://open.spotify.com/show/6ab9iObuaUb0VDo4R9lLH4' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/elizabethzhu1/dialexicon' },
  ],
  footNote: `
    &copy; Dialexicon 2023. Powered by Astro.
  `,
};
