/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"unsplash.it",
      },
      {
        protocol:"https",
        hostname:"picsum.photos",
      }
    ]
  }
}

module.exports = nextConfig
