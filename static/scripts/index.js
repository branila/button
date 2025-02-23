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
