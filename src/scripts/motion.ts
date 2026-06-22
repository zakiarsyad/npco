// Lightweight motion: scroll-reveal + stat count-up. No libraries.
// Fully disabled under prefers-reduced-motion (CSS already neutralizes .reveal).
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- scroll reveal ----
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---- count-up ----
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const fmt = (n: number, comma: boolean) =>
  comma ? Math.round(n).toLocaleString('en-US') : String(Math.round(n));

function run(el: HTMLElement) {
  const target = Number(el.dataset.count || '0');
  const comma = el.dataset.format === 'comma';
  const suffix = el.dataset.suffix || '';
  if (reduce) {
    el.textContent = fmt(target, comma) + suffix;
    return;
  }
  const dur = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * eased, comma) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (counters.length) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => cio.observe(el));
}
