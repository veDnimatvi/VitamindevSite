/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["www.monterail.com"],
    // domains: ["localhost"],
    loader: "custom",
  },
};

module.exports = nextConfig;
