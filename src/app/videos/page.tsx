import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: pageMetadata.videos.title,
  description: pageMetadata.videos.description,
  keywords: pageMetadata.videos.keywords,
  openGraph: {
    title: pageMetadata.videos.title,
    description: pageMetadata.videos.description,
    images: ['/tetris-videos-preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.videos.title,
    description: pageMetadata.videos.description,
    images: ['/tetris-videos-preview.png'],
  }
}

export default function Videos() {
  return (
    <div className="policy-container">
      <h1>Game Videos</h1>

      <section className="content-section">
        <h2>Gameplay Demonstrations</h2>
        <div className="youtube-container">
          <iframe
            src="https://www.youtube.com/embed/msHBaVHWSCs?rel=0"
            title="Costco Tetris Game Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h2>Instagram Reels</h2>
        <div className="video-grid">
          <div className="video-container">
            <iframe
              src="https://www.instagram.com/reel/DGQxYN2xe3R/embed"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  )
}