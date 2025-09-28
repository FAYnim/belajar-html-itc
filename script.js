document.addEventListener('DOMContentLoaded', () => {
  // --- Intersection Observer untuk animasi fade-in section ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.5 } // Trigger saat 50% elemen terlihat
  );

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // --- Mengatur posisi, ukuran, dan durasi acak untuk bentuk latar belakang ---
  const shapes = document.querySelectorAll('.background-shapes .shape');
  shapes.forEach(shape => {
    // Ukuran acak antara 20px dan 120px
    const size = Math.random() * 100 + 20; 
    // Posisi horizontal acak antara 0% dan 90% dari lebar layar
    const leftPosition = Math.random() * 90; 
    // Durasi animasi acak antara 20 dan 40 detik
    const animationDuration = Math.random() * 20 + 20; 

    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.left = `${leftPosition}vw`;
    shape.style.animationDuration = `${animationDuration}s`;
  });

  // --- Logika Carousel Proyek ---
  const track = document.querySelector('.project-track');
  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const dotsNav = document.querySelector('.carousel-nav-dots');
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    // Buat dots
    slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('active');
      targetDot.classList.add('active');
    };

    const moveToSlide = (targetIndex) => {
      track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
      const currentDot = dots[currentIndex];
      const targetDot = dots[targetIndex];
      updateDots(currentDot, targetDot);
      currentIndex = targetIndex;
    };

    // Klik tombol Next
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      moveToSlide(nextIndex);
    });

    // Klik tombol Prev
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      moveToSlide(prevIndex);
    });

    // Klik pada dots
    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button.dot');
      if (!targetDot) return;
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      moveToSlide(targetIndex);
    });
  }
});

// --- Fungsi global untuk tombol "Mari Terhubung" ---
// Didefinisikan di luar DOMContentLoaded agar bisa diakses oleh atribut onclick
const terhubung = () => {
  window.open('https://www.linkedin.com/in/faris-ay', '_blank');
};