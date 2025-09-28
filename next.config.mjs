import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

export default nextConfig;
