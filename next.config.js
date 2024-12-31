const { p } = require('framer-motion/client');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true, 
    swcMinify: true, 
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 
  
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  