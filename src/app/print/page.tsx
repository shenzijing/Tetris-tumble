import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: pageMetadata.print.title,
  description: pageMetadata.print.description,
  keywords: pageMetadata.print.keywords,
  openGraph: {
    title: pageMetadata.print.title,
    description: pageMetadata.print.description,
    images: ['/3d-print-tetris.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.print.title,
    description: pageMetadata.print.description,
    images: ['/3d-print-tetris.png'],
  }
}

export default function Print() {
  return (
    <div className="policy-container">
      <h1>3D Print Your Own</h1>

      <section className="content-section">
        <h2>DIY Tetris Experience</h2>
        <p>Want to bring Tetris into your physical world? Download our 3D printing files and create your own Tetris Tumble set. Perfect for makers and Tetris enthusiasts!</p>
      </section>

      <section className="content-section">
        <h2>Features</h2>
        <ul>
          <li>Customizable colors and sizes</li>
          <li>Optimized for common 3D printers</li>
          <li>Easy to print and assemble</li>
          <li>Detailed instructions included</li>
          <li>Community support available</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Download Files</h2>
        <p>Get started with your own Tetris Tumble creation today!</p>
        <div className="cta-section">
          <a
            href="https://makerworld.com/en/models/79755?from=search#profileId-745804"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download 3D Files
          </a>
        </div>
      </section>

      <section className="content-section">
        <h2>Printing Guidelines</h2>
        <ul>
          <li>Recommended material: PLA or PETG</li>
          <li>Layer height: 0.2mm</li>
          <li>Infill: 20-30%</li>
          <li>Support: Not required for most pieces</li>
          <li>Print time: Varies by piece</li>
        </ul>
      </section>
    </div>
  )
}