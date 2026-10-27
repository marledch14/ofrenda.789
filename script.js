document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-copy');

  if (hero) {
    hero.animate(
      [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 700,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );
  }

  const candles = document.querySelectorAll('.flame');
  candles.forEach((flame, index) => {
    flame.animate(
      [
        { transform: 'translateX(-50%) scale(1)' },
        { transform: 'translateX(-50%) scale(1.18)' },
        { transform: 'translateX(-50%) scale(0.96)' }
      ],
      {
        duration: 1200 + index * 180,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
    );
  });
});
