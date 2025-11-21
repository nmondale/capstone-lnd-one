/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "i.imgur.com", "64.media.tumblr.com"],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    
    // Fix for window/document access during SSR
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
