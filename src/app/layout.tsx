import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tetris Tumble - Revolutionary 3D Printed Tetris Puzzle Game',
  description: 'Experience Tetris Tumble, a revolutionary 3D printed puzzle game that brings the classic Tetris gameplay into the physical world. Perfect for puzzle enthusiasts and Tetris fans.',
  openGraph: {
    title: 'Tetris Tumble - Revolutionary 3D Printed Tetris Puzzle Game',
    description: 'Experience the fusion of classic Tetris with innovative 3D printing technology. A new way to enjoy the timeless puzzle game.',
    type: 'website',
    url: 'https://tetristumble.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
          <p>&copy; 2024 Tetris Tumble. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}