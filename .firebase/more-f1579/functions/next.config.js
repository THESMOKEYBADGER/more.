// next.config.js
var nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/login/:shop",
        destination: "/login?shop=:shop"
      }
    ];
  }
};
module.exports = nextConfig;
