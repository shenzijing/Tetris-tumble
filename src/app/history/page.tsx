import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: pageMetadata.history.title,
  description: pageMetadata.history.description,
  keywords: pageMetadata.history.keywords,
  openGraph: {
    title: pageMetadata.history.title,
    description: pageMetadata.history.description,
    images: ['/tetris-history.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.history.title,
    description: pageMetadata.history.description,
    images: ['/tetris-history.png'],
  }
}

export default function History() {
  return (
    <div className="policy-container">
      <h1>The History of Tetris</h1>

      <section className="content-section">
        <h2>Origins</h2>
        <p>Created by Alexey Pajitnov in 1984, Tetris revolutionized puzzle gaming with its simple yet addictive gameplay. The name combines "tetra" (four) and "tennis," reflecting the game's four-block pieces.</p>
      </section>

      <section className="content-section">
        <h2>Global Impact</h2>
        <p>Since its creation, Tetris has sold hundreds of millions of copies across virtually every gaming platform, making it one of the most successful video games of all time. Its influence extends beyond gaming into popular culture and even scientific research.</p>
      </section>

      <section className="content-section">
        <h2>The Tetris Effect</h2>
        <p>The game's impact was so profound that it led to the term "Tetris Effect," describing the way people start thinking in Tetris blocks after playing the game for extended periods. This phenomenon has been studied by researchers to understand how games affect cognitive processes.</p>
      </section>

      <section className="content-section">
        <h2>Modern Evolution</h2>
        <p>Giant Tetris Tumble represents the next step in Tetris evolution, bringing the digital classic into the physical world. By combining traditional gameplay mechanics with tangible pieces, we've created a new way to experience this timeless game.</p>
      </section>
    </div>
  )
}