/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // si tu repo se llama "portfolio", activa basePath:
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
2