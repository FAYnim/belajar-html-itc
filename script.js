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

  // --- Logika untuk mengubah link navigasi di tampilan mobile ---
  if (window.innerWidth <= 768) {
    const nav_skill = document.getElementById('nav-skills');
    if (nav_skill) {
      nav_skill.setAttribute('href', '#skills');
    }
  }
});

// --- Fungsi global untuk tombol "Mari Terhubung" ---
// Didefinisikan di luar DOMContentLoaded agar bisa diakses oleh atribut onclick
const terhubung = () => {
  window.open('https://www.linkedin.com/in/faris-ay', '_blank');
};