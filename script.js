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