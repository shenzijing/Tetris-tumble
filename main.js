// Sample Instagram video embed URLs (replace these with your actual Instagram video URLs)
const instagramVideos = [
    'https://www.instagram.com/reel/VIDEO_ID_1/embed',
    'https://www.instagram.com/reel/VIDEO_ID_2/embed',
    // Add more video URLs as needed
];

function createVideoElement(embedUrl) {
    const container = document.createElement('div');
    container.className = 'video-container';
    
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.allowFullscreen = true;
    
    container.appendChild(iframe);
    return container;
}

function initializeVideos() {
    const videoContainer = document.getElementById('videoContainer');
    
    instagramVideos.forEach(videoUrl => {
        const videoElement = createVideoElement(videoUrl);
        videoContainer.appendChild(videoElement);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeVideos();
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Use getElementById instead of querySelector for IDs with special characters
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});