/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/mol-calculator",
  output: "export",
  experimental: {
    serverActions: {
      allowedOrigins: ["https://isd-natual-sc.github.io"],
    },
  },
};

export default nextConfig;
