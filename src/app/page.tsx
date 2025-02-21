'use client'

import { useEffect } from 'react'

const instagramVideos = [
  // 'https://www.instagram.com/p/DGRvsaHPp8P/embed',
  'https://www.instagram.com/reel/DGQxYN2xe3R/embed'
]

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const href = target.getAttribute('href')
        if (href) {  // 确保 href 存在
          const targetId = href.substring(1)  // 移除 #
          const element = document.getElementById(targetId)
          element?.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <div id="app">
      <header className="hero">
        <img
          src="/tetris-tumble.svg"
          alt="Tetris Tumble Logo"
          className="logo"
          width={100}
          height={100}
        />
        <h1>Tetris Tumble</h1>
        <p className="tagline">The Classic Puzzle Game Reimagined</p>
        <div className="hero-buttons">
          <a href="#about" className="cta-button hero-cta">Learn More</a>
          <a href="#stores" className="cta-button hero-cta secondary">Find in Stores</a>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Tetris Tumble</h2>
          <p>Tetris Tumble brings the iconic puzzle game into the physical world through innovative 3D printing technology. Experience the classic gameplay in a whole new dimension, where strategy meets tangible interaction.</p>
          <div className="features">
            <div className="feature">
              <h3>Classic Mechanics</h3>
              <p>All the beloved Tetris mechanics you know and love, now in a physical format you can touch and feel.</p>
            </div>
            <div className="feature">
              <h3>Educational Benefits</h3>
              <p>Enhance spatial awareness, strategic thinking, and problem-solving skills through hands-on play.</p>
            </div>
            <div className="feature">
              <h3>Social Gaming</h3>
              <p>Create memorable moments with friends and family through multiplayer challenges and competitions.</p>
            </div>
          </div>
        </section>

        <section id="history" className="section">
          <h2>The Legacy of Tetris</h2>
          <div className="history-content">
            <div className="history-item">
              <h3>Origins</h3>
              <p>Created by Alexey Pajitnov in 1984, Tetris revolutionized puzzle gaming with its simple yet addictive gameplay. The name combines "tetra" (four) and "tennis," reflecting the game's four-block pieces.</p>
            </div>
            <div className="history-item">
              <h3>Global Phenomenon</h3>
              <p>Since its creation, Tetris has sold hundreds of millions of copies across virtually every gaming platform, making it one of the most successful video games of all time.</p>
            </div>
            <div className="history-item">
              <h3>The Tetris Effect</h3>
              <p>The game's impact was so profound that it led to the term "Tetris Effect," describing the way people start thinking in Tetris blocks after playing the game for extended periods.</p>
            </div>
            <div className="history-item">
              <h3>Evolution</h3>
              <p>Tetris Tumble represents the next step in Tetris evolution, bringing the digital classic into the physical world through modern 3D printing technology.</p>
            </div>
          </div>
        </section>

        <section id="videos" className="section">
          <h2>Gameplay Videos</h2>
          <div className="video-grid">
            {instagramVideos.map((videoUrl, index) => (
              <div key={index} className="video-container">
                <iframe src={videoUrl} allowFullScreen></iframe>
              </div>
            ))}
          </div>
        </section>

        <section id="stores" className="section">
          <h2>Where to Find Us</h2>
          <div className="store-info">
            <p>Tetris Tumble is available at select Tesco stores in the games and toys section.</p>
            <a href="https://www.tesco.com/store-locator/uk/" className="cta-button" target="_blank" rel="noopener noreferrer">
              Find Nearest Store
            </a>
          </div>
        </section>

        <section id="print" className="section">
          <h2>Create Your Own</h2>
          <div className="print-info">
            <h3>DIY Tetris Experience</h3>
            <p>Want to bring Tetris into your physical world? Download our 3D printing files and create your own Tetris Tumble set. Perfect for makers and Tetris enthusiasts!</p>
            <div className="print-features">
              <div className="print-feature">
                <h4>Customizable</h4>
                <p>Print in your favorite colors and sizes</p>
              </div>
              <div className="print-feature">
                <h4>Maker-Friendly</h4>
                <p>Optimized for common 3D printers</p>
              </div>
              <div className="print-feature">
                <h4>Community</h4>
                <p>Share your creations with other fans</p>
              </div>
            </div>
            <a href="https://makerworld.com/en/models/79755?from=search#profileId-745804"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer">
              Download 3D Files
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}