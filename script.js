/* Small, accessible enhancements. The content works without JavaScript. */
document.documentElement.classList.add('js');

const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#site-nav');

function closeMenu(restoreFocus = false) {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
  document.body.classList.remove('menu-open');
  if (restoreFocus) menuButton.focus();
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      navigation.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.textContent = 'Close';
      document.body.classList.add('menu-open');
    }
  });

  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  // Let keyboard users leave the disclosure menu without leaving scrolling locked.
  document.addEventListener('focusin', event => {
    if (menuButton.getAttribute('aria-expanded') === 'true' &&
        !event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      if (status) status.textContent = 'Email address copied.';
    } catch {
      if (status) status.textContent = 'Select and copy the email address above.';
    }
  });
  button.hidden = false;
});

document.querySelectorAll('[data-print]').forEach(button => {
  button.addEventListener('click', () => window.print());
  button.hidden = false;
});

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
