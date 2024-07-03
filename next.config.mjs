/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["http://localhost:5000"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vidapub.com",
        port: "",
        pathname: "/wp-content/uploads/****/**/**",
      },
    ],
    
  },
};

export default nextConfig;
