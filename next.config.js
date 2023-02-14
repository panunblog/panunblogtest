/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  future: {
    webpack5: true,
  },
  experimental: {
    // Enable Preview Mode for incremental builds
    externalDir: true,
  },
}

module.exports = nextConfig
