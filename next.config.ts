import type { NextConfig } from "next";
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig: NextConfig = {
  /* config options here */
   optimization: {
    runtimeChunk: true
  },
  reactStrictMode: true,
    webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? 'ssr' : 'chunks'

    config.plugins.push(
      new NextFederationPlugin({
        name: 'cards',
        remotes: {
        },

        filename: `static/${location}/remoteEntry.js`,
        exposes: {
              "./button": "./src/components/button/index.tsx",
        },
        extraOptions: {
          exposePages: true,
        },
        shared: {},

      })
    );
    config.resolve.fallback = {
      fs: false, // Or require.resolve('browserify-fs') for a polyfill
    };

    return config;
  },
};

export default nextConfig;
