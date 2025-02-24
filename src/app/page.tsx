'use client'

import { useEffect } from 'react'
import Image from 'next/image'

// 添加广告脚本到头部
const AdScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//pl25935153.effectiveratecpm.com/3f5586504a87ab35672e5527533ac2d3/invoke.js";
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.head.appendChild(script);
  }, []);
  return null;
}

// Google Tag Manager 组件
const GoogleTagManager = () => {
  useEffect(() => {
    // 创建并插入 GTM 脚本
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NBXTC47B');`;
    document.head.appendChild(script);

    // 创建并插入 GTM noscript 元素
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-NBXTC47B";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);
  return null;
};

// Google AdSense 组件
const GoogleAdSense = () => {
  useEffect(() => {
    // 添加 meta 标签
    const meta = document.createElement('meta');
    meta.name = "google-adsense-account";
    meta.content = "ca-pub-9742784810661665";
    document.head.appendChild(meta);

    // 添加 script 标签
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9742784810661665";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);
  return null;
};

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
      <GoogleTagManager />
      <AdScript />
      <GoogleAdSense />

      <header className="hero">
        <picture>
          <source srcSet="/tetris-tumble.svg" type="image/svg+xml" />
          <img
            src="/tetris-tumble.png"
            alt="Tetris Tumble Logo"
            className="logo"
            width={100}
            height={100}
          />
        </picture>
        <h1>Giant Tetris Tumble</h1>
        <p className="tagline">The Classic Puzzle Game Reimagined</p>
        <div className="hero-buttons">
          <a href="#purchase-info" className="cta-button hero-cta">Get Now</a>
          <a href="#stores" className="cta-button hero-cta secondary">Find in Stores</a>
        </div>
      </header>

      <main>

        {/* 在历史部分之前添加第一个广告位 */}
        <div className="ad-container">
          <div id="container-3f5586504a87ab35672e5527533ac2d3"></div>
        </div>
        {/* 添加产品详情区块 */}
        <section className="product-details section">
          <h1>Tetris XL Tumble Game</h1>
          <div className="product-image-container">
            <Image
              src="/Tetris-XL-Tumble.jpg"
              alt="Tetris XL Tumble Game - Giant Family Board Game"
              width={800}
              height={600}
              priority
              className="product-image"
            />
          </div>
          <div className="product-info">
            <div className="product-highlights">
              <h2>Product Highlights</h2>
              <ul>
                <li>Giant-sized Tetris blocks for family entertainment</li>
                <li>Perfect for ages 6 and up</li>
                <li>Supports 1-4 players</li>
                <li>High-quality durable plastic construction</li>
              </ul>
            </div>

            <div className="product-specifications">
              <h2>Specifications</h2>
              <ul>
                <li>Dimensions: 23.5" L x 12.5" W x 4.25" H</li>
                <li>Weight: 6.25 lbs</li>
                <li>Package Contents: Game board, 40 Tetris pieces, scoring markers</li>
                <li>Material: Premium quality plastic</li>
                <li>Assembly Required: Minimal</li>
              </ul>
            </div>

            <div className="game-features">
              <h2>Game Features</h2>
              <ul>
                <li>Classic Tetris gameplay in physical form</li>
                <li>Oversized design for enhanced engagement</li>
                <li>Easy to learn, challenging to master</li>
                <li>Develops spatial awareness and strategic thinking</li>
                <li>Perfect for family game nights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 添加 id 到购买信息区块 */}
        <section id="purchase-info" className="purchase-info section">
          <h2>Purchase Information</h2>
          <div className="pricing">
            <p className="price">Available at Costco</p>
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
        <section id="about" className="section">
          <h2>About Giant Tetris Tumble</h2>
          <p>Giant Tetris Tumble brings the iconic puzzle game into the physical world through innovative 3D printing technology. Experience the classic gameplay in a whole new dimension, where strategy meets tangible interaction.</p>
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

          {/* 添加 YouTube 视频容器 */}
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

        {/* 在商店部分之前的第二个广告位 */}
        <div className="ad-container">
          <div id="container-3f5586504a87ab35672e5527533ac2d3"></div>
        </div>

        <section id="stores" className="section">
          <h2>Where to Find Costco </h2>
          <div className="store-info">
            <p>Tetris Tumble is available at select Costco stores in the games and toys section.</p>
            <a href="https://www.costco.com/warehouse-locations" className="cta-button" target="_blank" rel="noopener noreferrer">
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