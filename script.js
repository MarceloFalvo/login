const form = document.querySelector('form');
const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Verifica se os campos foram preenchidos
  if (usuario.value.trim() === '' || senha.value.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Substitui a página atual pela página do painel de controle
  window.location.replace('file:///C:/Users/Marcelo/OneDrive/%C3%81rea%20de%20Trabalho/site%20biografia/index.html');
});
