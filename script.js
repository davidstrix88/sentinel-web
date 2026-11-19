// Sentinel Web — interactions minimales (aucune dépendance)
(function () {
  'use strict';

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('navigation');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  // Année du pied de page
  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Formulaire sans backend : compose un email pré-rempli
  var form = document.getElementById('devis-form');
  var hint = document.getElementById('form-hint');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      var data = new FormData(form);
      var lines = [
        'Nom / structure : ' + (data.get('nom') || ''),
        'Email : ' + (data.get('email') || ''),
        'Site ou API : ' + (data.get('cible') || ''),
        'Besoin : ' + (data.get('besoin') || ''),
        '',
        'Message :',
        (data.get('message') || '')
      ];

      var subject = 'Demande de devis — ' + (data.get('besoin') || 'audit');
      var body = lines.join('\n');
      var href = 'mailto:contact@sentinel-web.fr'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      if (hint) {
        hint.textContent = 'Votre client mail va s’ouvrir avec le message pré-rempli.';
      }
      window.location.href = href;
    });
  }
})();
