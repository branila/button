const username = localStorage.getItem('username')

if (username) {
  document.querySelector('.content').classList.remove('hidden')
} else {
  document.querySelector('.registration').classList.remove('hidden')
}

const registerButton = document.querySelector('.registration button')

registerButton.addEventListener('click', () => {
  const username = document.querySelector('.registration input').value

  if (!username) {
    alert('Scrivi un nome sciocchino/a')
    return
  }

  localStorage.setItem('username', username.toLowerCase())

  document.querySelector('.content').classList.remove('hidden')
  document.querySelector('.registration').classList.add('hidden')
})
