import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: pageMetadata.stores.title,
  description: pageMetadata.stores.description,
  keywords: pageMetadata.stores.keywords,
  openGraph: {
    title: pageMetadata.stores.title,
    description: pageMetadata.stores.description,
    images: ['/store-locations.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.stores.title,
    description: pageMetadata.stores.description,
    images: ['/store-locations.png'],
  }
}

export default function Stores() {
  return (
    <div className="policy-container">
      <h1>Where to Buy</h1>

      <section className="content-section">
        <h2>Available at Costco</h2>
        <p>Giant Tetris Tumble is available at select Costco locations in the games and toys section. Visit your local Costco store to get your hands on this exciting family game.</p>

        <div className="cta-section">
          <a
            href="https://www.costco.com/warehouse-locations"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find Nearest Store
          </a>
        </div>
      </section>

      <section className="content-section">
        <h2>Product Details</h2>
        <ul>
          <li>Dimensions: 23.5" L x 12.5" W x 4.25" H</li>
          <li>Weight: 6.25 lbs</li>
          <li>Includes: Game board, 40 Tetris pieces, scoring markers</li>
          <li>Ages: 6+</li>
          <li>Players: 1-4</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Online Purchase</h2>
        <p>You can also purchase Giant Tetris Tumble through Costco's online store.</p>
        <div className="cta-section">
          <a
            href="https://sovrn.co/f59pno0"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop at Costco
          </a>
        </div>
      </section>
    </div>
  )
}