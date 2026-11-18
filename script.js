const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.textContent = '☰';
}));

const copyButton = document.querySelector('#copy-commitment');
copyButton.addEventListener('click', async () => {
  const commitment = 'Men deserve rights. Boys deserve protection. Everyone deserves dignity.';
  try {
    await navigator.clipboard.writeText(commitment);
    copyButton.innerHTML = 'Copied to clipboard <span>✓</span>';
  } catch {
    copyButton.innerHTML = 'Men deserve rights. Boys deserve protection. Everyone deserves dignity.';
  }
});

