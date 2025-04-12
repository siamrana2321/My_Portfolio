// Typewriter effect
const typewriterText = document.getElementById('typewriter-text');
const phrases = [
    'Machine Learning Engineer',
    'AI Enthusiast',
    'Data Scientist',
    'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
}

// Add active class to navigation links based on scroll position
function handleScrollSpy() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Form submission (prevent default for demo)
function setupFormHandling() {
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
            // Show success message instead of alert
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Message Sent!';
            button.style.backgroundColor = 'var(--accent-color)';
            button.style.color = 'var(--primary-color)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
                button.style.color = '';
        this.reset();
            }, 3000);
    });
    }
}

// Add pixelated hover effect to project cards
function setupProjectCardEffects() {
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.3s steps(5)';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});
}

// Certifications Slider
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return; // Exit if slider doesn't exist
    
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; // Exit if no slides
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Set initial position immediately
    slider.style.transform = `translateX(0%)`;
    
    // Add event listeners for controls
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
            resetAutoSlide(); // Reset auto slide timer when user interacts
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSliderPosition();
            resetAutoSlide(); // Reset auto slide timer when user interacts
        });
    }
    
    // Add event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateSliderPosition();
            resetAutoSlide(); // Reset auto slide timer when user interacts
        });
    });
    
    // Add touch swipe support for mobile
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    }, { passive: true });
    
    // Handle swipe direction
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left, go to next slide
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSliderPosition();
            resetAutoSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right, go to previous slide
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
            resetAutoSlide();
        }
    }
    
    // Function to update slider position
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Auto slide every 5 seconds if document has focus
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (document.hasFocus()) {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSliderPosition();
            }
        }, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }
    
    // Start auto-sliding
    startAutoSlide();
    
    // Pause auto-sliding when user interacts with slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    slider.addEventListener('touchstart', stopAutoSlide, { passive: true });
    slider.addEventListener('touchend', startAutoSlide, { passive: true });
    
    // Update on window resize to ensure correct positioning
    window.addEventListener('resize', () => {
        // Ensure the slider is positioned correctly at the current slide
        updateSliderPosition();
        
        // Fix certification card heights if needed
        adjustCertificationCardHeights();
    });
    
    // Adjust certification card heights to ensure they have consistent heights
    function adjustCertificationCardHeights() {
        // Only do this for desktop and tablet views
        if (window.innerWidth > 480) {
            // Reset heights first
            document.querySelectorAll('.certification-card').forEach(card => {
                card.style.height = 'auto';
            });
            
            // If we have certification cards, ensure they have consistent heights
            const cards = document.querySelectorAll('.certification-card');
            if (cards.length > 0) {
                let maxHeight = 0;
                
                // Find max height
                cards.forEach(card => {
                    const height = card.offsetHeight;
                    if (height > maxHeight) {
                        maxHeight = height;
                    }
                });
                
                // Set all cards to max height
                if (maxHeight > 0) {
                    cards.forEach(card => {
                        card.style.height = `${maxHeight}px`;
                    });
                }
            }
        }
    }
    
    // Run the height adjustment on initial load
    setTimeout(adjustCertificationCardHeights, 100);
}

// Back to top button functionality
function setupBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        // Make button visible when scrolled down
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        // Check the current page
        const currentPath = window.location.pathname;
        
        // If we're on the home page, scroll to the home section
        if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        
        // For all other cases, including subpages and fallback for home page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Lazy loading images
function setupLazyLoading() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imgOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px 100px 0px"
        };
        
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                        
                        // Add load event to handle fade-in effect
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, imgOptions);
        
        // Target all images that have data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imgObserver.observe(img);
        });
        
        // Also target background images with data-bg attribute
        const lazyBackgrounds = document.querySelectorAll('[data-bg]');
        lazyBackgrounds.forEach(element => {
            imgObserver.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
        
        const lazyBackgrounds = document.querySelectorAll('[data-bg]');
        lazyBackgrounds.forEach(element => {
            const bg = element.getAttribute('data-bg');
            if (bg) {
                element.style.backgroundImage = `url(${bg})`;
                element.removeAttribute('data-bg');
            }
        });
    }
    
    // Responsive image loading based on viewport width
    function loadResponsiveImages() {
        const respImages = document.querySelectorAll('img[data-srcset]');
        
        respImages.forEach(img => {
            const srcset = img.getAttribute('data-srcset');
            if (srcset) {
                img.srcset = srcset;
                img.removeAttribute('data-srcset');
            }
        });
    }
    
    // Call responsive image loading
    loadResponsiveImages();
    
    // Update on resize
    window.addEventListener('resize', loadResponsiveImages);
}

// Projects filter functionality
function setupProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const body = document.body;
    
    if (!mobileMenuToggle) return;
    
    // Toggle menu when hamburger is clicked
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Add touch event for mobile devices
    mobileMenuToggle.addEventListener('touchend', (e) => {
        e.preventDefault();
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
        
        // Add touch event for mobile devices
        link.addEventListener('touchend', (e) => {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (
            nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)
        ) {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Handle viewport resizing - if menu is open and screen is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Initialize all functions on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start typewriter effect
    if (document.getElementById('typewriter-text')) {
        typeWriter();
    }
    
    setupSmoothScrolling();
    setupFormHandling();
    setupProjectCardEffects();
    initSlider();
    setupBackToTopButton();
    setupLazyLoading();
    setupProjectsFilter();
    setupMobileMenu();
    
    // Check if the page is already scrolled when loaded
    if (window.scrollY > 0) {
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            backToTopButton.classList.add('visible');
        }
    }
    
    // Add scroll event listener for navigation highlighting
    window.addEventListener('scroll', handleScrollSpy);
}); 