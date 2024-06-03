import { execSync } from "child_process";

if (process.env.NODE_ENV != "production") {
  process.env.GIT_HASH = execSync("git rev-parse HEAD").toString().trim();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GIT_HASH: process.env.GIT_HASH,
  },
  output: "standalone",
};

export default nextConfig;
