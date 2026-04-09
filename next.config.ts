import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['nova-ui'],
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias['@nova-ui'] = path.resolve(__dirname, './nova-ui/src');
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom');
    return config;
  },
};

export default nextConfig;
