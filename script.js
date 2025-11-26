// 1. current year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. smooth scroll for CTA
document.querySelector('.cta').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior:'smooth' });
});

// 3. reveal-on-scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold:0.2 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));