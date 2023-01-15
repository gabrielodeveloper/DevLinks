function toogleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if(html.classList.contains('light')) {
    img.setAttribute('src', '/assets/avatar-light.png');
    img.setAttribute('alt', 'Um homen com uma câmera nas mãe em uma pose de fotografo.')
  }else {
    img.setAttribute('src', '/assets/avatar.png');
    img.setAttribute('alt', 'Um homem uma pose de costas para tirar uma foto.')
  }
}