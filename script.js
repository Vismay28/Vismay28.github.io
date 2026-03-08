// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');

const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Active nav link highlighting
const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

const highlightNav = () => {
  const scrollPos = window.scrollY + 100;

  navAnchors.forEach(anchor => {
    const section = document.querySelector(anchor.getAttribute('href'));
    if (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        anchor.style.color = 'var(--accent)';
      } else {
        anchor.style.color = '';
      }
    }
  });
};

window.addEventListener('scroll', highlightNav);

// Copy email to clipboard
function copyEmail() {
  navigator.clipboard.writeText('vismayvachhani2@gmail.com').then(() => {
    showToast('Email copied to clipboard!');
  });
}

// Open Gmail compose
function openGmail() {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'mailto:vismayvachhani2@gmail.com';
  } else {
    window.open('https://mail.google.com/mail/?view=cm&to=vismayvachhani2@gmail.com', '_blank');
  }
}

// Show toast message
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}
