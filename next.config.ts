import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
   output: 'export', // enables static export
   basePath:isProd?'/pomodoro-timer':'',
   assetPrefix: isProd ? '/pomodoro-timer/' : '',
    images: {
    unoptimized: true, // disable Image Optimization (GitHub Pages can’t handle it)
  },
  reactStrictMode: true,
  outputFileTracingRoot:__dirname,
};

export default nextConfig;
