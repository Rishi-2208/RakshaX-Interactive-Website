const themeButton = document.getElementById('themeButton');
const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
const heroBanner = document.getElementById('heroBanner');
const heroSource = document.getElementById('heroSource');
const galleryGrid = document.getElementById('galleryGrid');
const galleryCount = document.getElementById('galleryCount');
const searchInput = document.getElementById('searchScreens');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const allImages = [];
let activeFilter = 'all';
let visibleImages = [];
let activeImageIndex = 0;

themeButton.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  themeButton.innerHTML = light ? '☾ <span>Dark mode</span>' : '☼ <span>Light mode</span>';
  document.querySelector('meta[name="theme-color"]').content = light ? '#f8f7fc' : '#0b0a13';
  const banner = light ? 'assets/banners/safer-tomorrow-light.png' : 'assets/banners/safer-tomorrow-dark.png';
  heroBanner.src = banner;
  heroSource.srcset = banner;
});

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuButton.textContent = open ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

function prettyTitle(title) {
  return title.replace(/\s+/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).trim();
}
function renderGallery() {
  const term = searchInput.value.trim().toLowerCase();
  visibleImages = allImages.filter(item => {
    const filterOk = activeFilter === 'all' || item.theme === activeFilter;
    const searchOk = !term || item.title.toLowerCase().includes(term) || item.theme.includes(term);
    return filterOk && searchOk;
  });
  galleryGrid.innerHTML = '';
  if (!visibleImages.length) {
    galleryGrid.innerHTML = '<div class="empty-state">No screens match that search. Try another name or theme.</div>';
  } else {
    visibleImages.forEach((item, index) => {
      const button = document.createElement('button');
      button.className = 'screen-card';
      button.type = 'button';
      button.setAttribute('aria-label', `View ${item.title}, ${item.theme} mode`);
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `${item.title} app screenshot (${item.theme} mode)`;
      img.loading = 'lazy';
      const title = document.createElement('span');
      title.className = 'screen-title';
      title.textContent = prettyTitle(item.title);
      const theme = document.createElement('span');
      theme.className = 'screen-theme';
      theme.textContent = `${item.theme} mode · View image ↗`;
      button.append(img, title, theme);
      button.addEventListener('click', () => openLightbox(index));
      galleryGrid.appendChild(button);
    });
  }
  galleryCount.textContent = `${visibleImages.length} screen${visibleImages.length === 1 ? '' : 's'} shown`;
}
function openLightbox(index) {
  activeImageIndex = index;
  const item = visibleImages[activeImageIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = `${item.title} app screenshot`;
  lightboxCaption.textContent = `${prettyTitle(item.title)} · ${item.theme} mode`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('closeLightbox').focus();
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function stepLightbox(delta) {
  if (!visibleImages.length) return;
  activeImageIndex = (activeImageIndex + delta + visibleImages.length) % visibleImages.length;
  openLightbox(activeImageIndex);
}
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevImage').addEventListener('click', () => stepLightbox(-1));
document.getElementById('nextImage').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  renderGallery();
}));
searchInput.addEventListener('input', renderGallery);
document.querySelectorAll('.banner-card').forEach(button => button.addEventListener('click', () => {
  const item = {src: button.dataset.image, title: button.dataset.title, theme: button.dataset.title.toLowerCase().includes('light') ? 'light' : 'dark'};
  visibleImages = [item];
  openLightbox(0);
}));

fetch('assets/screenshots.json')
  .then(response => {
    if (!response.ok) throw new Error('Could not load screenshot manifest');
    return response.json();
  })
  .then(items => {
    allImages.push(...items);
    renderGallery();
  })
  .catch(() => {
    galleryGrid.innerHTML = '<div class="empty-state">Screenshots could not load. Run this site through a local web server or deploy it as a Render Static Site.</div>';
  });
