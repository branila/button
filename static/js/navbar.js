const links = document.querySelectorAll('nav .links a')

links.forEach(link => {
  if (window.location.href.includes(link.href)) {
    link.classList.add('current');
  }
})
