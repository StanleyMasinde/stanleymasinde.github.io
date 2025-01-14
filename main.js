import './style.css'

if (import.meta.env.PROD && navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      // TODO: #8 I'm not sure what to do here. This is to make sure the promise resolves for now.
    })
    .catch((error) => {
      console.error('Service worker registration failed due to:', error)
    })
}

const navigationDrawer = document.getElementById('navigationDrawer')
const toggleSideBarButton = document.getElementById('toggleSideBarButton')
const sideNavShade = document.getElementById('sideNavShade')
const copyrightSpan = document.getElementById('copyright')

toggleSideBarButton.addEventListener('click', (event) => {
  event.preventDefault()
  navigationDrawer.classList.toggle('hidden')
})
sideNavShade.addEventListener('click', (event) => {
  event.preventDefault()
  navigationDrawer.classList.add('hidden')
})

copyrightSpan.innerText = new Date().getFullYear()
