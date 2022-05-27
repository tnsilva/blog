module.exports = {
  siteUrl: 'https://blogtn.vercel.app/',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://blogtn.vercel.app/server-sitemap.xml'],
  },
}
