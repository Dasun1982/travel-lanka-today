import { useEffect } from 'react';

function ScrollReveal({ pageKey }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');

    if (!revealItems.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -90px 0px',
        threshold: 0.14
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pageKey]);

  return null;
}

export default ScrollReveal;
