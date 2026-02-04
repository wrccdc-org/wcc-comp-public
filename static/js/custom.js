// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.startsWith(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentPath === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Event filter functionality (for schedule page)
function filterEvents(type) {
    const events = document.querySelectorAll('.event-item');
    events.forEach(event => {
        if (type === 'all' || event.dataset.eventType === type) {
            event.style.display = 'block';
            setTimeout(() => {
                event.style.opacity = '1';
            }, 10);
        } else {
            event.style.opacity = '0';
            setTimeout(() => {
                event.style.display = 'none';
            }, 300);
        }
    });
}

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTopButton.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Newsletter subscription (placeholder)
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        alert('Thank you for subscribing! You will receive updates at ' + email);
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

// Console Easter egg
console.log('%cWCCOMPS', 'font-size: 48px; font-weight: bold; color: #0066cc;');
console.log('%cInterested in cybersecurity? Check out our competitions at wccomps.org/competitions/', 'font-size: 14px; color: #666;');
console.log('%cLooking at the source? We like that! Consider volunteering with us.', 'font-size: 12px; color: #999;');
