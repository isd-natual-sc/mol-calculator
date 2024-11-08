/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/mol-calculator",
  output: "export",
  experimental: {
    serverActions: ["https://isd-natual-sc.io"],
  },
};

export default nextConfig;
