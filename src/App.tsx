import PWABadge from './PWABadge.tsx'
import './App.css'

function App() {
  return (
    <>
      <form onSubmit={async (e) => {
        e.preventDefault()
        return await fetch(
          "http://localhost:3000", 
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
