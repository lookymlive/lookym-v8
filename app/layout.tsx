import UserProvider from '@/app/context/user'
import AllOverlays from "@/app/components/AllOverlays"
import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'LookyM - Share Your Moments',
    template: '%s | LookyM'
  },
  description: 'Share and discover amazing moments with LookyM',
  keywords: ['social media', 'video sharing', 'moments', 'social network'],
  authors: [{ name: 'LookyM Team' }],
  creator: 'LookyM',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'LookyM - Share Your Moments',
    description: 'Share and discover amazing moments with LookyM',
    url: 'http://localhost:3000',
    siteName: 'LookyM',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <UserProvider>
          <AllOverlays />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
