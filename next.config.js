/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login/:shop',
        destination: '/login',
      },
    ];
  },
  // Remove any custom webpack configurations related to CSS
};

module.exports = nextConfig;