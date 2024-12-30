/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Needed for static export
    },
    trailingSlash: true, // Optional for consistent routing
  };
  
  module.exports = nextConfig;
  