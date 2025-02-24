'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <Link href="/" className="logo">
                    Giant Tetris Tumble
                </Link>
                <button
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link href="/history" onClick={() => setIsMenuOpen(false)}>History</Link></li>
                    <li><Link href="/videos" onClick={() => setIsMenuOpen(false)}>Videos</Link></li>
                    <li><Link href="/stores" onClick={() => setIsMenuOpen(false)}>Stores</Link></li>
                    <li><Link href="/print" onClick={() => setIsMenuOpen(false)}>3D Print</Link></li>
                </ul>
            </div>
        </nav>
    );
} 