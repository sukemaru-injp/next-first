/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY
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
  experimental: {
    scrollRestoration: true,
  },
  swcMinify: true
}
