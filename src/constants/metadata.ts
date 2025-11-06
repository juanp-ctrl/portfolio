export const layoutMetadata = {
  metadataBase: new URL('https://www.juanpablojimenez.dev'),
  title: {
    default: 'Juan Pablo Jiménez - Software Engineer & Creative Developer',
    template: '%s | Juan Pablo Jiménez',
  },
  description:
    'Software Engineer and Creative Developer, specializing in React, Next.js, and TypeScript. Building modern web applications with focus on performance and user experience.',
  keywords: [
    'software engineer',
    'frontend developer',
    'react developer',
    'nextjs developer',
    'typescript developer',
    'web developer',
    'UI developer',
    'creative developer',
    'medellín developer',
    'colombia developer',
    'javascript developer',
    'software engineer',
    'web accessibility',
    'microfrontend architecture',
  ],
  authors: [
    { name: 'Juan Pablo Jiménez', url: 'https://www.juanpablojimenez.dev' },
  ],
  creator: 'Juan Pablo Jiménez',
  publisher: 'Juan Pablo Jiménez',
  icons: {
    icon: '/favicon.gif',
    shortcut: '/favicon.gif',
    apple: '/favicon.gif',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://www.juanpablojimenez.dev',
    siteName: 'Juan Pablo Jiménez Portfolio',
    title: 'Juan Pablo Jiménez - Software Engineer & Creative Developer',
    description:
      'Software Engineer and Creative Developer from Medellín, Colombia, specializing in React, Next.js, and TypeScript. Building modern web applications with focus on performance and user experience.',
    images: [
      {
        url: '/images/OG_brand.png',
        width: 1200,
        height: 630,
        alt: 'Juan Pablo Jiménez Portfolio - Astronaut floating in space with portfolio text',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@JuanPabloJim_',
    title: 'Juan Pablo Jiménez - Software Engineer & Creative Developer',
    description:
      'Software Engineer and Creative Developer from Medellín, Colombia, specializing in React, Next.js, and TypeScript.',
    images: ['/images/OG_brand.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.juanpablojimenez.dev',
  },
  other: {
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}
