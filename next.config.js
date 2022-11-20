/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN
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
  experimental:{ appDir: true },
  swcMinify: true
}
