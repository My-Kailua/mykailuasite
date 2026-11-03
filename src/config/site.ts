// Site wide settings. Edit these values to change the name, menu and links everywhere at once.

export const site = {
  name: 'My Kailua',
  tagline: 'Aloha from the windward side of Oahu',
  description:
    'News, stories, local makers and businesses from Kailua, Lanikai and the windward side of Oahu.',

  // Main menu. `href` is the page address.
  nav: [
    { label: 'News', href: '/news/' },
    { label: 'Stories', href: '/stories/' },
    { label: 'Windward Weekly', href: '/windward-weekly/' },
    { label: 'Shop', href: '/shop/' },
    { label: 'Biz Partners', href: '/biz-partners/' },
    { label: 'Community', href: '/community/' },
  ],

  // Place names shown under the homepage poster.
  places: ['Lanikai', 'Mokulua', 'Kailua Bay', 'Waimanalo', 'Kaneohe'],

  social: {
    instagram: 'https://www.instagram.com/mykailua/',
    facebook: 'https://www.facebook.com/mykailua/',
    youtube: 'https://www.youtube.com/@mykailua',
  },

  // The Windward Weekly on beehiiv. Every Subscribe button opens this in a new tab.
  beehiivSubscribeUrl: 'https://theoahuwindwardweekly.beehiiv.com/subscribe',
  beehiivArchiveUrl: 'https://theoahuwindwardweekly.beehiiv.com/archive',

  // Paste the Shopify store URL here when it is ready.
  shopUrl: '',
};
