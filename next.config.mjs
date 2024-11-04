/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "i.imgur.com", "64.media.tumblr.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
