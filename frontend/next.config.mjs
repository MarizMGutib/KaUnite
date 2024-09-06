/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the experimental section
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;