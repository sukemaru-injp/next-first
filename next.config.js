/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/profile',
        permanent: true,
      },
    ]
  },
}
