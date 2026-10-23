/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Serve local portfolio assets directly; avoid the failing Netlify image optimizer.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
