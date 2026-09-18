import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/metma-de",
        assetPrefix: "/metma-de",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920],
          imageSizes: [96, 128, 256, 384],
          remotePatterns: [
            {
              protocol: "https",
              hostname: "metma-de.com",
              pathname: "/wp-content/uploads/**",
            },
          ],
        },
      }),
};

export default nextConfig;
