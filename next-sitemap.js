/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // TODO: Change the siteUrl
  /** Without additional '/' on the end, e.g. https://rizqitsani.com */
  siteUrl: '',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
