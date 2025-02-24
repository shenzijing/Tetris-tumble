import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    images: ['/about-tetris-tumble.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    images: ['/about-tetris-tumble.png'],
  }
}

export default function About() {
  return (
    <div className="policy-container">
      <h1>About Giant Tetris Tumble</h1>

      <section className="content-section">
        <h2>Our Story</h2>
        <p>Giant Tetris Tumble brings the iconic puzzle game into the physical world through innovative design and modern manufacturing. Our mission is to create engaging, family-friendly entertainment that combines classic gameplay with tangible interaction.</p>
      </section>

      <section className="content-section">
        <h2>Game Features</h2>
        <ul>
          <li>Giant-sized Tetris blocks for enhanced engagement</li>
          <li>High-quality, durable construction</li>
          <li>Perfect for ages 6 and up</li>
          <li>Supports 1-4 players</li>
          <li>Easy to learn, challenging to master</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Educational Benefits</h2>
        <ul>
          <li>Develops spatial awareness</li>
          <li>Enhances strategic thinking</li>
          <li>Improves problem-solving skills</li>
          <li>Promotes social interaction</li>
          <li>Builds hand-eye coordination</li>
        </ul>
      </section>
    </div>
  )
}