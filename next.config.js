/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
    domains: ['http://127.0.0.1:1337'], // Add your Strapi server's domain here
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
  