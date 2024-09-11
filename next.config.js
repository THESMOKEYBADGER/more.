/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login/:shop',
        destination: '/login?shop=:shop',
      },
    ];
  }
}

module.exports = nextConfig;