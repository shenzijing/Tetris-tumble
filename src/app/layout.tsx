import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tetris Tumble - A Modern Take on the Classic Puzzle Game',
  description: 'Experience Tetris Tumble, a fresh spin on the beloved puzzle game. Challenge yourself with classic block-stacking gameplay enhanced with modern features and smooth animations.',
  keywords: 'tetris, puzzle game, block game, browser game, javascript game',
  authors: [{ name: 'Your Name' }],
  icons: {
    icon: [
      { url: '/tetris-tumble.ico', sizes: 'any' },
      { url: '/tetris-tumble.png', type: 'image/png' },
      { url: '/tetris-tumble.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Tetris Tumble',
    description: 'A Modern Take on the Classic Puzzle Game',
    images: ['/tetris-tumble.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tetris Tumble',
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
            <div className="logo">Tetris Tumble</div>
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