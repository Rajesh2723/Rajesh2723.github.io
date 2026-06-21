// Scroll-triggered reveal for major sections
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.log-entry, .project-card, .cred, .summary-text, .stack-group, .contact-item'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // ---- Quick setup checklist (visible only via console, harmless if ignored) ----
  console.log(
    '%cPortfolio loaded. Update the résumé link, GitHub URL, and project links in index.html before publishing.',
    'color:#5B8C85;font-family:monospace;'
  );
});
