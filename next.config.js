/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    console.log('config', config)
    if (!isServer) {
      config.resolve.fallback = {
        fs: false
      }
    }
    return config;
  }
}
