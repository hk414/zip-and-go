/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export mode
    output: 'export',
    // Optimization settings
    reactStrictMode: true, // Enforces React best practices
    swcMinify: true, // Use SWC for faster builds and smaller bundle sizes
  
    // Image settings for static export (if using <Image>)
    images: {
      unoptimized: true, // Required for static export
    },
  };
  
  module.exports = nextConfig;
  