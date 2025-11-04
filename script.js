// Countdown Timer Function
function initCountdown() {
    function updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        
        const diff = midnight - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update first countdown
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // Update second countdown
        const hoursEl2 = document.getElementById('hours2');
        const minutesEl2 = document.getElementById('minutes2');
        const secondsEl2 = document.getElementById('seconds2');
        
        if (hoursEl2) hoursEl2.textContent = String(hours).padStart(2, '0');
        if (minutesEl2) minutesEl2.textContent = String(minutes).padStart(2, '0');
        if (secondsEl2) secondsEl2.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Reset all question indicators
            document.querySelectorAll('.faq-question').forEach(q => {
                q.style.backgroundColor = '';
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
                question.style.backgroundColor = '#f9fafb';
            }
        });
    });
    
    // Initially hide all answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
}

// Smooth Scroll for CTA buttons
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Track scroll depth for analytics
function initScrollTracking() {
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = [];
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const scrollPercentage = (scrolled / documentHeight) * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercentage >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                // Track with Facebook Pixel
                if (typeof fbq !== 'undefined') {
                    fbq('trackCustom', 'ScrollDepth', {
                        depth: depth
                    });
                }
            }
        });
    });
}

// Track CTA button clicks
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Track with Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'AddToCart', {
                    content_name: '27 Consejos Para Bajar de Peso',
                    content_category: 'Ebook',
                    value: 6.99,
                    currency: 'USD'
                });
            }
            
            // Optional: Console log for debugging
            console.log('CTA Button clicked:', index + 1);
        });
    });
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.benefit-card, .bonus-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initFAQ();
    initSmoothScroll();
    initScrollTracking();
    initCTATracking();
    initScrollAnimations();
    
    // Track page view
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: '27 Consejos Para Bajar de Peso Landing Page',
            content_category: 'Ebook'
        });
    }
});

// Track when user is about to leave (exit intent)
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) {
        // User is moving mouse out of the page
        if (typeof fbq !== 'undefined') {
            fbq('trackCustom', 'ExitIntent');
        }
    }
});

// Track time on page
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 10;
    
    // Track milestones
    if (timeOnPage === 30 && typeof fbq !== 'undefined') {
        fbq('trackCustom', 'TimeOnPage30Seconds');
    }
    if (timeOnPage === 60 && typeof fbq !== 'undefined') {
        fbq('trackCustom', 'TimeOnPage1Minute');
    }
    if (timeOnPage === 120 && typeof fbq !== 'undefined') {
        fbq('trackCustom', 'TimeOnPage2Minutes');
    }
}, 10000); // Check every 10 seconds
