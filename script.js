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

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(11, 30, 64, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(255, 215, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(11, 30, 64, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.card, .story-part, .modern-card, .reflection-card');
elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#C0C0C0';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#FFD700';
        }
    });
});

const lightningBolt = document.querySelector('.lightning-bolt');
if (lightningBolt) {
    setInterval(() => {
        lightningBolt.style.opacity = '0.3';
        setTimeout(() => {
            lightningBolt.style.opacity = '1';
        }, 100);
    }, 3000);
}

document.addEventListener('keydown', (e) => {
    const sections = ['hero', 'who', 'myth', 'modern', 'reflection'];
    const currentIndex = sections.findIndex(id => {
        const section = document.getElementById(id);
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });

    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        document.getElementById(sections[currentIndex + 1]).scrollIntoView({
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        document.getElementById(sections[currentIndex - 1]).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});