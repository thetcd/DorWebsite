/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize performance
  swcMinify: true,
  // Enable compression
  compress: true,
  // Serve images directly without optimization
  images: {
    unoptimized: true,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig


