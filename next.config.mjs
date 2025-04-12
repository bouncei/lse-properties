/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
