/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/mol-calculator",
  output: "export",
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
