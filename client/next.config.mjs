/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false; // Disable Webpack cache
    return config;
  },
};

module.exports = nextConfig;
