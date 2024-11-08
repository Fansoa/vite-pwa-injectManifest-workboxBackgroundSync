import PWABadge from './PWABadge.tsx'
import './App.css'

function App() {
  return (
    <>
      <form onSubmit={async (e) => {
        e.preventDefault()
        return await fetch(
          // TODO: Replace url by hosted server to simulated offline connection (DO NOT USE CHROME DEVTOOLS OFFLINE. The offline checkbox in DevTools only affects requests from the page. Service Worker requests will continue to go through.)
          "https://hosted.express.server.com", 
          {
            method: 'POST',
            headers: [
              ["Content-Type", "application/json"],
            ],
            body: JSON.stringify({
              toto: "toto"
            })
          }
        )
      }}>
        <button type='submit'/>
      </form>
      <PWABadge />
    </>
  )
}

export default App
