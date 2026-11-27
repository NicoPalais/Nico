const toggle = document.querySelector('.theme-toggle');
const label = document.querySelector('.toggle-label');
const icon = document.querySelector('.toggle-icon');
const metaTheme = document.querySelector('meta[name="theme-color"]');

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  toggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  label.textContent = isLight ? 'Modo oscuro' : 'Modo claro';
  icon.textContent = isLight ? '☾' : '☼';
  metaTheme.setAttribute('content', isLight ? '#f4f5f0' : '#111318');
  localStorage.setItem('hola-theme', theme);
}

const savedTheme = localStorage.getItem('hola-theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');
toggle.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});

document.querySelector('#year').textContent = new Date().getFullYear();
