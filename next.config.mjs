import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable optimized packages for build
    optimizePackageImports: ['@heroui/react', 'lucide-react', 'framer-motion'],
  },

  // Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Image settings
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // PWA settings (if needed in the future)
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },

  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Settings for production build
      config.resolve.alias = {
        ...config.resolve.alias,
        '@heroui/react': '@heroui/react',
      }
    }
    return config
  },
}

export default withNextIntl(nextConfig)
