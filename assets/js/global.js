// ─────────────────────────────────────────
// GLOBAL JS — Ernesto Taddei Portfolio
// Shared across all pages
// ─────────────────────────────────────────

// ── Mobile nav toggle ──
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
if(navToggle && navLinksEl){
  navToggle.addEventListener('click', ()=>{
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      navToggle.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  });
}

// ── Lazy-load background videos (only fetch/play once visible) — desktop only ──
// Mobile keeps the native autoplay attribute untouched (more reliable there).
const lazyVideos = document.querySelectorAll('video[data-lazy-autoplay]');
if(lazyVideos.length && !window.matchMedia('(max-width: 768px)').matches){
    lazyVideos.forEach(v=>v.pause());
    const videoObs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const v = entry.target;
        if(entry.isIntersecting){
          v.play().catch(()=>{});
        } else {
          v.pause();
        }
      });
    },{threshold:.15});
    lazyVideos.forEach(v=>videoObs.observe(v));
}

// ── Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'), i*60);
      revealObs.unobserve(e.target);
    }
  });
},{threshold:.08, rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el=>revealObs.observe(el));

// ── Nav active link (home page only — section anchors) ──
const navSections = document.querySelectorAll('section[id]');
if(navSections.length){
  window.addEventListener('scroll',()=>{
    const y = window.scrollY;
    navSections.forEach(s=>{
      const top=s.offsetTop-110, h=s.offsetHeight;
      const link=document.querySelector(`.nav-links a[href="#${s.id}"]`);
      if(link) link.style.color=(y>=top&&y<top+h)?'var(--white)':'';
    });
  });
}
