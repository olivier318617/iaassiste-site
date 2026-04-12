/**
 * IAassiste – Script principal
 * Accessibilité, menu mobile, bandeau cookies RGPD
 */

document.addEventListener('DOMContentLoaded', () => {
  // Skip link
  const main = document.querySelector('main');
  if (main && !document.querySelector('.skip-link')) {
    const skip = document.createElement('a');
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Aller au contenu';
    document.body.insertBefore(skip, document.body.firstChild);
    main.id = 'main';
  }

  // Menu mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  // Bandeau cookies (RGPD)
  const banner = document.getElementById('cookie-banner');
  const KEY = 'iaassiste_cookies_consent';

  function getConsent() {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    if (banner) banner.hidden = true;
  }

  if (banner) {
    const consent = getConsent();
    if (!consent) {
      banner.hidden = false;
    }
    banner.querySelectorAll('[data-cookie]').forEach(btn => {
      btn.addEventListener('click', () => {
        setConsent(btn.dataset.cookie === 'accept' ? 'accept' : 'refuse');
      });
    });
  }

  // Forcer le lien MK Nexus vers .fr (évite cache / ancienne version)
  const mknexusLink = document.querySelector('.logo-client--mknexus, a[href*="mknexus"]');
  if (mknexusLink) {
    mknexusLink.href = 'https://www.mknexus.fr/';
  }
});
