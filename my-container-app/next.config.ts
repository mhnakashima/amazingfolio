import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, options){
    config.plugins = config.plugins || [];

    config.plugins.push(
      new NextFederationPlugin({
        name: 'container-app',
        remotes: {
          'remoteApp1': 'remoteApp1@http://localhost:3001/remoteEntry.js',
          'remoteApp2': 'remoteApp2@http://localhost:3002/remoteEntry.js',
          'remoteApp3': 'remoteApp3@http://localhost:3003/remoteEntry.js',
        },
        shared: {
          react: {
            singleton: true
          },
          "react-dom": {
            singleton: true
          },
        },
        extraOptions: {
          exposePages: false,
          skipSharingNextInternals: false
        }
      })
    );

    return config;
  }
};

export default nextConfig;
