/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.logiclike.com',
        port: '',
        pathname: '/s3/logic-training/side-courses/files/**',
      },
    ],
  },
};

export default nextConfig;
