import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

export default nextConfig;
