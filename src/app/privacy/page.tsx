import { Metadata } from 'next'
import { pageMetadata } from '../seo-config'

export const metadata: Metadata = {
    title: pageMetadata.privacy.title,
    description: pageMetadata.privacy.description,
    keywords: pageMetadata.privacy.keywords,
    robots: 'noindex, follow', // 通常隐私政策页面不需要被索引
}

export default function PrivacyPolicy() {
    return (
        <div className="policy-container">
            <h1>Privacy Policy</h1>
            <p>Last updated: 2025.02.22</p>

            <h2>Introduction</h2>
            <p>Welcome to Tetris Tumble. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (tetristumble.com) and tell you about your privacy rights and how the law protects you.</p>

            <h2>Information We Collect</h2>
            <p>We collect and process the following information:</p>
            <ul>
                <li>Information you provide when contacting us via email</li>
                <li>Usage data and analytics when you visit our website</li>
                <li>Technical data including IP address and browser information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide and maintain our website</li>
                <li>Notify you about changes to our services</li>
                <li>Provide customer support</li>
                <li>Monitor the usage of our website</li>
            </ul>

            <h2>Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us:</p>
            <ul>
                <li>By email: info@tetristumble.com</li>
            </ul>
        </div>
    )
}