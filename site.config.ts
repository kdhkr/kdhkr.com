import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1a1a5809315e4392b8d0f41250d0961a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Dohoon Kim',
  domain: 'kdhkr.com',
  author: 'Dohoon Kim',

  // open graph metadata (optional)
  description: '모두를 위한 작은 변화를 만듭니다. / Making Small Changes for Everyone.',

  // social usernames (optional)
  twitter: 'kdh_io',
  github: 'kdhkr',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: 'https://blog.kdhkr.com', // optional newsletter URL
  youtube: 'kdhkr', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '1a1a5809315e4392b8d0f41250d0961a'
    },
    {
      title: 'Notice',
      pageId: 'b602430c53fb469bbe046c3cfd238775'
    },
    {
      title: 'About',
      pageId: '50744fe6fac04c66b08084c4de05e30c'
    },
    {
      title: 'Projects',
      pageId: '3c44d6f063514032a0de9dd8281897ab'
    },
    {
      title: 'Activities',
      pageId: '8ef7e5ea33e340fba7de5b2e32d14049'
    }
  ]
})

/*
    {
      title: 'Blog',
      pageId: '6b5a9caa3e3847b8bd29cdd7d663b77b'
    }
*/
