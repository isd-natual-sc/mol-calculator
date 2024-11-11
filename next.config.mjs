/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://isd-natual-sc.github.io",
        "http://localhost:3000",
      ],
    },
  },
};

export default nextConfig;
