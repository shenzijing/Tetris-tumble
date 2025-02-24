import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Giant Tetris Tumble - A Fun, XL Family Board Game Twist on the Classic Puzzle',
  description: 'Experience Giant Tetris Tumble, a fresh spin on the beloved puzzle game. Challenge yourself with classic block-stacking gameplay enhanced with modern features and smooth animations.',
  keywords: 'tetris, puzzle game, block game, browser game, javascript game',
  authors: [{ name: 'Alan' }],
  icons: {
    icon: '/tetris-tumble.ico',
    shortcut: '/tetris-tumble.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/tetris-tumble.png',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/tetris-tumble.svg',
      }
    ]
  },
  openGraph: {
    title: 'Giant Tetris Tumble',
    description: 'A Modern Take on the Classic Puzzle Game',
    images: ['/tetris-tumble.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giant Tetris Tumble',
    description: 'A Modern Take on the Classic Puzzle Game',
    images: ['/tetris-tumble.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="tetristumble.com"
          src="https://app.pageview.app/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <nav className="main-nav">
          <div className="nav-container">
            <Link href="/" className="logo">Giant Tetris Tumble</Link>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#stores">Stores</a></li>
              <li><a href="#print">3D Print</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer>
          <p>&copy; 2025 Tetris Tumble. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}