const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecendo');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(sec => {
  observer.observe(sec);
});

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var navUl = document.querySelector('nav ul');
  var menuIconBars = document.querySelectorAll('.menu-icon-bar');
  var menuClose = document.getElementById('menu-close');
  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', function() {
      navUl.classList.toggle('open');
      if (navUl.classList.contains('open')) {
        menuIconBars.forEach(function(bar) { bar.style.display = 'none'; });
        if (menuClose) menuClose.style.display = 'block';
      } else {
        menuIconBars.forEach(function(bar) { bar.style.display = 'block'; });
        if (menuClose) menuClose.style.display = 'none';
      }
    });
    if (menuClose) {
      menuClose.addEventListener('click', function() {
        navUl.style.transition = 'none'; // Remove transição
        navUl.classList.remove('open');
        menuIconBars.forEach(function(bar) { bar.style.display = 'block'; });
        menuClose.style.display = 'none';
        void navUl.offsetWidth; // Força reflow
        setTimeout(function() {
          navUl.style.transition = '';
        }, 10);
      });
    }
    navUl.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navUl.style.transition = 'none';
        navUl.classList.remove('open');
        menuIconBars.forEach(function(bar) { bar.style.display = 'block'; });
        if (menuClose) menuClose.style.display = 'none';
        void navUl.offsetWidth;
        setTimeout(function() {
          navUl.style.transition = '';
        }, 10);
      });
    });
  }
});

function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `👋 Olá!%0A%0A*Nome:* ${nome}%0A*WhatsApp:* ${whatsapp}%0A*E-mail:* ${email}%0A*Assunto:* ${assunto}%0A*Mensagem:* ${mensagem}`;

  const numeroEmpresa = "5543996156781";
  const url = `https://wa.me/${numeroEmpresa}?text=${texto}`;

  window.open(url, '_blank');
}