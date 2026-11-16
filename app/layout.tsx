import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-display',
  display: 'swap',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Megovista HR Solutions — Compliance simplified. Growth assured.',
  description:
    'Megovista connects HR operations, statutory compliance (PF, ESI, GST, Labour Laws), and organisational certification (ISO, ISMS, CMMI) for ambitious businesses.',
  icons: {
    icon: '/megovista-emblem.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const defaultTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME || 'dark'

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="antialiased selection:bg-[#2563EB] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme={defaultTheme}
          enableSystem={defaultTheme === 'system'}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
