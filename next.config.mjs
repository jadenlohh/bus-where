/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, no-cache",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
