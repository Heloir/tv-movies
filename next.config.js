/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_TOKEN: process.env.API_TOKEN
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },

    ],
  },
};

module.exports = nextConfig;
