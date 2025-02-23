const links = document.querySelectorAll('nav .links a')

links.forEach(link => {
  if (window.location.href == link.href) {
    link.classList.add('current');
  }
})

const menuButton = document.querySelector('nav .menu')

menuButton.addEventListener('click', () => {
  document.querySelector('nav .links').classList.toggle('active')
})
