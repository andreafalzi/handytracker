/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        missing: [
          {
            type: 'cookie',
            key: 'authorized',
          },
        ],
        permanent: false,
        destination: '/login',
      },
    ];
  },
};
