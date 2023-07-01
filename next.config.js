const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
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
  images: {
    domains: ['images.microcms-assets.io'],
  },
  swcMinify: true
}

module.exports = withVanillaExtract(nextConfig)
