const theButton = document.querySelector('.the-button')

theButton.addEventListener('click', event => {
  const x = event.clientX
	const y = event.clientY

	const buttonTop = event.target.offsetTop
	const buttonLeft = event.target.offsetLeft

	const xInside = x - buttonLeft
	const yInside = y - buttonTop

	const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'


  theButton.appendChild(circle)

  setTimeout(() => {
    circle.remove()
  }, 500)
})

const username = localStorage.getItem('username')

if (username) {
  document.querySelector('.content').classList.remove('hidden')
  connectWebSocket()
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

  connectWebSocket()
})

function connectWebSocket() {
    ws = new WebSocket(`ws://${window.location.host}/ws`)

    ws.onmessage = event => {
      const data = JSON.parse(event.data)

      if (data.type === 'state') {
        const state = JSON.parse(data.payload)
        updateButton(state.totalClicks)
      }
    }

    ws.onclose = () => {
      setTimeout(connectWebSocket, 1000)
    }
}

function updateButton(clicks) {
  document.getElementById('click-button').textContent = clicks;
}
