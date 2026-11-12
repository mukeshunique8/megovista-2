import { Analytics } from '@vercel/analytics/next'
import { Space_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: ['400'],
  style: ['italic', 'normal'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
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
  themeColor: '#0C0B14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased selection:bg-[#FF5A36] selection:text-[#0C0B14]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
