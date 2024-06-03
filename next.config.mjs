import { execSync } from "child_process";

const gitHash = execSync("git rev-parse HEAD").toString().trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GIT_HASH: gitHash,
  },
};

export default nextConfig;
