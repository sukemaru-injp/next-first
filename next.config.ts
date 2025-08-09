import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
		MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.microcms-assets.io' }
		]
	},
	experimental: {
		reactCompiler: true
	}
};

export default withVanillaExtract(nextConfig);
