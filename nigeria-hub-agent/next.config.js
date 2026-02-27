/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // This tells the computer: "If you see a file from @solana/kit, just ignore it."
    config.externals.push('@solana/kit');
    return config;
  },
};

export default nextConfig;