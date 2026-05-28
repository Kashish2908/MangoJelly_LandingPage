function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      const isOpen = menu.style.display === 'flex';
      menu.style.display = isOpen ? 'none' : 'flex';
      document.getElementById('hamburger').innerHTML = isOpen
        ? '<i class="ri-menu-line"></i>'
        : '<i class="ri-close-line"></i>';
    }

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        document.getElementById('mobile-menu').style.display = 'none';
        document.getElementById('hamburger').innerHTML = '<i class="ri-menu-line"></i>';
      }
    });

    // GSAP animations
    gsap.from("#nav1", { opacity: 0, y: -40, duration: 0.8, delay: 0.2 });
    gsap.from("#nav2-left img", { opacity: 0, x: -50, duration: 0.9, delay: 0.35 });
    gsap.from("#nav2-right", { opacity: 0, x: 50, duration: 0.9, delay: 0.35 });
    gsap.from("#center-left", { opacity: 0, x: -50, duration: 1, delay: 0.5 });
    gsap.from("#center-right img", { opacity: 0, x: 60, duration: 1.2, delay: 0.5 });
    gsap.from("#last-part", { opacity: 0, y: 40, duration: 0.9, delay: 0.6 });