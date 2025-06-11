console.log("I deployed this with vite! :)")

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    const sections = document.querySelectorAll('.section-fade-in');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const projectGrid = document.getElementById('projects-grid');
    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (projectGrid) {
        projectObserver.observe(projectGrid);
    }

    const scrollThreshold = 50; 
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('bg-gray-900', 'bg-opacity-80', 'backdrop-blur-md', 'shadow-lg');
        } else {
            header.classList.remove('bg-gray-900', 'bg-opacity-80', 'backdrop-blur-md', 'shadow-lg');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
});