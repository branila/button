const links = document.querySelectorAll('nav .links a')

links.forEach(link => {
  if (window.location.href == link.href) {
    link.classList.add('current');
  }
})
