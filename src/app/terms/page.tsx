import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
    title: pageMetadata.terms.title,
    description: pageMetadata.terms.description,
    keywords: pageMetadata.terms.keywords,
    robots: 'noindex, follow', // 通常服务条款页面不需要被索引
}

export default function TermsOfService() {
    return (
        <div className="policy-container">
            <h1>Terms of Service</h1>
            <p>Last updated: 2025.02.22</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website at tetristumble.com, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.</p>

            <h2>2. Intellectual Property</h2>
            <p>The Tetris Tumble name, logo, and all related content are the exclusive property of Tetris Tumble. The 3D printing files available for download are provided for personal, non-commercial use only.</p>

            <h2>3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (3D printing files) on Tetris Tumble's website for personal, non-commercial transitory viewing only.</p>

            <h2>4. Disclaimer</h2>
            <p>The materials on Tetris Tumble's website are provided on an 'as is' basis. Tetris Tumble makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul>
                <li>Email: info@tetristumble.com</li>
            </ul>
        </div>
    )
}