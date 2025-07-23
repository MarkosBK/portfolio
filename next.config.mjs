import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Включаем оптимизированные пакеты для сборки
    optimizePackageImports: ['@heroui/react', 'lucide-react', 'framer-motion'],
  },

  // Turbopack конфигурация (заменяет experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Настройки изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Компрессия
  compress: true,

  // PWA настройки (если понадобятся в будущем)
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },

  // Webpack конфигурация для оптимизации
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Настройки для production сборки
      config.resolve.alias = {
        ...config.resolve.alias,
        '@heroui/react': '@heroui/react',
      }
    }
    return config
  },
}

export default withNextIntl(nextConfig)
