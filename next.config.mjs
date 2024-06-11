/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vidapub.com",
        port: "",
        pathname: "/wp-content/uploads/2021/05/**",
      },
    ],
  },
};

export default nextConfig;
