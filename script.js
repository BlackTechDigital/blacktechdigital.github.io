// BLACK TECH — interações principais
const elementos = document.querySelectorAll("section, article, .projeto");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) { entrada.target.classList.add("aparecer"); observer.unobserve(entrada.target); }
    });
  }, { threshold: 0.12 });
  elementos.forEach((elemento) => observer.observe(elemento));
}
const header = document.querySelector("header");
window.addEventListener("scroll", () => { if (header) header.classList.toggle("header-scrolled", window.scrollY > 50); }, {passive:true});
document.querySelectorAll("button, .projeto-btn, .whatsapp-btn").forEach((botao) => {
  botao.addEventListener("click", () => { botao.classList.add("clicado"); setTimeout(() => botao.classList.remove("clicado"), 150); });
});
const ano = document.querySelector("footer p");
if (ano) ano.textContent = `© ${new Date().getFullYear()} Black Tech. Todos os direitos reservados.`;
const formulario = document.getElementById("contato-form");
if (formulario) formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const texto = `Olá Black Tech! 👋\n\nGostaria de conversar sobre um projeto.\n\n👤 Nome: ${nome}\n🏢 Empresa: ${empresa || "Não informado"}\n📧 E-mail: ${email}\n💬 Projeto: ${mensagem}\n\nEnviado através do site da Black Tech.`;
  window.open("https://wa.me/5535999227502?text=" + encodeURIComponent(texto), "_blank", "noopener,noreferrer");
});
