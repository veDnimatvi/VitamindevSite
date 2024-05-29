/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["www.monterail.com"],
    // domains: ["localhost"],
  },
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
};

module.exports = nextConfig;
