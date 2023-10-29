/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '190.114.9.42',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'vertigolabs.site',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  httpAgentOptions: {
    keepAlive: false
  }
}

module.exports = nextConfig
