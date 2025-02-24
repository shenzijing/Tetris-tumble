import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from './components/Navbar'

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
        <Navbar />
        {children}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:info@tetristumble.com">info@tetristumble.com</a></p>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/stores">Find in Stores</Link></li>
                <li><Link href="/print">3D Print</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tetris Tumble. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}