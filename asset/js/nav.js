(()=>{
  const b = document.getElementById('navBtn'), m = document.getElementById('menu');
  const set = o => {
    m.classList.toggle('hidden', !o);
    m.classList.toggle('flex', o);
    b.setAttribute('aria-expanded', o);
    b.innerHTML = o ? '<i data-lucide="x" class="w-5 h-5"></i>' : '<i data-lucide="menu" class="w-5 h-5"></i>';
    if (window.lucide) lucide.createIcons();
  };
  b.addEventListener('click', () => set(m.classList.contains('hidden')));
  addEventListener('hashchange', () => set(false));
})();
