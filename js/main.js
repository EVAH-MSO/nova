// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Order form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const status = document.getElementById('formStatus');
    if (status) status.classList.remove('d-none');

    form.reset();
    form.classList.remove('was-validated');
  });
}

// Close mobile menu after clicking a link
const nav = document.getElementById('mainNav');
if (nav) {
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
}
